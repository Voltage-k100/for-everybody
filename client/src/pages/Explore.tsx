import { Search, TrendingUp } from "lucide-react";
import { useState } from "react";
import { trends, users, formatCount } from "@/lib/mockData";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Explore() {
  const [searchValue, setSearchValue] = useState("");
  const [following, setFollowing] = useState<Record<string, boolean>>({});

  const toggleFollow = (id: string) => {
    setFollowing((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <div className="sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20 border-b border-border">
        <div className="px-4 py-3">
          <h1 className="font-display font-extrabold text-xl text-foreground mb-3">Explorar</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted-foreground" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Pesquisar pessoas, tópicos, hashtags..."
              className="w-full bg-secondary border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-coral focus:bg-background transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Trending */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-coral" />
          <h2 className="font-display font-extrabold text-lg text-foreground">Tendências de hoje</h2>
        </div>
        <div className="space-y-1">
          {trends.map((trend, idx) => (
            <div
              key={trend.id}
              className="p-3 rounded-xl hover:bg-accent/40 transition-colors cursor-pointer border border-border/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{trend.category}</span>
                <span className="text-xs font-mono-code text-muted-foreground">#{idx + 1}</span>
              </div>
              <span className="font-display font-bold text-base text-foreground block mt-0.5">{trend.tag}</span>
              <span className="text-xs text-muted-foreground">{formatCount(trend.posts)} publicações</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px horizon-divider mx-4" />

      {/* People to follow */}
      <div className="px-4 py-4">
        <h2 className="font-display font-extrabold text-lg text-foreground mb-3">Pessoas para seguir</h2>
        <div className="space-y-1">
          {Object.values(users).map((user) => {
            const isFollowing = following[user.id];
            return (
              <div key={user.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-accent/40 transition-colors">
                <Avatar initials={user.avatar} name={user.name} size="md" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-display font-bold text-sm text-foreground truncate">{user.name}</span>
                    {user.verified && (
                      <BadgeCheck className="w-3.5 h-3.5 text-turquoise shrink-0" fill="currentColor" stroke="white" strokeWidth={1.5} />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono-code block truncate">@{user.handle}</span>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{user.bio}</p>
                </div>
                <Button
                  size="sm"
                  variant={isFollowing ? "outline" : "default"}
                  onClick={() => toggleFollow(user.id)}
                  className={cn(
                    "rounded-full font-display font-bold text-xs px-4 shrink-0",
                    isFollowing && "border-border text-muted-foreground"
                  )}
                >
                  {isFollowing ? "A seguir" : "Seguir"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
