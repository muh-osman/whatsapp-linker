// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing separate translation files
import AR from "../translate/ar.json";
import EN from "../translate/en.json";

// Function to detect user's language preference
const detectUserLanguage = () => {
  // Check for saved language in localStorage
  const savedLanguage = localStorage.getItem("lang");
  if (savedLanguage) {
    return savedLanguage;
  }

  // Default language if not previously saved
  return "ar";
};

const resources = {
  ar: {
    translation: AR,
  },
  en: {
    translation: EN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: detectUserLanguage(), // Set language based on localStorage or default
  interpolation: {
    escapeValue: false,
  },
});

// Function to set the direction of the page
const setPageDirection = (lng) => {
  const direction = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", direction);
};

// Function to set the font-family based on language
// const setFontFamily = (lng) => {
//   const elements = document.querySelectorAll("*");
//   elements.forEach((element) => {
//     if (lng === "ar") {
//       element.style.fontFamily = '"Tajawal", sans-serif';
//     } else {
//       element.style.fontFamily = '"Roboto", sans-serif';
//     }
//   });
// };

// Set the initial direction
setPageDirection(detectUserLanguage());

// Set the initial font-family
// setFontFamily(detectUserLanguage());

// Save user's language choice to localStorage and update the direction
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  setPageDirection(lng);
  // setFontFamily(lng);
});

export default i18n;
