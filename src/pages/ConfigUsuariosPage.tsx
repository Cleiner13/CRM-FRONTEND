import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card, Button } from "@/components/atoms";

export const ConfigUsuariosPage: React.FC = () => {
  const users = [
    { id: "U01", name: "Admin", role: "Admin" },
    { id: "U02", name: "Soporte", role: "Soporte" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Configuración - Usuarios</h1>
          <Button variant="primary">Crear Usuario</Button>
        </div>

        <Card>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>ID</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="py-2">{u.id}</td>
                  <td className="py-2">{u.name}</td>
                  <td className="py-2">{u.role}</td>
                  <td className="py-2">
                    <Button variant="outline" size="sm" className="mr-2">Permisos</Button>
                    <Button variant="ghost" size="sm">Restablecer</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </DashboardLayout>
  );
};
