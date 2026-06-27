export type Video = {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  category: string;
  videoUrl: string;
};

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

export const videos: Video[] = [
  {
    slug: "dublin-community-voices",
    title: "街访：在都柏林生活的华人最关心什么？",
    description: "从住房、交通到孩子教育，听不同年龄层华人的真实声音。",
    date: "2026-06-12",
    thumbnail: photo("photo-1517245386807-bb43f82c33c4"),
    category: "社区采访",
    videoUrl: "https://example.com/video/dublin-community-voices",
  },
  {
    slug: "student-arrival-guide",
    title: "留学视频指南：抵达爱尔兰后的72小时",
    description: "面向新生的落地流程、校园注册与生活准备清单。",
    date: "2026-06-02",
    thumbnail: photo("photo-1523580846011-d3a5bc25702b"),
    category: "留学爱尔兰",
    videoUrl: "https://example.com/video/student-arrival-guide",
  },
  {
    slug: "chinese-business-profile",
    title: "本地商户影像志：一家中餐馆的周末午市",
    description: "记录都柏林华人餐饮业如何服务本地与华人双重社区。",
    date: "2026-05-22",
    thumbnail: photo("photo-1551218808-94e220e084d2"),
    category: "商业人物",
    videoUrl: "https://example.com/video/chinese-business-profile",
  },
  {
    slug: "ireland-china-culture-night",
    title: "现场：中爱青年文化之夜",
    description: "音乐、短片与圆桌讨论构成一次跨文化公共现场。",
    date: "2026-05-09",
    thumbnail: photo("photo-1517457373958-b7bdd4587205"),
    category: "文化现场",
    videoUrl: "https://example.com/video/ireland-china-culture-night",
  },
];
