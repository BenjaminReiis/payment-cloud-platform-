import { PaymentStatus } from "@prisma/client";
import { prisma } from "../lib/prisma";

export class DashboardService {
  static async summary(userId: string) {
    const customersCount = await prisma.customer.count({
      where: { userId }
    });

    const payments = await prisma.payment.findMany({
      where: { userId }
    });

    const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);

    const paidAmount = payments
      .filter((payment) => payment.status === PaymentStatus.PAID)
      .reduce((acc, payment) => acc + payment.amount, 0);

    const pendingAmount = payments
      .filter((payment) => payment.status === PaymentStatus.PENDING)
      .reduce((acc, payment) => acc + payment.amount, 0);

    return {
      customersCount,
      paymentsCount: payments.length,
      totalAmount,
      paidAmount,
      pendingAmount
    };
  }
}
