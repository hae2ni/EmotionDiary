import React from "react";

const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <>
      <header>
        <div className="head_btn_left">{leftChild}</div>
        <div className="head_txt">{headText}</div>
        <div className="head_btn_right">{rightChild}</div>
      </header>
    </>
  );
};

export default MyHeader;
