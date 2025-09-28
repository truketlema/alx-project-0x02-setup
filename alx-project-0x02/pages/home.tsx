import type { NextPage } from "next";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>

        {/* Using the reusable Card component */}
        <Card title="Card 1" content="This is the content of the first card." />
        <Card
          title="Card 2"
          content="This is the content of the second card."
        />
        <Card title="Card 3" content="This is the content of the third card." />
      </main>
    </div>
  );
};

export default Home;
