export type Event = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: "upcoming" | "past";
  registrationUrl: string;
};

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1000&auto=format&fit=crop`;

export const events: Event[] = [
  {
    slug: "dragon-boat-cultural-day",
    title: "都柏林端午文化日",
    date: "2026-07-05",
    location: "Dublin City Centre",
    description: "传统文化体验、社区摊位、青少年表演与家庭互动活动。",
    image: photo("photo-1511795409834-ef04bbd61622"),
    status: "upcoming",
    registrationUrl: "mailto:events@icjournal.ie",
  },
  {
    slug: "student-predeparture-briefing",
    title: "2026留学爱尔兰行前说明会",
    date: "2026-08-16",
    location: "Online / Zoom",
    description: "面向UCD、Trinity、DCU、Maynooth新生的行前答疑。",
    image: photo("photo-1523580846011-d3a5bc25702b"),
    status: "upcoming",
    registrationUrl: "mailto:study@icjournal.ie",
  },
  {
    slug: "chinese-business-networking",
    title: "华人商户交流午餐会",
    date: "2026-06-06",
    location: "Docklands, Dublin",
    description: "围绕本地营销、合规经营和跨社区合作展开交流。",
    image: photo("photo-1556761175-b413da4baf72"),
    status: "past",
    registrationUrl: "mailto:business@icjournal.ie",
  },
  {
    slug: "family-life-workshop",
    title: "在爱家庭生活工作坊",
    date: "2026-05-19",
    location: "Dun Laoghaire",
    description: "教育资源、社区服务与亲子周末活动分享。",
    image: photo("photo-1500530855697-b586d89ba3ee"),
    status: "past",
    registrationUrl: "mailto:community@icjournal.ie",
  },
];
