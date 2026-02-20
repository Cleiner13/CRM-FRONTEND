import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { InboxPage } from "@/pages/InboxPage";
import { AdminPersonalPage } from "@/pages/AdminPersonalPage";
import { AdminComisionesPage } from "@/pages/AdminComisionesPage";
import { AdminPagosPage } from "@/pages/AdminPagosPage";
import { AdminReportesPersonalPage } from "@/pages/AdminReportesPersonalPage";
import { SoportePersonalStatusPage } from "@/pages/SoportePersonalStatusPage";
import { SoporteCargaListasPage } from "@/pages/SoporteCargaListasPage";
import { GerenciaReporteListasPage } from "@/pages/GerenciaReporteListasPage";
import { GerenciaReporteBasesPage } from "@/pages/GerenciaReporteBasesPage";
import { GerenciaReporteVentasPage } from "@/pages/GerenciaReporteVentasPage";
import { GerenciaReporteGestionPersonalPage } from "@/pages/GerenciaReporteGestionPersonalPage";
import { DocumentosPage } from "@/pages/DocumentosPage";
import { VentasOhTcPage } from "@/pages/VentasOhTcPage";
import { VentasOhMaxPage } from "@/pages/VentasOhMaxPage";
import { VentasOhPldPage } from "@/pages/VentasOhPldPage";
import { VentasSantanderLdPage } from "@/pages/VentasSantanderLdPage";
import { VentasSantanderTcPage } from "@/pages/VentasSantanderTcPage";
import { VentasCencosudLdPage } from "@/pages/VentasCencosudLdPage";
import { VentasCencosudTcPage } from "@/pages/VentasCencosudTcPage";
import { ConfigTablasPage } from "@/pages/ConfigTablasPage";
import { ConfigUsuariosPage } from "@/pages/ConfigUsuariosPage";

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