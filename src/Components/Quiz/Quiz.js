import React from "react";
import styles from "./styles.module.scss";
export const Quiz = ({ data, clickHandle, qNum }) => {
  return (
    <div className={styles.quiz_container}>
      <div className={styles.quiz_header}>
        <h2>{data[0].question}</h2>
      </div>
      <div className={styles.quiz_body}>
        <ul className={styles.answers}>
          {data[0].answers.map((d) => {
            return (
              <li className={styles.answer_item} key={d.answer}>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="question"
                    className={styles.radio}
                    value={d.answer}
                    onClick={() => {
                      clickHandle(d.answer);
                    }}
                  />
                  <p>{d.answer}</p>
                </label>
              </li>
            );
          })}
        </ul>
        <div className={styles.image}>
          <img src={data[0].img} />
        </div>
      </div>
      <div className={styles.quiz_footer}>Шаг {qNum} из 3</div>
    </div>
  );
};
