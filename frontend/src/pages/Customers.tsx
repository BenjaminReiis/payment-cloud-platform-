import { FormEvent, useEffect, useState } from "react";
import api from "../services/api";
import { Navbar } from "../components/Navbar";

interface Customer {
  id: string;
  name: string;
  email: string;
  document: string;
}

export function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    const response = await api.get("/customers");
    setCustomers(response.data);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await api.post("/customers", {
      name,
      email,
      document
    });

    setName("");
    setEmail("");
    setDocument("");
    loadCustomers();
  }

  return (
    <div>
      <Navbar />
      <main className="page">
        <h1>Clientes</h1>

        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Documento"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>

        <div className="list">
          {customers.map((customer) => (
            <div className="card" key={customer.id}>
              <h3>{customer.name}</h3>
              <p>{customer.email}</p>
              <p>{customer.document}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
