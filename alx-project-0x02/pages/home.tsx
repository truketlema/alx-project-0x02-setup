import type { NextPage } from "next";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>Welcome to the Home page!</p>
      </main>
    </div>
  );
};

export default Home;
