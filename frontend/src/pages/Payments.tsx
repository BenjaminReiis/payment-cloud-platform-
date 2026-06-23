import { FormEvent, useEffect, useState } from "react";
import api from "../services/api";
import { Navbar } from "../components/Navbar";

interface Customer {
  id: string;
  name: string;
}

interface Payment {
  id: string;
  amount: number;
  description: string;
  status: string;
  customer: {
    name: string;
  };
}

export function Payments() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [customerId, setCustomerId] = useState("");

  useEffect(() => {
    loadCustomers();
    loadPayments();
  }, []);

  async function loadCustomers() {
    const response = await api.get("/customers");
    setCustomers(response.data);
  }

  async function loadPayments() {
    const response = await api.get("/payments");
    setPayments(response.data);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await api.post("/payments", {
      amount: Number(amount),
      description,
      customerId
    });

    setAmount("");
    setDescription("");
    setCustomerId("");
    loadPayments();
  }

  async function updateStatus(id: string, status: string) {
    await api.patch(`/payments/${id}/status`, { status });
    loadPayments();
  }

  return (
    <div>
      <Navbar />
      <main className="page">
        <h1>Pagamentos</h1>

        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            placeholder="Descricao"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          >
            <option value="">Selecione um cliente</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          <button type="submit">Criar pagamento</button>
        </form>

        <div className="list">
          {payments.map((payment) => (
            <div className="card" key={payment.id}>
              <h3>{payment.description}</h3>
              <p>Cliente: {payment.customer.name}</p>
              <p>Valor: R$ {payment.amount.toFixed(2)}</p>
              <p>Status: {payment.status}</p>
              <div className="actions">
                <button onClick={() => updateStatus(payment.id, "PAID")}>
                  Marcar como pago
                </button>
                <button onClick={() => updateStatus(payment.id, "FAILED")}>
                  Marcar como falhou
                </button>
                <button onClick={() => updateStatus(payment.id, "REFUNDED")}>
                  Reembolsar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
