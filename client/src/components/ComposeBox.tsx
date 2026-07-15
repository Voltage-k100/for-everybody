import { useState, useRef } from "react";
import { Image as ImageIcon, Smile, Calendar, MapPin, Sparkles } from "lucide-react";
import { Avatar } from "./Avatar";
import { currentUser } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComposeBoxProps {
  onPost: (content: string) => void;
  placeholder?: string;
  compact?: boolean;
}

export function ComposeBox({ onPost, placeholder, compact }: ComposeBoxProps) {
  const [content, setContent] = useState("");
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const maxLength = 280;
  const remaining = maxLength - content.length;
  const canPost = content.trim().length > 0 && remaining >= 0;

  const handleSubmit = () => {
    if (canPost) {
      onPost(content.trim());
      setContent("");
      setFocused(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 300) + "px";
  };

  const ringColor = remaining < 0 ? "text-destructive" : remaining < 20 ? "text-coral" : "text-muted-foreground";

  return (
    <div className={cn("border-b border-border", !compact && "px-4 py-3")}>
      <div className="flex gap-3">
        <Avatar initials={currentUser.avatar} name={currentUser.name} size="md" />
        <div className="flex-1 min-w-0">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={handleInput}
            onFocus={() => setFocused(true)}
            placeholder={placeholder || "O que está a acontecer?"}
            rows={compact && !focused ? 1 : 2}
            className="w-full bg-transparent text-[17px] leading-relaxed text-foreground placeholder:text-muted-foreground resize-none outline-none border-none mt-1"
            maxLength={maxLength + 50}
          />

          {(focused || content.length > 0) && (
            <>
              <div className="h-px horizon-divider my-2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-turquoise">
                  <button className="p-2 rounded-full hover:bg-turquoise/10 transition-colors" title="Adicionar imagem">
                    <ImageIcon className="w-[18px] h-[18px]" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-turquoise/10 transition-colors" title="Emoji">
                    <Smile className="w-[18px] h-[18px]" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-turquoise/10 transition-colors" title="Agendar">
                    <Calendar className="w-[18px] h-[18px]" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-turquoise/10 transition-colors" title="Localização">
                    <MapPin className="w-[18px] h-[18px]" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-turquoise/10 transition-colors" title="IA sugestão">
                    <Sparkles className="w-[18px] h-[18px]" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {content.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7">
                        <svg className="w-7 h-7 -rotate-90" viewBox="0 0 28 28">
                          <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-border" />
                          <circle
                            cx="14"
                            cy="14"
                            r="12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={ringColor}
                            strokeDasharray={`${(content.length / maxLength) * 75.4} 75.4`}
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      {remaining < 20 && (
                        <span className={cn("text-sm tabular-nums", ringColor)}>
                          {remaining}
                        </span>
                      )}
                    </div>
                  )}
                  <Button
                    size="sm"
                    onClick={handleSubmit}
                    disabled={!canPost}
                    className="rounded-full font-display font-bold px-5"
                  >
                    Publicar
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
