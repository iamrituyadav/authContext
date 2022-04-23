import { NavbarDiv } from "../Styles/NavbarStyles";
import { useContext } from "react";
// import { isAuth, handleAuth } from "../Contexts/AuthContext";
import { AuthContext } from "../Contexts/AuthContext";
export default function Navbar() {
  const { isAuth, handleAuth } = useContext(AuthContext);
  //   console.log(isAuth);
  return (
    <>
      <NavbarDiv>
        {isAuth ? (
          <button onClick={() => handleAuth(null)}>Logout</button>
        ) : (
          <button onClick={() => handleAuth(null)}>Login</button>
        )}
      </NavbarDiv>
    </>
  );
}
