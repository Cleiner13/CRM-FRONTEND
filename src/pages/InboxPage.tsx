import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/atoms";

export const InboxPage: React.FC = () => {
  const messages = [
    { from: "soporte@almpes.com", subject: "Ticket #1023 - Instalación", date: "2026-02-17" },
    { from: "ventas@cliente.com", subject: "Consulta financiera", date: "2026-02-16" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Bandeja de Entrada</h1>
        <Card>
          <ul className="space-y-3">
            {messages.map((m, i) => (
              <li key={i} className="p-3 rounded bg-neutral-50 dark:bg-neutral-800">
                <div className="font-medium">{m.subject}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">{m.from} • {m.date}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  );
};
