import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/atoms";

export const DocumentosPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Documentos Operativos</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Documentación operativa (plantillas y manuales ficticios)</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
