import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  Settings,
  ChevronDown,
  Inbox,
  FileText,
  Briefcase,
  HelpCircle,
  ShoppingCart,
} from "lucide-react";
import { COLOR_SYSTEM, STYLE_COMBOS } from "@/config/styles";
import { LOGO_PATHS } from "@/config/theme";

type GroupKey =
  | "administracion"
  | "soporte"
  | "gerencia"
  | "ventas"
  | "configuracion"
  | "root";

export const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [openGroup, setOpenGroup] = useState<GroupKey | null>(null);
  const location = useLocation();

  // --- LÓGICA DE PERSISTENCIA ---
  // Detecta la ruta actual y mantiene abierto el grupo correspondiente
  useEffect(() => {
    const path = location.pathname;
    
    if (path.startsWith("/admin")) {
      setOpenGroup("administracion");
    } else if (path.startsWith("/soporte")) {
      setOpenGroup("soporte");
    } else if (path.startsWith("/gerencia")) {
      setOpenGroup("gerencia");
    } else if (path.startsWith("/ventas")) {
      setOpenGroup("ventas");
    } else if (path.startsWith("/config")) {
      setOpenGroup("configuracion");
    }
    // No ponemos un "else setOpenGroup(null)" para evitar que se cierre bruscamente
  }, [location.pathname]);

  const toggleGroup = (key: GroupKey) =>
    setOpenGroup((prev) => (prev === key ? null : key));

  const isLinkActive = (path: string) => location.pathname === path;

  const getLinkClass = (path: string) => {
    const baseClass = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors`;
    if (isLinkActive(path)) {
      return `${baseClass} ${COLOR_SYSTEM.sidebar.link.active.light} ${COLOR_SYSTEM.sidebar.link.active.dark}`;
    }
    return `${baseClass} ${STYLE_COMBOS.sidebarLink}`;
  };

  return (
    <aside
      className={`${COLOR_SYSTEM.background.primary.light} ${COLOR_SYSTEM.background.primary.dark} border-r-2 ${COLOR_SYSTEM.border.primary.light}
        transition-all duration-300 flex flex-col ${expanded ? "w-64" : "w-20"}`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between px-4 py-4 border-b-2 ${COLOR_SYSTEM.border.primary.light} 
        bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/30 dark:to-transparent h-20 flex-shrink-0`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className={`p-2 rounded-lg transition-colors ${COLOR_SYSTEM.text.accent.light} ${COLOR_SYSTEM.text.accent.dark} ${COLOR_SYSTEM.hover.primary.light} ${COLOR_SYSTEM.hover.primary.dark}`}
        >
          <ChevronDown
            size={20}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {expanded && (
          <div className="flex items-center gap-3 flex-1 justify-center">
            <img
              src={LOGO_PATHS.simple}
              alt="ALMPES Logo"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <h1 className={`text-2xl font-bold ${COLOR_SYSTEM.text.accent.light} ${COLOR_SYSTEM.text.accent.dark}`}>
              ALMPES
            </h1>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-2 overflow-auto">
        {/* Dashboard Link */}
        <Link
          to="/dashboard"
          className={getLinkClass("/dashboard")}
        >
          <BarChart3 size={18} />
          {expanded && <span>DASHBOARD</span>}
        </Link>

        {/* Profile Link */}
        <Link
          to="/profile"
          className={getLinkClass("/profile")}
        >
          <Users size={18} />
          {expanded && <span>MI PERFIL</span>}
        </Link>

        {/* Inbox Link */}
        <Link
          to="/inbox"
          className={getLinkClass("/inbox")}
        >
          <Inbox size={18} />
          {expanded && <span>BANDEJA DE ENTRADA</span>}
        </Link>

        {/* Administración Group */}
        <div>
          <button
            onClick={() => toggleGroup("administracion")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${STYLE_COMBOS.sidebarGroupHeader}`}
          >
            <Briefcase size={18} />
            {expanded && <span>ADMINISTRACION</span>}
            {expanded && (
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openGroup === "administracion" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openGroup === "administracion" && expanded && (
            <div className="pl-8 mt-2 space-y-1">
              <Link
                to="/admin/personal"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Personal
              </Link>
              <Link
                to="/admin/comisiones"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Comisiones
              </Link>
              <Link
                to="/admin/pagos"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Pagos
              </Link>
              <Link
                to="/admin/reportes-personal"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Reportes de Personal
              </Link>
            </div>
          )}
        </div>

        {/* Soporte Técnico Group */}
        <div>
          <button
            onClick={() => toggleGroup("soporte")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${STYLE_COMBOS.sidebarGroupHeader}`}
          >
            <HelpCircle size={18} />
            {expanded && <span>SOPORTE TECNICO</span>}
            {expanded && (
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openGroup === "soporte" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openGroup === "soporte" && expanded && (
            <div className="pl-8 mt-2 space-y-1">
              <Link
                to="/soporte/personal-status"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Personal
              </Link>
              <Link
                to="/soporte/carga-listas"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Carga de Listas
              </Link>
            </div>
          )}
        </div>

        {/* Gerencia Group */}
        <div>
          <button
            onClick={() => toggleGroup("gerencia")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${STYLE_COMBOS.sidebarGroupHeader}`}
          >
            <BarChart3 size={18} />
            {expanded && <span>GERENCIA</span>}
            {expanded && (
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openGroup === "gerencia" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openGroup === "gerencia" && expanded && (
            <div className="pl-8 mt-2 space-y-1">
              <Link
                to="/gerencia/reporte-listas"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Reporte Listas
              </Link>
              <Link
                to="/gerencia/reporte-bases"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Reporte Bases
              </Link>
              <Link
                to="/gerencia/reporte-ventas"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Reporte Ventas
              </Link>
              <Link
                to="/gerencia/reporte-gestion-personal"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Reporte Gestion Personal
              </Link>
            </div>
          )}
        </div>

        {/* Documentos Link */}
        <Link
          to="/documentos"
          className={getLinkClass("/documentos")}
        >
          <FileText size={18} />
          {expanded && <span>DOCUMENTOS OPERATIVOS</span>}
        </Link>

        {/* Ventas Group */}
        <div>
          <button
            onClick={() => toggleGroup("ventas")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${STYLE_COMBOS.sidebarGroupHeader}`}
          >
            <ShoppingCart size={18} />
            {expanded && <span>VENTAS</span>}
            {expanded && (
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openGroup === "ventas" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openGroup === "ventas" && expanded && (
            <div className="pl-8 mt-2 space-y-1">
              <Link
                to="/ventas/oh-tc"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Financiera OH TC
              </Link>
              <Link
                to="/ventas/oh-max"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Financiera OH MAX
              </Link>
              <Link
                to="/ventas/oh-pld"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Financiera OH PLD
              </Link>
              <Link
                to="/ventas/santander-ld"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Santander LD
              </Link>
              <Link
                to="/ventas/santander-tc"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Santander TC
              </Link>
              <Link
                to="/ventas/cencosud-ld"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Cencosud LD
              </Link>
              <Link
                to="/ventas/cencosud-tc"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Cencosud TC
              </Link>
            </div>
          )}
        </div>

        {/* Configuración Group */}
        <div>
          <button
            onClick={() => toggleGroup("configuracion")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${STYLE_COMBOS.sidebarGroupHeader}`}
          >
            <Settings size={18} />
            {expanded && <span>CONFIGURACION</span>}
            {expanded && (
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openGroup === "configuracion" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {openGroup === "configuracion" && expanded && (
            <div className="pl-8 mt-2 space-y-1">
              <Link
                to="/config/tablas"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Mantenimiento de Tablas
              </Link>
              <Link
                to="/config/usuarios"
                className={`block px-2 py-1 rounded transition-colors text-sm ${STYLE_COMBOS.sidebarGroupItem}`}
              >
                Usuarios
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};
