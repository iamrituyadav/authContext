import { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  const handleAuth = (token, clngdfdkjlsh, dfdkjhdskj) => {
    setIsAuth(token);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
