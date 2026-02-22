import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card, Badge } from "@/components/ui";

export const SoportePersonalStatusPage: React.FC = () => {
  const staff = [
    { name: "Pedro Ruiz", status: "Instalado" },
    { name: "Laura Díaz", status: "Retirado" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Soporte Técnico - Estado del Personal</h1>
        <Card>
          <ul className="space-y-3">
            {staff.map((s, i) => (
              <li key={i} className="flex justify-between items-center">
                <div>{s.name}</div>
                <Badge label={s.status} variant={s.status === "Instalado" ? "success" : "warning"} />
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  );
};
