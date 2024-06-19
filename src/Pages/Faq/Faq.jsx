import style from "./Faq.module.scss";
//
import faq from "../../Assets/Images/faq.svg";

export default function Faq() {
  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={faq} alt="Frequently Asked Questions" />
      </div>

      <div className={style.text}>
        <h1>Frequently Asked Questions</h1>

        <p>What is the WhatsApp Linker website?</p>

        <p className={style.answer}>
          WhatsApp Linker allows you to easily create a direct WhatsApp link.
          You can convert your WhatsApp number into a direct link through
          WhatsApp Linker by entering the number, and a direct WhatsApp link
          will be generated.
        </p>

        <p>Which entities need to create a WhatsApp link?</p>

        <p className={style.answer}>
          Traders who use social networks as a platform to market their products
          and services, and use the WhatsApp application as a primary means of
          communication with clients. Public figures and their agents who
          require sharing their own WhatsApp link. Anyone who wishes to share a
          direct WhatsApp link online in a simple and flexible way.
        </p>

        <p>Is WhatsApp Linker a free service?</p>

        <p className={style.answer}>Yes</p>

        <p>Are there any conditions when creating a WhatsApp link?</p>

        <p className={style.answer}>
          Creating a WhatsApp link through WhatsApp Linker is subject to the
          terms outlined on the Terms of Use page. You can review them and then
          proceed to the main page to create a WhatsApp link if you have a
          mobile number and use the WhatsApp application.
        </p>

        <p>How to register on WhatsApp Linker?</p>

        <p className={style.answer}>
          To subscribe to the WhatsApp Linker website and create a WhatsApp
          link.
        </p>

        <p>How do I create a WhatsApp link?</p>

        <p className={style.answer}>
          Go to the main page of the WhatsApp Linker website, then enter the
          number, and a direct WhatsApp link will be generated.
        </p>

        <p>
          What is the benefit of registering on the WhatsApp Linker website?
        </p>

        <p className={style.answer}>
          You can get a short WhatsApp conversation link for your mobile phone
          number, making it easy to share online, and anyone can contact you
          with a single click without the need to save your number as a contact.
        </p>

        <p>
          What is the benefit of converting a WhatsApp number into a direct
          link?
        </p>

        <p className={style.answer}>
          When converting a WhatsApp number into a direct link, it becomes
          easier to share and distribute on social networks, facilitating direct
          WhatsApp conversations through the WhatsApp link without saving the
          number.
        </p>

        <p>I want to convert a WhatsApp number into a short link?</p>

        <p className={style.answer}>
          Visit the main page of the WhatsApp Linker website, then enter your
          mobile phone number, click the conversion button, and your number will
          appear as a short WhatsApp link after conversion. Copy the link and
          share it on any app or web page.
        </p>

        <p>Is the service secure and compliant with WhatsApp's policy?</p>

        <p className={style.answer}>
          The service is completely secure and does not affect your account or
          number on WhatsApp. It is an additional service that helps those who
          want to communicate with you to access your WhatsApp number with a
          single click without the need to save your number as a contact,
          considering that it is not affiliated with the WhatsApp application.
        </p>
      </div>
    </div>
  );
}
