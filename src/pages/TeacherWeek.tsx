import { Link, useRoute } from "wouter";
import { Download, ExternalLink } from "lucide-react";
import TeacherShell from "@/components/TeacherShell";
import Markdown from "@/components/Markdown";
import { getMarkdown, getTeacherCourse } from "@/data/teacherCourses";
import NotFound from "./NotFound";

export default function TeacherWeek() {
  const [, params] = useRoute("/teacher/:courseId/w/:week");
  const course = params?.courseId ? getTeacherCourse(params.courseId) : null;
  const week = course?.weeks.find((w) => String(w.week) === params?.week);

  if (!course || !week) return <NotFound />;

  const weekScript = getMarkdown(week.scriptKey);

  return (
    <TeacherShell
      breadcrumbs={[
        { href: "/teacher/dashboard", label: "所有課程" },
        { href: `/teacher/${course.id}`, label: course.name },
      ]}
      title={`W${week.week}｜${week.title}`}
    >
      {/* 週層級投影片（W1-W4 共用一份的話） */}
      {week.slideUrl && (
        <section className="mb-6">
          <div
            className="rounded-2xl shadow-sm p-5 flex items-center justify-between flex-wrap gap-3"
            style={{ backgroundColor: course.bgColor }}
          >
            <div>
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: course.color }}
              >
                📑 W{week.week} 本週投影片
              </div>
              <div className="text-sm text-brand-brown/80">
                本週 4 天共用同一份投影片
              </div>
            </div>
            <a
              href={week.slideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange text-white text-sm font-medium hover:bg-brand-orange/90"
            >
              <ExternalLink size={14} /> 開啟投影片
            </a>
          </div>
        </section>
      )}

      {/* 課程綜合投影片提示（如果這週沒自己的投影片，但課程有） */}
      {!week.slideUrl && course.coverSlideUrl && (
        <section className="mb-6">
          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4 text-sm text-brand-brown/70 flex items-center gap-2">
            <span>📑</span>
            <span>
              本課程使用一份綜合投影片，請至
              <Link
                href={`/teacher/${course.id}`}
                className="underline text-brand-orange hover:text-brand-orange/80"
              >
                課程首頁
              </Link>
              查看
            </span>
          </div>
        </section>
      )}

      {/* 週層級教學腳本（CSI 和國家主題是週層級） */}
      {weekScript && (
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-brand-brown mb-3">
              本週教學腳本
            </h2>
            <Markdown>{weekScript}</Markdown>
          </div>
        </section>
      )}

      {/* 每日內容 */}
      <section>
        <h2 className="text-lg font-bold text-brand-brown mb-3">
          每日課程（Day 1–4）
        </h2>
        <div className="space-y-3">
          {week.days.map((d) => {
            const hasOwnSlide = !!d.slideUrl;
            return (
              <Link
                key={d.day}
                href={`/teacher/${course.id}/w/${week.week}/d/${d.day}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: course.bgColor, color: course.color }}
                  >
                    D{d.day}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-brown">
                      Day {d.day}｜{d.title}
                    </div>
                    <div className="text-xs text-brand-brown/60 mt-0.5">
                      {hasOwnSlide
                        ? "腳本 + 當日投影片"
                        : (d as { scriptKey?: string }).scriptKey
                          ? "腳本"
                          : "（內容整理中）"}
                    </div>
                  </div>
                </div>
                {hasOwnSlide && (
                  <span className="text-brand-orange">
                    <Download size={16} />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </TeacherShell>
  );
}
