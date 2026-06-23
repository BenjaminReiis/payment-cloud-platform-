import { PaymentStatus } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const createPaymentSchema = z.object({
  amount: z.number().positive(),
  description: z.string().min(2),
  customerId: z.string().uuid()
});

const updateStatusSchema = z.object({
  status: z.nativeEnum(PaymentStatus)
});

export class PaymentService {
  static async create(userId: string, data: unknown) {
    const parsed = createPaymentSchema.parse(data);

    const customer = await prisma.customer.findFirst({
      where: {
        id: parsed.customerId,
        userId
      }
    });

    if (!customer) {
      throw new Error("Cliente nao encontrado");
    }

    return prisma.payment.create({
      data: {
        amount: parsed.amount,
        description: parsed.description,
        customerId: parsed.customerId,
        userId,
        status: PaymentStatus.PENDING
      },
      include: {
        customer: true
      }
    });
  }

  static async list(userId: string) {
    return prisma.payment.findMany({
      where: { userId },
      include: { customer: true },
      orderBy: { createdAt: "desc" }
    });
  }

  static async updateStatus(userId: string, paymentId: string, data: unknown) {
    const parsed = updateStatusSchema.parse(data);

    const payment = await prisma.payment.findFirst({
      where: {
        id: paymentId,
        userId
      }
    });

    if (!payment) {
      throw new Error("Pagamento nao encontrado");
    }

    return prisma.payment.update({
      where: { id: paymentId },
      data: { status: parsed.status }
    });
  }
}
