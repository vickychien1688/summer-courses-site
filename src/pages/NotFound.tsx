import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl mb-4">🤔</p>
        <h1 className="text-3xl font-bold text-brand-brown mb-2">
          404 — 找不到這個頁面
        </h1>
        <p className="text-brand-brown/70 mb-6">網址可能輸錯了，或頁面已被移除。</p>
        <Button onClick={() => navigate("/")}>回首頁</Button>
      </div>
    </div>
  );
}
