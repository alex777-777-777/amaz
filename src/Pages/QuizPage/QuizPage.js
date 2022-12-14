import React, { useState } from "react";
import { useEffect } from "react";
import { CustomForm } from "../../Components/CustomForm/CustomForm";
import { Quiz } from "../../Components/Quiz/Quiz";
import { questions } from "../../questions";
import styles from "./styles.module.scss";

export const QuizPage = () => {
  const [qNum, setQNum] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [myIp, setMyIp] = useState("");
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setMyIp(data.ip));
  }, []);

  const filteredQuestion = questions.filter((q) => {
    return q.number.includes(qNum);
  });
  const clickAnswerHanle = (data) => {
    setAnswers([...answers, data]);
    setQNum(qNum + 1);
  };

  return (
    <div className={styles.QuizPage}>
      {qNum > 3 ? (
        <CustomForm ip={myIp} answers={answers} />
      ) : (
        <Quiz
          data={filteredQuestion}
          clickHandle={clickAnswerHanle}
          qNum={qNum}
        />
      )}
    </div>
  );
};
