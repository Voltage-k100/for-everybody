import { useState } from "react";
import { Mail, Search, Send, BadgeCheck, ArrowLeft } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { users, formatTime } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
}

const conversations = [
  {
    id: "c1",
    userId: "u3",
    lastMessage: "Adorei a tua ideia sobre a praça digital. Podemos conversar?",
    timestamp: Date.now() - 15 * 60 * 1000,
    unread: true,
  },
  {
    id: "c2",
    userId: "u5",
    lastMessage: "Viste o último paper sobre IA e ética? É muito relevante.",
    timestamp: Date.now() - 2 * 60 * 60 * 1000,
    unread: true,
  },
  {
    id: "c3",
    userId: "u1",
    lastMessage: "O design ficou incrível! Parabéns.",
    timestamp: Date.now() - 5 * 60 * 60 * 1000,
    unread: false,
  },
  {
    id: "c4",
    userId: "u7",
    lastMessage: "Obrigada pela partilha. As tuas fotos são inspiradoras.",
    timestamp: Date.now() - 24 * 60 * 60 * 1000,
    unread: false,
  },
];

const mockMessages: Message[] = [
  { id: "m1", senderId: "u3", text: "Olá! Vi a tua publicação sobre o conceito de praça digital e achei fascinante.", timestamp: Date.now() - 30 * 60 * 1000 },
  { id: "m2", senderId: "me", text: "Obrigado! Acho que precisamos de mais espaços de conversa e menos arenas.", timestamp: Date.now() - 28 * 60 * 1000 },
  { id: "m3", senderId: "u3", text: "Concordo totalmente. Estou a escrever um artigo sobre isso. Quer colaborar?", timestamp: Date.now() - 20 * 60 * 1000 },
  { id: "m4", senderId: "u3", text: "Adorei a tua ideia sobre a praça digital. Podemos conversar?", timestamp: Date.now() - 15 * 60 * 1000 },
];

export default function Messages() {
  const [selectedConv, setSelectedConv] = useState<string | null>(null);
  const [messageText, setMessageText] = useState("");

  const currentConv = conversations.find((c) => c.id === selectedConv);
  const currentConvUser = currentConv ? users[currentConv.userId] : null;

  const handleSend = () => {
    if (messageText.trim()) {
      setMessageText("");
    }
  };

  // Mobile: show conversation list or chat
  if (selectedConv && currentConvUser) {
    return (
      <div className="flex flex-col h-screen md:h-screen">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background/80 backdrop-blur-md">
          <button
            onClick={() => setSelectedConv(null)}
            className="md:hidden p-1.5 rounded-full hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <Avatar initials={currentConvUser.avatar} name={currentConvUser.name} size="sm" />
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-sm text-foreground truncate">{currentConvUser.name}</span>
              {currentConvUser.verified && (
                <BadgeCheck className="w-3.5 h-3.5 text-turquoise shrink-0" fill="currentColor" stroke="white" strokeWidth={1.5} />
              )}
            </div>
            <span className="text-xs text-muted-foreground font-mono-code">@{currentConvUser.handle}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {mockMessages.map((msg) => {
            const isMe = msg.senderId === "me";
            return (
              <div key={msg.id} className={cn("flex", isMe ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[75%] px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed",
                    isMe
                      ? "bg-coral text-coral-foreground rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  )}
                >
                  {msg.text}
                  <span className={cn("block text-[10px] mt-1 font-mono-code", isMe ? "text-coral-foreground/70" : "text-muted-foreground")}>
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border px-4 py-3 flex items-center gap-2">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Escreve uma mensagem..."
            className="flex-1 bg-secondary border border-border rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-coral transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!messageText.trim()}
            className="p-2.5 rounded-full bg-coral text-coral-foreground disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20 border-b border-border px-4 py-3">
        <h1 className="font-display font-extrabold text-xl text-foreground mb-3">Mensagens</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar conversas..."
            className="w-full bg-secondary border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-coral focus:bg-background transition-colors"
          />
        </div>
      </div>

      <div>
        {conversations.map((conv) => {
          const user = users[conv.userId];
          return (
            <button
              key={conv.id}
              onClick={() => setSelectedConv(conv.id)}
              className="w-full flex items-center gap-3 px-4 py-3.5 border-b border-border hover:bg-accent/30 transition-colors text-left"
            >
              <Avatar initials={user.avatar} name={user.name} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-display font-bold text-sm text-foreground truncate">{user.name}</span>
                  {user.verified && (
                    <BadgeCheck className="w-3.5 h-3.5 text-turquoise shrink-0" fill="currentColor" stroke="white" strokeWidth={1.5} />
                  )}
                  <span className="text-xs text-muted-foreground font-mono-code ml-auto shrink-0">{formatTime(conv.timestamp)}</span>
                </div>
                <p className={cn("text-sm truncate mt-0.5", conv.unread ? "text-foreground font-medium" : "text-muted-foreground")}>
                  {conv.lastMessage}
                </p>
              </div>
              {conv.unread && (
                <div className="w-2.5 h-2.5 rounded-full bg-coral shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="font-display font-extrabold text-lg text-foreground mb-1">A tua caixa de entrada</h2>
        <p className="text-muted-foreground text-sm max-w-xs">
          Envia e recebe mensagens privadas com qualquer pessoa no For Everybody.
        </p>
      </div>
    </div>
  );
}
