import style from "./Convert.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// i18n
import { useTranslation } from "react-i18next";
// Loader
import PropagateLoader from "react-spinners/PropagateLoader";
// Counter
// import SlotCounter from "react-slot-counter";

export default function Convert() {
  // Lang
  const { t } = useTranslation();

  const [value, setValue] = useState(10);
  let { number } = useParams();

  const goToLink = () => {
    window.location.href = `https://wa.me/${number}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          // window.location.href = `https://wa.me/${number}`;
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.container}>
      {/* <div className={style.counter}>
        <SlotCounter
          value={value}
          sequentialAnimationMode
          useMonospaceWidth
          autoAnimationStart={false}
        />
      </div> */}

      <div dir="ltr" className={style.loader}>
        <PropagateLoader color="#0e0142" size={25} />
      </div>

      <div className={style.continue_btn_box}>
        <button onClick={goToLink}>{t("chatBtn")}</button>
      </div>

      <div dir="auto" className={style.ad}>
        #Ad
      </div>
    </div>
  );
}
