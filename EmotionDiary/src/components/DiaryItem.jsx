/* eslint-disable no-undef */
import React, { useEffect } from "react";
import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";

const EMOTION_LIST = [
  { emo: 1, img: emotion1 },
  { emo: 2, img: emotion2 },
  { emo: 3, img: emotion3 },
  { emo: 4, img: emotion4 },
  { emo: 5, img: emotion5 },
];

const DiaryItem = ({ id, emotion, content, date }) => {
  const emotionSelect = () => {
    const emotionImg = EMOTION_LIST.filter((data) => data.emo === emotion);
    return emotionImg[0].img;
  };

  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <div></div>
        <img src={emotionSelect()} />
      </div>
    </div>
  );
};

export default DiaryItem;
