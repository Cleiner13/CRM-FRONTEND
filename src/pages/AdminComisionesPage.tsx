import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/atoms";

export const AdminComisionesPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Administración - Comisiones</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Resumen de comisiones (datos de ejemplo)</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
