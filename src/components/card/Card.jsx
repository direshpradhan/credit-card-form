import React, { useEffect, useRef } from "react";
import bgCard from "../../assets/images/6.jpeg";
import chip from "../../assets/images/chip.png";
import styles from "./Card.module.css";

export const Card = ({
  number,
  name,
  expiryMonth,
  expiryYear,
  cvv,
  focused,
}) => {
  const cardNumberRef = useRef(null);
  const cardHolderRef = useRef(null);
  const expiryRef = useRef(null);
  const cvvRef = useRef(null);

  useEffect(() => {
    console.log("useEffect");
    console.log(focused);
    if (focused === "number") {
      console.log(cardNumberRef.current);
      cardNumberRef.current.focus();
    }
    if (focused === "cardHolder") {
      cardHolderRef.current.focus();
    }
    if (focused === "month" || focused === "year") {
      expiryRef.current.focus();
    }

    if (focused === "cvv") {
      cvvRef.current.focus();
    }
  }, [focused]);

  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.main_inner}`}>
          <div className={`${styles.card_front}`}>
            <img
              src={bgCard}
              alt="creditCardBg"
              className={`${styles.bg_card_img}`}
            />
            <img src={chip} alt="chip" className={`${styles.chip_img}`} />
            <div className={`${styles.card_number}`} ref={cardNumberRef}>
              {number}
            </div>

            <div className={`${styles.name_expiry}`}>
              <div className={`${styles.name}`} ref={cardHolderRef}>
                <span>Card Holder</span>
                <p>{name}</p>
              </div>
              <div className={`${styles.expiry}`} ref={expiryRef}>
                <span>Expires</span>
                <div>
                  <span>{expiryMonth ? expiryMonth : "MM"}</span>
                  {"/"}
                  <span>{expiryYear ? expiryYear : "YY"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.card_back}`}>
            <img
              src={bgCard}
              alt="creditCardBg"
              className={`${styles.bg_card_img}`}
            />
            <div ref={cvvRef} className={`${styles.cvv}`}></div>
          </div>
        </div>
      </div>

      {/* <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img
              src="img_paris.jpg"
              alt="Paris"
              style="width:300px;height:200px"
            />
          </div>
          <div class="flip-box-back">
            <h2>Paris</h2>
            <p>What an amazing city</p>
          </div>
        </div>
      </div> */}
    </>
  );
};
