import CreatePost from "../../components/post/CreatePost";
import PostCard from "../../components/post/PostCard";

export default function Feed() {
  return (
    <div className="space-y-6">
      <h2 className="font-header text-3xl font-bold text-primary">
        home
      </h2>

      <CreatePost />

      <h3 className="font-header text-2xl font-bold text-primary">
        latest thoughts 
      </h3>

      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}