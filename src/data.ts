export interface User {
  id: number;
  name: string;
  role: string;
  email: string;
}

export const initialUsers: User[] = [
  { id: 1, name: "Alice Johnson", role: "Frontend Developer", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", role: "Backend Developer", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", role: "Designer", email: "charlie@example.com" },
  { id: 4, name: "Diana Prince", role: "Product Manager", email: "diana@example.com" },
  { id: 5, name: "Ethan Hunt", role: "DevOps Engineer", email: "ethan@example.com" },
];
