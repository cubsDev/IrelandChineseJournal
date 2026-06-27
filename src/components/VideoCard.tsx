import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { Video } from "@/data/videos";
import { formatDate } from "@/lib/format";
import { ArticleImage } from "@/components/ArticleImage";
import { CategoryBadge } from "@/components/CategoryBadge";

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="border-b border-stone-200 pb-5">
      <div className="relative">
        <ArticleImage src={video.thumbnail} alt="" className="aspect-video" />
        <span className="absolute left-3 top-3 grid size-10 place-items-center bg-white/90 text-stone-950">
          <PlayCircle className="size-6" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-3">
        <CategoryBadge>{video.category}</CategoryBadge>
        <h2 className="mt-2 text-xl font-semibold leading-snug text-stone-950">
          <Link href={video.videoUrl} className="hover:text-red-800">
            {video.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          {video.description}
        </p>
        <p className="mt-3 font-mono text-xs text-stone-500">
          {formatDate(video.date)}
        </p>
      </div>
    </article>
  );
}
