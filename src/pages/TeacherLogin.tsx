import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Lock, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isTeacherAuthed, tryTeacherLogin } from "@/hooks/useAuth";

export default function TeacherLogin() {
  const [, navigate] = useLocation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isTeacherAuthed()) {
      navigate("/teacher/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tryTeacherLogin(password)) {
      navigate("/teacher/dashboard", { replace: true });
    } else {
      setError("密碼不正確");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-brand-orange/10 flex items-center justify-center">
            <Lock className="text-brand-orange" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-brand-brown">老師專區</h1>
          <p className="text-sm text-brand-brown/70 mt-1">
            請輸入密碼存取教學資源
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2">
              密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              placeholder="輸入老師密碼"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          <Button type="submit" className="w-full" size="lg">
            進入
          </Button>
        </form>

        <div className="text-center mt-6">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <HomeIcon size={14} /> 回首頁
          </Button>
        </div>
      </div>
    </div>
  );
}
