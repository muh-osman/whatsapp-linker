import style from "./AdsenseAd.module.scss";
//
import { Adsense } from "@ctrl/react-adsense";

export default function AdsenseAd() {
  return (
    <Adsense
      client="ca-pub-7640562161899788"
      slot="7259870550"
      style={{ display: "block" }}
      layout="in-article"
      format="fluid"
      adTest="on" //Dev Only
    />
  );
}
