/**
 * 極簡密碼保護 — 老師輸入密碼後記在 sessionStorage，關閉瀏覽器就失效。
 * 這不是真正的「安全驗證」，只是防止網址被家長亂逛進老師專區。
 * 密碼直接寫在 .env，部署到 Vercel 時設成環境變數 VITE_TEACHER_PASSWORD。
 */

const STORAGE_KEY = "hgc_teacher_auth";
const DEFAULT_PASSWORD = "teacher2026"; // 部署時記得改，或改用環境變數

export function getTeacherPassword(): string {
  const envPw = import.meta.env.VITE_TEACHER_PASSWORD;
  return typeof envPw === "string" && envPw.length > 0
    ? envPw
    : DEFAULT_PASSWORD;
}

export function isTeacherAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}

export function tryTeacherLogin(password: string): boolean {
  if (password === getTeacherPassword()) {
    sessionStorage.setItem(STORAGE_KEY, "1");
    return true;
  }
  return false;
}

export function teacherLogout() {
  sessionStorage.removeItem(STORAGE_KEY);
}
