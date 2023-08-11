import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Member from "./Member";
function Team() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h2>This is a team component</h2>
      <div>
        <ul>
          <li>
            <Link to="/team/member/1">Member 1</Link>
          </li>
          <li>
            <Link to="/team/member/2">Member 2</Link>
          </li>
          <li>
            <Link to="/team/member/3">Member 3</Link>
          </li>
        </ul>
        <button onClick={redirectToHome}>Redirect to home</button>
        <br />
        <button onClick={goBack}>Go Back</button>
      </div>
      {/* Outlet allows for another component to be rendered below this */}
      <Outlet />
    </>
  );
}

export default Team;
