import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "./../App";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: emotion1,
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: emotion2,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: emotion3,
    emotion_descript: "보통",
  },
  {
    emotion_id: 4,
    emotion_img: emotion4,
    emotion_descript: "별로",
  },
  {
    emotion_id: 5,
    emotion_img: emotion5,
    emotion_descript: "완전 별로",
  },
];

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();

  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
    console.log(emotion);
  };

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />

      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input-box">
            <input
              className="input-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>

        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>

        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="오늘 하루는 어땠나요?"
            />
          </div>
        </section>

        <section>
          <div className="control_box">
            <MyButton text={"최소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
