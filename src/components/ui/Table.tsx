import React, { useState, useEffect } from "react";
import { TABLE_STYLES, ACTION_BUTTON_VARIANTS } from "@/config/styles";
import { Button } from "./Button";

interface TableColumn<T> {
  header: string;
  key: keyof T;
  render?: (value: any, item: T) => React.ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  striped?: boolean;
  hover?: boolean;
  compact?: boolean;
  actions?: {
    label: string;
    icon?: React.ReactNode;
    onClick: (item: T) => void;
    variant?: "primary" | "secondary" | "danger" | string;
  }[];
  pageSize?: number;
}

export const Table = React.forwardRef<HTMLDivElement, TableProps<any>>(
  ({ columns, data = [], striped = true, hover = true, compact = false, actions, pageSize = 15 }, ref) => {
    
    const [page, setPage] = useState(1);

    // Reiniciar a la página 1 cuando cambian los datos
    useEffect(() => {
      setPage(1);
    }, [data]);

    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    const rowClasses = [
      TABLE_STYLES.row,
      striped && TABLE_STYLES.row.replace("border-b", ""),
      hover && TABLE_STYLES.rowHover,
    ].filter(Boolean).join(" ");

    const cellClasses = TABLE_STYLES.cell + (compact ? " px-2 py-2" : "");
    const cellText = TABLE_STYLES.cell.split(" ").slice(0, 2).join(" ");

    // Lógica de paginación segura
    const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
    const pagedData = data.slice((page - 1) * pageSize, page * pageSize);

    return (
      <div ref={ref} className={`${TABLE_STYLES.wrapper}`}>
        <table className={TABLE_STYLES.base}>
          <thead>
            <tr className={TABLE_STYLES.header}>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`${TABLE_STYLES.headerCell} ${alignClasses[col.align || "left"]}`}
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.header}
                </th>
              ))}
              {actions && (
                <th className={`${TABLE_STYLES.headerCell} text-right`}>
                  Acciones
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {pagedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className={`${cellClasses} text-center text-neutral-500 dark:text-neutral-400 py-8`}
                >
                  No hay datos disponibles
                </td>
              </tr>
            ) : (
              pagedData.map((item, idx) => (
                <tr key={idx} className={rowClasses}>
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={`${cellClasses} ${cellText} ${alignClasses[col.align || "left"]}`}
                    >
                      {col.render
                        ? col.render(item[col.key], item)
                        : String(item[col.key] || "-")}
                    </td>
                  ))}
                  {actions && (
                    <td className={`${cellClasses} text-right`}>
                      <div className="flex gap-2 justify-end">
                        {actions.map((action, aIdx) => {
                          const variantFromAction = (action as any).variant as string | undefined;
                          const mapped = variantFromAction && (ACTION_BUTTON_VARIANTS as any)[variantFromAction]
                            ? (ACTION_BUTTON_VARIANTS as any)[variantFromAction]
                            : variantFromAction ?? "ghost";
                          return (
                            <Button
                              key={aIdx}
                              variant={mapped as any}
                              size="sm"
                              onClick={() => action.onClick(item)}
                              title={action.label}
                            >
                              <span className="flex items-center gap-1">
                                {action.icon}
                                <span className="text-xs">{action.label}</span>
                              </span>
                            </Button>
                          );
                        })}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Controles de Paginación */}
        <div className="flex items-center justify-between px-4 py-3 border-t mt-2">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Mostrando <span className="font-medium">{pagedData.length}</span> de <span className="font-medium">{data.length}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Anterior</Button>
            <div className="text-sm font-medium">Página {page} de {totalPages}</div>
            <Button size="sm" variant="outline" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Siguiente</Button>
          </div>
        </div>
      </div>
    );
  }
);

Table.displayName = "Table";
