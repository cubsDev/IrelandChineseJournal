import { ArticleCard } from "@/components/ArticleCard";
import { EditorPicks } from "@/components/EditorPicks";
import { FeaturedArticle } from "@/components/FeaturedArticle";
import { MostReadList } from "@/components/MostReadList";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import { WeChatBlock } from "@/components/WeChatBlock";
import {
  articles,
  editorPicks,
  featuredArticle,
  getArticlesByCategory,
  mostReadArticles,
} from "@/data/articles";
import { events } from "@/data/events";
import { videos } from "@/data/videos";
import { EventCard } from "@/components/EventCard";

export default function Home() {
  const heroPool = articles.filter(
    (article) => article.slug !== featuredArticle.slug
  );
  const secondLeadArticle = heroPool[0];
  const secondaryStories = heroPool.slice(1, 4);
  const latestStories = heroPool.slice(4, 9);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <section className="grid items-start gap-8 border-b border-stone-300 pb-8 lg:grid-cols-[1.55fr_0.8fr_0.65fr]">
        <div className="space-y-10">
          <FeaturedArticle article={featuredArticle} priority />
          <div className="border-t border-stone-200 pt-8">
            <FeaturedArticle
              article={secondLeadArticle}
              headingLevel="h2"
              priority
              imageClassName="aspect-[16/5.5]"
            />
          </div>
        </div>
        <div className="grid content-start gap-5 sm:grid-cols-3 lg:auto-rows-max lg:grid-cols-1">
          {secondaryStories.map((article) => (
            <ArticleCard key={article.slug} article={article} compact />
          ))}
        </div>
        <aside className="self-start border-t border-stone-950 pt-3 lg:border-t-0 lg:border-l lg:border-stone-200 lg:pl-5">
          <h2 className="text-lg font-semibold text-stone-950">
            Latest Updates / 最新
          </h2>
          <div className="mt-4 divide-y divide-stone-200">
            {latestStories.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                horizontal
                wrapImage
              />
            ))}
          </div>
        </aside>
      </section>

      <div className="grid gap-10 py-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <section id="news">
            <SectionHeader title="爱尔兰资讯" eyebrow="Ireland Updates" href="/news" />
            <div className="grid gap-6 md:grid-cols-3">
              {getArticlesByCategory("爱尔兰资讯").map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
              {getArticlesByCategory("爱尔兰生活")
                .slice(0, 2)
                .map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
            </div>
          </section>

          <section id="community">
            <SectionHeader title="华人志社区" eyebrow="Chinese Community" href="/news" />
            <div className="grid gap-5 md:grid-cols-2">
              {getArticlesByCategory("华人志社区").map((article) => (
                <ArticleCard key={article.slug} article={article} horizontal />
              ))}
            </div>
          </section>

          <section id="media">
            <SectionHeader title="编辑精选" eyebrow="Editor's Picks" href="/news" />
            <div className="grid gap-6 md:grid-cols-2">
              {getArticlesByCategory("精选内容").map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
              {videos.slice(0, 1).map((video) => (
                <VideoCard key={video.slug} video={video} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="精选视频" eyebrow="Video" href="/video" />
            <div className="grid gap-6 md:grid-cols-2">
              {videos.slice(0, 2).map((video) => (
                <VideoCard key={video.slug} video={video} />
              ))}
            </div>
          </section>

          <section id="life">
            <SectionHeader title="爱尔兰生活" eyebrow="Life in Ireland" href="/news" />
            <div className="mb-5 flex flex-wrap gap-2">
              {["玩转都柏林", "海滩指南", "生活服务", "亲子路线"].map((tag) => (
                <span
                  key={tag}
                  className="border border-stone-300 bg-white px-2.5 py-1 text-sm font-medium text-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {getArticlesByCategory("爱尔兰生活").map((article) => (
                <ArticleCard key={article.slug} article={article} compact />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader
              title="留学爱尔兰"
              eyebrow="Study in Ireland"
              href="/study-in-ireland"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {getArticlesByCategory("留学爱尔兰").map((article) => (
                <ArticleCard key={article.slug} article={article} horizontal />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="活动资讯" eyebrow="Events" href="/events" />
            <div className="grid gap-5">
              {events.slice(0, 2).map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <MostReadList articles={mostReadArticles} />
          <EditorPicks articles={editorPicks} />
          <WeChatBlock />
        </aside>
      </div>
    </div>
  );
}
