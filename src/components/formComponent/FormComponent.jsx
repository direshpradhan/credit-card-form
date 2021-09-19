import React from "react";
import styles from "./FormComponent.module.css";
import bgCard from "../../assets/images/6.jpeg";

export const FormComponent = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <form className={`${styles.card_form}`}>
          <label htmlFor="cardNumber" className={`${styles.labels}`}>
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            required
            className={`${styles.input_fields}`}
          />
          <label htmlFor="cardName" className={`${styles.labels}`}>
            Card Name
          </label>
          <input
            type="text"
            id="cardName"
            required
            className={`${styles.input_fields}`}
          />
          <div className={`${styles.date_cvv}`}>
            <div className={`${styles.month}`}>
              <label htmlFor="month" className={`${styles.labels}`}>
                Expiration Date
              </label>
              <select
                name="month"
                id="month"
                className={`${styles.input_fields}`}
              >
                <option value="None">Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <select
              name="year"
              id="year"
              className={`${styles.year} ${styles.input_fields}`}
            >
              <option value="None">Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <div className={`${styles.cvv}`}>
              <label htmlFor="cvv" className={`${styles.labels}`}>
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className={`${styles.input_fields}`}
              />
            </div>
          </div>
          <button type="submit" className={`${styles.btn_submit}`}>
            Submit
          </button>
        </form>

        <img
          src={bgCard}
          alt="creditCardBg"
          className={`${styles.bg_card_img}`}
        />
      </div>
    </>
  );
};
