import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Card, Badge, Table } from "@/components/ui";
import { SectionHeader } from "@/components/molecules";
import { TrendingUp, Users, ShoppingCart, BarChart4, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const DashboardPage: React.FC = () => {
  const stats = [
    {
      title: "Ingresos Totales",
      value: "$45,231.89",
      icon: TrendingUp,
      color: "primary",
      change: "+12.5%",
      positive: true,
    },
    {
      title: "Usuarios Activos",
      value: "1,234",
      icon: Users,
      color: "secondary",
      change: "+4.3%",
      positive: true,
    },
    {
      title: "Ventas Hoy",
      value: "78",
      icon: ShoppingCart,
      color: "success",
      change: "+8.2%",
      positive: true,
    },
    {
      title: "Productos",
      value: "523",
      icon: BarChart4,
      color: "warning",
      change: "-2.1%",
      positive: false,
    },
  ];

  const recentTransactions = [
    {
      id: "#001",
      client: "Juan García",
      amount: "$1,200",
      status: "Completado",
      date: "2024-01-15",
    },
    {
      id: "#002",
      client: "María López",
      amount: "$850",
      status: "Pendiente",
      date: "2024-01-14",
    },
    {
      id: "#003",
      client: "Carlos Martínez",
      amount: "$2,100",
      status: "Completado",
      date: "2024-01-13",
    },
    {
      id: "#004",
      client: "Ana Rodríguez",
      amount: "$450",
      status: "Cancelado",
      date: "2024-01-12",
    },
    {
      id: "#005",
      client: "Pedro López",
      amount: "$3,200",
      status: "Completado",
      date: "2024-01-11",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Encabezado */}
        <SectionHeader
          title="Dashboard"
          subtitle="Resumen general de tu negocio"
        />

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card key={stat.title} variant="elevated" padding="md">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <Badge
                    label={stat.change}
                    variant={stat.positive ? "success" : "error"}
                    size="sm"
                    icon={
                      stat.positive ? (
                        <ArrowUpRight size={12} />
                      ) : (
                        <ArrowDownRight size={12} />
                      )
                    }
                  />
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-2">
                  {stat.value}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Tabla de Transacciones */}
        <Card variant="default" padding="lg">
          <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Transacciones Recientes
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Últimas 5 transacciones procesadas
            </p>
          </div>

          <Table
            columns={[
              { header: "ID", key: "id", width: "80px" },
              {
                header: "Cliente",
                key: "client",
                render: (value) => (
                  <div className="font-medium text-neutral-900 dark:text-neutral-100">
                    {value}
                  </div>
                ),
              },
              {
                header: "Monto",
                key: "amount",
                align: "right",
                render: (value) => (
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {value}
                  </span>
                ),
              },
              {
                header: "Estado",
                key: "status",
                render: (value) => (
                  <Badge
                    label={value}
                    variant={
                      value === "Completado"
                        ? "success"
                        : value === "Pendiente"
                        ? "warning"
                        : "error"
                    }
                    size="sm"
                  />
                ),
              },
              {
                header: "Fecha",
                key: "date",
                align: "right",
                render: (value) => (
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {new Date(value).toLocaleDateString("es-ES")}
                  </span>
                ),
              },
            ]}
            data={recentTransactions}
            striped
            hover
          />
        </Card>

        {/* Stats adicionales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card variant="bordered" padding="md">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Actividad Reciente
            </h3>
            <div className="space-y-4">
              {[
                { action: "Nueva venta registrada", time: "Hace 2 horas" },
                { action: "Usuario nuevo registrado", time: "Hace 4 horas" },
                { action: "Reporte mensual generado", time: "Hace 1 día" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 pb-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 last:pb-0"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {item.action}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="flat" padding="md">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Próximas Tareas
            </h3>
            <div className="space-y-3">
              {[
                { task: "Revisar reportes de ventas", priority: "high" },
                { task: "Actualizar inventario", priority: "medium" },
                { task: "Contactar nuevos clientes", priority: "medium" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-neutral-800/50"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-neutral-300 accent-primary-600 cursor-pointer"
                  />
                  <div className="flex-1 text-sm text-neutral-900 dark:text-neutral-100">
                    {item.task}
                  </div>
                  <Badge
                    label={item.priority === "high" ? "Alta" : "Media"}
                    variant={item.priority === "high" ? "error" : "warning"}
                    size="xs"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};