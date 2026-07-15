import { Heart, Repeat2, MessageCircle, Bookmark, Share, MoreHorizontal, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { users, formatCount, formatTime, type Post } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  onLike: (id: string) => void;
  onRepost: (id: string) => void;
  onBookmark: (id: string) => void;
  onComment: (id: string) => void;
}

export function PostCard({ post, onLike, onRepost, onBookmark, onComment }: PostCardProps) {
  // Proteção contra author undefined (era o erro)
  const author = users[post.authorId] || { 
    name: "Usuário Desconhecido", 
    handle: "unknown", 
    avatar: "??", 
    verified: false 
  };

  const [pulse, setPulse] = useState(false);

  const handleLike = () => {
    if (!post.liked) {
      setPulse(true);
      setTimeout(() => setPulse(false), 350);
    }
    onLike(post.id);
  };

  return (
    <article className="post-enter px-4 py-3 border-b border-border hover:bg-accent/30 transition-colors duration-150 cursor-pointer">
      <div className="flex gap-3">
        <Avatar 
          initials={author.avatar} 
          name={author.name} 
          size="md" 
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-display font-bold text-foreground truncate">{author.name}</span>
            {author.verified && (
              <BadgeCheck className="w-4 h-4 text-turquoise shrink-0" fill="currentColor" stroke="white" strokeWidth={1.5} />
            )}
            <span className="text-muted-foreground font-mono-code text-xs">@{author.handle}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground text-xs">{formatTime(post.timestamp)}</span>
            
            <button className="ml-auto text-muted-foreground hover:text-foreground transition-colors -mr-1 p-1 rounded-full hover:bg-accent" onClick={(e) => e.stopPropagation()}>
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-1 text-[15px] leading-relaxed text-foreground whitespace-pre-line">
            {post.content}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-turquoise text-sm font-medium hover:underline cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-3 flex items-center justify-between max-w-md text-muted-foreground">
            <button
              className="flex items-center gap-1.5 text-sm hover:text-turquoise transition-colors group -ml-2 px-2 py-1 rounded-full hover:bg-turquoise/10"
              onClick={(e) => { e.stopPropagation(); onComment(post.id); }}
            >
              <MessageCircle className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
              <span>{formatCount(post.comments)}</span>
            </button>

            <button
              className={cn(
                "flex items-center gap-1.5 text-sm transition-colors group px-2 py-1 rounded-full",
                post.reposted ? "text-turquoise" : "hover:text-turquoise hover:bg-turquoise/10"
              )}
              onClick={(e) => { e.stopPropagation(); onRepost(post.id); }}
            >
              <Repeat2 className={cn("w-[18px] h-[18px] transition-transform", post.reposted && "scale-110")} />
              <span>{formatCount(post.reposts)}</span>
            </button>

            <button
              className={cn(
                "flex items-center gap-1.5 text-sm transition-colors group px-2 py-1 rounded-full",
                post.liked ? "text-coral" : "hover:text-coral hover:bg-coral/10"
              )}
              onClick={(e) => { e.stopPropagation(); handleLike(); }}
            >
              <Heart className={cn("w-[18px] h-[18px] transition-transform", pulse && "coral-pulse", post.liked && "fill-current")} />
              <span>{formatCount(post.likes)}</span>
            </button>

            <button
              className={cn(
                "flex items-center gap-1.5 text-sm transition-colors group px-2 py-1 rounded-full",
                post.bookmarked ? "text-coral" : "hover:text-coral hover:bg-coral/10"
              )}
              onClick={(e) => { e.stopPropagation(); onBookmark(post.id); }}
            >
              <Bookmark className={cn("w-[18px] h-[18px]", post.bookmarked && "fill-current")} />
            </button>

            <button
              className="flex items-center gap-1.5 text-sm hover:text-turquoise transition-colors group px-2 py-1 rounded-full hover:bg-turquoise/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Share className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
