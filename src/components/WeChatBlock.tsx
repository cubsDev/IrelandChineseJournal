import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WeChatBlock({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border border-stone-200 bg-white p-4">
      <div className="flex gap-4">
        <div className="grid size-24 shrink-0 place-items-center border border-stone-300 bg-white p-1">
          <Image
            src="/brand/wechat-qr.png"
            alt="爱尔兰华人志 WeChat QR code"
            width={96}
            height={98}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-950">
            关注爱尔兰华人志
          </h2>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            获取社区新闻、实用指南、活动合作与投稿信息。
          </p>
          {!compact ? (
            <Button className="mt-3 rounded-sm" size="sm">
              <MessageCircle className="size-4" aria-hidden="true" />
              WeChat
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
