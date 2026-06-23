import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { env } from "../config/env";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export class AuthService {
  static async register(data: unknown) {
    const parsed = registerSchema.parse(data);

    const existingUser = await prisma.user.findUnique({
      where: { email: parsed.email }
    });

    if (existingUser) {
      throw new Error("Email ja cadastrado");
    }

    const hashedPassword = await bcrypt.hash(parsed.password, 10);

    const user = await prisma.user.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        password: hashedPassword
      }
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }

  static async login(data: unknown) {
    const parsed = loginSchema.parse(data);

    const user = await prisma.user.findUnique({
      where: { email: parsed.email }
    });

    if (!user) {
      throw new Error("Credenciais invalidas");
    }

    const passwordMatch = await bcrypt.compare(parsed.password, user.password);

    if (!passwordMatch) {
      throw new Error("Credenciais invalidas");
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      env.jwtSecret,
      { expiresIn: "1d" }
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    };
  }
}
