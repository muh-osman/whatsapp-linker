import style from "./TermsOfUse.module.scss";
//
import terms from "../../Assets/Images/terms.svg";
// i18n
import { useTranslation } from "react-i18next";

export default function TermsOfUse() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={terms} alt="Terms Of Use" />
      </div>

      <div className={style.text}>
        <h1>{t("TermsOfUse")}</h1>
        <p>{t("terms1")}</p>
        <p>{t("terms2")}</p>
        <p>{t("terms3")}</p>
        <p>{t("terms4")}</p>
        <p>{t("terms5")}</p>
        <p>{t("terms6")}</p>
        <p>{t("terms7")}</p>
        <p>{t("terms8")}</p>
        <p>{t("terms9")}</p>
        <p>{t("terms10")}</p>
        <p>{t("terms11")}</p>
        <p>{t("terms12")}</p>
      </div>
    </div>
  );
}
