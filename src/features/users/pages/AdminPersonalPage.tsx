import React from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card, Button, Badge, Input, Table } from "@/components/ui";
import { SectionHeader, PersonModal } from "@/components/molecules";
import { Edit2, Trash2, Plus, Search } from "lucide-react";
import { ACTION_BUTTON_VARIANTS, COLOR_SYSTEM } from "@/config/styles";

export const AdminPersonalPage: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInitialPerson, setModalInitialPerson] = React.useState<any | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const [people, setPeople] = React.useState(() => [
    {
      id: "P001",
      dni: "12345678",
      name: "Juan García",
      email: "juan.garcia@example.com",
      role: "Gerente",
      department: "Ventas",
      status: "Activo",
      date: "2024-01-10",
    },
    {
      id: "P002",
      dni: "23456789",
      name: "María López",
      email: "maria.lopez@example.com",
      role: "Ejecutiva",
      department: "Ventas",
      status: "Activo",
      date: "2024-01-08",
    },
    {
      id: "P003",
      dni: "34567890",
      name: "Carlos Martínez",
      email: "carlos.martinez@example.com",
      role: "Analista",
      department: "Soporte",
      status: "Suspendido",
      date: "2024-01-05",
    },
    {
      id: "P004",
      dni: "45678901",
      name: "Ana Rodríguez",
      email: "ana.rodriguez@example.com",
      role: "Gerente",
      department: "Administración",
      status: "Activo",
      date: "2024-01-03",
    },
    {
      id: "P005",
      dni: "56789012",
      name: "Pedro López",
      email: "pedro.lopez@example.com",
      role: "Ejecutiva",
      department: "Ventas",
      status: "Activo",
      date: "2024-01-01",
    },
  ]);

  const openCreateModal = () => {
    setModalInitialPerson(null);
    setModalOpen(true);
  };

  const openEditModal = (id: string) => {
    const p = people.find((x) => x.id === id);
    setModalInitialPerson(p ?? null);
    setModalOpen(true);
  };

  const handleSavePerson = (p: any) => {
    setPeople((prev) => {
      const exists = prev.find((x) => x.id === p.id || x.dni === p.dni);
      if (exists) {
        return prev.map((x) => (x.id === p.id || x.dni === p.dni ? { ...x, ...p } : x));
      }
      return [p, ...prev];
    });
  };

  const handleDeletePerson = (id: string) => {
    setPeople((prev) => prev.filter((p) => p.id !== id));
  };

  const handleExportCSV = () => {
    const headers = ["id", "dni", "name", "email", "role", "department", "status", "date"];
    const rows = people.map((p) => headers.map((h) => (p as any)[h] ?? "").join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `personal_export_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSearch = () => {
    const q = searchQuery.trim();
    if (!q) return;
    const p = people.find((x) => x.dni === q || x.id === q);
    if (p) {
      setModalInitialPerson(p);
      setModalOpen(true);
    } else {
      // open modal prefilled to create
      setModalInitialPerson({ id: `P${Date.now()}`, dni: q, name: "" });
      setModalOpen(true);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <SectionHeader
          title="Administración de Personal"
          subtitle="Gestiona el personal y sus permisos"
          action={{
            label: "Crear Personal",
            icon: <Plus size={18} />,
            onClick: openCreateModal,
          }}
        />

        <Card variant="default" padding="lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
              <div className="w-full sm:w-auto">
                <Input
                  placeholder="Buscar por DNI o ID..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  icon={<Search size={18} />}
                  variant="default"
                />
              </div>
              <Button size="sm" variant={ACTION_BUTTON_VARIANTS.search as any} onClick={handleSearch}>
                Buscar
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className={`text-sm font-medium ${COLOR_SYSTEM.text.accent.light} ${COLOR_SYSTEM.text.accent.dark}`}>
                Activos: <strong>{people.filter((p) => p.status === "Activo").length}</strong> / Total: <strong>{people.length}</strong>
              </div>
              <Button variant={ACTION_BUTTON_VARIANTS.download as any} size="sm" onClick={handleExportCSV}>
                Exportar CSV
              </Button>
            </div>
          </div>

          <Table
            columns={[
              { header: "ID", key: "id", width: "80px" },
              {
                header: "Nombre",
                key: "name",
                render: (value, item: any) => (
                  <div>
                    <p className={`font-medium ${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark}`}>
                      {value}
                    </p>
                    <p className={`text-xs mt-0.5 ${COLOR_SYSTEM.text.tertiary.light} ${COLOR_SYSTEM.text.tertiary.dark}`}>
                      {item.email}
                    </p>
                  </div>
                ),
              },
              {
                header: "Rol",
                key: "role",
                render: (value: any) => (
                  <Badge label={value} variant="secondary" size="sm" />
                ),
              },
              {
                header: "Departamento",
                key: "department",
                render: (value: any) => (
                  <span className={`text-sm ${COLOR_SYSTEM.text.secondary.light} ${COLOR_SYSTEM.text.secondary.dark}`}>
                    {value}
                  </span>
                ),
              },
              {
                header: "Estado",
                key: "status",
                render: (value: any) => (
                  <Badge
                    label={value}
                    variant={value === "Activo" ? "success" : "error"}
                    size="sm"
                  />
                ),
              },
              {
                header: "Fecha Ingreso",
                key: "date",
                align: "right",
                render: (value: any) => (
                  <span className={`text-sm ${COLOR_SYSTEM.text.tertiary.light} ${COLOR_SYSTEM.text.tertiary.dark}`}>
                    {new Date(value).toLocaleDateString("es-ES")}
                  </span>
                ),
              },
            ]}
            data={people}
            actions={[
              {
                label: "Editar",
                icon: <Edit2 size={16} />,
                onClick: (item: any) => openEditModal(item.id),
                variant: ACTION_BUTTON_VARIANTS.edit as any,
              },
              {
                label: "Eliminar",
                icon: <Trash2 size={16} />,
                onClick: (item: any) => handleDeletePerson(item.id),
                variant: "danger",
              },
            ]}
            striped
            hover
          />
        </Card>

        <PersonModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          initialPerson={modalInitialPerson}
          onSave={handleSavePerson}
        />

        {/* Info Card */}
        <Card variant="flat" padding="md">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className={`font-semibold ${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark}`}>
                Total de Personal
              </h3>
              <p className={`text-2xl font-bold mt-2 ${COLOR_SYSTEM.text.accent.light} ${COLOR_SYSTEM.text.accent.dark}`}>
                {people.length}
              </p>
              <p className={`text-sm mt-2 ${COLOR_SYSTEM.text.tertiary.light} ${COLOR_SYSTEM.text.tertiary.dark}`}>
                {people.filter((p) => p.status === "Activo").length} usuarios activos
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => alert("Ver estadísticas detalladas")}
            >
              Ver Más
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};
