import { asset } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Experience.module.css";

const cx = createCx(styles);

export function Experience() {
  return (
    <section className={cx("experience")} id="experiencia" aria-labelledby="experienciaTitulo">
      <video className={cx("experience__video")} autoPlay muted loop playsInline preload="auto">
        <source src={asset("video-abertura.mp4")} type="video/mp4" />
      </video>
      <div className={cx("experience__overlay")}>
        <p className={cx("eyebrow", "eyebrow--light")}>A Experiência O2</p>
        <h2 id="experienciaTitulo">Mais do que treinar</h2>
        <p>Uma rotina de performance, conforto e recuperação que transforma o seu dia a dia em Brasília.</p>
      </div>
    </section>
  );
}
