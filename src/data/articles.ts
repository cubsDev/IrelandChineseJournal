export type ArticleCategory =
  | "中爱资讯"
  | "华人社区"
  | "融媒热点"
  | "视频报道"
  | "爱尔兰生活"
  | "留学爱尔兰"
  | "活动";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
  mostRead?: boolean;
  editorPick?: boolean;
  body: string[];
};

export const categories: ArticleCategory[] = [
  "中爱资讯",
  "华人社区",
  "融媒热点",
  "视频报道",
  "爱尔兰生活",
  "留学爱尔兰",
  "活动",
];

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1400&auto=format&fit=crop`;

export const articles: Article[] = [
  {
    slug: "dublin-chinese-community-new-chapter",
    title: "都柏林华人社区进入新阶段：从安家到参与城市公共生活",
    excerpt:
      "随着新移民、留学生和本地家庭结构变化，爱尔兰华人社区正在形成更稳定的公共表达与互助网络。",
    category: "华人社区",
    date: "2026-06-18",
    author: "本报记者 林嘉文",
    image:
      "https://images.unsplash.com/photo-1652592317241-df6e7a080168?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    mostRead: true,
    editorPick: true,
    body: [
      "过去十年，爱尔兰华人社区的关键词从“适应”逐渐转向“参与”。在都柏林、科克、戈尔韦和利默里克，华人家庭、青年专业人士、留学生与本地商户之间的联系更紧密，社区议题也从生活便利延伸到教育、住房、身份更新、文化传播和公共服务。",
      "多位社区组织者告诉《爱尔兰华人志》，近年来中文信息服务的需求明显增加。对新到爱尔兰的居民而言，可靠、及时、可验证的中文资讯仍然稀缺；对已在本地生活多年的华人而言，如何被主流社会看见、如何参与地方事务，正在成为新的议题。",
      "这种变化也影响着海外中文媒体的角色。它不再只是活动公告栏，而需要承担解释政策、记录人物、连接机构、监督公共服务和保存社区记忆的功能。",
    ],
  },
  {
    slug: "ireland-china-cultural-exchange-summer",
    title: "中爱文化交流夏季项目公布，音乐、电影与地方城市合作成重点",
    excerpt:
      "多个文化机构将在夏季推出交流活动，覆盖都柏林、基尔代尔与高威等地。",
    category: "中爱资讯",
    date: "2026-06-14",
    author: "编辑部",
    image: photo("photo-1517457373958-b7bdd4587205"),
    mostRead: true,
    body: [
      "今年夏季，中爱文化交流活动将从单一演出走向更长期的地方合作。项目内容包括青年音乐家互访、华语电影展映、城市文化论坛以及面向家庭的公共工作坊。",
      "主办方表示，希望通过更具参与性的形式，让在爱华人、爱尔兰本地观众和国际学生共同进入同一个文化现场。",
    ],
  },
  {
    slug: "irp-renewal-guide-2026",
    title: "IRP更新与签证续签：2026年在爱华人最常见问题整理",
    excerpt:
      "从预约、材料、照片到邮寄等待，本文梳理近期读者咨询最多的身份更新问题。",
    category: "爱尔兰生活",
    date: "2026-06-10",
    author: "生活组",
    image: photo("photo-1450101499163-c8848c66ca85"),
    mostRead: true,
    editorPick: true,
    body: [
      "身份更新仍是在爱华人最关注的实用议题之一。不同签证类别对应的材料和处理周期存在差异，申请人应以官方说明为准，并为邮寄、补件和旅行安排预留足够时间。",
      "近期读者反馈显示，最容易出现问题的环节包括地址变更未同步、照片规格不符、保险文件日期覆盖不足，以及临近出行才开始办理续签。",
      "本文为生活信息整理，不构成法律意见。如遇复杂身份问题，建议联系持牌移民顾问或相关公共服务机构。",
    ],
  },
  {
    slug: "ucd-trinity-dcu-new-student-checklist",
    title: "UCD、Trinity、DCU新生抵爱清单：从住宿到银行卡",
    excerpt:
      "留学生抵达爱尔兰后的前两周，往往决定整个学期的生活节奏。",
    category: "留学爱尔兰",
    date: "2026-06-07",
    author: "留学组",
    image: photo("photo-1523580846011-d3a5bc25702b"),
    editorPick: true,
    body: [
      "对中国留学生来说，落地后的首要任务通常包括办理电话卡、确认临时住宿、预约学校注册、了解校园医疗服务、准备银行开户材料，以及熟悉公共交通线路。",
      "几所主要大学的校园分布、住宿供给和课程安排不同，新生应尽量在出发前完成电子文件备份，并加入可靠的学校官方渠道。",
    ],
  },
  {
    slug: "dublin-housing-chinese-renters",
    title: "都柏林租房压力下，华人租客如何识别风险与保护押金",
    excerpt:
      "房源紧张让许多新移民和学生面临高价、短租和非正规合约风险。",
    category: "爱尔兰生活",
    date: "2026-06-03",
    author: "记者 陈思远",
    image: photo("photo-1501183638710-841dd1904471"),
    mostRead: true,
    body: [
      "都柏林住房压力持续影响新到爱尔兰的华人居民。受访租客普遍提到，看房竞争激烈、押金转账紧迫、合约条款不清和退租沟通困难等问题。",
      "租客应保留看房记录、付款凭证、合约副本和房屋状况照片，避免在未确认房东身份和房源真实性前支付大额款项。",
    ],
  },
  {
    slug: "local-chinese-businesses-dublin",
    title: "从餐饮到跨境服务：都柏林本地华人商户的第二代转型",
    excerpt:
      "年轻经营者正在把传统熟人网络转化为品牌、内容和专业服务。",
    category: "华人社区",
    date: "2026-05-30",
    author: "商业观察",
    image: photo("photo-1555396273-367ea4eb4db5"),
    body: [
      "华人商户曾经主要依赖口碑与熟客，如今越来越多经营者开始重视线上内容、英文服务能力、合规品牌形象和跨族群客户。",
      "这种转型既来自市场竞争，也来自第二代华人和新专业移民的加入。他们熟悉中英双语环境，也更愿意用公开透明的方式经营社区信任。",
    ],
  },
  {
    slug: "maynooth-student-interview",
    title: "人物访谈：在Maynooth读书的中国学生，如何适应小城生活",
    excerpt:
      "离开都柏林不等于远离机会，小城学习生活也有自己的节奏。",
    category: "留学爱尔兰",
    date: "2026-05-24",
    author: "访谈组",
    image: photo("photo-1524995997946-a1c2e315a42f"),
    body: [
      "Maynooth的学习体验与都柏林不同。通勤、社交圈、兼职机会和住宿选择都更依赖提前规划，但小城也提供了更安静的学习环境。",
      "受访学生认为，对中国学生而言，主动参与课堂讨论和本地社团，是适应爱尔兰教育方式的重要一步。",
    ],
  },
  {
    slug: "wechat-media-roundup",
    title: "本周融媒热点：社区短视频、活动直播与中文播客正在升温",
    excerpt:
      "海外中文媒体的传播方式正在从公众号图文延伸到短视频、直播和播客。",
    category: "融媒热点",
    date: "2026-05-20",
    author: "融媒组",
    image: photo("photo-1495020689067-958852a7765e"),
    editorPick: true,
    body: [
      "对在爱华人媒体而言，图文报道仍然是信息沉淀的核心，但短视频和直播正在承担更强的现场感功能。",
      "读者对活动回放、人物访谈和实用答疑的需求增加，也让媒体需要建立更稳定的采编与发布规范。",
    ],
  },
  {
    slug: "family-weekend-guide",
    title: "周末亲子指南：都柏林周边适合华人家庭的一日路线",
    excerpt:
      "从海边步道到博物馆，适合带孩子轻松体验爱尔兰本地生活。",
    category: "爱尔兰生活",
    date: "2026-05-18",
    author: "生活组",
    image: photo("photo-1500530855697-b586d89ba3ee"),
    body: [
      "对有孩子的华人家庭来说，周末活动不只是休闲，也是在本地社会中建立归属感的方式。",
      "选择路线时，可以优先考虑公共交通可达、卫生间便利、天气变化可替代，以及附近是否有适合孩子的餐食选择。",
    ],
  },
  {
    slug: "dragon-boat-festival-dublin-preview",
    title: "端午文化日在都柏林举行，社区摊位与青少年表演开放报名",
    excerpt:
      "活动将设置传统文化体验、公益咨询和本地华人机构展示区。",
    category: "活动",
    date: "2026-05-12",
    author: "活动组",
    image: photo("photo-1511795409834-ef04bbd61622"),
    body: [
      "端午文化日将以家庭友好形式呈现，现场计划设置手作体验、中文图书角、青少年表演和社区组织介绍。",
      "主办方欢迎本地商户、学生社团和公益机构参与摊位合作。",
    ],
  },
];

export const featuredArticle = articles.find((article) => article.featured) ?? articles[0];
export const mostReadArticles = articles.filter((article) => article.mostRead);
export const editorPicks = articles.filter((article) => article.editorPick);

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory) {
  return articles.filter((article) => article.category === category);
}
