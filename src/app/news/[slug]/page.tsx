import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleImage } from "@/components/ArticleImage";
import { CategoryBadge } from "@/components/CategoryBadge";
import { MostReadList } from "@/components/MostReadList";
import { SectionHeader } from "@/components/SectionHeader";
import { WeChatBlock } from "@/components/WeChatBlock";
import { Button } from "@/components/ui/button";
import {
  articles,
  getArticleBySlug,
  mostReadArticles,
} from "@/data/articles";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return {
    title: article
      ? `${article.title} / 爱尔兰华人志`
      : "Article / 爱尔兰华人志",
    description: article?.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = articles
    .filter(
      (item) => item.category === article.category && item.slug !== article.slug
    )
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="mx-auto max-w-3xl">
            <CategoryBadge>{article.category}</CategoryBadge>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-stone-950 md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-stone-650">
              {article.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-stone-200 py-3 text-sm text-stone-600">
              <span>{article.author}</span>
              <span>{formatDate(article.date)}</span>
              <div className="ml-auto flex gap-2">
                <Button variant="outline" size="sm" className="rounded-sm">
                  WeChat
                </Button>
                <Button variant="outline" size="sm" className="rounded-sm">
                  Copy Link
                </Button>
              </div>
            </div>
          </div>

          <ArticleImage
            src={article.image}
            alt=""
            priority
            className="mt-8 aspect-[16/9] border border-stone-200"
          />

          <div className="mx-auto mt-8 max-w-3xl text-[17px] leading-9 text-stone-800">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <WeChatBlock />
          </div>

          {related.length > 0 ? (
            <section className="mt-12">
              <SectionHeader title="相关文章" eyebrow="Related" />
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <ArticleCard key={item.slug} article={item} compact />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="space-y-6">
          <MostReadList articles={mostReadArticles} />
          <WeChatBlock compact />
        </aside>
      </div>
    </article>
  );
}
