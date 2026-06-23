import { Router } from "express";
import { authMiddleware, AuthRequest } from "../middlewares/auth";
import { DashboardService } from "../services/dashboard.service";

const router = Router();

router.use(authMiddleware);

router.get("/", async (req: AuthRequest, res) => {
  try {
    const summary = await DashboardService.summary(req.user!.id);
    return res.json(summary);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao carregar dashboard" });
  }
});

export default router;
