import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>

        {user?.uid ? (
          <button
            style={{
              border: "none",
              fontSize: "15px",
              fontWeight: "bold",
              backgroundColor: "white",
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <span className="user-info">
          <span>{user?.displayName && user.displayName}</span>
          <span>
            <img
              style={{ borderRadius: "50%", width: "35px" }}
              src={user?.photoURL && user.photoURL}
              alt=""
            />
          </span>
        </span>
      </nav>
    </div>
  );
};

export default Header;
