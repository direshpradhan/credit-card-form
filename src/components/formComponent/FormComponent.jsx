import { useState } from "react";
import styles from "./FormComponent.module.css";
// import { Card } from "../card/Card";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export const FormComponent = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YY");
  const [cvv, setCvv] = useState(null);
  const [focus, setFocus] = useState(null);

  //   useEffect(() => {
  //     cardNumber === "" && setCardNumber("#### #### #### ####");
  //     cardHolder === "" && setCardHolder("Name Surname");
  //   }, [cardNumber, cardHolder]);

  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.card_container}`}>
          <Cards
            number={cardNumber}
            name={cardHolder}
            expiry={`${month}${year}`}
            cvc={cvv}
            focused={focus}
          />
        </div>
        <form className={`${styles.card_form}`}>
          <label htmlFor="cardNumber" className={`${styles.labels}`}>
            Card Number
          </label>
          <input
            type="tel"
            id="cardNumber"
            name="number"
            required
            className={`${styles.input_fields}`}
            onChange={(event) => setCardNumber(event.target.value)}
            onFocus={(event) => setFocus(event.target.name)}
          />
          <label htmlFor="cardName" className={`${styles.labels}`}>
            Card Name
          </label>
          <input
            type="text"
            id="cardName"
            name="name"
            required
            className={`${styles.input_fields}`}
            onChange={(event) => setCardHolder(event.target.value)}
            onFocus={(event) => setFocus(event.target.name)}
          />
          <div className={`${styles.date_cvv}`}>
            <div className={`${styles.month}`}>
              <label htmlFor="month" className={`${styles.labels}`}>
                Expiration Date
              </label>
              <select
                name="expiry"
                id="month"
                className={`${styles.input_fields}`}
                onChange={(event) => setMonth(event.target.value)}
                onFocus={(event) => setFocus(event.target.name)}
              >
                <option value="MM">Month</option>
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
              name="expiry"
              id="year"
              className={`${styles.year} ${styles.input_fields}`}
              onChange={(event) => setYear(event.target.value)}
              onFocus={(event) => setFocus(event.target.name)}
            >
              <option value="YY">Year</option>
              <option value="20">2020</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
            <div className={`${styles.cvv}`}>
              <label htmlFor="cvv" className={`${styles.labels}`}>
                CVV
              </label>
              <input
                type="tel"
                id="cvv"
                name="cvc"
                required
                value={cvv}
                className={`${styles.input_fields}`}
                onChange={(event) => setCvv(event.target.value)}
                onFocus={(event) => setFocus(event.target.name)}
              />
            </div>
          </div>
          <button type="submit" className={`${styles.btn_submit}`}>
            Submit
          </button>
        </form>

        {/* <img
          src={bgCard}
          alt="creditCardBg"
          className={`${styles.bg_card_img}`}
        />
        <img src={chip} alt="chip" className={`${styles.chip_img}`} />
        <div className={`${styles.card_number}`}>{cardNumber}</div> */}
      </div>
    </>
  );
};
