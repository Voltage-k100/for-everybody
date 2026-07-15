import { Home, Search, Bell, Mail, Bookmark, User, Settings, MoreHorizontal, BadgeCheck, Sparkles } from "lucide-react";
import { Avatar } from "./Avatar";
import { currentUser, users } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface LeftSidebarProps {
  activeRoute: string;
  onNavigate: (route: string) => void;
}

const navItems = [
  { id: "home", label: "Início", icon: Home },
  { id: "explore", label: "Explorar", icon: Search },
  { id: "notifications", label: "Notificações", icon: Bell, badge: 3 },
  { id: "messages", label: "Mensagens", icon: Mail, badge: 1 },
  { id: "bookmarks", label: "Guardados", icon: Bookmark },
  { id: "profile", label: "Perfil", icon: User },
  { id: "settings", label: "Definições", icon: Settings },
];

export function LeftSidebar({ activeRoute, onNavigate }: LeftSidebarProps) {
  return (
    <div className="hidden md:flex flex-col h-screen sticky top-0 w-[60px] xl:w-[260px] shrink-0 border-r border-border">
      {/* Logo */}
      <div className="px-2 xl:px-4 pt-4 pb-2">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 p-2 rounded-xl hover:bg-accent transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-coral flex items-center justify-center shrink-0 shadow-sm">
            <div className="w-5 h-2.5 bg-turquoise rounded-sm" />
          </div>
          <span className="hidden xl:block font-display font-extrabold text-lg text-foreground">For Everybody</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 xl:px-3 py-2 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeRoute === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-3 py-2.5 rounded-xl transition-all duration-150 group",
                active ? "bg-accent text-foreground font-bold" : "text-foreground hover:bg-accent"
              )}
            >
              <div className="relative shrink-0">
                <Icon className={cn("w-[22px] h-[22px]", active && "stroke-[2.5]")} />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-1.5 bg-coral text-coral-foreground text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="hidden xl:block text-[15px]">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Post button */}
      <div className="px-2 xl:px-3 pb-3 hidden xl:block">
        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-coral text-coral-foreground font-display font-bold text-[15px] py-3 rounded-full hover:opacity-90 transition-opacity shadow-sm"
        >
          Publicar
        </button>
      </div>
      <div className="px-2 pb-3 md:block xl:hidden">
        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-coral text-coral-foreground p-3 rounded-full hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center"
        >
          <Sparkles className="w-5 h-5" />
        </button>
      </div>

      {/* User card */}
      <div className="px-2 xl:px-3 pb-3">
        <button className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-accent transition-colors">
          <Avatar initials={currentUser.avatar} name={currentUser.name} size="sm" />
          <div className="hidden xl:block flex-1 min-w-0 text-left">
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-sm text-foreground truncate">{currentUser.name}</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono-code block truncate">@{currentUser.handle}</span>
          </div>
          <MoreHorizontal className="hidden xl:block w-4 h-4 text-muted-foreground shrink-0" />
        </button>
      </div>
    </div>
  );
}
