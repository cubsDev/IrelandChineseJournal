import Link from "next/link";
import { Article } from "@/data/articles";

export function MostReadList({ articles }: { articles: Article[] }) {
  return (
    <aside className="border-t border-stone-950 pt-3">
      <h2 className="text-lg font-semibold text-stone-950">Most Read / 热读</h2>
      <ol className="mt-4 divide-y divide-stone-200">
        {articles.map((article, index) => (
          <li key={article.slug} className="grid grid-cols-[2rem_1fr] gap-3 py-3">
            <span className="font-mono text-lg text-red-800">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Link
              href={`/news/${article.slug}`}
              className="text-sm font-medium leading-6 text-stone-900 hover:text-red-800"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
