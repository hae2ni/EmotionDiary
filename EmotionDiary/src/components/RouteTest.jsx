import React from "react";
import { Link } from "react-router-dom";

//SPA방식으로 페이지를 이동
const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>DIARY</Link>
    </>
  );
};

export default RouteTest;
