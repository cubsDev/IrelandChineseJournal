import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { Event } from "@/data/events";
import { formatDate } from "@/lib/format";
import { ArticleImage } from "@/components/ArticleImage";
import { Badge } from "@/components/ui/badge";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="grid gap-4 border border-stone-200 bg-white p-4 sm:grid-cols-[180px_1fr]">
      <ArticleImage src={event.image} alt="" className="aspect-[4/5]" />
      <div>
        <Badge
          variant={event.status === "upcoming" ? "default" : "secondary"}
          className="rounded-sm"
        >
          {event.status === "upcoming" ? "Upcoming" : "Past"}
        </Badge>
        <h2 className="mt-3 text-xl font-semibold leading-snug text-stone-950">
          {event.title}
        </h2>
        <div className="mt-3 space-y-2 text-sm text-stone-600">
          <p className="flex items-center gap-2">
            <CalendarDays className="size-4 text-red-800" aria-hidden="true" />
            {formatDate(event.date)}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-red-800" aria-hidden="true" />
            {event.location}
          </p>
        </div>
        <p className="mt-3 text-sm leading-6 text-stone-600">
          {event.description}
        </p>
        <Link
          href={event.registrationUrl}
          className="mt-4 inline-flex text-sm font-semibold text-red-800 hover:text-stone-950"
        >
          联系报名 / 合作
        </Link>
      </div>
    </article>
  );
}
