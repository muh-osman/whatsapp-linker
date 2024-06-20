import style from "./Convert.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Loader
import PropagateLoader from "react-spinners/PropagateLoader";
// Counter
// import SlotCounter from "react-slot-counter";

export default function Convert() {
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

      <div className={style.loader}>
        <PropagateLoader color="#32d951" size={25} />
      </div>

      <div className={style.continue_btn_box}>
        <button onClick={goToLink}>Continue to chat</button>
      </div>

      <div dir="auto" className={style.ad}>#Ad</div>
    </div>
  );
}
