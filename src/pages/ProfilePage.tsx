import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card } from "@/components/ui";

export const ProfilePage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <Card>
          <p className="text-neutral-700 dark:text-neutral-300">Nombre: Ana Pérez</p>
          <p className="text-neutral-700 dark:text-neutral-300">Rol: Administrador</p>
          <p className="text-neutral-700 dark:text-neutral-300">Email: ana.perez@almpes.com</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};
