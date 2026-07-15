import { useState, useCallback } from "react";
import { initialPosts, currentUser, type Post } from "@/lib/mockData";

export function useFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const toggleLike = useCallback((id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );
  }, []);

  const toggleRepost = useCallback((id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              reposted: !p.reposted,
              reposts: p.reposted ? p.reposts - 1 : p.reposts + 1,
            }
          : p
      )
    );
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, bookmarked: !p.bookmarked } : p
      )
    );
  }, []);

  const addPost = useCallback((content: string) => {
    const newPost: Post = {
      id: "p" + Date.now(),
      authorId: currentUser.id,
      content,
      timestamp: Date.now(),
      likes: 0,
      reposts: 0,
      comments: 0,
      liked: false,
      reposted: false,
      bookmarked: false,
    };
    setPosts((prev) => [newPost, ...prev]);
  }, []);

  const addComment = useCallback((id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, comments: p.comments + 1 } : p
      )
    );
  }, []);

  return { posts, toggleLike, toggleRepost, toggleBookmark, addPost, addComment };
}
