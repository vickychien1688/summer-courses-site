// ============================================================
// 老師專區 — 每堂課的 W1~W8 結構、教學腳本、投影片連結
//
// 投影片檔案因為太大（pptx/pdf/webp 合計 2GB+）不放在 repo 裡，
// 請把檔案上傳到 Google Drive，把每個檔的「分享連結」填進下面的 slideUrl。
//
// 沒有教材的課程設 hasMaterials: false，老師端會顯示「整理中」畫面。
// ============================================================

export type SlideFormat = "pptx" | "pdf" | "images" | "manus" | "none";

export interface Day {
  day: number;
  title: string;
  /**
   * 投影片連結：
   * - pptx/pdf → 放 Google Drive 檔案的檢視連結（家長可直接線上看）
   * - images → 之後若把 webp 放進 public 資料夾，可填相對路徑列陣（JSX 端另外處理）
   * - manus → 留著 manus.im 的原連結（過渡期）
   * - 空字串 → 顯示「投影片尚未提供」
   */
  slideUrl: string;
  slideFormat: SlideFormat;
  /** 日層級腳本（甜點烘焙用）；CSI/國家主題的腳本是週層級，填在 Week.scriptKey */
  scriptKey?: string;
}

export interface Week {
  week: number;
  title: string;
  subtitle?: string;
  days: Day[];
  /** import.meta.glob 取出 md 後存這裡 */
  scriptKey?: string;
}

export interface TeacherCourse {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  hasMaterials: boolean;
  weeks: Week[];
  /** 課程總覽文件（md 檔的 key 列表） */
  overviewKeys?: string[];
}

// ---------- 1. CSI 科學小偵探（完整 8 週，pptx 投影片） ----------
const csi: TeacherCourse = {
  id: "csi",
  name: "CSI 科學小偵探",
  icon: "🔍",
  color: "#2D5016",
  bgColor: "#E8F5E9",
  hasMaterials: true,
  overviewKeys: [
    "/src/content/csi/overview/CSI_Camp_Overview.md",
    "/src/content/csi/overview/CSI_Camp_Daily_Schedule.md",
    "/src/content/csi/overview/CSI_Camp_W1_W4.md",
    "/src/content/csi/overview/CSI_Camp_W5_W8.md",
    "/src/content/csi/overview/CSI_Camp_Worksheets.md",
  ],
  weeks: [
    {
      week: 1,
      title: "指紋採集與現場重建",
      days: [
        { day: 1, title: "指紋初探", slideUrl: "/slides/csi/W1/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "指紋顯影與採集", slideUrl: "/slides/csi/W1/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "現場勘查與比對", slideUrl: "/slides/csi/W1/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白與結業", slideUrl: "/slides/csi/W1/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w1/script.md",
    },
    {
      week: 2,
      title: "筆跡鑑定與隱形墨水",
      days: [
        { day: 1, title: "筆跡初探", slideUrl: "/slides/csi/W2/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "墨水分析", slideUrl: "/slides/csi/W2/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "隱形墨水", slideUrl: "/slides/csi/W2/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白", slideUrl: "/slides/csi/W2/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w2/script.md",
    },
    {
      week: 3,
      title: "密碼學與摩斯密碼",
      days: [
        { day: 1, title: "密碼初探", slideUrl: "/slides/csi/W3/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "凱薩密碼", slideUrl: "/slides/csi/W3/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "摩斯密碼", slideUrl: "/slides/csi/W3/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白", slideUrl: "/slides/csi/W3/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w3/script.md",
    },
    {
      week: 4,
      title: "血液與酸鹼反應",
      days: [
        { day: 1, title: "化學初探", slideUrl: "/slides/csi/W4/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "血跡噴濺", slideUrl: "/slides/csi/W4/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "酸鹼魔法", slideUrl: "/slides/csi/W4/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白", slideUrl: "/slides/csi/W4/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w4/script.md",
    },
    {
      week: 5,
      title: "毛髮與纖維",
      days: [
        { day: 1, title: "微觀觀察", slideUrl: "/slides/csi/W5/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "纖維解密", slideUrl: "/slides/csi/W5/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "毛髮比對", slideUrl: "/slides/csi/W5/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白", slideUrl: "/slides/csi/W5/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w5/script.md",
    },
    {
      week: 6,
      title: "聲紋與聲音科學",
      days: [
        { day: 1, title: "聲紋初探", slideUrl: "/slides/csi/W6/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "變聲器", slideUrl: "/slides/csi/W6/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "傳聲筒", slideUrl: "/slides/csi/W6/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白", slideUrl: "/slides/csi/W6/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w6/script.md",
    },
    {
      week: 7,
      title: "足跡與泥土翻模",
      days: [
        { day: 1, title: "足跡初探", slideUrl: "/slides/csi/W7/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "泥土分析", slideUrl: "/slides/csi/W7/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "石膏翻模", slideUrl: "/slides/csi/W7/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白", slideUrl: "/slides/csi/W7/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w7/script.md",
    },
    {
      week: 8,
      title: "數位足跡與防駭客",
      days: [
        { day: 1, title: "數位足跡", slideUrl: "/slides/csi/W8/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "密碼安全", slideUrl: "/slides/csi/W8/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "防駭客海報", slideUrl: "/slides/csi/W8/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "真相大白", slideUrl: "/slides/csi/W8/Day4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/csi/w8/script.md",
    },
  ],
};

// ---------- 2. 國家主題探險（目前 W1~W4，投影片為 webp 圖片序列） ----------
const country: TeacherCourse = {
  id: "country",
  name: "國家主題探險",
  icon: "🌍",
  color: "#1B5E20",
  bgColor: "#E3F2FD",
  hasMaterials: true,
  overviewKeys: [
    "/src/content/country/overview/課程總覽README.md",
    "/src/content/country/overview/國家主題探索_完整教案（8週）.md",
    "/src/content/country/overview/材料採購總表.md",
    "/src/content/country/overview/每日時間流程表.md",
  ],
  weeks: [
    {
      week: 1,
      title: "埃及｜法老密碼與金字塔力學",
      days: [
        { day: 1, title: "Day 1", slideUrl: "/slides/country/W1.pdf", slideFormat: "pdf" },
        { day: 2, title: "Day 2", slideUrl: "/slides/country/W1.pdf", slideFormat: "pdf" },
        { day: 3, title: "Day 3", slideUrl: "/slides/country/W1.pdf", slideFormat: "pdf" },
        { day: 4, title: "Day 4", slideUrl: "/slides/country/W1.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/country/w1/script.md",
    },
    {
      week: 2,
      title: "日本｜傳統建築與和風美學",
      days: [
        { day: 1, title: "Day 1", slideUrl: "/slides/country/W2.pdf", slideFormat: "pdf" },
        { day: 2, title: "Day 2", slideUrl: "/slides/country/W2.pdf", slideFormat: "pdf" },
        { day: 3, title: "Day 3", slideUrl: "/slides/country/W2.pdf", slideFormat: "pdf" },
        { day: 4, title: "Day 4", slideUrl: "/slides/country/W2.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/country/w2/script.md",
    },
    {
      week: 3,
      title: "英國｜機關齒輪與工業革命",
      days: [
        { day: 1, title: "Day 1", slideUrl: "/slides/country/W3.pdf", slideFormat: "pdf" },
        { day: 2, title: "Day 2", slideUrl: "/slides/country/W3.pdf", slideFormat: "pdf" },
        { day: 3, title: "Day 3", slideUrl: "/slides/country/W3.pdf", slideFormat: "pdf" },
        { day: 4, title: "Day 4", slideUrl: "/slides/country/W3.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/country/w3/script.md",
    },
    {
      week: 4,
      title: "希臘｜城堡防禦與投石機工程",
      days: [
        { day: 1, title: "Day 1", slideUrl: "/slides/country/W4.pdf", slideFormat: "pdf" },
        { day: 2, title: "Day 2", slideUrl: "/slides/country/W4.pdf", slideFormat: "pdf" },
        { day: 3, title: "Day 3", slideUrl: "/slides/country/W4.pdf", slideFormat: "pdf" },
        { day: 4, title: "Day 4", slideUrl: "/slides/country/W4.pdf", slideFormat: "pdf" },
      ],
      scriptKey: "/src/content/country/w4/script.md",
    },
    { week: 5, title: "（待整理）", days: [], scriptKey: undefined },
    { week: 6, title: "（待整理）", days: [], scriptKey: undefined },
    { week: 7, title: "（待整理）", days: [], scriptKey: undefined },
    { week: 8, title: "（待整理）", days: [], scriptKey: undefined },
  ],
};

// ---------- 3. 小小甜點烘焙師（完整 8 週，每日獨立腳本 + pdf 投影片） ----------
const baking: TeacherCourse = {
  id: "baking",
  name: "小小甜點烘焙師",
  icon: "🧁",
  color: "#4E342E",
  bgColor: "#FFF8E1",
  hasMaterials: true,
  weeks: [
    {
      week: 1,
      title: "入門甜點週",
      days: [
        { day: 1, title: "糖霜餅乾彩繪", slideUrl: "/slides/baking/W1/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "手工牛軋糖", slideUrl: "/slides/baking/W1/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "水果優格杯", slideUrl: "/slides/baking/W1/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "棉花糖脆米花", slideUrl: "/slides/baking/W1/Day4.pdf", slideFormat: "pdf" },
      ],
    },
    {
      week: 2,
      title: "冰涼甜品週",
      days: [
        { day: 1, title: "手工焦糖布丁", slideUrl: "/slides/baking/W2/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "免烤起司蛋糕杯", slideUrl: "/slides/baking/W2/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "芒果奶酪", slideUrl: "/slides/baking/W2/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "日式抹茶糰子", slideUrl: "/slides/baking/W2/Day4.pdf", slideFormat: "pdf" },
      ],
    },
    {
      week: 3,
      title: "餅乾與小點週",
      days: [
        { day: 1, title: "臺式馬卡龍", slideUrl: "/slides/baking/W3/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "雪球餅乾", slideUrl: "/slides/baking/W3/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "造型壓模餅乾", slideUrl: "/slides/baking/W3/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "花生醬能量球", slideUrl: "/slides/baking/W3/Day4.pdf", slideFormat: "pdf" },
      ],
    },
    {
      week: 4,
      title: "蛋糕基礎週",
      days: [
        { day: 1, title: "杯子蛋糕", slideUrl: "/slides/baking/W4/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "香蕉蛋糕", slideUrl: "/slides/baking/W4/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "鬆餅塔", slideUrl: "/slides/baking/W4/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "蜂蜜蛋糕", slideUrl: "/slides/baking/W4/Day4.pdf", slideFormat: "pdf" },
      ],
    },
    {
      week: 5,
      title: "派與塔週",
      days: [
        { day: 1, title: "蛋塔", slideUrl: "/slides/baking/W5/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "簡易蘋果派", slideUrl: "/slides/baking/W5/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "水果塔", slideUrl: "/slides/baking/W5/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "迷你鹹派", slideUrl: "/slides/baking/W5/Day4.pdf", slideFormat: "pdf" },
      ],
    },
    {
      week: 6,
      title: "異國風味週",
      days: [
        { day: 1, title: "日式銅鑼燒", slideUrl: "/slides/baking/W6/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "義式提拉米蘇", slideUrl: "/slides/baking/W6/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "泰式芒果糯米", slideUrl: "/slides/baking/W6/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "美式布朗尼", slideUrl: "/slides/baking/W6/Day4.pdf", slideFormat: "pdf" },
      ],
    },
    {
      week: 7,
      title: "創意裝飾週",
      days: [
        { day: 1, title: "蛋糕捲", slideUrl: "/slides/baking/W7/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "造型飯糰", slideUrl: "/slides/baking/W7/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "水果軟糖", slideUrl: "/slides/baking/W7/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "裝飾美術蛋糕", slideUrl: "/slides/baking/W7/Day4.pdf", slideFormat: "pdf" },
      ],
    },
    {
      week: 8,
      title: "結業成果週",
      days: [
        { day: 1, title: "繽紛蛋糕杯", slideUrl: "/slides/baking/W8/Day1.pdf", slideFormat: "pdf" },
        { day: 2, title: "台式太陽餅", slideUrl: "/slides/baking/W8/Day2.pdf", slideFormat: "pdf" },
        { day: 3, title: "精美禮盒餅乾", slideUrl: "/slides/baking/W8/Day3.pdf", slideFormat: "pdf" },
        { day: 4, title: "結業成果展", slideUrl: "/slides/baking/W8/Day4.pdf", slideFormat: "pdf" },
      ],
    },
  ],
};

// 甜點烘焙是日級教材，注入 scriptKey 給每一天
baking.weeks.forEach((w) => {
  w.days.forEach((d) => {
    d.scriptKey = `/src/content/baking/w${w.week}/day${d.day}.md`;
  });
});

// ---------- 4~6. 其他尚未提供完整教材的課程（先放占位） ----------
const stopmotion: TeacherCourse = {
  id: "stopmotion",
  name: "定格動畫導演",
  icon: "🎬",
  color: "#1A1A2E",
  bgColor: "#FFF3E0",
  hasMaterials: false,
  weeks: [],
};

const art: TeacherCourse = {
  id: "art",
  name: "韓系美學手作坊",
  icon: "🎨",
  color: "#880E4F",
  bgColor: "#FCE4EC",
  hasMaterials: false,
  weeks: [],
};

const ai: TeacherCourse = {
  id: "ai",
  name: "AI 魔法工坊",
  icon: "🤖",
  color: "#4A148C",
  bgColor: "#EDE7F6",
  hasMaterials: false,
  weeks: [],
};

export const teacherCourses: TeacherCourse[] = [
  csi,
  country,
  baking,
  stopmotion,
  art,
  ai,
];

export function getTeacherCourse(id: string): TeacherCourse | undefined {
  return teacherCourses.find((c) => c.id === id);
}

// ---------- 載入 md 內容（Vite import.meta.glob，字串化匯入） ----------
// key 是相對於 vite root 的路徑（/src/content/...）
const mdModules = import.meta.glob<string>("/src/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getMarkdown(key: string | undefined): string {
  if (!key) return "";
  return (mdModules as Record<string, string>)[key] ?? "";
}

