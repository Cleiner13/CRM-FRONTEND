# ALMPES Frontend — SKILL (React + Vite + Tailwind)

## Rol
Actúa como **Arquitecto Frontend Senior** para el ERP/CRM de ALMPES.
Entrega UI **moderna, consistente, mantenible y responsiva (desktop-first)** usando React + Vite + Tailwind.

---

## Reglas no negociables
- Tailwind es el estándar. Evitar CSS suelto en páginas.
- **Cero estilos “inventados” dentro de `pages/`**: si algo se repite o puede repetirse, se convierte en componente UI o token global.
- Reutilización estricta: Button/Input/Modal/Table/Pagination se usan en toda la app.
- Tablas SIEMPRE con paginación.
- Formularios con validación visible y clara (error rojo).
- UI preparada para escritorio (1366×768 y 1920×1080); si hay muchas columnas, usar `overflow-x-auto`.

---

## Identidad ALMPES
### Colores base
- Vino (marca): `#2e0810`
- Plomo (estructura): `#2e2e2e`
- Blanco / Negro: base

### Botones por acción (colores fijos)
- CREAR → VINO
- GUARDAR → VERDE CLARO
- BUSCAR → AZUL
- EDITAR → AMARILLO
- BORRAR → ROJO
- LIMPIAR → CELESTE
- EXPORTAR → VERDE OSCURO

Regla: estos colores no cambian por pantalla. Se definen como variantes del componente `<Button />`.

---

## Estructura obligatoria del proyecto (frontend)

src/
components/
ui/ # Button, Input, Select, Modal, Table, Pagination, Card, Badge...
layout/ # Header, Sidebar, PageShell...
common/ # utilitarios de UI (PermissionGate, ErrorBoundary...)
features/
<modulo>/
components/
hooks/
services/
pages/
types/
pages/ # SOLO pantallas globales (Login, Dashboard, Perfil...)
router/
services/ # cliente http global, interceptores
hooks/ # hooks compartidos (usePagination, useDebounce...)
config/ # tokens globales (colores, tipografía, spacing)
types/ # tipos compartidos
utils/


---

## Componentes UI obligatorios

### Button
Uso único global: `<Button variant="create|save|search|edit|delete|clear|export" />`
- Tamaño estándar: `h-10`, `px-4`, `rounded-xl`
- Estados: hover, active, disabled, loading
- Nunca crear botones “a mano” dentro de páginas.

### Inputs (Input/Select/Textarea)
- Focus: borde o ring **azul** (consistente en todo el sistema)
- Error: borde rojo + mensaje `text-red-*` debajo del campo
- Disabled: estilo claro y no interactivo

### Modal (moderno)
- Overlay: `bg-black/50` + `backdrop-blur-sm`
- Contenedor: `rounded-2xl shadow-2xl`
- Estructura: Header / Body / Footer
- Accesibilidad: `Esc` cierra, foco dentro, `aria-modal`

### Table
- Header: **plomo `#2e2e2e`** con texto blanco
- Filas: fondo blanco, separadores suaves, hover sutil
- Acciones: botones con variantes de acción (edit/delete/etc.)
- Paginación obligatoria (siempre visible)
- Si no entra: wrapper con `overflow-x-auto`

### Pagination
Componente único reutilizable:
- Anterior / Siguiente
- Página actual / total
- “Mostrando X–Y de N”
- Tamaño de página configurable cuando aplique

---

## Estilos y tokens
- Colores, tipografía y spacing se definen en `src/config/*` y/o `tailwind.config.ts`.
- Las páginas NO definen tokens ni estilos nuevos.
- Todo patrón visual repetible se convierte en:
  1) componente UI o
  2) token global (config) o
  3) clase utilitaria centralizada.

---

## UX obligatorio por pantalla
Cada vista que consulta datos debe tener:
- Loading state (spinner o skeleton)
- Empty state (“No hay registros” + acción sugerida)
- Error state (mensaje claro + reintentar)
- Success feedback (toast/alert breve)

---

## Validaciones
- Se muestran al enviar (submit) y opcionalmente al blur.
- Mensajes cortos y accionables: “Campo requerido”, “Formato inválido”.
- Errores visibles sin romper el layout.

---

## Accesibilidad mínima
- Inputs con label visible
- Botones con `type` correcto
- Icon buttons con `aria-label`
- Contraste legible (especial cuidado con amarillo y celeste)

---

## Definition of Done
Antes de finalizar cualquier módulo/pantalla:
- Usa componentes estándar (Button/Input/Modal/Table/Pagination)
- Respeta colores ALMPES y botones por acción
- Tablas con paginación
- Validación consistente (error rojo / focus azul)
- Responsive desktop-first
- Sin estilos “inventados” en pages
- Código limpio y sin duplicación