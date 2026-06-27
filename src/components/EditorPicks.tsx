import Link from "next/link";
import { Article } from "@/data/articles";

export function EditorPicks({ articles }: { articles: Article[] }) {
  return (
    <div className="border border-stone-200 bg-white p-4">
      <h2 className="text-lg font-semibold text-stone-950">Editor&apos;s Picks / 编辑精选</h2>
      <div className="mt-4 space-y-4">
        {articles.map((article) => (
          <article key={article.slug}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-red-800">
              {article.tags[0] ?? article.category}
            </p>
            <h3 className="mt-1 text-base font-semibold leading-snug">
              <Link href={`/news/${article.slug}`} className="hover:text-red-800">
                {article.title}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
