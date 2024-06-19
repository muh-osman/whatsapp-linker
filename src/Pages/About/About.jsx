import style from "./About.module.scss";
// Images
import about from "../../Assets/Images/about.svg";

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={about} alt="about us" />
      </div>

      <div className={style.text}>
        <h1>About us</h1>
        <p>
          The website WhatsApp Linker is a specialized website in converting
          WhatsApp numbers into short links, with the aim of facilitating
          communication between social media merchants and their clients. The
          service of creating a WhatsApp link is provided for merchants who use
          social media as a platform to showcase their products and services and
          use WhatsApp as a primary means of communication with clients. It is
          also provided for public figures and their agents who require sharing
          their WhatsApp link, allowing anyone who wishes to share their
          WhatsApp number online in a simple and flexible way. Obtaining a
          direct WhatsApp link makes it easier for interested parties to reach
          your WhatsApp without saving the number.
        </p>
        <p>
          WhatsApp Linker surpasses the process of extracting the merchant's
          number from their social media page, which is one of the obstacles
          faced by clients. Each client should extract the merchant's number,
          save it as a contact, and then search for it in the contact list to be
          able to communicate with the merchant. This process is somewhat
          lengthy and poses a barrier for the client, often overlooked by the
          merchant. Considering that each client repeats these steps every time
          they want to make a purchase from a merchant on social media.
        </p>
        <p>
          The solution provided by WhatsApp Linker for this problem is creating
          a WhatsApp link and converting the WhatsApp number into a short link
          that can be placed in their social media accounts. Once the client
          visits the WhatsApp link, they are directly redirected to a WhatsApp
          conversation with the merchant without saving the number. The service
          of creating a direct WhatsApp link provided by WhatsApp Linker makes
          it easy to share and circulate the WhatsApp link on social media
          platforms and appears fully on personal pages on Twitter, Instagram,
          and other social media platforms.
        </p>
        <p>
          Please note that WhatsApp Linker is not affiliated with the WhatsApp
          application and is not an official service provided by WhatsApp.
        </p>
      </div>
    </div>
  );
}
