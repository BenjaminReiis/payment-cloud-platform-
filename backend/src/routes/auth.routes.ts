import { Router } from "express";
import { AuthService } from "../services/auth.service";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao registrar" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await AuthService.login(req.body);
    return res.json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message || "Erro ao autenticar" });
  }
});

export default router;
