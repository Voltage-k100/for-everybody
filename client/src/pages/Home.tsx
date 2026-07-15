import { useState } from "react";
import { Sparkles } from "lucide-react";
import { ComposeBox } from "@/components/ComposeBox";
import { PostCard } from "@/components/PostCard";
import { FeedTabs } from "@/components/FeedTabs";
import { useFeed } from "@/hooks/useFeed";

export default function Home() {
  const { posts, toggleLike, toggleRepost, toggleBookmark, addPost, addComment } = useFeed();
  const [tab, setTab] = useState<"foryou" | "following">("foryou");

  const followingPosts = posts.filter((p) => p.reposted || p.authorId !== "me");

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20">
        <div className="hidden md:flex items-center justify-between px-4 py-3 border-b border-border">
          <h1 className="font-display font-extrabold text-xl text-foreground">Início</h1>
          <button className="p-2 rounded-full hover:bg-accent transition-colors text-turquoise">
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
        <FeedTabs active={tab} onChange={setTab} />
      </div>

      {/* Compose */}
      {tab === "foryou" && <ComposeBox onPost={addPost} />}

      {/* Feed */}
      <div>
        {(tab === "foryou" ? posts : followingPosts).map((post) => (
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

      {/* End of feed */}
      <div className="py-10 text-center">
        <p className="text-sm text-muted-foreground">Chegaste ao fim do feed.</p>
        <p className="text-xs text-muted-foreground mt-1">Volta mais tarde para mais conteúdo.</p>
      </div>
    </div>
  );
}
