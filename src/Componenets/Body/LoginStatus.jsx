import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";

export default function LoginStatus() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>User is Logged-in</h1>
      <h2>Token:{isAuth}</h2>
    </div>
  );
}
