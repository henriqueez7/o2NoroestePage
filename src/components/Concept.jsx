import { asset } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Concept.module.css";

const cx = createCx(styles);

export function Concept() {
  return (
    <section className={cx("concept", "section-shell", "section-pad")} id="conceito">
      <figure className={cx("concept__media", "reveal", "reveal--left")}>
        <img src={asset("recepcao.png")} alt="Recepção da O2 Fitness Noroeste com logotipo iluminado" loading="lazy" />
      </figure>
      <div className={cx("concept__copy", "reveal", "reveal--right")}>
        <p className={cx("eyebrow")}>O Conceito</p>
        <h2>Não somos uma academia. Somos tudo isso.</h2>
        <p>A O2 Fitness Noroeste é um <strong>Private Wellness Club</strong> instalado no Trend Noroeste, o novo endereço para quem busca performance, conforto e exclusividade.</p>
        <p>Não somos academia, não somos SPA, não somos estúdio de personal trainer e não somos hotel. <strong>Somos a soma refinada de todos esses mundos.</strong></p>
        <div className={cx("stats")} aria-label="Principais diferenciais">
          <div><strong>360°</strong><span>Recovery</span></div>
          <div><strong>60+</strong><span>Parâmetros monitorados</span></div>
          <div><strong>100%</strong><span>Personalizado</span></div>
        </div>
      </div>
    </section>
  );
}
