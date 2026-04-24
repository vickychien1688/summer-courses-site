/**
 * 2026 暑期課程首頁
 * 設計：溫暖童趣學園風，奶油 #FFF8F0 背景 + 橘色 #E8772E 主色
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { Phone, BookOpen } from "lucide-react";
import {
  highGradeCourses,
  lowGradeCourses,
  siteInfo,
} from "@/data/courses";
import { Button } from "@/components/ui/button";

type TabType = "low" | "high";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("low");
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header */}
      <header className="pt-6 pb-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="w-32" />
          <img
            src={siteInfo.logo}
            alt="家功場放學趣"
            className="h-16 object-contain"
          />
          <a
            href={`tel:${siteInfo.phone}`}
            className="flex items-center gap-2 text-base font-medium w-32 justify-end text-brand-brown hover:text-brand-orange transition-colors"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">{siteInfo.phone}</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pb-6">
        <div
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative shadow-lg"
        >
          <img
            src={siteInfo.heroBanner}
            alt="2026 暑期課程"
            className="w-full object-cover"
            style={{ maxHeight: 400 }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
            <div className="px-8 py-4 rounded-2xl text-center bg-[#FFF8F0]/85 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-black text-brand-orange">
                2026 暑期課程
              </h1>
              <p className="mt-2 text-lg md:text-xl font-medium text-brand-brown">
                讓孩子的暑假充滿探索與創造！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab 切換 */}
      <div className="flex justify-center mb-6 px-4">
        <div className="inline-flex rounded-lg overflow-hidden border-2 border-dashed border-brand-yellow">
          <button
            onClick={() => setActiveTab("low")}
            className={`px-8 py-3 transition-colors font-medium ${
              activeTab === "low"
                ? "bg-brand-orange text-white"
                : "bg-transparent text-brand-brown hover:bg-brand-orange/10"
            }`}
          >
            低年級
          </button>
          <button
            onClick={() => setActiveTab("high")}
            className={`px-8 py-3 transition-colors font-medium ${
              activeTab === "high"
                ? "bg-brand-orange text-white"
                : "bg-transparent text-brand-brown hover:bg-brand-orange/10"
            }`}
          >
            中高年級
          </button>
        </div>
      </div>

      {/* 課程內容 */}
      <main className="max-w-5xl mx-auto px-4 pb-16">
        {activeTab === "low" ? <LowGradeGrid /> : <HighGradeGrid />}
      </main>

      {/* 老師入口 */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/teacher")}
          >
            <BookOpen size={20} />
            老師入口
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-brand-brown/70 border-t border-stone-200">
        <p>© 2026 家功場放學趣</p>
        <p className="mt-1">
          電話：
          <a
            href={`tel:${siteInfo.phone}`}
            className="underline hover:text-brand-orange"
          >
            {siteInfo.phone}
          </a>
        </p>
      </footer>
    </div>
  );
}

function HighGradeGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {highGradeCourses.map((c) => (
        <a
          key={c.id}
          href={c.presentationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
        >
          <div
            className="h-40 flex items-center justify-center text-5xl"
            style={{ backgroundColor: c.bgColor }}
          >
            <img
              src={c.coverImage}
              alt={c.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="font-bold text-lg" style={{ color: c.color }}>
                {c.name}
              </h3>
            </div>
            <p className="text-sm text-brand-brown/80 font-medium mb-2">
              {c.subtitle}
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed">
              {c.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

function LowGradeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {lowGradeCourses.map((c) => (
        <div
          key={c.id}
          className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
        >
          <div
            className="h-40 relative"
            style={{ backgroundColor: c.bgColor }}
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div
              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: c.color }}
            >
              {c.day}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-xl mb-1" style={{ color: c.color }}>
              {c.name}
            </h3>
            <p className="text-sm text-brand-brown/80 italic mb-2">
              {c.tagline}
            </p>
            <p className="text-sm text-brand-brown/70 leading-relaxed mb-3">
              {c.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {c.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-full border"
                  style={{ borderColor: c.color, color: c.color }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
