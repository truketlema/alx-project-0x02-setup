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
