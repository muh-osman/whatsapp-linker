import style from "./TermsOfUse.module.scss";
//
import terms from "../../Assets/Images/terms.svg";

export default function TermsOfUse() {
  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={terms} alt="Terms Of Use" />
      </div>

      <div className={style.text}>
        <h1>Terms of use</h1>
        <p>
          The website WhatsApp Linker aims to facilitate communication through
          the WhatsApp application between social media influencers and clients,
          by converting the WhatsApp number from text to a short link that is
          easy to share and distribute.
        </p>

        <p>
          To achieve this, we kindly ask our dear users to read the following
          terms carefully and understand them well, and to comply with them. If
          you do not agree to these terms, please refrain from registering and
          creating an account.
        </p>

        <p>
          By registering on the WhatsApp Linker website, you acknowledge full
          agreement to all terms and commit to them.
        </p>

        <p>
          Information Accuracy: Users are required to provide accurate
          information about themselves and are fully responsible for any false
          information they provide.
        </p>

        <p>
          One Account Policy: Users are required to have only one account on the
          WhatsApp Linker website. In case of any account issues, users should
          contact the site administration for assistance.
        </p>

        <p>
          Account Usage: • Registered users on WhatsApp Linker commit to being
          the sole users of their accounts and are fully responsible for them. •
          WhatsApp Linker and its administrators are not liable for any damages
          resulting from the use of the service, and users bear full
          responsibility for the consequences. • Users acknowledge that WhatsApp
          Linker is not an official service provided by Facebook or its
          subsidiaries.
        </p>

        <p>
          User Age: Users must be over 18 years old, and WhatsApp Linker
          reserves the right to request official documents to verify the user's
          age.
        </p>

        <p>
          Mobile Number: Users are required to provide only their own mobile
          number and are not allowed to provide another number belonging to
          someone else.
        </p>

        <p>
          Account Suspension and Document Requests: WhatsApp Linker has the
          right to suspend a user's account and all related services if there
          are doubts about the accuracy of the provided data. The site may
          request official documents to verify the user's identity and ownership
          of the mobile number.
        </p>

        <p>
          Violation of Terms: WhatsApp Linker has the right to suspend the
          account of any user who does not comply with the site's terms without
          prior notice.
        </p>

        <p>
          Account Suspension: • Using the link for purposes other than
          "e-commerce through social media networks." • Using the link to sell,
          rent, promote, or market prohibited goods and services according to
          the laws in Saudi Arabia. • Using the link to send annoying or harmful
          messages to others through any electronic or non-electronic means. •
          Using the link for political, religious, or national activities. •
          Using the link to share copyrighted and intellectual property files. •
          Using the link to share content that contradicts the teachings of
          Islam. • Using the link for activities that harm others, whether
          individuals or government entities. • Selling, renting, or
          transferring the link to another person.
        </p>

        <p>
          Service Suspension: The management of WhatsApp Linker strives to
          provide the service to the best of its abilities, but may suspend the
          service due to circumstances beyond its control. The site reserves the
          right to suspend the service at any time without prior notice or user
          consent, and we do not bear any costs or damages resulting from the
          service suspension.
        </p>
      </div>
    </div>
  );
}
