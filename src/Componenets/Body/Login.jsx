import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";

export default function Login() {
  const { handleAuth } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    axios.post("https://reqres.in/api/login", user).then((res) => {

      handleAuth(res.data.token);
    });
  };

  console.log(user);

  return (
    <div>
      <input
        type="text"
        id="email"
        placeholder="Enter Registered Email"
        onChange={handleChange}
      />
      <input
        type="text"
        id="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" onClick={handleClick} />
    </div>
  );
}
