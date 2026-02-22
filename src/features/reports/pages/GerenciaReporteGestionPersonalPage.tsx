import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui";

export const GerenciaReporteGestionPersonalPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Gerencia - Reporte Gestion Personal</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Reporte de gestión de personal (demo)</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
