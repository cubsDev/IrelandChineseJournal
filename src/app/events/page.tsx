import { EventCard } from "@/components/EventCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WeChatBlock } from "@/components/WeChatBlock";
import { events } from "@/data/events";

export const metadata = {
  title: "活动资讯 / Ireland Chinese Journal",
};

export default function EventsPage() {
  const upcoming = events.filter((event) => event.status === "upcoming");
  const past = events.filter((event) => event.status === "past");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <SectionHeader title="活动资讯" eyebrow="Events" />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-stone-950">
              最新活动 / Upcoming
            </h2>
            <div className="grid gap-5">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-lg font-semibold text-stone-950">
              活动回顾 / Past
            </h2>
            <div className="grid gap-5">
              {past.map((event) => (
                <EventCard key={event.slug} event={event} />
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
