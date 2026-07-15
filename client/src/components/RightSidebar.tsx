import { Search, TrendingUp, BadgeCheck, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { trends, users, suggestedUsers, formatCount } from "@/lib/mockData";
import { Avatar } from "./Avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RightSidebarProps {
  onNavigate: (route: string) => void;
}

export function RightSidebar({ onNavigate }: RightSidebarProps) {
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const [searchValue, setSearchValue] = useState("");

  const toggleFollow = (id: string) => {
    setFollowing((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="hidden lg:flex flex-col w-[300px] xl:w-[340px] shrink-0 border-l border-border h-screen sticky top-0 overflow-y-auto">
      {/* Search */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-md px-4 pt-3 pb-2 z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted-foreground" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Pesquisar no For Everybody"
            className="w-full bg-secondary border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-coral focus:bg-background transition-colors"
          />
        </div>
      </div>

      {/* Trends */}
      <div className="px-4 py-3">
        <h2 className="font-display font-extrabold text-xl text-foreground mb-1">Tendências</h2>
        <div className="space-y-0.5">
          {trends.map((trend) => (
            <button
              key={trend.id}
              className="w-full flex items-start justify-between p-3 rounded-xl hover:bg-accent/50 transition-colors text-left group"
            >
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground block">{trend.category}</span>
                <span className="font-display font-bold text-[15px] text-foreground block">{trend.tag}</span>
                <span className="text-xs text-muted-foreground">{formatCount(trend.posts)} publicações</span>
              </div>
              <MoreHorizontal className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
            </button>
          ))}
        </div>
      </div>

      <div className="h-px horizon-divider mx-4" />

      {/* Who to follow */}
      <div className="px-4 py-3">
        <h2 className="font-display font-extrabold text-xl text-foreground mb-1">Quem seguir</h2>
        <div className="space-y-0.5">
          {suggestedUsers.map((uid) => {
            const user = users[uid];
            const isFollowing = following[uid];
            return (
              <div key={uid} className="flex items-center gap-3 p-2 rounded-xl hover:bg-accent/50 transition-colors">
                <Avatar initials={user.avatar} name={user.name} size="md" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-display font-bold text-sm text-foreground truncate">{user.name}</span>
                    {user.verified && (
                      <BadgeCheck className="w-3.5 h-3.5 text-turquoise shrink-0" fill="currentColor" stroke="white" strokeWidth={1.5} />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono-code block truncate">@{user.handle}</span>
                </div>
                <Button
                  size="sm"
                  variant={isFollowing ? "outline" : "default"}
                  onClick={() => toggleFollow(uid)}
                  className={cn(
                    "rounded-full font-display font-bold text-xs px-3.5 shrink-0",
                    isFollowing && "border-border text-muted-foreground"
                  )}
                >
                  {isFollowing ? "A seguir" : "Seguir"}
                </Button>
              </div>
            );
          })}
        </div>
        <button className="mt-2 text-sm text-turquoise hover:underline font-medium pl-2">
          Ver mais sugestões
        </button>
      </div>

      <div className="h-px horizon-divider mx-4" />

      {/* Footer */}
      <div className="px-4 py-4 text-xs text-muted-foreground">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="hover:underline cursor-pointer">Sobre</span>
          <span className="hover:underline cursor-pointer">Termos</span>
          <span className="hover:underline cursor-pointer">Privacidade</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
          <span className="hover:underline cursor-pointer">Ajuda</span>
          <span className="hover:underline cursor-pointer">Anúncios</span>
        </div>
        <p className="mt-2 font-mono-code">© 2026 For Everybody</p>
      </div>
    </div>
  );
}
