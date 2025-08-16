export interface UserContextType {
  user: { email: string; password: string } | null;
  setUser: React.Dispatch<React.SetStateAction<{ email: string; password: string } | null>>;
}
