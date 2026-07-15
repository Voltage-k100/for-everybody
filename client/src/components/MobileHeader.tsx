import { Sparkles } from "lucide-react";

interface MobileHeaderProps {
  title?: string;
  showLogo?: boolean;
}

export function MobileHeader({ title, showLogo }: MobileHeaderProps) {
  return (
    <div className="md:hidden sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between px-4 h-14">
        {showLogo ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center shadow-sm">
              <div className="w-4 h-2 bg-turquoise rounded-sm" />
            </div>
            <span className="font-display font-extrabold text-base text-foreground">For Everybody</span>
          </div>
        ) : (
          <h1 className="font-display font-extrabold text-lg text-foreground">{title}</h1>
        )}
        <button className="p-2 rounded-full hover:bg-accent transition-colors text-turquoise">
          <Sparkles className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
