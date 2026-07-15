import { cn } from "@/lib/utils";

interface FeedTabsProps {
  active: "foryou" | "following";
  onChange: (tab: "foryou" | "following") => void;
}

export function FeedTabs({ active, onChange }: FeedTabsProps) {
  return (
    <div className="flex border-b border-border sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20">
      {(["foryou", "following"] as const).map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "flex-1 py-3.5 text-[15px] font-display font-bold transition-colors relative",
            active === tab ? "text-foreground" : "text-muted-foreground hover:bg-accent/30"
          )}
        >
          {tab === "foryou" ? "Para ti" : "A seguir"}
          {active === tab && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-coral rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
