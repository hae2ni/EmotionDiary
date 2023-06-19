import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  //쿼리스트링
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");

  const mode = searchParams.get("mode");
  return (
    <>
      <button onClick={() => setSearchParams({ who: "me" })}>qs 바꾸기</button>

      <button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </>
  );
};

export default Edit;
