import style from "./HomeLayout.module.scss";
import { useEffect, useRef, useState } from "react";
// Router
import { Link, NavLink, Outlet } from "react-router-dom";
// Images
import logo from "../Assets/Images/logo.png";
import uk from "../Assets/Images/uk.svg";
import saudi from "../Assets/Images/saudi.svg";
// MUI icons
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
// i18n
import { useTranslation } from "react-i18next";
import i18n from "../Utils/i18n";

export default function HomeLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let btbRef = useRef();
  let navRef = useRef();

  const menuBtn = () => {
    btbRef.current.style.transform = "rotate(-90deg)";
    navRef.current.style.right = "0px";
    document.body.classList.add("no-scroll");
    setIsNavOpen(true);
  };

  const closeNav = () => {
    btbRef.current.style.transform = "rotate(0deg)";
    navRef.current.style.right = "-320px";
    document.body.classList.remove("no-scroll");
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !btbRef.current.contains(event.target)
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Lang
  const { t } = useTranslation();
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <>
      <div
        className={style.overlay}
        style={{
          opacity: isNavOpen ? 1 : 0,
          width: isNavOpen ? "100%" : 0,
          height: isNavOpen ? "100%" : 0,
        }}
        onClick={closeNav}
      ></div>

      <header dir="ltr" className={style.container}>
        <Link to="/" className={style.logo_box}>
          <div>
            <img src={logo} alt="Whatsapp linker logo" />
          </div>
          <h1>Linker</h1>
        </Link>

        <div className={style.menu_btn_box}>
          <button ref={btbRef} onClick={menuBtn}>
            <MenuIcon sx={{ fontSize: "32px" }} />
          </button>
        </div>
      </header>

      <nav ref={navRef} className={style.navbar}>
        {/* <div>
          <h1>Whatsapp Linker</h1>
        </div> */}
        <div>
          <NavLink to="/" onClick={closeNav}>
            {t("home")}
          </NavLink>
        </div>
        <div>
          <NavLink to="about" onClick={closeNav}>
            {t("about")}
          </NavLink>
        </div>
        <div>
          <NavLink to="privacy-policy" onClick={closeNav}>
            {t("privacyPolicy")}
          </NavLink>
        </div>
        <div>
          <NavLink to="terms-of-use" onClick={closeNav}>
            {t("TermsOfUse")}
          </NavLink>
        </div>
        <div>
          <NavLink to="faq" onClick={closeNav}>
            {t("faq")}
          </NavLink>
        </div>

        <div dir="ltr" className={style.lang}>
          <button onClick={() => changeLanguage("ar")}>
            <img src={saudi} alt="arabic language" />
          </button>
          <button onClick={() => changeLanguage("en")}>
            <img src={uk} alt="english language" />
          </button>
        </div>

        <div dir="ltr" className={style.social}>
          <a href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://x.com/">
            <XIcon />
          </a>
        </div>
      </nav>

      <Outlet />

      {/* Start Footer */}
      <footer className={style.footer}>
        <div dir="ltr" className={style.social_footer}>
          <a href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://x.com/">
            <XIcon />
          </a>
        </div>
        <div>
          <p>{t("copyRight")}</p>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}
