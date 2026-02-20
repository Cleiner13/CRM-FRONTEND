import React from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Badge } from "@/components/atoms/Badge";
import { X, Upload } from "lucide-react";
import { ACTION_BUTTON_VARIANTS, PALETTE, MODAL_STYLES, INPUT_STYLES } from "@/config/styles";

type Person = { id: string; [key: string]: any };

type Props = {
  open: boolean;
  onClose: () => void;
  initialPerson?: Person | null;
  onSave: (p: Person) => void;
  onDelete: (id: string) => void;
};

export const PersonModal: React.FC<Props> = ({
  open,
  onClose,
  initialPerson = null,
  onSave,
  onDelete,
}) => {
  const [form, setForm] = React.useState<Person | null>(null);

  React.useEffect(() => {
    if (!open) return;
    if (initialPerson) {
      setForm({ ...initialPerson });
    } else {
      setForm({ id: `P${Date.now()}`, dni: "", name: "", status: "Activo", date: new Date().toISOString().slice(0, 10) });
    }
  }, [open, initialPerson]);

  const handleChange = (k: string, v: any) => {
    if (!form) return;
    setForm({ ...form, [k]: v });
  };

  const handleSave = () => {
    if (!form) return;
    onSave(form);
    onClose();
  };

  const handleDelete = () => {
    if (!form || !form.id) return;
    if (window.confirm("¿Está seguro que desea eliminar este registro?")) {
      onDelete(form.id);
      onClose();
    }
  };

  const handleClear = () => {
    if (!form) return;
    if (initialPerson) {
      setForm({ ...initialPerson });
    } else {
      setForm({ id: form.id, dni: "", name: "", status: "Activo", date: new Date().toISOString().slice(0, 10) });
    }
  };

  if (!open || !form) return null;

  return (
    <div className={MODAL_STYLES.overlay}>
      <div className={MODAL_STYLES.container}>
        <div className={MODAL_STYLES.wrapper}>
          {/* Header */}
          <div className={`${MODAL_STYLES.header.base} ${MODAL_STYLES.header.background} ${MODAL_STYLES.header.border}`}>
            <div>
              <h3 className={MODAL_STYLES.header.title}>
                Registrar / Editar Personal
              </h3>
              <p className={MODAL_STYLES.header.subtitle}>
                {form.id ? "Editando registro" : "Creando nuevo registro"}
              </p>
            </div>
            <button onClick={onClose} className={MODAL_STYLES.header.closeButton}>
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* Body */}
          <div className={MODAL_STYLES.body}>
            {/* Main grid: personal datos + images */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Datos Personales - Left side (3 columns) */}
              <div className="lg:col-span-3">
                <h4 className={MODAL_STYLES.section.title}>Datos Personales</h4>
                
                <div className={MODAL_STYLES.section.grid}>
                  <select
                    value={form.tipo_doc ?? "DNI"}
                    onChange={(e) => handleChange("tipo_doc", e.target.value)}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>DNI</option>
                    <option>Pasaporte</option>
                  </select>
                  <Input
                    placeholder="Num Doc"
                    value={form.dni ?? ""}
                    onChange={(e) => handleChange("dni", e.target.value)}
                    variant="default"
                  />
                  <select
                    value={form.nivel_estud ?? ""}
                    onChange={(e) => handleChange("nivel_estud", e.target.value)}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>-- Nivel Estudio --</option>
                    <option>Primario</option>
                    <option>Secundario</option>
                    <option>Universitario</option>
                  </select>

                  <Input
                    placeholder="Apellido Paterno"
                    value={form.apaterno ?? ""}
                    onChange={(e) => handleChange("apaterno", e.target.value)}
                  />
                  <Input
                    placeholder="Apellido Materno"
                    value={form.amaterno ?? ""}
                    onChange={(e) => handleChange("amaterno", e.target.value)}
                  />
                  <Input
                    type="date"
                    value={form.fecha_nac ?? ""}
                    onChange={(e) => handleChange("fecha_nac", e.target.value)}
                  />

                  <Input
                    placeholder="Primer Nombre"
                    value={form.pnombre ?? ""}
                    onChange={(e) => handleChange("pnombre", e.target.value)}
                  />
                  <Input
                    placeholder="Segundo Nombre"
                    value={form.snombre ?? ""}
                    onChange={(e) => handleChange("snombre", e.target.value)}
                  />
                  <select
                    value={form.sexo ?? ""}
                    onChange={(e) => handleChange("sexo", e.target.value)}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>

                  <Input
                    placeholder="Nro RUC"
                    value={form.nro_ruc ?? ""}
                    onChange={(e) => handleChange("nro_ruc", e.target.value)}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={form.email ?? ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <select
                    value={form.estado_civil ?? ""}
                    onChange={(e) => handleChange("estado_civil", e.target.value)}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                  </select>

                  <Input
                    placeholder="Edad"
                    type="number"
                    value={form.edad ?? ""}
                    onChange={(e) => handleChange("edad", e.target.value)}
                  />
                  <Input
                    placeholder="Talla"
                    value={form.talla ?? ""}
                    onChange={(e) => handleChange("talla", e.target.value)}
                  />
                  <Input
                    placeholder="Hijos"
                    type="number"
                    value={form.hijos ?? ""}
                    onChange={(e) => handleChange("hijos", e.target.value)}
                  />

                  <Input
                    placeholder="Nacionalidad"
                    value={form.nacionalidad ?? ""}
                    onChange={(e) => handleChange("nacionalidad", e.target.value)}
                  />
                  <Input
                    placeholder="Departamento"
                    value={form.departamento ?? ""}
                    onChange={(e) => handleChange("departamento", e.target.value)}
                  />
                  <Input
                    placeholder="Provincia"
                    value={form.provincia ?? ""}
                    onChange={(e) => handleChange("provincia", e.target.value)}
                  />

                  <Input
                    placeholder="Distrito"
                    value={form.distrito ?? ""}
                    onChange={(e) => handleChange("distrito", e.target.value)}
                  />
                  <Input
                    placeholder="Referencia"
                    value={form.referencia ?? ""}
                    onChange={(e) => handleChange("referencia", e.target.value)}
                  />
                  <Input
                    placeholder="Cel 1"
                    value={form.cel1 ?? ""}
                    onChange={(e) => handleChange("cel1", e.target.value)}
                  />

                  <Input
                    placeholder="Cel 2"
                    value={form.cel2 ?? ""}
                    onChange={(e) => handleChange("cel2", e.target.value)}
                  />
                  <Input
                    placeholder="T Fijo"
                    value={form.t_fijo ?? ""}
                    onChange={(e) => handleChange("t_fijo", e.target.value)}
                  />
                </div>

                {/* Datos de Postulación */}
                <h4 className={MODAL_STYLES.section.title}>Datos de Postulación</h4>
                <div className={MODAL_STYLES.section.grid}>
                  <Input
                    placeholder="Origen"
                    value={form.origen ?? ""}
                    onChange={(e) => handleChange("origen", e.target.value)}
                  />
                  <Input
                    placeholder="Ref. de"
                    value={form.ref_de ?? ""}
                    onChange={(e) => handleChange("ref_de", e.target.value)}
                  />
                  <Input
                    placeholder="Perfil"
                    value={form.perfil ?? ""}
                    onChange={(e) => handleChange("perfil", e.target.value)}
                  />
                  <Input
                    placeholder="Uu.nn"
                    value={form.uu_nn ?? ""}
                    onChange={(e) => handleChange("uu_nn", e.target.value)}
                  />
                  <Input
                    placeholder="Area"
                    value={form.area ?? ""}
                    onChange={(e) => handleChange("area", e.target.value)}
                  />
                  <Input
                    placeholder="Producto"
                    value={form.producto ?? ""}
                    onChange={(e) => handleChange("producto", e.target.value)}
                  />
                </div>
              </div>

              {/* Images section - Right side */}
              <div className="lg:col-span-1">
                <div className={MODAL_STYLES.imageBox.border}>
                  <h5 className={MODAL_STYLES.imageBox.title}>Fotos</h5>
                  <div className={MODAL_STYLES.imageBox.uploader}>
                    <div className="text-center">
                      <Upload size={32} className="mx-auto mb-2 opacity-50" />
                      <p className="text-xs">Imagen 1</p>
                    </div>
                  </div>
                  <div className={MODAL_STYLES.imageBox.uploader}>
                    <div className="text-center">
                      <Upload size={32} className="mx-auto mb-2 opacity-50" />
                      <p className="text-xs">Imagen 2</p>
                    </div>
                  </div>
                  <Badge
                    label={form.id && form.id !== `P${Date.now()}` ? "Editando" : "Nuevo"}
                    variant={form.id && form.id !== `P${Date.now()}` ? "success" : "secondary"}
                    size="sm"
                  />
                </div>
              </div>
            </div>

            {/* Datos de Contratación y Registro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className={MODAL_STYLES.section.title}>Datos de Contratación</h4>
                <div className={MODAL_STYLES.section.grid}>
                  <Input
                    placeholder="Tipo Contrato"
                    value={form.tipo_contrato ?? ""}
                    onChange={(e) => handleChange("tipo_contrato", e.target.value)}
                  />
                  <Input
                    placeholder="Supervisor"
                    value={form.supervisor ?? ""}
                    onChange={(e) => handleChange("supervisor", e.target.value)}
                  />
                  <Input
                    placeholder="Jornada"
                    value={form.jornada ?? ""}
                    onChange={(e) => handleChange("jornada", e.target.value)}
                  />
                  <Input
                    placeholder="Banco"
                    value={form.banco ?? ""}
                    onChange={(e) => handleChange("banco", e.target.value)}
                  />
                  <Input
                    placeholder="Nro de CTA"
                    value={form.nro_cta ?? ""}
                    onChange={(e) => handleChange("nro_cta", e.target.value)}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Ing"
                    value={form.fecha_ing ?? ""}
                    onChange={(e) => handleChange("fecha_ing", e.target.value)}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Cambio"
                    value={form.fecha_cambio ?? ""}
                    onChange={(e) => handleChange("fecha_cambio", e.target.value)}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Cese"
                    value={form.fecha_cese ?? ""}
                    onChange={(e) => handleChange("fecha_cese", e.target.value)}
                  />
                  <Input
                    placeholder="S. Basico"
                    value={form.s_basico ?? ""}
                    onChange={(e) => handleChange("s_basico", e.target.value)}
                  />
                  <Input
                    placeholder="Empresa"
                    value={form.empresa ?? ""}
                    onChange={(e) => handleChange("empresa", e.target.value)}
                  />
                  <Input
                    placeholder="Cargo"
                    value={form.cargo ?? ""}
                    onChange={(e) => handleChange("cargo", e.target.value)}
                  />
                  <Input
                    placeholder="Generacion"
                    value={form.generacion ?? ""}
                    onChange={(e) => handleChange("generacion", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <h4 className={MODAL_STYLES.section.title}>Datos de Registro</h4>
                <div className="space-y-3 md:space-y-4">
                  <select
                    value={form.estado ?? "Activo"}
                    onChange={(e) => handleChange("estado", e.target.value)}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>Activo</option>
                    <option>Inactivo</option>
                    <option>Suspendido</option>
                  </select>
                  <Input
                    placeholder="Sub Estado"
                    value={form.sub_estado ?? ""}
                    onChange={(e) => handleChange("sub_estado", e.target.value)}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Capacitación"
                    value={form.fecha_capacitacion ?? ""}
                    onChange={(e) => handleChange("fecha_capacitacion", e.target.value)}
                  />
                  <textarea
                    placeholder="Comentario"
                    value={form.comentario ?? ""}
                    onChange={(e) => handleChange("comentario", e.target.value)}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default} h-24 resize-none`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`${MODAL_STYLES.footer.base} ${MODAL_STYLES.footer.background} ${MODAL_STYLES.footer.border}`}>
            <Button variant={(ACTION_BUTTON_VARIANTS.clear as any)} size="sm" onClick={handleClear}>
              Limpiar Campos
            </Button>
            <Button variant={(ACTION_BUTTON_VARIANTS.save as any)} size="sm" onClick={handleSave}>
              Guardar Cambios
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonModal;
