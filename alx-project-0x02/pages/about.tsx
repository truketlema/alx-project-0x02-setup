import type { NextPage } from "next";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>

        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">
            Small Rounded
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Rounded
          </Button>
          <Button size="large" shape="rounded-full">
            Large Rounded
          </Button>
        </div>
      </main>
    </div>
  );
};

export default About;
