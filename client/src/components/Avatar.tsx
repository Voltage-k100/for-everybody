import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const colorPalette = [
  "bg-[oklch(0.68_0.19_35)]",
  "bg-[oklch(0.72_0.12_180)]",
  "bg-[oklch(0.60_0.15_280)]",
  "bg-[oklch(0.65_0.16_140)]",
  "bg-[oklch(0.62_0.18_15)]",
  "bg-[oklch(0.58_0.14_200)]",
  "bg-[oklch(0.70_0.14_320)]",
  "bg-[oklch(0.64_0.17_90)]",
];

function getColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorPalette[Math.abs(hash) % colorPalette.length];
}

const sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-xl",
};

export function Avatar({ initials, name, size = "md", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-semibold text-white shrink-0 shadow-sm",
        getColor(name),
        sizeMap[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
