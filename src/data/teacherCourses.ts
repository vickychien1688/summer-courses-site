// ============================================================
// 老師專區 — 每堂課的 W1~W8 結構、教學腳本、投影片連結
//
// 投影片檔案因為太大（pptx/pdf/webp 合計 2GB+）不放在 repo 裡，
// 請把檔案上傳到 Google Drive，把每個檔的「分享連結」填進下面的 slideUrl。
//
// 沒有教材的課程設 hasMaterials: false，老師端會顯示「整理中」畫面。
// ============================================================

export type SlideFormat = "pptx" | "pdf" | "images" | "manus" | "html" | "none";

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
  /** 本週共用投影片（多日共用一份時填這裡，Day.slideUrl 留空） */
  slideUrl?: string;
  slideFormat?: SlideFormat;
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
  /** 課程綜合投影片（整門課用一份時填這裡，Week.slideUrl 與 Day.slideUrl 都留空） */
  coverSlideUrl?: string;
  coverSlideFormat?: SlideFormat;
  coverSlideNote?: string;
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
        { day: 1, title: "Day 1", slideUrl: "", slideFormat: "none" },
        { day: 2, title: "Day 2", slideUrl: "", slideFormat: "none" },
        { day: 3, title: "Day 3", slideUrl: "", slideFormat: "none" },
        { day: 4, title: "Day 4", slideUrl: "", slideFormat: "none" },
      ],
      scriptKey: "/src/content/country/w1/script.md",
      slideUrl: "/slides/country/W1.pdf",
      slideFormat: "pdf",
    },
    {
      week: 2,
      title: "日本｜傳統建築與和風美學",
      days: [
        { day: 1, title: "Day 1", slideUrl: "", slideFormat: "none" },
        { day: 2, title: "Day 2", slideUrl: "", slideFormat: "none" },
        { day: 3, title: "Day 3", slideUrl: "", slideFormat: "none" },
        { day: 4, title: "Day 4", slideUrl: "", slideFormat: "none" },
      ],
      scriptKey: "/src/content/country/w2/script.md",
      slideUrl: "/slides/country/W2.pdf",
      slideFormat: "pdf",
    },
    {
      week: 3,
      title: "英國｜機關齒輪與工業革命",
      days: [
        { day: 1, title: "Day 1", slideUrl: "", slideFormat: "none" },
        { day: 2, title: "Day 2", slideUrl: "", slideFormat: "none" },
        { day: 3, title: "Day 3", slideUrl: "", slideFormat: "none" },
        { day: 4, title: "Day 4", slideUrl: "", slideFormat: "none" },
      ],
      scriptKey: "/src/content/country/w3/script.md",
      slideUrl: "/slides/country/W3.pdf",
      slideFormat: "pdf",
    },
    {
      week: 4,
      title: "希臘｜城堡防禦與投石機工程",
      days: [
        { day: 1, title: "Day 1", slideUrl: "", slideFormat: "none" },
        { day: 2, title: "Day 2", slideUrl: "", slideFormat: "none" },
        { day: 3, title: "Day 3", slideUrl: "", slideFormat: "none" },
        { day: 4, title: "Day 4", slideUrl: "", slideFormat: "none" },
      ],
      scriptKey: "/src/content/country/w4/script.md",
      slideUrl: "/slides/country/W4.pdf",
      slideFormat: "pdf",
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

// ---------- 4. 定格動畫導演（W1-W8，pptx 投影片放 Google Drive） ----------
// Drive 檔案 ID 對照（用 /slides/sm-drive-{id} 格式之後解析）
const SM_DRIVE = (id: string) => `https://drive.google.com/file/d/${id}/view`;

const stopmotion: TeacherCourse = {
  id: "stopmotion",
  name: "定格動畫導演",
  icon: "🎬",
  color: "#1A1A2E",
  bgColor: "#FFF3E0",
  hasMaterials: true,
  weeks: [
    {
      week: 1,
      title: "認識定格動畫與基礎拍攝",
      days: [
        { day: 1, title: "什麼是定格動畫", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w1_day1", slideFormat: "html" },
        { day: 2, title: "基礎拍攝技巧", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w1_day2", slideFormat: "html" },
        { day: 3, title: "簡單動畫實作", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w1_day3", slideFormat: "html" },
        { day: 4, title: "週末小作品", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w1_day4", slideFormat: "html" },
      ],
    },
    {
      week: 2,
      title: "黏土動畫初探",
      days: [
        { day: 1, title: "黏土塑形基礎", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w2_day1", slideFormat: "html" },
        { day: 2, title: "角色設計", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w2_day2", slideFormat: "html" },
        { day: 3, title: "骨架與支撐", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w2_day3", slideFormat: "html" },
        { day: 4, title: "短篇黏土動畫", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w2_day4", slideFormat: "html" },
      ],
    },
    {
      week: 3,
      title: "場景與道具製作",
      days: [
        { day: 1, title: "場景概念", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w3_day1", slideFormat: "html" },
        { day: 2, title: "道具製作", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w3_day2", slideFormat: "html" },
        { day: 3, title: "燈光基礎", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w3_day3", slideFormat: "html" },
        { day: 4, title: "場景整合", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w3_day4", slideFormat: "html" },
      ],
    },
    {
      week: 4,
      title: "故事與分鏡",
      days: [
        { day: 1, title: "故事腳本", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w4_day1", slideFormat: "html" },
        { day: 2, title: "分鏡圖製作", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w4_day2", slideFormat: "html" },
        { day: 3, title: "腳本實拍", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w4_day3", slideFormat: "html" },
        { day: 4, title: "週末成果", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w4_day4", slideFormat: "html" },
      ],
    },
    {
      week: 5,
      title: "運鏡技巧",
      days: [
        { day: 1, title: "運鏡基礎", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w5_day1", slideFormat: "html" },
        { day: 2, title: "鏡頭角度", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w5_day2", slideFormat: "html" },
        { day: 3, title: "推拉搖移", slideUrl: "/slides/stopmotion-html/viewer.html?dir=slides_stopmotion_w5_day3", slideFormat: "html" },
        { day: 4, title: "運鏡綜合挑戰", slideUrl: SM_DRIVE("1X84sf4jUfSjPNOoqrLC2gudSSLueUNrG"), slideFormat: "manus" },
      ],
    },
    {
      week: 6,
      title: "魔術定格效果",
      days: [
        { day: 1, title: "消失的魔術", slideUrl: SM_DRIVE("1z4_21-0-F_E4YXmB_4Yl9SM9Oks8FFP1"), slideFormat: "manus" },
        { day: 2, title: "穿牆術", slideUrl: SM_DRIVE("1nSkfiraR-9JjAb2Y8HB6ga8DrpuxkYKg"), slideFormat: "manus" },
        { day: 3, title: "漂浮術", slideUrl: SM_DRIVE("1mogkeplC03C51svfrCMzTUru8JaqTUOy"), slideFormat: "manus" },
        { day: 4, title: "魔術綜合挑戰", slideUrl: SM_DRIVE("1Yu9Jxbz_iKA5xVnSfzlWdLq8IYBcGTW7"), slideFormat: "manus" },
      ],
    },
    {
      week: 7,
      title: "進階黏土技法",
      days: [
        { day: 1, title: "進階黏土捏塑", slideUrl: SM_DRIVE("1qpUItFdGy9i-4GtaIwzzKZ6igwmIY_EY"), slideFormat: "manus" },
        { day: 2, title: "臉部表情變化", slideUrl: SM_DRIVE("1Z7O9SPOLitMvl7sTc09zALc1xRIICs30"), slideFormat: "manus" },
        { day: 3, title: "走路與跑步", slideUrl: SM_DRIVE("1fzALC4Jx0eNG0BpABCGP_PApXHrbo7fZ"), slideFormat: "manus" },
        { day: 4, title: "進階黏土綜合挑戰", slideUrl: SM_DRIVE("1_X9uWlY86_cnO27jsqA6jYznbhcXUoNW"), slideFormat: "manus" },
      ],
    },
    {
      week: 8,
      title: "畢業微電影",
      days: [
        { day: 1, title: "畢業微電影企劃", slideUrl: SM_DRIVE("1YKGCPAsGwujYDJkMrAisonQRgiNrmjU3"), slideFormat: "manus" },
        { day: 2, title: "道具與場景製作", slideUrl: SM_DRIVE("1MOPiPjc67bPaiBeHvLU8_3qJh6HExXLS"), slideFormat: "manus" },
        { day: 3, title: "微電影開拍", slideUrl: SM_DRIVE("10mN80tgCwFD-FGg5bExa8vQpdpf89NR1"), slideFormat: "manus" },
        { day: 4, title: "剪輯與首映會", slideUrl: SM_DRIVE("12e3WjiCNnePCIu2xdYN_ECNH-S-umxoY"), slideFormat: "manus" },
      ],
    },
  ],
};

// 為每個 day 注入 scriptKey（指向 src/content/stopmotion/w{n}/day{m}.md）
stopmotion.weeks.forEach((w) => {
  w.days.forEach((d) => {
    d.scriptKey = `/src/content/stopmotion/w${w.week}/day${d.day}.md`;
  });
});

// ---------- 5. 韓系美學手作坊（W1-W8 主題、共用一份總投影片） ----------
const ART_MAIN_PDF = "/slides/art/main.pdf";

const artDay = (n: number, title: string) => ({
  day: n,
  title,
  slideUrl: "",
  slideFormat: "none" as const,
});

const art: TeacherCourse = {
  id: "art",
  name: "韓系美學手作坊",
  icon: "🎨",
  color: "#880E4F",
  bgColor: "#FCE4EC",
  hasMaterials: true,
  coverSlideUrl: ART_MAIN_PDF,
  coverSlideFormat: "pdf",
  coverSlideNote: "本課程使用一份綜合教材 PDF，涵蓋 W1-W8 全部主題。",
  overviewKeys: [
    "/src/content/art/overview/總覽與備課指南.md",
    "/src/content/art/overview/完整課程手冊.md",
    "/src/content/art/overview/W1-W4_詳細教案.md",
    "/src/content/art/overview/W5-W8_詳細教案.md",
    "/src/content/art/overview/材料採購清單.md",
    "/src/content/art/overview/學習單框架.md",
  ],
  weeks: [
    {
      week: 1,
      title: "奶油膠夢幻梳妝組",
      days: [
        artDay(1, "美學啟發與基礎練習"),
        artDay(2, "設計規劃與隨身鏡製作"),
        artDay(3, "氣墊梳製作與細節點綴"),
        artDay(4, "包裝展示與明信片證書"),
      ],
    },
    {
      week: 2,
      title: "海洋夢幻水晶球",
      days: [
        artDay(1, "美學啟發與基礎練習"),
        artDay(2, "設計規劃與場景佈置"),
        artDay(3, "灌水密封與細節點綴"),
        artDay(4, "包裝展示與明信片證書"),
      ],
    },
    {
      week: 3,
      title: "扭扭棒立體花束",
      days: [
        artDay(1, "美學啟發與基礎練習"),
        artDay(2, "設計規劃與主體製作"),
        artDay(3, "深度裝飾與細節"),
        artDay(4, "包裝展示與明信片證書"),
      ],
    },
    {
      week: 4,
      title: "石膏浮雕畫掛件",
      days: [
        artDay(1, "美學啟發與基礎練習"),
        artDay(2, "設計規劃與主體製作"),
        artDay(3, "深度裝飾與細節"),
        artDay(4, "包裝展示與明信片證書"),
      ],
    },
    {
      week: 5,
      title: "滴膠寶石與金屬書籤",
      days: [
        artDay(1, "Day 1"),
        artDay(2, "Day 2"),
        artDay(3, "Day 3"),
        artDay(4, "Day 4"),
      ],
    },
    {
      week: 6,
      title: "真皮皮革行李牌",
      days: [
        artDay(1, "Day 1"),
        artDay(2, "Day 2"),
        artDay(3, "Day 3"),
        artDay(4, "Day 4"),
      ],
    },
    {
      week: 7,
      title: "羊毛氈戳戳樂",
      days: [
        artDay(1, "Day 1"),
        artDay(2, "Day 2"),
        artDay(3, "Day 3"),
        artDay(4, "Day 4"),
      ],
    },
    {
      week: 8,
      title: "蘑菇皮革斜背包",
      days: [
        artDay(1, "Day 1"),
        artDay(2, "Day 2"),
        artDay(3, "Day 3"),
        artDay(4, "Day 4"),
      ],
    },
  ],
};

// ---------- 6. AI 魔法工坊（單一 PDF 介紹，放 Google Drive） ----------
const AI_DRIVE = "https://drive.google.com/file/d/1Tnu4JDkcEMLHe4bxl7FD6RxLwzwHHG4s/view";

const aiDay = (n: number, title: string) => ({
  day: n,
  title,
  slideUrl: "",
  slideFormat: "none" as const,
});

const ai: TeacherCourse = {
  id: "ai",
  name: "AI 魔法工坊",
  icon: "🤖",
  color: "#4A148C",
  bgColor: "#EDE7F6",
  hasMaterials: true,
  coverSlideUrl: AI_DRIVE,
  coverSlideFormat: "manus",
  coverSlideNote: "本課程使用一份綜合 PDF（涵蓋 8 週主題），各週尚未拆分獨立投影片。",
  weeks: [
    { week: 1, title: "AI 繪圖入門", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
    { week: 2, title: "AI 漫畫創作", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
    { week: 3, title: "AI 圖像進階", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
    { week: 4, title: "AI 故事生成", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
    { week: 5, title: "AI Podcast 製作", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
    { week: 6, title: "AI 影片", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
    { week: 7, title: "AI 創作整合", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
    { week: 8, title: "成果發表", days: [aiDay(1, "Day 1"), aiDay(2, "Day 2"), aiDay(3, "Day 3"), aiDay(4, "Day 4")] },
  ],
};

// ---------- 7-10. 低年級 4 堂課（連結至 Manus 教學平台） ----------
// 完整 8 週教材在 https://summercw1-janfbwvh.manus.space
// 老師按進每堂課可在 Manus 頁首切換 W1-W8 不同週次主題
const LOW_NOTE = "本課程教材完整放在 Manus 教學平台。點下方按鈕進入後，可在 Manus 頁首切換 W1-W8 不同週次主題。";
const lowDay = (title: string) => ({
  day: 1,
  title,
  slideUrl: "",
  slideFormat: "none" as const,
});

const animalLow: TeacherCourse = {
  id: "animal",
  name: "動物星球探險隊",
  icon: "🐾",
  color: "#4CAF50",
  bgColor: "#E8F5E9",
  hasMaterials: true,
  coverSlideUrl: "https://summercw1-janfbwvh.manus.space/course/w1-animal",
  coverSlideFormat: "manus",
  coverSlideNote: LOW_NOTE,
  weeks: [
    { week: 1, title: "昆蟲微觀世界", days: [lowDay("星期一")] },
    { week: 2, title: "海洋世界", days: [lowDay("星期一")] },
    { week: 3, title: "恐龍時代", days: [lowDay("星期一")] },
    { week: 4, title: "夜行動物大探索", days: [lowDay("星期一")] },
    { week: 5, title: "鳥類觀察家", days: [lowDay("星期一")] },
    { week: 6, title: "兩棲動物探險", days: [lowDay("星期一")] },
    { week: 7, title: "爬行動物大發現", days: [lowDay("星期一")] },
    { week: 8, title: "哺乳動物好朋友", days: [lowDay("星期一")] },
  ],
};

const chefLow: TeacherCourse = {
  id: "chef",
  name: "小小廚神體驗",
  icon: "🍳",
  color: "#E65100",
  bgColor: "#FFF3E0",
  hasMaterials: true,
  coverSlideUrl: "https://summercw1-janfbwvh.manus.space/course/w1-cooking",
  coverSlideFormat: "manus",
  coverSlideNote: LOW_NOTE,
  weeks: [
    { week: 1, title: "彩色造型湯圓", days: [lowDay("星期三")] },
    { week: 2, title: "水果漸層氣泡飲", days: [lowDay("星期三")] },
    { week: 3, title: "迷你杯子蛋糕", days: [lowDay("星期三")] },
    { week: 4, title: "創意飯糰", days: [lowDay("星期三")] },
    { week: 5, title: "手工壓模餅乾", days: [lowDay("星期三")] },
    { week: 6, title: "彩色水果串", days: [lowDay("星期三")] },
    { week: 7, title: "創意迷你三明治", days: [lowDay("星期三")] },
    { week: 8, title: "迷你手作 Pizza", days: [lowDay("星期三")] },
  ],
};

const scienceLow: TeacherCourse = {
  id: "science",
  name: "魔法科學實驗室",
  icon: "🧪",
  color: "#7B1FA2",
  bgColor: "#F3E5F5",
  hasMaterials: true,
  coverSlideUrl: "https://summercw1-janfbwvh.manus.space/course/w1-science",
  coverSlideFormat: "manus",
  coverSlideNote: LOW_NOTE,
  weeks: [
    { week: 1, title: "火山爆發與酸鹼魔術", days: [lowDay("星期四")] },
    { week: 2, title: "史萊姆製作", days: [lowDay("星期四")] },
    { week: 3, title: "磁力與靜電", days: [lowDay("星期四")] },
    { week: 4, title: "水的魔法", days: [lowDay("星期四")] },
    { week: 5, title: "光與影的秘密", days: [lowDay("星期四")] },
    { week: 6, title: "空氣的力量", days: [lowDay("星期四")] },
    { week: 7, title: "聲音大探索", days: [lowDay("星期四")] },
    { week: 8, title: "重力與平衡", days: [lowDay("星期四")] },
  ],
};

const storyLow: TeacherCourse = {
  id: "story",
  name: "繪本魔法與手作",
  icon: "📖",
  color: "#1565C0",
  bgColor: "#E3F2FD",
  hasMaterials: true,
  coverSlideUrl: "https://summercw1-janfbwvh.manus.space/course/w1-storybook",
  coverSlideFormat: "manus",
  coverSlideNote: LOW_NOTE,
  weeks: [
    { week: 1, title: "勇氣大冒險", days: [lowDay("星期五")] },
    { week: 2, title: "友誼的魔法", days: [lowDay("星期五")] },
    { week: 3, title: "情緒小怪獸", days: [lowDay("星期五")] },
    { week: 4, title: "奇妙的大自然", days: [lowDay("星期五")] },
    { week: 5, title: "家人的愛", days: [lowDay("星期五")] },
    { week: 6, title: "小小創造家", days: [lowDay("星期五")] },
    { week: 7, title: "友善小天使", days: [lowDay("星期五")] },
    { week: 8, title: "成長的軌跡", days: [lowDay("星期五")] },
  ],
};

export const teacherCourses: TeacherCourse[] = [
  csi,
  country,
  baking,
  stopmotion,
  art,
  ai,
  animalLow,
  chefLow,
  scienceLow,
  storyLow,
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
