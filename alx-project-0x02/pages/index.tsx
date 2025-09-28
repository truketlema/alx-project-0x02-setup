import type { NextPage } from "next";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-semibold">
          Welcome to ALX Next.js Project!
        </h2>
        <p className="mt-4">
          This is your first page using Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
};

export default Home;
