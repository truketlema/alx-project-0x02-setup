import type { NextPage } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { useEffect, useState } from "react";
import { type PostProps } from "@/interfaces";

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const data: PostProps[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              id={0}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Posts;
