import { useEffect, useState } from "react";
import CreatePost from "../../components/post/CreatePost";
import PostCard from "../../components/post/PostCard";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create post via backend
  const handleCreatePost = async (content) => {
    try {
      // TEMP: hardcoded userId (we’ll replace with auth later)
      const userId = "69838a16ad1f80abbe38ee8d";

      const res = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, userId }),
      });

      if (!res.ok) {
        throw new Error("Failed to create post");
      }

      const newPost = await res.json();
      setPosts((prev) => [newPost, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="font-header text-3xl font-bold text-primary">
        home
      </h2>

      <CreatePost onCreate={handleCreatePost} />

      <h3 className="text-sm font-semibold text-gray-600">
        latest thoughts
      </h3>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
}
