import { useState } from "react";
import CreatePost from "../../components/post/CreatePost";
import PostCard from "../../components/post/PostCard";

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "alice",
      content: "I think social platforms should focus more on safety.",
      time: "2h",
    },
    {
      id: 2,
      author: "bob",
      content: "This project is about ethical moderation, not engagement.",
      time: "4h",
    },
    {
      id: 3,
      author: "charlie",
      content: "Text-only platforms feel calmer to read.",
      time: "1d",
    },
  ]);

  const handleCreatePost = (content) => {
    const newPost = {
      id: Date.now(),
      author: "you",
      content,
      time: "now",
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  const handleDeletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="font-header text-3xl font-bold text-primary">
        Home
      </h2>

      <CreatePost onCreate={handleCreatePost} />

      <h3 className="text-sm font-semibold text-gray-600">
        Latest thoughts
      </h3>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDelete={handleDeletePost}
        />
      ))}
    </div>
  );
}