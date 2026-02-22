import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui";

export const VentasOhTcPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Ventas - Financiera OH TC</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Panel financiero OH TC (demo)</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
