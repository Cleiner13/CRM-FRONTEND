import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui";

export const ConfigTablasPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Configuración - Mantenimiento de Tablas</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Gestiona tablas de referencia (demo)</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
