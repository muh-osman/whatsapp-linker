import style from "./Home.module.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Images
import hero from "../../Assets/Images/hero.png";
// MUI icons
import LinkIcon from "@mui/icons-material/Link";
import DialpadIcon from "@mui/icons-material/Dialpad";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
// Mui
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// Toastify
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
// i18n
import { useTranslation } from "react-i18next";
// QR code
import QRCode from "react-qr-code";
import AdsenseAd from "../../Components/AdsenseAd";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  marginBottom: "8px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgb(243, 239, 255)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "#32d951",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Home() {
  // Lang
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch from ipapi.co with status ${response.status}`
          );
        }
        const data = await response.json();
        setCountryCode(data.country_code);
      } catch (error) {
        console.error("Error fetching IP from ipapi.co:", error);
        // Fallback to ipinfo.io
        try {
          // Blocked in syria
          const response = await fetch(
            "https://ipinfo.io/json?token=3215c7cb6b3df7"
          );
          if (!response.ok) {
            throw new Error(
              `Failed to fetch from ipinfo.io with status ${response.status}`
            );
          }
          const jsonResponse = await response.json();
          setCountryCode(jsonResponse.country); // Assuming country code exists in ipinfo.io response
        } catch (error) {
          console.error("Error fetching IP fallback from ipinfo.io:", error);
        }
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleStartChat = async () => {
    if (!isPossiblePhoneNumber(phoneNumber)) {
      toast.warn(t("warn"));
      return;
    }

    let num = phoneNumber?.replace(/\+/g, "");

    navigate(`/chat/${num}`);
  };

  const handleCopyLink = async () => {
    if (!isPossiblePhoneNumber(phoneNumber)) {
      toast.warn(t("warn"));
      return;
    }

    const domainName = window.location.hostname;
    let num = phoneNumber?.replace(/\+/g, "");

    try {
      await navigator.clipboard.writeText(`https://${domainName}/chat/${num}`);
      toast.success(t("copy"));
    } catch (error) {
      console.error("Failed to copy phone number to clipboard:", error);
      toast.error(
        "Failed to copy phone number to clipboard. Please try again."
      );
    }
  };

  const qrCodeRef = useRef(null);
  const domainName = window.location.hostname;
  const num = phoneNumber?.replace(/\+/g, "");
  const qrCodeValue = `https://${domainName}/chat/${num}`;

  const handleSaveAsQr = async () => {
    if (!isPossiblePhoneNumber(phoneNumber)) {
      toast.warn(t("warn"));
      return;
    }

    const svg = qrCodeRef.current.firstChild;
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // Trigger download
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className={style.container}>
      {/* Start Hero */}
      <div dir="ltr" className={style.hero}>
        <div className={style.hero_text_box}>
          <h3 dir="auto">{t("heroSubTitle")}</h3>
          <h1 dir="auto">
            {t("heroTitle")} <span>{t("heroSpan")}</span>
          </h1>
          {/* <p>
          WhatsApp links make it ultra-easy for potential clients to start
          conversations with you instantly, so you capture more contacts.
        </p> */}
          <a href="#input_box">{t("heroBtn")}</a>
        </div>
        <div className={style.image_box}>
          <img src={hero} alt="hero image" />
        </div>
      </div>
      <div className={style.svg_hero}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity={1}
            d="M0,0L120,10.7C240,21,480,43,720,42.7C960,43,1200,21,1320,10.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
      {/* End Hero */}

      <div ref={qrCodeRef} style={{ display: "none" }}>
        <QRCode value={qrCodeValue} />
      </div>

      {/* Start input */}
      <div className={style.input_container}>
        <h2>{t("inputTitle")}</h2>
        <div id="input_box" dir="ltr" className={style.input_box}>
          <PhoneInput
            international
            value={phoneNumber}
            onChange={setPhoneNumber}
            defaultCountry={countryCode}
          />
        </div>

        <button onClick={handleStartChat} className={style.start_chat_btn}>
          {t("inputBtn")}
        </button>

        {/* <p>Start chat without saving the number!</p> */}

        <div className={style.or}>
          <span>{t("or")}</span>
        </div>

        <button onClick={handleCopyLink} className={style.copy_link_btn}>
          {t("copyLink")}
        </button>
        <button onClick={handleSaveAsQr} className={style.save_as_qr_btn}>
          {t("downloadLink")}
        </button>
      </div>
      {/* End input */}

      {/* Start services*/}
      <div className={style.services_container}>
        <div className={style.services_box}>
          <h2>{t("servicesTitle")}</h2>
          <div className={style.the_three_box}>
            <div>
              <div>
                <LinkIcon sx={{ fontSize: "64px", color: "#32d951" }} />
              </div>
              <div>{t("servicesOne")}</div>
            </div>

            <div>
              <div>
                <DialpadIcon sx={{ fontSize: "64px", color: "#32d951" }} />
              </div>
              <div>{t("servicesTwo")}</div>
            </div>

            <div>
              <div>
                <VolunteerActivismIcon
                  sx={{ fontSize: "64px", color: "#32d951" }}
                />
              </div>
              <div>{t("servicesThree")}</div>
            </div>
          </div>
        </div>
      </div>
      {/* End services */}

      {/* Start accordion*/}
      <div className={style.accordion}>
        <h2>{t("faqHomeTitle")}</h2>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>{t("qHomeOne")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>{t("aHomeOne")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>{t("qHomeTwo")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>{t("aHomeTwo")}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                {t("qHomeThree")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>{t("aHomeThree")}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                {t("qHomeFour")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>{t("aHomeFour")}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {/* End accordion*/}

      {/* #AD */}
      <div dir="auto" className={style.ad}>
        #Ad
      </div>

      {/* <AdsenseAd/> */}
    </div>
  );
}
