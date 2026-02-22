import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { InboxPage } from "@/pages/InboxPage";
import { DocumentosPage } from "@/pages/DocumentosPage";

// Users/Admin pages
import {
  AdminPersonalPage,
  AdminComisionesPage,
  AdminPagosPage,
  AdminReportesPersonalPage,
  ConfigTablasPage,
  ConfigUsuariosPage,
} from "@/features/users/pages";

// Support pages
import {
  SoportePersonalStatusPage,
  SoporteCargaListasPage,
} from "@/features/support/pages";

// Reports pages
import {
  GerenciaReporteListasPage,
  GerenciaReporteBasesPage,
  GerenciaReporteVentasPage,
  GerenciaReporteGestionPersonalPage,
} from "@/features/reports/pages";

// Sales pages
import {
  VentasOhTcPage,
  VentasOhMaxPage,
  VentasOhPldPage,
  VentasSantanderLdPage,
  VentasSantanderTcPage,
  VentasCencosudLdPage,
  VentasCencosudTcPage,
} from "@/features/sales/pages";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/inbox" element={<InboxPage />} />

        <Route path="/admin/personal" element={<AdminPersonalPage />} />
        <Route path="/admin/comisiones" element={<AdminComisionesPage />} />
        <Route path="/admin/pagos" element={<AdminPagosPage />} />
        <Route path="/admin/reportes-personal" element={<AdminReportesPersonalPage />} />

        <Route path="/soporte/personal-status" element={<SoportePersonalStatusPage />} />
        <Route path="/soporte/carga-listas" element={<SoporteCargaListasPage />} />

        <Route path="/gerencia/reporte-listas" element={<GerenciaReporteListasPage />} />
        <Route path="/gerencia/reporte-bases" element={<GerenciaReporteBasesPage />} />
        <Route path="/gerencia/reporte-ventas" element={<GerenciaReporteVentasPage />} />
        <Route path="/gerencia/reporte-gestion-personal" element={<GerenciaReporteGestionPersonalPage />} />

        <Route path="/documentos" element={<DocumentosPage />} />

        <Route path="/ventas/oh-tc" element={<VentasOhTcPage />} />
        <Route path="/ventas/oh-max" element={<VentasOhMaxPage />} />
        <Route path="/ventas/oh-pld" element={<VentasOhPldPage />} />
        <Route path="/ventas/santander-ld" element={<VentasSantanderLdPage />} />
        <Route path="/ventas/santander-tc" element={<VentasSantanderTcPage />} />
        <Route path="/ventas/cencosud-ld" element={<VentasCencosudLdPage />} />
        <Route path="/ventas/cencosud-tc" element={<VentasCencosudTcPage />} />

        <Route path="/config/tablas" element={<ConfigTablasPage />} />
        <Route path="/config/usuarios" element={<ConfigUsuariosPage />} />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};