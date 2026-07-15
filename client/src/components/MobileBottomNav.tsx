import { Home, Search, Bell, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  activeRoute: string;
  onNavigate: (route: string) => void;
}

const items = [
  { id: "home", icon: Home },
  { id: "explore", icon: Search },
  { id: "notifications", icon: Bell, badge: 3 },
  { id: "messages", icon: Mail, badge: 1 },
  { id: "profile", icon: User },
];

export function MobileBottomNav({ activeRoute, onNavigate }: MobileBottomNavProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around h-14 px-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeRoute === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "relative flex items-center justify-center w-12 h-12 rounded-xl transition-colors",
                active ? "text-coral" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("w-[22px] h-[22px]", active && "stroke-[2.5]")} />
              {item.badge && (
                <span className="absolute top-1.5 right-1.5 bg-coral text-coral-foreground text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
