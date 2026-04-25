import { Link, useRoute } from "wouter";
import { ExternalLink, FileText } from "lucide-react";
import TeacherShell from "@/components/TeacherShell";
import Markdown from "@/components/Markdown";
import {
  getMarkdown,
  getTeacherCourse,
} from "@/data/teacherCourses";
import NotFound from "./NotFound";

export default function TeacherDay() {
  const [, params] = useRoute("/teacher/:courseId/w/:week/d/:day");
  const course = params?.courseId ? getTeacherCourse(params.courseId) : null;
  const week = course?.weeks.find((w) => String(w.week) === params?.week);
  const day = week?.days.find((d) => String(d.day) === params?.day);

  if (!course || !week || !day) return <NotFound />;

  // 日級腳本（甜點烘焙）優先；否則降級為週級腳本（CSI/國家主題）
  const dayScript = getMarkdown(day.scriptKey);
  const weekScript = getMarkdown(week.scriptKey);
  const script = dayScript || weekScript;

  // 投影片：優先用日級，沒有的話降級到週級或課程級
  const hasDaySlide = !!day.slideUrl;
  const hasWeekSlide = !!week.slideUrl;
  const hasCoverSlide = !!course.coverSlideUrl;

  return (
    <TeacherShell
      breadcrumbs={[
        { href: "/teacher/dashboard", label: "所有課程" },
        { href: `/teacher/${course.id}`, label: course.name },
        { href: `/teacher/${course.id}/w/${week.week}`, label: `W${week.week}` },
      ]}
      title={`Day ${day.day}｜${day.title}`}
    >
      {/* 投影片區 — 只有當日有自己的投影片才顯示 */}
      {hasDaySlide && (
        <section className="mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-sm text-brand-brown/70 mb-1">
                投影片（{labelForFormat(day.slideFormat)}）
              </div>
              <div className="font-semibold text-brand-brown">
                W{week.week} Day{day.day}｜{day.title}
              </div>
            </div>
            <a
              href={day.slideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange text-white text-sm font-medium hover:bg-brand-orange/90"
            >
              <ExternalLink size={14} /> 開啟投影片
            </a>
          </div>
        </section>
      )}

      {/* 沒有日級但有週級投影片：顯示提示連回週首頁 */}
      {!hasDaySlide && hasWeekSlide && (
        <section className="mb-6">
          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4 text-sm text-brand-brown/70 flex items-center gap-2 flex-wrap">
            <span>📑</span>
            <span>本日使用 W{week.week} 共用投影片，</span>
            <Link
              href={`/teacher/${course.id}/w/${week.week}`}
              className="underline text-brand-orange hover:text-brand-orange/80"
            >
              到 W{week.week} 首頁開啟
            </Link>
          </div>
        </section>
      )}

      {/* 沒有日級也沒週級但有課程級：顯示提示連回課程首頁 */}
      {!hasDaySlide && !hasWeekSlide && hasCoverSlide && (
        <section className="mb-6">
          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4 text-sm text-brand-brown/70 flex items-center gap-2 flex-wrap">
            <span>📑</span>
            <span>本課程使用一份綜合投影片，</span>
            <Link
              href={`/teacher/${course.id}`}
              className="underline text-brand-orange hover:text-brand-orange/80"
            >
              到課程首頁開啟
            </Link>
          </div>
        </section>
      )}

      {/* 完全沒投影片 */}
      {!hasDaySlide && !hasWeekSlide && !hasCoverSlide && (
        <section className="mb-6">
          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4 text-sm text-stone-400 italic text-center">
            （本日投影片整理中）
          </div>
        </section>
      )}

      {/* 教學腳本 */}
      {script ? (
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-brand-brown mb-3 flex items-center gap-2">
            <FileText size={18} /> 教學腳本
          </h2>
          <Markdown>{script}</Markdown>
        </section>
      ) : (
        <section className="bg-white rounded-2xl shadow-sm p-6 text-center text-stone-400">
          （本日尚未提供教學腳本）
        </section>
      )}
    </TeacherShell>
  );
}

function labelForFormat(f: string) {
  switch (f) {
    case "pptx":
      return "PowerPoint";
    case "pdf":
      return "PDF";
    case "images":
      return "圖片投影片";
    case "manus":
      return "Google Drive";
    case "none":
      return "（投影片整理中）";
    default:
      return "尚未指定格式";
  }
}
