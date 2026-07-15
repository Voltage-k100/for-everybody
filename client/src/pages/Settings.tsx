import { useState } from "react";
import { User, Bell, Lock, Palette, Globe, HelpCircle, LogOut, ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    likes: true,
    comments: true,
    follows: true,
    mentions: false,
  });

  const sections = [
    {
      title: "Conta",
      items: [
        { icon: User, label: "Informação do perfil", desc: "Nome, bio, foto" },
        { icon: Lock, label: "Privacidade e segurança", desc: "Palavra-passe, sessões" },
      ],
    },
    {
      title: "Preferências",
      items: [
        { icon: Bell, label: "Notificações", desc: "Email, push" },
        { icon: Globe, label: "Idioma e região", desc: "Português (Brasil)" },
      ],
    },
    {
      title: "Sobre",
      items: [
        { icon: HelpCircle, label: "Centro de ajuda", desc: "Guias e suporte" },
      ],
    },
  ];

  return (
    <div>
      <div className="sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20 border-b border-border px-4 py-3">
        <h1 className="font-display font-extrabold text-xl text-foreground">Definições</h1>
      </div>

      {/* Appearance */}
      <div className="px-4 py-4 border-b border-border">
        <h2 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-wide mb-3">Aparência</h2>
        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/30 transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent">
              {theme === "dark" ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground">Modo escuro</p>
              <p className="text-xs text-muted-foreground">Alterna entre tema claro e escuro</p>
            </div>
          </div>
          <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
        </div>
      </div>

      {/* Notification preferences */}
      <div className="px-4 py-4 border-b border-border">
        <h2 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-wide mb-3">Notificações</h2>
        <div className="space-y-1">
          {[
            { key: "likes" as const, label: "Gostos", desc: "Quando alguém gosta da tua publicação" },
            { key: "comments" as const, label: "Comentários", desc: "Quando alguém comenta" },
            { key: "follows" as const, label: "Novos seguidores", desc: "Quando alguém te segue" },
            { key: "mentions" as const, label: "Menções", desc: "Quando alguém te menciona" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/30 transition-colors">
              <div>
                <p className="font-display font-bold text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Switch
                checked={notifications[item.key]}
                onCheckedChange={(v) => setNotifications((prev) => ({ ...prev, [item.key]: v }))}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Settings sections */}
      {sections.map((section) => (
        <div key={section.title} className="px-4 py-4 border-b border-border">
          <h2 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-wide mb-3">{section.title}</h2>
          <div className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent/30 transition-colors text-left"
                >
                  <div className="p-2 rounded-lg bg-accent">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-sm text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Logout */}
      <div className="px-4 py-4">
        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-destructive/10 transition-colors text-left">
          <div className="p-2 rounded-lg bg-destructive/10">
            <LogOut className="w-5 h-5 text-destructive" />
          </div>
          <span className="font-display font-bold text-sm text-destructive">Terminar sessão</span>
        </button>
      </div>

      <div className="px-4 py-6 text-center">
        <p className="text-xs text-muted-foreground font-mono-code">For Everybody v1.0.0</p>
        <p className="text-xs text-muted-foreground mt-1">Feito com calor para todos.</p>
      </div>
    </div>
  );
}
