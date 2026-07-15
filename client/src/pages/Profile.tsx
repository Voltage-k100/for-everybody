import { useState } from "react";
import { Calendar, MapPin, Link2, BadgeCheck, ArrowLeft, MoreHorizontal, Mail } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { PostCard } from "@/components/PostCard";
import { ComposeBox } from "@/components/ComposeBox";
import { useFeed } from "@/hooks/useFeed";
import { currentUser, users, formatCount } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Profile() {
  const { posts, toggleLike, toggleRepost, toggleBookmark, addPost, addComment } = useFeed();
  const [tab, setTab] = useState<"posts" | "replies" | "media" | "likes">("posts");
  const [isFollowing, setIsFollowing] = useState(false);

  const user = currentUser;
  const userPosts = posts.filter((p) => p.authorId === user.id);
  const likedPosts = posts.filter((p) => p.liked);

  const tabs = [
    { id: "posts" as const, label: "Publicações" },
    { id: "replies" as const, label: "Respostas" },
    { id: "media" as const, label: "Multimédia" },
    { id: "likes" as const, label: "Gostos" },
  ];

  const displayPosts = tab === "likes" ? likedPosts : userPosts;

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20 border-b border-border px-4 py-3 flex items-center gap-4">
        <button className="md:hidden p-1.5 rounded-full hover:bg-accent transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="min-w-0">
          <h1 className="font-display font-extrabold text-lg text-foreground truncate">{user.name}</h1>
          <span className="text-xs text-muted-foreground">{formatCount(userPosts.length)} publicações</span>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-32 md:h-40 bg-gradient-to-br from-coral/60 via-coral/30 to-turquoise/40">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.72 0.12 180 / 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.68 0.19 35 / 0.5) 0%, transparent 50%)"
        }} />
      </div>

      {/* Profile info */}
      <div className="px-4 relative">
        <div className="flex items-end justify-between -mt-10 mb-3">
          <div className="ring-4 ring-background rounded-full">
            <Avatar initials={user.avatar} name={user.name} size="xl" />
          </div>
          <div className="flex gap-2 mb-2">
            <button className="p-2 rounded-full border border-border hover:bg-accent transition-colors">
              <MoreHorizontal className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 rounded-full border border-border hover:bg-accent transition-colors">
              <Mail className="w-5 h-5 text-foreground" />
            </button>
            <Button
              variant={isFollowing ? "outline" : "default"}
              onClick={() => setIsFollowing(!isFollowing)}
              className={cn(
                "rounded-full font-display font-bold px-5",
                isFollowing && "border-border text-muted-foreground"
              )}
            >
              {isFollowing ? "A seguir" : "Seguir"}
            </Button>
          </div>
        </div>

        <div className="pb-4">
          <div className="flex items-center gap-1">
            <h2 className="font-display font-extrabold text-xl text-foreground">{user.name}</h2>
            {false && <BadgeCheck className="w-5 h-5 text-turquoise" fill="currentColor" stroke="white" strokeWidth={1.5} />}
          </div>
          <span className="text-muted-foreground font-mono-code text-sm">@{user.handle}</span>

          <p className="mt-3 text-[15px] text-foreground leading-relaxed">{user.bio}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Para todo o mundo
            </span>
            <span className="flex items-center gap-1">
              <Link2 className="w-4 h-4" />
              <span className="text-turquoise hover:underline cursor-pointer">foreverybody.app</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Juntou-se em jul 2026
            </span>
          </div>

          <div className="flex gap-4 mt-3 text-sm">
            <span className="cursor-pointer hover:underline">
              <span className="font-display font-bold text-foreground">{formatCount(user.following)}</span>
              <span className="text-muted-foreground ml-1">a seguir</span>
            </span>
            <span className="cursor-pointer hover:underline">
              <span className="font-display font-bold text-foreground">{formatCount(user.followers)}</span>
              <span className="text-muted-foreground ml-1">seguidores</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border sticky top-14 md:top-12 bg-background/80 backdrop-blur-md z-10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "flex-1 py-3 text-sm font-display font-bold transition-colors relative",
              tab === t.id ? "text-foreground" : "text-muted-foreground hover:bg-accent/30"
            )}
          >
            {t.label}
            {tab === t.id && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-coral rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === "posts" && (
        <ComposeBox onPost={addPost} placeholder="Escreve algo novo..." compact />
      )}

      {displayPosts.length > 0 ? (
        <div>
          {displayPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={toggleLike}
              onRepost={toggleRepost}
              onBookmark={toggleBookmark}
              onComment={addComment}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <h2 className="font-display font-extrabold text-lg text-foreground mb-1">
            {tab === "posts" && "Ainda não publicaste nada"}
            {tab === "replies" && "Sem respostas"}
            {tab === "media" && "Sem multimédia"}
            {tab === "likes" && "Ainda não gostaste de nada"}
          </h2>
          <p className="text-muted-foreground text-sm">
            {tab === "posts" && "Quando publicares, as tuas publicações aparecem aqui."}
            {tab === "likes" && "Quando gostares de publicações, elas aparecem aqui."}
          </p>
        </div>
      )}
    </div>
  );
}
