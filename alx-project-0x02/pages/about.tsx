import type { NextPage } from "next";
import Header from "../components/layout/Header";

const About: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p>Welcome to the About page!</p>
      </main>
    </div>
  );
};

export default About;
