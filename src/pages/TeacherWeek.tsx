import { Link, useRoute } from "wouter";
import { Download } from "lucide-react";
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
          {week.days.map((d) => (
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
                    {d.slideUrl ? "腳本 + 投影片" : "腳本（投影片未提供）"}
                  </div>
                </div>
              </div>
              {d.slideUrl && (
                <span className="text-brand-orange">
                  <Download size={16} />
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </TeacherShell>
  );
}
