import { Router } from "express";
import { authMiddleware, AuthRequest } from "../middlewares/auth";
import { CustomerService } from "../services/customer.service";

const router = Router();

router.use(authMiddleware);

router.post("/", async (req: AuthRequest, res) => {
  try {
    const customer = await CustomerService.create(req.user!.id, req.body);
    return res.status(201).json(customer);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao criar cliente" });
  }
});

router.get("/", async (req: AuthRequest, res) => {
  try {
    const customers = await CustomerService.list(req.user!.id);
    return res.json(customers);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao listar clientes" });
  }
});

export default router;
