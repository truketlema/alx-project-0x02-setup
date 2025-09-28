import type { NextPage } from "next";
import Header from "@/components/layout/Header";

const Posts: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p>All posts will be displayed here.</p>
      </main>
    </div>
  );
};

export default Posts;
