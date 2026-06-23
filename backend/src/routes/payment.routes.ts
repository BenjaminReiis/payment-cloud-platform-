import { Router } from "express";
import { authMiddleware, AuthRequest } from "../middlewares/auth";
import { PaymentService } from "../services/payment.service";

const router = Router();

router.use(authMiddleware);

router.post("/", async (req: AuthRequest, res) => {
  try {
    const payment = await PaymentService.create(req.user!.id, req.body);
    return res.status(201).json(payment);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao criar pagamento" });
  }
});

router.get("/", async (req: AuthRequest, res) => {
  try {
    const payments = await PaymentService.list(req.user!.id);
    return res.json(payments);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao listar pagamentos" });
  }
});

router.patch("/:id/status", async (req: AuthRequest, res) => {
  try {
    const payment = await PaymentService.updateStatus(
      req.user!.id,
      req.params.id,
      req.body
    );
    return res.json(payment);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao atualizar pagamento" });
  }
});

export default router;
