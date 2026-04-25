import { Link, useRoute } from "wouter";
import { FileText, ExternalLink } from "lucide-react";
import TeacherShell from "@/components/TeacherShell";
import Markdown from "@/components/Markdown";
import {
  getMarkdown,
  getTeacherCourse,
} from "@/data/teacherCourses";
import NotFound from "./NotFound";

export default function TeacherCourse() {
  const [, params] = useRoute("/teacher/:courseId");
  const course = params?.courseId ? getTeacherCourse(params.courseId) : null;

  if (!course) return <NotFound />;

  return (
    <TeacherShell
      breadcrumbs={[{ href: "/teacher/dashboard", label: "所有課程" }]}
      title={`${course.icon} ${course.name}`}
    >
      {/* 課程綜合投影片（如果是整門課用一份的話） */}
      {course.coverSlideUrl && (
        <section className="mb-8">
          <div
            className="rounded-2xl shadow-sm p-5 flex items-center justify-between flex-wrap gap-3"
            style={{ backgroundColor: course.bgColor }}
          >
            <div>
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: course.color }}
              >
                📑 課程綜合投影片
              </div>
              {course.coverSlideNote && (
                <div className="text-sm text-brand-brown/80 leading-relaxed">
                  {course.coverSlideNote}
                </div>
              )}
            </div>
            <a
              href={course.coverSlideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange text-white text-sm font-medium hover:bg-brand-orange/90"
            >
              <ExternalLink size={14} /> 開啟投影片
            </a>
          </div>
        </section>
      )}

      {/* 課程總覽文件 */}
      {course.overviewKeys && course.overviewKeys.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-brand-brown mb-3 flex items-center gap-2">
            <FileText size={18} /> 課程總覽
          </h2>
          <div className="space-y-4">
            {course.overviewKeys.map((k) => {
              const md = getMarkdown(k);
              const name = k.split("/").pop()?.replace(/\.md$/, "") ?? k;
              if (!md) return null;
              return (
                <details
                  key={k}
                  className="bg-white rounded-2xl shadow-sm p-5"
                >
                  <summary className="cursor-pointer font-semibold text-brand-brown">
                    {name}
                  </summary>
                  <div className="mt-4">
                    <Markdown>{md}</Markdown>
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      )}

      {/* 週次卡片 */}
      <section>
        <h2 className="text-lg font-bold text-brand-brown mb-3">
          八週課程（W1–W8）
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {course.weeks.map((w) => {
            const hasContent = w.days.length > 0;
            const card = (
              <div
                className={`rounded-2xl p-4 text-center transition-shadow ${
                  hasContent
                    ? "bg-white shadow-sm hover:shadow-md cursor-pointer"
                    : "bg-stone-100 opacity-60"
                }`}
              >
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: course.color }}
                >
                  W{w.week}
                </div>
                <div className="text-sm text-brand-brown leading-snug">
                  {w.title}
                </div>
                {!hasContent && (
                  <div className="text-xs text-stone-400 mt-1">整理中</div>
                )}
              </div>
            );
            return hasContent ? (
              <Link key={w.week} href={`/teacher/${course.id}/w/${w.week}`}>
                {card}
              </Link>
            ) : (
              <div key={w.week}>{card}</div>
            );
          })}
        </div>
      </section>
    </TeacherShell>
  );
}
