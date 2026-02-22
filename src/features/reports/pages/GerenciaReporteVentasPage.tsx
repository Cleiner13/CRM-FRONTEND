import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui";

export const GerenciaReporteVentasPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Gerencia - Reporte Ventas</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Reporte de ventas (datos de ejemplo)</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
