import style from "./AdsenseAd.module.scss";
//
import { Adsense } from "@ctrl/react-adsense";

export default function AdsenseAd() {
  return (
    <Adsense
      className="ExampleAdSlot"
      client="ca-pub-8546849163497745"
      slot="1410612293"
      style={{ display: 'block' }}
      format='auto'
      responsive='true'
      adTest="on" //Dev Only
    />
  );
}
