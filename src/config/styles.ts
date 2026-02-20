// Sistema centralizado de estilos con control Light/Dark

export const COLOR_SYSTEM = {
  // Colores para Buttons
  button: {
    primary: {
      light: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
      dark: "dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600 dark:active:bg-primary-700",
    },
    secondary: {
      light: "bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800",
      dark: "dark:bg-secondary-500 dark:text-white dark:hover:bg-secondary-600 dark:active:bg-secondary-700",
    },
    outline: {
      light: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100",
      dark: "dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900 dark:active:bg-primary-800",
    },
    ghost: {
      light: "text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200",
      dark: "dark:text-neutral-300 dark:hover:bg-neutral-800 dark:active:bg-neutral-700",
    },
    danger: {
      light: "bg-error-600 text-white hover:bg-error-700 active:bg-error-800",
      dark: "dark:bg-error-500 dark:text-white dark:hover:bg-error-600 dark:active:bg-error-700",
    },
    success: {
      light: "bg-success-600 text-white hover:bg-success-700 active:bg-success-800",
      dark: "dark:bg-success-500 dark:text-white dark:hover:bg-success-600 dark:active:bg-success-700",
    },
    warning: {
      light: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700",
      dark: "dark:bg-amber-600 dark:text-neutral-900 dark:hover:bg-amber-700 dark:active:bg-amber-800",
    },
    info: {
      light: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
      dark: "dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 dark:active:bg-blue-700",
    },
    successDark: {
      light: "bg-green-800 text-white hover:bg-green-900 active:bg-green-950",
      dark: "dark:bg-green-700 dark:text-white dark:hover:bg-green-800 dark:active:bg-green-900",
    },
  },

  // Colores para Links y Texto Interactivo
  text: {
    primary: {
      light: "text-neutral-900",
      dark: "dark:text-neutral-100",
    },
    secondary: {
      light: "text-neutral-700",
      dark: "dark:text-neutral-300",
    },
    tertiary: {
      light: "text-neutral-600",
      dark: "dark:text-neutral-400",
    },
    muted: {
      light: "text-neutral-500",
      dark: "dark:text-neutral-500",
    },
    accent: {
      light: "text-primary-700",
      dark: "dark:text-primary-300",
    },
    error: {
      light: "text-error-600",
      dark: "dark:text-error-400",
    },
  },

  // Colores para Hover States
  hover: {
    light: {
      light: "hover:bg-neutral-600",
      dark: "dark:hover:bg-neutral-700/30",
    },
    medium: {
      light: "hover:bg-neutral-100",
      dark: "dark:hover:bg-neutral-700",
    },
    primary: {
      light: "hover:bg-primary-100",
      dark: "dark:hover:bg-primary-900/30",
    },
    accent: {
      light: "hover:bg-primary-800",
      dark: "dark:hover:bg-primary-900",
    },
  },

  // Colores para Borders
  border: {
    default: {
      light: "border-neutral-200",
      dark: "dark:border-neutral-700",
    },
    light: {
      light: "border-neutral-100",
      dark: "dark:border-neutral-800",
    },
    primary: {
      light: "border-primary-200",
      dark: "dark:border-primary-900",
    },
    accent: {
      light: "border-primary-600",
      dark: "dark:border-primary-400",
    },
  },

  // Colores para Backgrounds
  background: {
    primary: {
      light: "bg-white",
      dark: "dark:bg-neutral-800",
    },
    secondary: {
      light: "bg-neutral-50",
      dark: "dark:bg-neutral-900",
    },
    light: {
      light: "bg-neutral-100",
      dark: "dark:bg-neutral-700",
    },
    accent: {
      light: "bg-primary-50",
      dark: "dark:bg-primary-900/20",
    },
    modal: {
      header: {
        light: "bg-primary-700 text-white",
        dark: "dark:bg-primary-900 text-white",
      },
      footer: {
        light: "bg-primary-700 text-white",
        dark: "dark:bg-primary-900 text-white",
      },
    },
  },

  // Colores para Sidebar
  sidebar: {
    link: {
      default: {    
        light: "text-neutral-700",
        dark: "dark:text-neutral-300",
      },
      hover: {
        light: "hover:bg-primary-500 hover:text-primary-100",
        dark: "dark:hover:bg-primary-100 dark:hover:text-primary-800",
      },
      active: {
        light: "bg-primary-500 text-primary-100",
        dark: "dark:bg-primary-100 dark:text-primary-800",
      },
    },
    group: {
      header: {
        light: "text-neutral-700 hover:bg-primary-500 hover:text-primary-100",
        dark: "dark:text-neutral-300 dark:hover:bg-primary-100 dark:hover:text-primary-800",
      },
      item: {
        light: "text-neutral-600 hover:bg-primary-500 hover:text-primary-100",
        dark: "dark:text-neutral-400 dark:hover:bg-primary-100 dark:hover:text-primary-800",
      },
    },
  },

  // Colores para Badges
  badge: {
    primary: {
      light: "bg-primary-100 text-primary-700",
      dark: "dark:bg-primary-900/30 dark:text-primary-300",
    },
    secondary: {
      light: "bg-secondary-100 text-secondary-700",
      dark: "dark:bg-secondary-900/30 dark:text-secondary-300",
    },
    success: {
      light: "bg-success-100 text-success-700",
      dark: "dark:bg-success-900/30 dark:text-success-300",
    },
    warning: {
      light: "bg-warning-100 text-warning-700",
      dark: "dark:bg-warning-900/30 dark:text-warning-300",
    },
    error: {
      light: "bg-error-100 text-error-700",
      dark: "dark:bg-error-900/30 dark:text-error-300",
    },
    info: {
      light: "bg-blue-100 text-blue-700",
      dark: "dark:bg-blue-900/30 dark:text-blue-300",
    },
  },

  // Colores para Cards
  card: {
    default: {
      light: "bg-white border-neutral-200",
      dark: "dark:bg-neutral-800 dark:border-neutral-700",
    },
    bordered: {
      light: "bg-white border-primary-200",
      dark: "dark:bg-neutral-800 dark:border-primary-900",
    },
    elevated: {
      light: "bg-white border-neutral-100",
      dark: "dark:bg-neutral-800 dark:border-neutral-700",
    },
    flat: {
      light: "bg-neutral-50 border-neutral-200",
      dark: "dark:bg-neutral-900 dark:border-neutral-700",
    },
  },

  // Colores para Input
  input: {
    background: {
      light: "bg-white",
      dark: "dark:bg-neutral-800",
    },
    border: {
      default: {
        light: "border-neutral-300",
        dark: "dark:border-neutral-600",
      },
      focus: {
        light: "focus:border-primary-500",
        dark: "dark:focus:border-primary-400",
      },
    },
    text: {
      light: "text-neutral-900",
      dark: "dark:text-neutral-100",
    },
    placeholder: {
      light: "placeholder-neutral-400",
      dark: "dark:placeholder-neutral-500",
    },
  },
};

// Paleta global: alias semánticos que puedes reconfigurar fácilmente
export const PALETTE = {
  vino: {
    light: "bg-primary-700 text-white",
    dark: "dark:bg-primary-900 text-white",
  },
  blanco: {
    light: "bg-white text-neutral-900",
    dark: "dark:bg-neutral-800 dark:text-neutral-100",
  },
  azul: {
    light: "bg-blue-600 text-white",
    dark: "dark:bg-blue-500 text-white",
  },
  verde: {
    light: "bg-green-600 text-white",
    dark: "dark:bg-green-500 text-white",
  },
};

// Combinadores listos para usar
export const STYLE_COMBOS = {
  sidebarLink: `${COLOR_SYSTEM.sidebar.link.default.light} ${COLOR_SYSTEM.sidebar.link.default.dark} ${COLOR_SYSTEM.sidebar.link.hover.light} ${COLOR_SYSTEM.sidebar.link.hover.dark} transition-colors`,
  
  sidebarGroupHeader: `${COLOR_SYSTEM.sidebar.group.header.light} ${COLOR_SYSTEM.sidebar.group.header.dark} transition-colors`,
  
  sidebarGroupItem: `${COLOR_SYSTEM.sidebar.group.item.light} ${COLOR_SYSTEM.sidebar.group.item.dark} transition-colors`,
};

export const BUTTON_STYLES = {
  base: "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/50 disabled:opacity-50 disabled:cursor-not-allowed",
  
  variants: {
    primary: `${COLOR_SYSTEM.button.primary.light} ${COLOR_SYSTEM.button.primary.dark}`,
    secondary: `${COLOR_SYSTEM.button.secondary.light} ${COLOR_SYSTEM.button.secondary.dark}`,
    outline: `${COLOR_SYSTEM.button.outline.light} ${COLOR_SYSTEM.button.outline.dark}`,
    ghost: `${COLOR_SYSTEM.button.ghost.light} ${COLOR_SYSTEM.button.ghost.dark}`,
    danger: `${COLOR_SYSTEM.button.danger.light} ${COLOR_SYSTEM.button.danger.dark}`,
    success: `${COLOR_SYSTEM.button.success.light} ${COLOR_SYSTEM.button.success.dark}`,
    warning: `${COLOR_SYSTEM.button.warning.light} ${COLOR_SYSTEM.button.warning.dark}`,
    info: `${COLOR_SYSTEM.button.info.light} ${COLOR_SYSTEM.button.info.dark}`,
    successDark: `${COLOR_SYSTEM.button.successDark.light} ${COLOR_SYSTEM.button.successDark.dark}`,
  },
  
  sizes: {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  },
};

export const CARD_STYLES = {
  base: "rounded-xl transition-all duration-200",
  
  variants: {
    default: `${COLOR_SYSTEM.card.default.light} ${COLOR_SYSTEM.card.default.dark} border shadow-sm`,
    bordered: `${COLOR_SYSTEM.card.default.light} ${COLOR_SYSTEM.card.default.dark} border-2 border-primary-200 dark:border-primary-900`,
    flat: `${COLOR_SYSTEM.card.flat.light} ${COLOR_SYSTEM.card.flat.dark} border`,
    elevated: `${COLOR_SYSTEM.card.elevated.light} ${COLOR_SYSTEM.card.elevated.dark} border shadow-md dark:shadow-lg`,
  },
  
  padding: {
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  },
};

export const BADGE_STYLES = {
  base: "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors",
  
  variants: {
    primary: `${COLOR_SYSTEM.badge.primary.light} ${COLOR_SYSTEM.badge.primary.dark}`,
    secondary: `${COLOR_SYSTEM.badge.secondary.light} ${COLOR_SYSTEM.badge.secondary.dark}`,
    success: `${COLOR_SYSTEM.badge.success.light} ${COLOR_SYSTEM.badge.success.dark}`,
    warning: `${COLOR_SYSTEM.badge.warning.light} ${COLOR_SYSTEM.badge.warning.dark}`,
    error: `${COLOR_SYSTEM.badge.error.light} ${COLOR_SYSTEM.badge.error.dark}`,
    info: `${COLOR_SYSTEM.badge.info.light} ${COLOR_SYSTEM.badge.info.dark}`,
  },
  
  sizes: {
    xs: "px-2 py-1 text-xs",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  },
};

export const INPUT_STYLES = {
  base: "w-full px-4 py-2.5 text-sm font-normal outline-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/50",
  
  variants: {
    default: `${COLOR_SYSTEM.input.background.light} ${COLOR_SYSTEM.input.background.dark} border border-neutral-300 dark:border-neutral-600 rounded-lg`,
    minimal: `${COLOR_SYSTEM.input.background.light} ${COLOR_SYSTEM.input.background.dark} border-b-2 border-neutral-300 dark:border-neutral-600 rounded-none`,
  },
  
  text: `${COLOR_SYSTEM.input.text.light} ${COLOR_SYSTEM.input.text.dark}`,
  label: `${COLOR_SYSTEM.text.secondary.light} ${COLOR_SYSTEM.text.secondary.dark} mb-2 block text-sm font-medium`,
  error: "mt-1 text-xs font-medium text-error-600 dark:text-error-400",
  helperText: "mt-1 text-xs text-neutral-500 dark:text-neutral-400",
};

// Helper function para combinar estilos light y dark
export const combineColors = (lightClass: string, darkClass: string): string => {
  return `${lightClass} ${darkClass}`;
};

export const TABLE_STYLES = {
  base: "w-full",
  wrapper: `${COLOR_SYSTEM.background.primary.light} ${COLOR_SYSTEM.background.primary.dark} ${COLOR_SYSTEM.border.default.light} ${COLOR_SYSTEM.border.default.dark} w-full overflow-x-auto rounded-lg border bg`,
  
  row: `${COLOR_SYSTEM.border.default.light} ${COLOR_SYSTEM.border.default.dark} border-b transition-colors duration-150`,
  rowHover: `${COLOR_SYSTEM.hover.light.light} ${COLOR_SYSTEM.hover.light.dark}`,
  
  cell: `${COLOR_SYSTEM.text.secondary.light} ${COLOR_SYSTEM.text.secondary.dark} text-sm px-6 py-4`,
  
  header: `${COLOR_SYSTEM.text.secondary.light} ${COLOR_SYSTEM.background.secondary.dark} ${COLOR_SYSTEM.border.default.light} ${COLOR_SYSTEM.border.default.dark} border-b-2 bg`,
  headerCell: `${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark} text-sm font-semibold px-6 py-4`,
};

// Mapeo de acciones a variantes de botón (usar en toda la app)
export const ACTION_BUTTON_VARIANTS = {
  edit: "warning",
  save: "success",
  delete: "danger",
  clear: "info",
  download: "successDark",
  search: "info",
};

// MODAL_STYLES: tokens centralizados para modales
export const MODAL_STYLES = {
  overlay: "fixed inset-0 z-50 bg-black/50",
  container: "flex items-center justify-center h-screen p-4",
  wrapper: `${COLOR_SYSTEM.background.primary.light} ${COLOR_SYSTEM.background.primary.dark} rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto`,
  
  header: {
    base: `sticky top-0 z-10 flex items-center justify-between p-4 md:p-6 border-b-2`,
    background: `${PALETTE?.vino?.light || 'bg-primary-700 text-white'} ${PALETTE?.vino?.dark || 'dark:bg-primary-900 text-white'}`,
    border: `${COLOR_SYSTEM.border.primary.light} ${COLOR_SYSTEM.border.primary.dark}`,
    title: "text-lg md:text-2xl font-bold text-white",
    subtitle: `text-xs md:text-sm ${COLOR_SYSTEM.text.tertiary.light} ${COLOR_SYSTEM.text.tertiary.dark}`,
    closeButton: `p-2 rounded-lg transition-colors ${COLOR_SYSTEM.hover.primary.light} ${COLOR_SYSTEM.hover.primary.dark}`,
  },
  
  body: "p-4 md:p-6 space-y-6",
  
  section: {
    title: `text-base md:text-lg font-semibold ${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark} mb-4 pb-2 border-b-2 ${COLOR_SYSTEM.border.primary.light} ${COLOR_SYSTEM.border.primary.dark}`,
    grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6",
  },
  
  imageBox: {
    border: `border-2 ${COLOR_SYSTEM.border.primary.light} ${COLOR_SYSTEM.border.primary.dark} rounded-lg p-4 flex flex-col items-center gap-3`,
    title: `text-sm font-semibold ${COLOR_SYSTEM.text.primary.light} ${COLOR_SYSTEM.text.primary.dark}`,
    uploader: `w-full aspect-square rounded-lg overflow-hidden flex items-center justify-center ${COLOR_SYSTEM.background.secondary.light} ${COLOR_SYSTEM.background.secondary.dark} border-2 border-dashed ${COLOR_SYSTEM.border.primary.light} ${COLOR_SYSTEM.border.primary.dark}`,
  },
  
  footer: {
    base: `sticky bottom-0 z-10 flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 p-4 md:p-6 border-t-2`,
    background: `${COLOR_SYSTEM.background.modal.footer.light} ${COLOR_SYSTEM.background.modal.footer.dark}`,
    border: `${COLOR_SYSTEM.border.primary.light} ${COLOR_SYSTEM.border.primary.dark}`,
  },
};

