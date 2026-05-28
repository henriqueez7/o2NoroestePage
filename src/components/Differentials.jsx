import { features } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Differentials.module.css";

const cx = createCx(styles);

export function Differentials() {
  return (
    <section className={cx("differentials", "section-pad")} id="diferenciais">
      <div className={cx("section-shell")}>
        <div className={cx("section-heading", "section-heading--split", "reveal")}>
          <h2>Diferenciais que definem padrão</h2>
          <p>Cada espaço, serviço e tecnologia da O2 Fitness Noroeste foi pensado para entregar a experiência fitness mais completa de Brasília.</p>
        </div>
        <div className={cx("feature-grid")}>
          {features.map((feature) => (
            <article className={cx("feature-card", "reveal")} key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
