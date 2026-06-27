import Link from "next/link";
import { Article } from "@/data/articles";
import { formatDate } from "@/lib/format";
import { ArticleImage } from "@/components/ArticleImage";
import { CategoryBadge } from "@/components/CategoryBadge";

export function FeaturedArticle({
  article,
  headingLevel = "h1",
  priority = false,
  imageClassName = "aspect-[16/11]",
}: {
  article: Article;
  headingLevel?: "h1" | "h2";
  priority?: boolean;
  imageClassName?: string;
}) {
  const Heading = headingLevel;

  return (
    <article>
      <ArticleImage
        src={article.image}
        alt=""
        priority={priority}
        className={`${imageClassName} border border-stone-200`}
      />
      <div className="mt-4">
        <CategoryBadge>{article.category}</CategoryBadge>
        <Heading className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.12] text-stone-950 md:text-5xl">
          <Link href={`/news/${article.slug}`} className="hover:text-red-800">
            {article.title}
          </Link>
        </Heading>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-650 md:text-lg">
          {article.excerpt}
        </p>
        <p className="mt-4 font-mono text-xs text-stone-500">
          {formatDate(article.date)} · {article.author}
        </p>
      </div>
    </article>
  );
}
