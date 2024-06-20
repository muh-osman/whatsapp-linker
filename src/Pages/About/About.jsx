import style from "./About.module.scss";
// Images
import about from "../../Assets/Images/about.svg";
// i18n
import { useTranslation } from "react-i18next";

export default function About() {
  // Lang
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={about} alt="about us" />
      </div>

      <div className={style.text}>
        <h1>{t("aboutUs")}</h1>
        <p>{t("about1")}</p>
        <p>{t("about2")}</p>
        <p>{t("about3")}</p>
        <p>{t("about4")}</p>
      </div>
    </div>
  );
}
