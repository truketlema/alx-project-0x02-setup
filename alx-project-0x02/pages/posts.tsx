import type { NextPage, GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id} // React key
            id={post.id} // Explicitly pass the id
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const posts: PostProps[] = await res.json();

    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: { posts: [] },
    };
  }
};

export default Posts;
