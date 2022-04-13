import React from "react";
import useFirebase from "../../Hooks/useFirebase";
const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>Please Login!!</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <input type="email" name="" id="" placeholder="Enter Email" />
      <br />
      <input type="password" name="" id="" placeholder="Enter Password" />
      <br />
      <input type="submit" value="Login" />
    </div>
  );
};

export default Login;
