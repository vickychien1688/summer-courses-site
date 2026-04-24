import { Link } from "wouter";
import { teacherCourses } from "@/data/teacherCourses";
import TeacherShell from "@/components/TeacherShell";

export default function TeacherDashboard() {
  return (
    <TeacherShell title="選擇課程">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {teacherCourses.map((c) => {
          const cardInner = (
            <div
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white cursor-pointer"
            >
              <div
                className="h-28 flex items-center justify-center text-5xl"
                style={{ backgroundColor: c.bgColor }}
              >
                <span>{c.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1" style={{ color: c.color }}>
                  {c.name}
                </h3>
                {c.hasMaterials ? (
                  <p className="text-sm text-brand-brown/70">
                    {c.weeks.filter((w) => w.days.length > 0).length} 週教材已上架
                  </p>
                ) : (
                  <p className="text-sm text-stone-400 italic">教材整理中</p>
                )}
              </div>
            </div>
          );

          return c.hasMaterials ? (
            <Link key={c.id} href={`/teacher/${c.id}`}>
              {cardInner}
            </Link>
          ) : (
            <div key={c.id} className="opacity-60 pointer-events-none">
              {cardInner}
            </div>
          );
        })}
      </div>
    </TeacherShell>
  );
}
