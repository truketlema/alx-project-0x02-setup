import type { NextPage } from "next";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

interface Post {
  title: string;
  content: string;
}

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Card 1", content: "This is the content of the first card." },
    { title: "Card 2", content: "This is the content of the second card." },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>

        <PostModal onAddPost={handleAddPost} />

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </main>
    </div>
  );
};

export default Home;
