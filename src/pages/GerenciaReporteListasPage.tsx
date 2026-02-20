import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/atoms";

export const GerenciaReporteListasPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Gerencia - Reporte Listas</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Reporte de listas (demo)</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
