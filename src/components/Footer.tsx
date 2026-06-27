import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  ["About", "/about"],
  ["Contact", "mailto:hello@icjournal.ie"],
  ["Submission", "mailto:submissions@icjournal.ie"],
  ["Advertising cooperation", "mailto:ads@icjournal.ie"],
];

export function Footer() {
  return (
    <footer className="border-t border-stone-950 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr_auto] lg:px-6">
        <div>
          <Image
            src="/brand/ireland-chinese-journal-logo.png"
            alt="Ireland Chinese Journal / 爱尔兰华人志"
            width={180}
            height={90}
            className="h-16 w-auto bg-white"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-stone-400">
            记录在爱华人社区，连接中爱新闻、实用信息、影像报道与本地合作。
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm">
          {footerLinks.map(([label, href]) => (
            <Link key={label} href={href} className="text-stone-300 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="grid size-24 place-items-center border border-stone-700 bg-white p-1">
            <Image
              src="/brand/wechat-qr.png"
              alt="爱尔兰华人志 WeChat QR code"
              width={96}
              height={98}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-sm leading-6 text-stone-400">WeChat QR<br />扫码关注公众号</p>
        </div>
      </div>
      <div className="border-t border-stone-800 px-4 py-4 text-center text-xs text-stone-500">
        © 2026 Ireland Chinese Journal / 爱尔兰华人志. All rights reserved.
      </div>
    </footer>
  );
}
