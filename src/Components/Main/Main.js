import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const Main = () => {
  const navigate = useNavigate();
  const hanleClick = () => {
    navigate("/quest");
  };
  return (
    <div className={styles.Main}>
      <div className={styles.Main_container}>
        {" "}
        <div className={styles.right_continer}>
          {" "}
          <div className={styles.text_div}>
            {" "}
            <h3 className={styles.bonus}>
              Воспользуйся возможностью зарабатывать от 100 € в день благодаря
              компании Амазон
            </h3>{" "}
            <h2>
              Пройдите опрос , чтобы мы смогли подобрать инструмент под вашу
              желаемую прибыль!
            </h2>
          </div>
          <button className={styles.custom_button} onClick={hanleClick}>
            Пройти опрос и получить бонус
          </button>
        </div>
      </div>
    </div>
  );
};
