import type { NextPage, GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Users Page</h1>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id} // Optional: React key only
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await res.json();

    return {
      props: { users },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: { users: [] },
    };
  }
};

export default Users;
