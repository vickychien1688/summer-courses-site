# 家功場放學趣 — 2026 暑期課程網站

這是「家功場放學趣」的暑期課程網站，包含家長看的課程介紹，以及老師可登入下載教材的老師專區。

## 技術堆疊

- **React 18** + **TypeScript** + **Vite**（前端 SPA，純靜態）
- **Tailwind CSS**（樣式）
- **Wouter**（輕量路由）
- **react-markdown** + **remark-gfm**（Markdown 渲染）
- 無後端、無資料庫，所有內容都在 git 裡版本控制

## 開發

```bash
# 安裝依賴（需要 Node 18+）
npm install

# 開發模式
npm run dev
# → 打開 http://localhost:5173

# 型別檢查
npm run check

# 正式打包
npm run build
# → 產出 dist/，可以直接部署

# 預覽打包結果
npm run preview
```

## 專案結構

```
src/
├── content/              ← 教學腳本 .md 檔（用 git 版控）
│   ├── csi/
│   │   ├── overview/     ← 課程總覽文件
│   │   └── w1/ w2/ .../w8/
│   │       └── script.md
│   ├── country/
│   └── baking/
│       └── w1/ ... /w8/
│           ├── day1.md
│           ├── day2.md
│           └── ...
├── data/
│   ├── courses.ts        ← 10 堂課的基本資料（首頁用）
│   └── teacherCourses.ts ← 老師專區的 W1-W8 結構 + 投影片連結
├── pages/
│   ├── Home.tsx          ← 家長看的首頁
│   ├── TeacherLogin.tsx  ← 老師專區登入頁
│   ├── TeacherDashboard.tsx
│   ├── TeacherCourse.tsx ← 單一課程的 W1-W8 列表
│   ├── TeacherWeek.tsx   ← 一週的 Day1-Day4
│   └── TeacherDay.tsx    ← 某日的教學腳本 + 投影片連結
├── components/
│   ├── TeacherShell.tsx  ← 老師專區的外框（含登出）
│   ├── Markdown.tsx      ← MD 渲染元件
│   └── ui/button.tsx
├── hooks/
│   └── useAuth.ts        ← 老師密碼驗證（sessionStorage）
├── App.tsx
├── main.tsx
└── index.css
```

## 老師密碼

預設密碼是 `teacher2026`（定義在 `src/hooks/useAuth.ts`）。**記得要改！**

**本地開發：** 複製 `.env.example` 成 `.env`，改 `VITE_TEACHER_PASSWORD`。

**部署到 Vercel：** 在 Vercel 專案的 Settings → Environment Variables 加 `VITE_TEACHER_PASSWORD`。

這只是極簡的前端密碼閘門（防止網址被家長亂逛進來），不是嚴格的安全驗證——密碼會編進前端打包檔、技術強一點的人能找到。如果要做真正的老師帳號系統，要改成有後端的方案。

## 投影片怎麼處理

投影片檔（pptx / pdf / webp）**不放在 repo** 裡，因為 CSI 就 1.6GB，放進去 GitHub 會爆。

做法：

1. 把每堂課的投影片資料夾上傳到 **Google Drive**（或 Dropbox 等）
2. 每個檔案取「分享連結」（設為「知道連結的人可以檢視」）
3. 把連結填進 `src/data/teacherCourses.ts` 裡對應的 `slideUrl`

Google Drive 分享連結長這樣：
```
https://drive.google.com/file/d/FILEID/view?usp=sharing
```
貼進 `slideUrl` 就好，網站會做成「開啟投影片」按鈕讓老師點開。

## 推到 GitHub

第一次推上去（假設你的 repo 是 `vickychien127/summer-courses`）：

```bash
cd summer-courses-site
git init
git add .
git commit -m "initial: migrate from Manus"
git branch -M main
git remote add origin https://github.com/vickychien127/summer-courses.git
git push -u origin main
```

如果 repo 裡已經有舊內容要先清掉，打開 GitHub 介面手動刪除，或用 `git push --force`（有覆蓋風險）。

## 部署到 Vercel

1. 到 https://vercel.com → Login with GitHub
2. `New Project` → 匯入 `vickychien127/summer-courses`
3. Framework Preset 選 **Vite**
4. 下面 Environment Variables 加：
   - `VITE_TEACHER_PASSWORD` = 你的老師密碼
5. 按 Deploy，等 1~2 分鐘
6. 拿到一個 `https://xxx.vercel.app` 網址，網站就活了

之後每次你 `git push`，Vercel 會自動重新部署。

## 新增課程教材

目前已有完整教材的：
- ✅ CSI 科學小偵探（W1-W8 腳本）
- ✅ 國家主題探險（W1-W4 腳本）
- ✅ 小小甜點烘焙師（W1-W8 每日腳本）

待補：定格動畫導演、韓系美學手作坊、AI 魔法工坊

加新教材的步驟：
1. 把 .md 教學腳本放進 `src/content/{課程id}/w{n}/script.md` 或 `day{n}.md`
2. 在 `src/data/teacherCourses.ts` 把該課程的 `hasMaterials` 改成 `true`，填入 `weeks` 資料
3. `git commit && git push`，Vercel 自動部署

## License

自用專案，無授權限制。
