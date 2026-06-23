import { useEffect, useState } from "react";
import api from "../services/api";
import { Navbar } from "../components/Navbar";
import { StatCard } from "../components/StatCard";

interface Summary {
  customersCount: number;
  paymentsCount: number;
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
}

export function Dashboard() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    loadSummary();
  }, []);

  async function loadSummary() {
    const response = await api.get("/dashboard");
    setSummary(response.data);
  }

  return (
    <div>
      <Navbar />
      <main className="page">
        <h1>Dashboard</h1>
        <div className="grid">
          <StatCard title="Clientes" value={summary?.customersCount || 0} />
          <StatCard title="Pagamentos" value={summary?.paymentsCount || 0} />
          <StatCard
            title="Valor total"
            value={`R$ ${summary?.totalAmount?.toFixed(2) || "0.00"}`}
          />
          <StatCard
            title="Pago"
            value={`R$ ${summary?.paidAmount?.toFixed(2) || "0.00"}`}
          />
          <StatCard
            title="Pendente"
            value={`R$ ${summary?.pendingAmount?.toFixed(2) || "0.00"}`}
          />
        </div>
      </main>
    </div>
  );
}
