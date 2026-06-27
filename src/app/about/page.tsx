import Link from "next/link";
import { Mail, Newspaper, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { WeChatBlock } from "@/components/WeChatBlock";

export const metadata = {
  title: "关于与合作 / Ireland Chinese Journal",
};

const contacts = [
  ["新闻线索", "news@icjournal.ie"],
  ["投稿合作", "submissions@icjournal.ie"],
  ["广告与商务合作", "ads@icjournal.ie"],
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <SectionHeader title="关于与合作" eyebrow="About & Cooperation" />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight text-stone-950 md:text-4xl">
            Ireland Chinese Journal / 爱尔兰华人志
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            我们是面向爱尔兰华人居民、学生、专业人士、家庭与本地企业的中文媒体原型项目，关注爱尔兰资讯、社区公共生活、实用指南、文化交流与影像报道。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="border border-stone-200 bg-white p-4">
              <Newspaper className="size-5 text-red-800" aria-hidden="true" />
              <h2 className="mt-3 font-semibold text-stone-950">新闻报道</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                记录爱尔兰本地资讯、文化交流与社区议题。
              </p>
            </div>
            <div className="border border-stone-200 bg-white p-4">
              <UsersRound className="size-5 text-red-800" aria-hidden="true" />
              <h2 className="mt-3 font-semibold text-stone-950">社区连接</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                服务居民、学生、家庭、社团与商户之间的信息需求。
              </p>
            </div>
            <div className="border border-stone-200 bg-white p-4">
              <Mail className="size-5 text-red-800" aria-hidden="true" />
              <h2 className="mt-3 font-semibold text-stone-950">合作入口</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                接受投稿、活动发布、广告与内容合作咨询。
              </p>
            </div>
          </div>

          <section className="mt-10 border-t border-stone-300 pt-6">
            <h2 className="text-xl font-semibold text-stone-950">Contact</h2>
            <div className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
              {contacts.map(([label, email]) => (
                <div key={email} className="flex flex-wrap justify-between gap-3 py-3">
                  <span className="font-medium text-stone-900">{label}</span>
                  <Link
                    href={`mailto:${email}`}
                    className="text-red-800 hover:text-stone-950"
                  >
                    {email}
                  </Link>
                </div>
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
