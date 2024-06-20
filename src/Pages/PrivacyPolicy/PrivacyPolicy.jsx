import style from "./PrivacyPolicy.module.scss";
//
import privacy from "../../Assets/Images/privacy.svg";
// i18n
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  // Lang
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={privacy} alt="Privacy Policy" />
      </div>

      <div className={style.text}>
        <h1>{t("privacyPolicy")}</h1>
        <p>{t("privacy1")}</p>
        <p>{t("privacy3")}</p>
        <p>{t("privacy4")}</p>
        <p>{t("privacy5")}</p>
        <p>{t("privacy6")}</p>
        <p>{t("privacy7")}</p>
        <p>{t("privacy8")}</p>
        <p>{t("privacy9")}</p>
        <p>{t("privacy19")}</p>
        <p>{t("privacy11")}</p>
        <p>{t("privacy12")}</p>
        <p>{t("privacy13")}</p>
        <p>{t("privacy14")}</p>
        <p>{t("privacy15")}</p>
        <p>{t("privacy16")}</p>
        <p>{t("privacy17")}</p>
        <p>{t("privacy18")}</p>
        <p>{t("privacy19")}</p>
        <p>{t("privacy20")}</p>
      </div>
    </div>
  );
}
