import React, { useState } from "react";
import useGeoLocation from "react-ipgeolocation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { writeTodataBase } from "../../firebase";
import { postDataToCRM, postToGoogleSheet } from "../../requests";
import styles from "./styles.module.scss";
export const CustomForm = ({ ip, answers }) => {
  const [isValid, setIsValid] = useState(false);
  const [country, setCountry] = useState("");
  const userLocation = useGeoLocation();
  const countryCode = () => {
    if (typeof userLocation.country === "string") {
      return userLocation.country.toLowerCase();
    } else {
      return "gb";
    }
  };

  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    const num = e.target[2].value.replace(/[^0-9]/g, "");
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: num,
      ip: ip,
      answer: answers.join(),
      geo: country,
    };
    postDataToCRM(data);
    //writeTodataBase(data);
    //postToGoogleSheet(data);
    navigate("/tnk");
  };
  const handleChange = (e, c) => {
    if (e.length >= 11) {
      setIsValid(true);
    }
    setCountry(c.countryCode);
  };
  return (
    <div className={styles.form_container}>
      <h3>
        Оставьте свои контактные данные, наш менеджер свяжется с вами для
        завершения регистрации.
      </h3>
      <h2>Регистрация</h2>
      <form
        className={styles.custom_form}
        action="https://api.sheetmonkey.io/form/dDubgv5NGkZcX6Sd762Bz1"
        method="post"
        onSubmit={formSubmit}
        autoComplete="off"
      >
        <div className={styles.element_wrapper}>
          <input
            placeholder="Ваше имя"
            type="text"
            className={styles.text_field}
            required
            name="Name"
          />
        </div>
        <div className={styles.element_wrapper}>
          <input
            placeholder="Email"
            type="email"
            className={styles.text_field}
            required
            name="Email"
          />
        </div>
        <div className={styles.element_wrapper}>
          <PhoneInput
            inputClass={styles.phone}
            country={countryCode()}
            onChange={handleChange}
            defaultErrorMessage="It doesn't works, why?"
            inputProps={{ required: true, name: "Phone" }}
            isValid={() => {
              if (isValid) {
                return true;
              } else {
                return "Это обязательное поле";
              }
            }}
          />
        </div>
        <div className={styles.element_wrapper}>
          <button className={styles.custom_button} disabled={!isValid}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};
