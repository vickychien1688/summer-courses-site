import { type ReactNode, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { LogOut, ChevronLeft } from "lucide-react";
import { isTeacherAuthed, teacherLogout } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

interface TeacherShellProps {
  children: ReactNode;
  breadcrumbs?: { href?: string; label: string }[];
  title?: string;
}

export default function TeacherShell({
  children,
  breadcrumbs,
  title,
}: TeacherShellProps) {
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isTeacherAuthed()) {
      navigate("/teacher", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    teacherLogout();
    navigate("/teacher", { replace: true });
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/teacher/dashboard"
            className="font-bold text-brand-brown flex items-center gap-2"
          >
            <span className="text-xl">📚</span>
            老師專區
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut size={14} />
            登出
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 text-sm text-brand-brown/70 flex items-center gap-1 flex-wrap">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {i > 0 && <ChevronLeft className="rotate-180" size={14} />}
                {b.href ? (
                  <Link
                    href={b.href}
                    className="hover:text-brand-orange underline-offset-2 hover:underline"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="font-medium text-brand-brown">
                    {b.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {title && (
          <h1 className="text-2xl md:text-3xl font-bold text-brand-brown mb-6">
            {title}
          </h1>
        )}

        {children}
      </main>
    </div>
  );
}
