export interface Example {
  id: number;
  name: string;
}

// ✅ CardProps interface
export interface CardProps {
  title: string;
  content: string;
}
// ✅ ButtonProps interface
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
}
// ✅ PostProps interface
// interfaces/index.ts
export interface PostProps {
  id: number; // add this line
  userId: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
