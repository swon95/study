import { createContext } from "react";
import { User } from "@/types";

export interface AuthContextProp {
  initialized: boolean;
  user: User | null;
  signin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProp>({
  initialized: false,
  user: null,
  signin: async () => {},
});

export default AuthContext;
