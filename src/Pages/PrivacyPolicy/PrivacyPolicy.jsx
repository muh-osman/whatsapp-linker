import style from "./PrivacyPolicy.module.scss";
//
import privacy from "../../Assets/Images/privacy.svg";

export default function PrivacyPolicy() {
  return (
    <div className={style.container}>
      <div className={style.image_box}>
        <img src={privacy} alt="Privacy Policy" />
      </div>

      <div className={style.text}>
        <h1>Privacy Policy</h1>
        <p>
          At WhatsApp Linker, we understand that the privacy of your personal
          information is important to you and to us.
        </p>
        <p>
          Here is information about the types of personal information we receive
          and collect when you visit WhatsApp Linker, and how we protect your
          personal information.
        </p>
        <p>
          Log Files: Like most websites, we collect and use data contained in
          log files.
        </p>
        <p>
          Information in log files includes your IP (Internet Protocol) address,
          Internet Service Provider (ISP), the browser you used to visit our
          site, the time you visited, and the pages you visited through our
          site.
        </p>
        <p>
          Cookies: We use cookies to provide you with the best possible user
          experience on WhatsApp Linker. For more information about cookies,
          please visit: http://www.allaboutcookies.org/.
        </p>
        <p>
          Essential Cookies: Essential cookies are necessary for you to navigate
          around the site and do not store any information that can be used for
          advertising purposes. Without essential cookies, our site will not
          function properly.
        </p>
        <p>
          Customized Cookies: These cookies store information, such as your
          personal preferences, and use it to customize a unique experience for
          you.
        </p>
        <p>
          This may include displaying a pop-up window only once during your
          visit, saving your language preferences, or allowing you to
          automatically log in to some of our features.
        </p>
        <p>
          Analytics Cookies: Analytics cookies capture anonymously sourced data
          so we can see trends and improve the web experience on our site.
        </p>
        <p>
          These allow us to test different designs and help us identify breaks
          if a part of our site is not working.
        </p>
        <p>
          Advertising Cookies: Some external advertisers may use cookies or web
          beacons when advertising on our site.
        </p>
        <p>
          These advertisers (such as Google through Google AdSense) may send
          information to these advertisers, including your IP address, Internet
          Service Provider, the browser you used to visit our site, and in some
          cases information about whether you have installed Flash.
        </p>
        <p>
          Third-party vendors, including Google, use cookies to display ads
          based on users' previous visits to our website or other websites on
          the Internet.
        </p>
        <p>
          Google and its partners, using advertising cookies, will display ads
          to your users based on their visits to our website and/or other
          websites on the Internet.
        </p>
        <p>
          Users can disable personalized advertising by going to ad settings.
        </p>
        <p>
          If third-party ads are not disabled, cookie suppliers or other
          third-party ad networks may also use cookies to display ads on our
          site.
        </p>
        <p>
          This is generally used for geographic targeting purposes or displaying
          specific ads based on specific visited sites.
        </p>
        <p>
          By continuing to use our site, you agree to place cookies on your
          device.
        </p>
        <p>
          You can choose to disable or selectively turn off cookies or
          third-party cookies in your browser settings. However, this may affect
          how you interact with our site as well as other websites.
        </p>
        <p>
          If you have any questions or encounter any issues with our privacy
          policy, please contact us via email.
        </p>
      </div>
    </div>
  );
}
