import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import { WeChatBlock } from "@/components/WeChatBlock";
import { videos } from "@/data/videos";

export const metadata = {
  title: "精选视频 / Ireland Chinese Journal",
};

export default function VideoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <SectionHeader title="精选视频" eyebrow="Video" />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-7 md:grid-cols-2">
          {videos.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
        <aside>
          <WeChatBlock />
        </aside>
      </div>
    </div>
  );
}
