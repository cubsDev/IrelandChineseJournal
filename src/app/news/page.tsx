import { ArticleCard } from "@/components/ArticleCard";
import { EditorPicks } from "@/components/EditorPicks";
import { FeaturedArticle } from "@/components/FeaturedArticle";
import { MostReadList } from "@/components/MostReadList";
import { SectionHeader } from "@/components/SectionHeader";
import {
  articles,
  categories,
  editorPicks,
  featuredArticle,
  mostReadArticles,
} from "@/data/articles";

export const metadata = {
  title: "新闻归档 / Ireland Chinese Journal",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <SectionHeader title="新闻归档" eyebrow="News Archive" />
      <div className="flex gap-2 overflow-x-auto border-b border-stone-200 pb-4">
        <span className="shrink-0 border border-stone-950 bg-stone-950 px-3 py-1.5 text-sm font-medium text-white">
          全部
        </span>
        {categories.map((category) => (
          <a
            key={category}
            href={`#${category}`}
            className="shrink-0 border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 hover:border-red-800 hover:text-red-800"
          >
            {category}
          </a>
        ))}
      </div>

      <div className="grid gap-10 pt-8 lg:grid-cols-[1fr_320px]">
        <div>
          <FeaturedArticle article={featuredArticle} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {articles
              .filter((article) => article.slug !== featuredArticle.slug)
              .map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
          </div>
        </div>
        <aside className="space-y-6">
          <MostReadList articles={mostReadArticles} />
          <EditorPicks articles={editorPicks} />
        </aside>
      </div>
    </div>
  );
}
