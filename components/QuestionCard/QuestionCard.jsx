import React, { useState } from "react";
import styles from "./styles.module.css";

const QuestionCard = ({ question, answer }) => {
  const [isShowAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div>{question}</div>

      <button
        className={styles.button}
        onClick={() => {
          setShowAnswer(!isShowAnswer);
        }}
      >
        {isShowAnswer ? <>Hide Answer</> : <>Show answer</>}
      </button>

      {isShowAnswer && <div>{answer}</div>}
    </div>
  );
};

export default QuestionCard;
