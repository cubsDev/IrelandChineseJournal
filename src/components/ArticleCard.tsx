import Link from "next/link";
import { Article } from "@/data/articles";
import { formatDate } from "@/lib/format";
import { ArticleImage } from "@/components/ArticleImage";
import { CategoryBadge } from "@/components/CategoryBadge";

export function ArticleCard({
  article,
  compact = false,
  horizontal = false,
  wrapImage = false,
}: {
  article: Article;
  compact?: boolean;
  horizontal?: boolean;
  wrapImage?: boolean;
}) {
  if (horizontal && wrapImage) {
    return (
      <article className="border-b border-stone-200 py-4 first:pt-0">
        <ArticleImage
          src={article.image}
          alt=""
          className="float-left mr-4 mb-2 aspect-[4/3] w-28 sm:w-32"
        />
        <CategoryBadge>{article.category}</CategoryBadge>
        <h3 className="mt-2 text-base font-semibold leading-snug text-stone-950">
          <Link href={`/news/${article.slug}`} className="hover:text-red-800">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          {article.excerpt}
        </p>
        <p className="mt-2 font-mono text-xs text-stone-500">
          {formatDate(article.date)}
        </p>
        <div className="clear-both" />
      </article>
    );
  }

  if (horizontal) {
    return (
      <article className="grid grid-cols-[112px_1fr] gap-4 border-b border-stone-200 pb-4">
        <ArticleImage src={article.image} alt="" className="aspect-[4/3]" />
        <div>
          <CategoryBadge>{article.category}</CategoryBadge>
          <h3 className="mt-2 text-base font-semibold leading-snug text-stone-950">
            <Link href={`/news/${article.slug}`} className="hover:text-red-800">
              {article.title}
            </Link>
          </h3>
          <p className="mt-2 hidden text-sm leading-6 text-stone-600 sm:block">
            {article.excerpt}
          </p>
          <p className="mt-2 font-mono text-xs text-stone-500">
            {formatDate(article.date)}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <ArticleImage
        src={article.image}
        alt=""
        className={compact ? "aspect-[4/3]" : "aspect-[16/10]"}
      />
      <div className="mt-3">
        <CategoryBadge>{article.category}</CategoryBadge>
        <h3
          className={
            compact
              ? "mt-2 text-lg font-semibold leading-snug text-stone-950"
              : "mt-2 text-xl font-semibold leading-snug text-stone-950"
          }
        >
          <Link href={`/news/${article.slug}`} className="hover:text-red-800">
            {article.title}
          </Link>
        </h3>
        {!compact ? (
          <p className="mt-2 text-sm leading-6 text-stone-600">
            {article.excerpt}
          </p>
        ) : null}
        <p className="mt-3 font-mono text-xs text-stone-500">
          {formatDate(article.date)} · {article.author}
        </p>
      </div>
    </article>
  );
}
