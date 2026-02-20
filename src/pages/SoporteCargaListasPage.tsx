import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card, Button } from "@/components/atoms";

export const SoporteCargaListasPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Soporte Técnico - Carga de Listas</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Sube archivos CSV con listas de personal o dispositivos.</p>
          <div className="mt-4">
            <input type="file" />
            <Button variant="primary" className="ml-3">Subir</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};
