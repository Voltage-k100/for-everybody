import { Bookmark } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { useFeed } from "@/hooks/useFeed";

export default function Bookmarks() {
  const { posts, toggleLike, toggleRepost, toggleBookmark, addComment } = useFeed();
  const bookmarked = posts.filter((p) => p.bookmarked);

  return (
    <div>
      <div className="sticky top-0 md:top-0 bg-background/80 backdrop-blur-md z-20 border-b border-border px-4 py-3">
        <h1 className="font-display font-extrabold text-xl text-foreground">Guardados</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Apenas tu vês as publicações que guardas</p>
      </div>

      {bookmarked.length > 0 ? (
        <div>
          {bookmarked.map((post) => (
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
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
            <Bookmark className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="font-display font-extrabold text-xl text-foreground mb-1">Ainda não guardaste nada</h2>
          <p className="text-muted-foreground text-sm max-w-xs">
            Quando guardares publicações, elas aparecem aqui para leres mais tarde.
          </p>
        </div>
      )}
    </div>
  );
}
