import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Card, Button, Input } from "@/components/ui";
import { User, Lock } from "lucide-react";
import { LOGO_PATHS } from "@/config/theme";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleLogin = () => {
    // Validación simple
    const newErrors: Record<string, string> = {};
    if (!user) newErrors.user = "El usuario es requerido";
    if (!password) newErrors.password = "La contraseña es requerida";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Navegar al dashboard (sin validación de backend)
      navigate("/dashboard");
    }
  };

  return (
    <AuthLayout>
      <Card className="backdrop-blur-md bg-white/95 dark:bg-neutral-800/95 border-2 border-primary-200 dark:border-primary-800 shadow-2xl">
        <div className="text-center mb-8">
          <img
            src={LOGO_PATHS.complete}
            alt="ALMPES Contact Center"
            className="mx-auto mb-6 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="space-y-4">
          <Input
            label="Usuario"
            type="text"
            placeholder="NOMBRE.APELLIDO"
            icon={<User size={18} />}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            error={errors.user}
          />

          <Input
            label="Contraseña"
            type="password"
            placeholder="••••••••••••"
            icon={<Lock size={18} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>

          <div className="text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              ¿Olvidaste tu contraseña?{" "}
              <button className="text-primary-600 font-semibold hover:underline">
                Recúpérala aquí
              </button>
            </p>
          </div>
        </div>
      </Card>
    </AuthLayout>
  );
};