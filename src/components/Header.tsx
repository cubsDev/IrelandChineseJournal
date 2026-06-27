"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, MessageCircle } from "lucide-react";
import { navItems } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-6">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation"
              />
            }
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[86vw] max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/brand/ireland-chinese-journal-logo.png"
                  alt="Ireland Chinese Journal / 爱尔兰华人志"
                  width={180}
                  height={90}
                  className="h-14 w-auto"
                  priority
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col border-t border-stone-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-stone-200 px-4 py-3 text-base font-medium text-stone-900"
                >
                  <span>{item.zh}</span>
                  <span className="ml-2 text-xs text-stone-500">{item.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="shrink-0" aria-label="Ireland Chinese Journal homepage">
          <Image
            src="/brand/ireland-chinese-journal-logo.png"
            alt="Ireland Chinese Journal / 爱尔兰华人志"
            width={176}
            height={88}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-2 text-xs font-medium leading-tight text-stone-700 hover:text-red-800 xl:text-sm"
            >
              {item.zh}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden w-56 items-center gap-2 md:flex">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-stone-400"
              aria-hidden="true"
            />
            <Input
              className="h-8 rounded-sm border-stone-300 bg-white pl-8"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <Button variant="outline" size="sm" className="rounded-sm">
            <MessageCircle className="size-4" aria-hidden="true" />
            WeChat
          </Button>
        </div>
      </div>
    </header>
  );
}
