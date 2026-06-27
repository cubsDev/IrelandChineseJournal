import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeader({
  title,
  eyebrow,
  href,
}: {
  title: string;
  eyebrow?: string;
  href?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 border-t border-stone-950 pt-3">
      <div>
        {eyebrow ? (
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-red-800">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-xl font-semibold leading-tight text-stone-950 md:text-2xl">
          {title}
        </h2>
      </div>
      {href ? (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-stone-700 hover:text-red-800"
        >
          查看更多
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
