import style from "./Faq.module.scss";
//
import faq from "../../Assets/Images/faq.svg";
// i18n
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={faq} alt="Frequently Asked Questions" />
      </div>

      <div className={style.text}>
        <h1>{t("faq")}</h1>

        <p>{t("faq1")}</p>

        <p className={style.answer}>{t("faq2")}</p>

        <p>{t("faq3")}</p>

        <p className={style.answer}>{t("faq4")}</p>

        <p>{t("faq5")}</p>

        <p className={style.answer}>{t("faq6")}</p>

        <p>{t("faq7")}</p>

        <p className={style.answer}>{t("faq8")}</p>

        <p>{t("faq9")}</p>

        <p className={style.answer}>{t("faq10")}</p>

        <p>{t("faq11")}</p>

        <p className={style.answer}>{t("faq12")}</p>

        <p>{t("faq13")}</p>

        <p className={style.answer}>{t("faq14")}</p>

        <p>{t("faq15")}</p>

        <p className={style.answer}>{t("faq16")}</p>

        <p>{t("faq17")}</p>

        <p className={style.answer}>{t("faq18")}</p>

        <p>{t("faq19")}</p>

        <p className={style.answer}>{t("faq20")}</p>
      </div>
    </div>
  );
}
