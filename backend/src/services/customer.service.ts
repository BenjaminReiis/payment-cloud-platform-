import { z } from "zod";
import { prisma } from "../lib/prisma";

const createCustomerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  document: z.string().min(5)
});

export class CustomerService {
  static async create(userId: string, data: unknown) {
    const parsed = createCustomerSchema.parse(data);

    return prisma.customer.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        document: parsed.document,
        userId
      }
    });
  }

  static async list(userId: string) {
    return prisma.customer.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" }
    });
  }
}
