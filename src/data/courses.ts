// ============================================================
// 2026 暑期課程 — 家功場放學趣
// 中高年級 6 堂、低年級 4 堂
// ============================================================

export interface HighGradeCourse {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  coverImage: string;
  color: string;
  bgColor: string;
  icon: string;
  /** 家長看的簡介 PDF/簡報連結（點課程卡片會打開） */
  presentationUrl: string;
}

export interface WeeklyTopic {
  week: number;
  topic: string;
  highlight: string;
  funLine: string;
}

export interface LowGradeCourse {
  id: string;
  name: string;
  day: string;
  image: string;
  sceneImage: string;
  color: string;
  bgColor: string;
  tagline: string;
  description: string;
  parentMessage: string;
  skills: string[];
  weeklyTopics: WeeklyTopic[];
  closingMessage: string;
}

export const siteInfo = {
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/logo_transparent_0c9abeeb.png",
  heroBanner:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/hero_banner-eCSASnSZnUXPyKEkKYA6nE.png",
  phone: "02-8660-9266",
  lowGradeSchedule: "每週一、三、四、五",
  lowGradeTime: "上午 09:50 - 11:50",
} as const;

export const highGradeCourses: HighGradeCourse[] = [
  {
    id: "csi",
    name: "CSI 科學小偵探",
    subtitle: "化身小小鑑識官",
    description:
      "透過指紋採集、筆跡鑑定、密碼破解等鑑識科學活動，培養孩子的觀察力、邏輯推理與科學思維。",
    coverImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/csi_cover_2ce9eab0.png",
    color: "#2D5016",
    bgColor: "#E8F5E9",
    icon: "🔍",
    presentationUrl:
      "https://manus.im/share/file/7feb2630-a7e7-447e-b7fd-6d0620b056e5",
  },
  {
    id: "stopmotion",
    name: "定格動畫導演",
    subtitle: "用雙手創造會動的故事",
    description:
      "從黏土捏塑到分鏡設計，從拍攝技巧到後製剪輯，讓孩子完整體驗動畫製作的每一個環節。",
    coverImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/stopmotion_cover_2f7c52aa.webp",
    color: "#1A1A2E",
    bgColor: "#FFF3E0",
    icon: "🎬",
    presentationUrl:
      "https://manus.im/share/file/978c6b7f-0e94-4b2b-900c-8cd61bf223d6",
  },
  {
    id: "country",
    name: "國家主題探險",
    subtitle: "環遊世界不出門",
    description:
      "每週探索一個國家的文化、美食、藝術與地理，拓展國際視野，培養跨文化理解力。",
    coverImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/country_explore_cover_ceee1b3a.png",
    color: "#1B5E20",
    bgColor: "#E3F2FD",
    icon: "🌍",
    presentationUrl:
      "https://manus.im/share/file/52ea4260-5f77-4244-992e-86365d74d6f1",
  },
  {
    id: "baking",
    name: "小小甜點烘焙師",
    subtitle: "甜蜜手作時光",
    description:
      "從餅乾、蛋糕到麵包，學習烘焙基礎技巧，培養耐心與創意，享受親手做甜點的成就感。",
    coverImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/baking_cover_579f11ed.png",
    color: "#4E342E",
    bgColor: "#FFF8E1",
    icon: "🧁",
    presentationUrl:
      "https://manus.im/share/file/5fe452d1-7406-4df3-8ee4-1af9df7820bc",
  },
  {
    id: "art",
    name: "韓系美學手作坊",
    subtitle: "打造質感手作小物",
    description:
      "融合韓系美學元素，製作奶油膠、香氛蠟燭、飾品等精緻手作，培養美感與手作技能。",
    coverImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/art_workshop_cover_5ff495f2.png",
    color: "#880E4F",
    bgColor: "#FCE4EC",
    icon: "🎨",
    presentationUrl:
      "https://manus.im/share/file/8065b591-4078-4cf5-bee1-62586608bc35",
  },
  {
    id: "ai",
    name: "AI 魔法工坊",
    subtitle: "運用科技，實現夢想",
    description:
      "從 AI 繪圖、漫畫創作到 Podcast 製作，讓孩子掌握未來科技工具，用 AI 實現無限創意。",
    coverImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/ai_workshop_cover_correct_34ee7d22.png",
    color: "#4A148C",
    bgColor: "#EDE7F6",
    icon: "🤖",
    presentationUrl:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663454563765/abDWnHRGFTahfqzz.pdf",
  },
];

export const lowGradeCourses: LowGradeCourse[] = [
  {
    id: "animal",
    name: "動物星球探險隊",
    day: "星期一",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_animal-Jf6SUnnUXcP9wSyoNf8GQt.webp",
    sceneImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_animal_scene-gmB2eYR9Q7uANnDDhEZbGT.webp",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    tagline: "讓好奇心帶著孩子，走進大自然的教室",
    description:
      "8 週生態大探索，從昆蟲到哺乳動物，每一堂課都是一次充滿驚奇的冒險旅程。",
    parentMessage:
      "想像孩子趴在地上，用放大鏡仔細觀察一隻瓢蟲的翅膀；想像他們興奮地告訴你，原來恐龍和雞是親戚！在這裡，每一個「為什麼」都會被認真對待，每一次發現都值得被慶祝。",
    skills: ["觀察力與專注力", "生態保育觀念", "科學探究精神"],
    weeklyTopics: [
      { week: 1, topic: "昆蟲微觀世界", highlight: "觀察昆蟲的身體構造與生活習性", funLine: "用放大鏡看見肉眼看不到的精彩世界" },
      { week: 2, topic: "海洋世界", highlight: "探索海洋生物的多樣性", funLine: "潛入深海，認識住在海底的神奇朋友" },
      { week: 3, topic: "恐龍時代", highlight: "穿越時空認識史前巨獸", funLine: "穿越時空，和史前巨獸面對面" },
      { week: 4, topic: "夜行動物大探索", highlight: "了解夜行動物的特殊能力", funLine: "天黑了，誰還沒睡覺？" },
      { week: 5, topic: "鳥類觀察家", highlight: "學習辨識鳥類與觀察技巧", funLine: "抬頭看，天空中有好多故事" },
      { week: 6, topic: "兩棲動物探險", highlight: "認識青蛙等兩棲動物的生態", funLine: "從水裡到陸地，青蛙的奇幻旅程" },
      { week: 7, topic: "爬行動物大發現", highlight: "探索烏龜等爬行動物的世界", funLine: "慢慢來的烏龜，教我們什麼道理？" },
      { week: 8, topic: "哺乳動物好朋友", highlight: "認識貓狗等身邊的哺乳動物", funLine: "身邊的毛茸茸好朋友" },
    ],
    closingMessage: "8 週的探險結束後，孩子會用全新的眼光看待身邊的每一個小生命。",
  },
  {
    id: "chef",
    name: "小小廚神體驗",
    day: "星期三",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_chef-4nkJC4jbsFPPnBxx35aWGt.webp",
    sceneImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_chef_scene-4sk7fnxQCJVX64XNAnQpfM.webp",
    color: "#E65100",
    bgColor: "#FFF3E0",
    tagline: "從揉麵團開始，培養孩子的自信與創造力",
    description: "動手做湯圓、蛋糕、Pizza，每一次「我做到了！」都是最珍貴的成長。",
    parentMessage:
      "看著孩子圍上小圍裙，認真地揉著麵團，臉上沾了一點麵粉卻笑得好開心。當他們端著自己做的杯子蛋糕，驕傲地說「這是我做的！」——那一刻，就是最珍貴的成長。",
    skills: ["生活自理能力", "手眼協調發展", "創意表達與成就感"],
    weeklyTopics: [
      { week: 1, topic: "彩色造型湯圓", highlight: "學習揉麵團與造型技巧", funLine: "搓搓揉揉，每一顆都是獨一無二的作品" },
      { week: 2, topic: "水果漸層氣泡飲", highlight: "認識水果與色彩搭配", funLine: "調出一杯彩虹，學會色彩的魔法" },
      { week: 3, topic: "迷你杯子蛋糕", highlight: "烘焙入門與裝飾創意", funLine: "第一次當小小烘焙師的驕傲時刻" },
      { week: 4, topic: "創意飯糰", highlight: "學習捏飯糰與營養搭配", funLine: "用飯糰說故事，午餐也能很有趣" },
      { week: 5, topic: "手工壓模餅乾", highlight: "餅乾製作與模具運用", funLine: "壓一壓、烤一烤，香噴噴的幸福" },
      { week: 6, topic: "彩色水果串", highlight: "水果切割與擺盤藝術", funLine: "串起水果，也串起美好的回憶" },
      { week: 7, topic: "創意迷你三明治", highlight: "食材搭配與創意組合", funLine: "層層疊疊，每一口都是驚喜" },
      { week: 8, topic: "迷你手作 Pizza", highlight: "從麵團到成品的完整體驗", funLine: "從麵團到出爐，完整的成就感體驗" },
    ],
    closingMessage: "帶回家的不只是美食，還有「我可以照顧自己」的自信。",
  },
  {
    id: "science",
    name: "魔法科學實驗室",
    day: "星期四",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_science-DpopP2CCxGqfUtuycgrz9J.webp",
    sceneImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_science_scene-JQT4sDzqLgjjM7TupWKP3z.webp",
    color: "#7B1FA2",
    bgColor: "#F3E5F5",
    tagline: "每一個「哇！」的瞬間，都是科學種子發芽的時刻",
    description:
      "趣味實驗探索酸鹼、磁力、光影，不是背課本，是親手體驗科學的神奇！",
    parentMessage:
      "當火山模型噴發的那一刻，孩子們瞪大眼睛，嘴巴張成 O 型。他們開始問「為什麼會這樣？」——這就是科學的起點。每一次實驗，都在孩子心中種下一顆好奇的種子。",
    skills: ["好奇心與求知慾", "邏輯思考能力", "動手做的科學啟蒙"],
    weeklyTopics: [
      { week: 1, topic: "火山爆發與酸鹼魔術", highlight: "認識酸鹼反應的神奇現象", funLine: "轟！親手讓火山噴發的震撼體驗" },
      { week: 2, topic: "史萊姆製作", highlight: "探索非牛頓流體的奧秘", funLine: "又黏又 Q，探索神奇的非牛頓流體" },
      { week: 3, topic: "磁力與靜電", highlight: "感受看不見的力量", funLine: "看不見的力量，卻能讓頭髮站起來！" },
      { week: 4, topic: "水的魔法", highlight: "探索水的表面張力與毛細現象", funLine: "一滴水裡藏著多少秘密？" },
      { week: 5, topic: "光與影的秘密", highlight: "認識光的折射與反射", funLine: "追著光跑，和影子玩遊戲" },
      { week: 6, topic: "空氣的力量", highlight: "體驗氣壓與風力的威力", funLine: "看不見摸不著，卻力大無窮" },
      { week: 7, topic: "聲音大探索", highlight: "了解聲波的傳播與振動", funLine: "聲音是怎麼旅行的？" },
      { week: 8, topic: "重力與平衡", highlight: "探索地心引力與平衡原理", funLine: "為什麼東西會掉下來？" },
    ],
    closingMessage: "科學不在課本裡，在孩子親手觸摸、親眼看見的每一個驚喜瞬間。",
  },
  {
    id: "story",
    name: "繪本魔法與手作",
    day: "星期五",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_storycraft-PHEuD9jEossCXZfFYuVBqG.webp",
    sceneImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663454563765/dh435DmZJgL2ygw5HY9GQv/lowgrade_story_scene-2LjpWLMUMa99xcDGSgQM3V.webp",
    color: "#1565C0",
    bgColor: "#E3F2FD",
    tagline: "在故事裡找到勇氣，在手作中留下溫暖",
    description:
      "經典繪本共讀結合創意手作，讓孩子在故事中學會勇氣、友情與愛。",
    parentMessage:
      "當孩子聽完一個關於勇氣的故事，然後用自己的小手做出一個「勇氣瓶」帶回家——那個瓶子裡裝的，是他們對世界最純真的理解。",
    skills: ["閱讀理解力", "創意表達能力", "情緒認知與同理心"],
    weeklyTopics: [
      { week: 1, topic: "勇氣大冒險", highlight: "透過繪本探索勇氣的意義", funLine: "什麼是勇氣？一起來找答案" },
      { week: 2, topic: "友誼的魔法", highlight: "學習珍惜與維護友情", funLine: "好朋友就是最棒的魔法" },
      { week: 3, topic: "情緒小怪獸", highlight: "認識和管理自己的情緒", funLine: "你的情緒是什麼顏色？" },
      { week: 4, topic: "奇妙的大自然", highlight: "透過故事認識自然生態", funLine: "大自然有好多驚喜等著你" },
      { week: 5, topic: "家人的愛", highlight: "感受家庭的溫暖與支持", funLine: "最溫暖的故事，就在身邊" },
      { week: 6, topic: "小小創造家", highlight: "激發創造力與想像力", funLine: "用手做出心裡想像的世界" },
      { week: 7, topic: "友善小天使", highlight: "學習分享與助人的美德", funLine: "一個小小的善意，能溫暖整個世界" },
      { week: 8, topic: "成長的軌跡", highlight: "回顧學習歷程與自我肯定", funLine: "8 週後，你已經是不一樣的自己了" },
    ],
    closingMessage:
      "每一本繪本都是一把鑰匙，打開孩子心中一扇扇新的窗。",
  },
];
