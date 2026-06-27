import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WeChatBlock } from "@/components/WeChatBlock";
import { getArticlesByCategory } from "@/data/articles";

export const metadata = {
  title: "留学爱尔兰 / Ireland Chinese Journal",
};

const guideItems = [
  "大学注册与学生卡",
  "住宿、押金与租约",
  "银行卡、Leap Card与电话卡",
  "IRP预约与保险文件",
  "校园社团、兼职与职业服务",
  "UCD、Trinity、DCU、Maynooth信息入口",
];

export default function StudyPage() {
  const studyArticles = getArticlesByCategory("留学爱尔兰");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <SectionHeader title="留学爱尔兰" eyebrow="Study in Ireland" />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <section className="border border-stone-200 bg-white p-5">
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-stone-950 md:text-4xl">
              面向中国学生的爱尔兰学习与生活信息页
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">
              覆盖入境准备、校园注册、住宿风险、身份更新、学习支持与城市生活。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {guideItems.map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-red-800 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionHeader title="学生专题" eyebrow="Student Desk" />
            <div className="grid gap-6 md:grid-cols-2">
              {studyArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        </div>
        <aside>
          <WeChatBlock />
        </aside>
      </div>
    </div>
  );
}
