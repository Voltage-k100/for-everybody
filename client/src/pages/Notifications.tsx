import { Heart, Repeat2, UserPlus, MessageCircle, BadgeCheck } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { users } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: "like" | "repost" | "follow" | "comment";
  userId: string;
  text: string;
  time: string;
}

const notifications: Notification[] = [
  { id: "n1", type: "like", userId: "u3", text: "gostou da tua publicação sobre design acolhedor", time: "5min" },
  { id: "n2", type: "follow", userId: "u5", text: "começou a seguir-te", time: "20min" },
  { id: "n3", type: "repost", userId: "u1", text: "partilhou a tua publicação sobre a praça digital", time: "1h" },
  { id: "n4", type: "comment", userId: "u7", text: "comentou: \"Adorei esta perspetiva!\"", time: "2h" },
  { id: "n5", type: "like", userId: "u2", text: "gostou da tua publicação sobre TypeScript", time: "3h" },
  { id: "n6", type: "follow", userId: "u4", text: "começou a seguir-te", time: "5h" },
  { id: "n7", type: "like", userId: "u8", text: "gostou da tua publicação sobre IA e ética", time: "8h" },
  { id: "n8", type: "repost", userId: "u6", text: "partilhou a tua publicação sobre empreendedorismo", time: "12h" },
];

const iconMap = {
  like: { icon: Heart, color: "text-coral", bg: "bg-coral/10" },
  repost: { icon: Repeat2, color: "text-turquoise", bg: "bg-turquoise/10" },
  follow: { icon: UserPlus, color: "text-turquoise", bg: "bg-turquoise/10" },
  comment: { icon: MessageCircle, color: "text-turquoise", bg: "bg-turquoise/10" },
};

export default function Notifications() {
  return (
    <div>
      <div className="sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20 border-b border-border px-4 py-3">
        <h1 className="font-display font-extrabold text-xl text-foreground">Notificações</h1>
      </div>

      <div>
        {notifications.map((notif) => {
          const user = users[notif.userId];
          const { icon: Icon, color, bg } = iconMap[notif.type];
          return (
            <div
              key={notif.id}
              className="post-enter flex gap-3 px-4 py-3.5 border-b border-border hover:bg-accent/30 transition-colors cursor-pointer"
            >
              <div className={cn("p-2 rounded-full shrink-0", bg)}>
                <Icon className={cn("w-[18px] h-[18px]", color, notif.type === "like" && "fill-current")} />
              </div>
              <div className="flex-1 min-w-0">
                <Avatar initials={user.avatar} name={user.name} size="sm" className="mb-1.5" />
                <p className="text-[15px] text-foreground leading-snug">
                  <span className="font-display font-bold">{user.name}</span>
                  {user.verified && (
                    <BadgeCheck className="w-3.5 h-3.5 text-turquoise inline ml-1" fill="currentColor" stroke="white" strokeWidth={1.5} />
                  )}
                  <span className="text-muted-foreground"> {notif.text}</span>
                </p>
                <span className="text-xs text-muted-foreground font-mono-code">{notif.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
