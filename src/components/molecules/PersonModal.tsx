import React from "react";
import { Button, Input, Badge } from "@/components/ui";
import { X, Upload } from "lucide-react";
import { ACTION_BUTTON_VARIANTS, MODAL_STYLES, INPUT_STYLES } from "@/config/styles";

type Person = { id: string; [key: string]: any };

type Props = {
  open: boolean;
  onClose: () => void;
  initialPerson?: Person | null;
  onSave: (p: Person) => void;
};

export const PersonModal: React.FC<Props> = ({
  open,
  onClose,
  initialPerson = null,
  onSave,
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

  const handleChange = (k: string, v: string | number | boolean) => {
    if (!form) return;
    setForm({ ...form, [k]: v });
  };

  const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    handleChange(key, e.target.value);
  };

  const handleTextAreaChange = (key: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(key, e.target.value);
  };

  const handleSave = () => {
    if (!form) return;
    onSave(form);
    onClose();
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
                    onChange={handleInputChange("tipo_doc")}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>DNI</option>
                    <option>Pasaporte</option>
                  </select>
                  <Input
                    placeholder="Num Doc"
                    value={form.dni ?? ""}
                    onChange={handleInputChange("dni")}
                    variant="default"
                  />
                  <select
                    value={form.nivel_estud ?? ""}
                    onChange={handleInputChange("nivel_estud")}
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
                    onChange={handleInputChange("apaterno")}
                  />
                  <Input
                    placeholder="Apellido Materno"
                    value={form.amaterno ?? ""}
                    onChange={handleInputChange("amaterno")}
                  />
                  <Input
                    type="date"
                    value={form.fecha_nac ?? ""}
                    onChange={handleInputChange("fecha_nac")}
                  />

                  <Input
                    placeholder="Primer Nombre"
                    value={form.pnombre ?? ""}
                    onChange={handleInputChange("pnombre")}
                  />
                  <Input
                    placeholder="Segundo Nombre"
                    value={form.snombre ?? ""}
                    onChange={handleInputChange("snombre")}
                  />
                  <select
                    value={form.sexo ?? ""}
                    onChange={handleInputChange("sexo")}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>

                  <Input
                    placeholder="Nro RUC"
                    value={form.nro_ruc ?? ""}
                    onChange={handleInputChange("nro_ruc")}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={form.email ?? ""}
                    onChange={handleInputChange("email")}
                  />
                  <select
                    value={form.estado_civil ?? ""}
                    onChange={handleInputChange("estado_civil")}
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
                    onChange={handleInputChange("edad")}
                  />
                  <Input
                    placeholder="Talla"
                    value={form.talla ?? ""}
                    onChange={handleInputChange("talla")}
                  />
                  <Input
                    placeholder="Hijos"
                    type="number"
                    value={form.hijos ?? ""}
                    onChange={handleInputChange("hijos")}
                  />

                  <Input
                    placeholder="Nacionalidad"
                    value={form.nacionalidad ?? ""}
                    onChange={handleInputChange("nacionalidad")}
                  />
                  <Input
                    placeholder="Departamento"
                    value={form.departamento ?? ""}
                    onChange={handleInputChange("departamento")}
                  />
                  <Input
                    placeholder="Provincia"
                    value={form.provincia ?? ""}
                    onChange={handleInputChange("provincia")}
                  />

                  <Input
                    placeholder="Distrito"
                    value={form.distrito ?? ""}
                    onChange={handleInputChange("distrito")}
                  />
                  <Input
                    placeholder="Referencia"
                    value={form.referencia ?? ""}
                    onChange={handleInputChange("referencia")}
                  />
                  <Input
                    placeholder="Cel 1"
                    value={form.cel1 ?? ""}
                    onChange={handleInputChange("cel1")}
                  />

                  <Input
                    placeholder="Cel 2"
                    value={form.cel2 ?? ""}
                    onChange={handleInputChange("cel2")}
                  />
                  <Input
                    placeholder="T Fijo"
                    value={form.t_fijo ?? ""}
                    onChange={handleInputChange("t_fijo")}
                  />
                </div>

                {/* Datos de Postulación */}
                <h4 className={MODAL_STYLES.section.title}>Datos de Postulación</h4>
                <div className={MODAL_STYLES.section.grid}>
                  <Input
                    placeholder="Origen"
                    value={form.origen ?? ""}
                    onChange={handleInputChange("origen")}
                  />
                  <Input
                    placeholder="Ref. de"
                    value={form.ref_de ?? ""}
                    onChange={handleInputChange("ref_de")}
                  />
                  <Input
                    placeholder="Perfil"
                    value={form.perfil ?? ""}
                    onChange={handleInputChange("perfil")}
                  />
                  <Input
                    placeholder="Uu.nn"
                    value={form.uu_nn ?? ""}
                    onChange={handleInputChange("uu_nn")}
                  />
                  <Input
                    placeholder="Area"
                    value={form.area ?? ""}
                    onChange={handleInputChange("area")}
                  />
                  <Input
                    placeholder="Producto"
                    value={form.producto ?? ""}
                    onChange={handleInputChange("producto")}
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
                    onChange={handleInputChange("tipo_contrato")}
                  />
                  <Input
                    placeholder="Supervisor"
                    value={form.supervisor ?? ""}
                    onChange={handleInputChange("supervisor")}
                  />
                  <Input
                    placeholder="Jornada"
                    value={form.jornada ?? ""}
                    onChange={handleInputChange("jornada")}
                  />
                  <Input
                    placeholder="Banco"
                    value={form.banco ?? ""}
                    onChange={handleInputChange("banco")}
                  />
                  <Input
                    placeholder="Nro de CTA"
                    value={form.nro_cta ?? ""}
                    onChange={handleInputChange("nro_cta")}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Ing"
                    value={form.fecha_ing ?? ""}
                    onChange={handleInputChange("fecha_ing")}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Cambio"
                    value={form.fecha_cambio ?? ""}
                    onChange={handleInputChange("fecha_cambio")}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Cese"
                    value={form.fecha_cese ?? ""}
                    onChange={handleInputChange("fecha_cese")}
                  />
                  <Input
                    placeholder="S. Basico"
                    value={form.s_basico ?? ""}
                    onChange={handleInputChange("s_basico")}
                  />
                  <Input
                    placeholder="Empresa"
                    value={form.empresa ?? ""}
                    onChange={handleInputChange("empresa")}
                  />
                  <Input
                    placeholder="Cargo"
                    value={form.cargo ?? ""}
                    onChange={handleInputChange("cargo")}
                  />
                  <Input
                    placeholder="Generacion"
                    value={form.generacion ?? ""}
                    onChange={handleInputChange("generacion")}
                  />
                </div>
              </div>

              <div>
                <h4 className={MODAL_STYLES.section.title}>Datos de Registro</h4>
                <div className="space-y-3 md:space-y-4">
                  <select
                    value={form.estado ?? "Activo"}
                    onChange={handleInputChange("estado")}
                    className={`${INPUT_STYLES.base} ${INPUT_STYLES.variants.default}`}
                  >
                    <option>Activo</option>
                    <option>Inactivo</option>
                    <option>Suspendido</option>
                  </select>
                  <Input
                    placeholder="Sub Estado"
                    value={form.sub_estado ?? ""}
                    onChange={handleInputChange("sub_estado")}
                  />
                  <Input
                    type="date"
                    placeholder="Fecha Capacitación"
                    value={form.fecha_capacitacion ?? ""}
                    onChange={handleInputChange("fecha_capacitacion")}
                  />
                  <textarea
                    placeholder="Comentario"
                    value={form.comentario ?? ""}
                    onChange={handleTextAreaChange("comentario")}
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
