import { tickerItems } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Ticker.module.css";

const cx = createCx(styles);

export function Ticker() {
  return (
    <div className={cx("ticker")} aria-hidden="true">
      <div className={cx("ticker__track")}>
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
