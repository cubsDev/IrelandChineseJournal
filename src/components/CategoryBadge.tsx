import { Badge } from "@/components/ui/badge";

export function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="outline"
      className="h-6 rounded-sm border-stone-300 bg-white px-2 text-[11px] font-semibold tracking-[0.12em] text-stone-700 uppercase"
    >
      {children}
    </Badge>
  );
}
