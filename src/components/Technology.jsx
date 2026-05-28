import { techItems } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Technology.module.css";

const cx = createCx(styles);

export function Technology() {
  return (
    <section className={cx("technology", "section-pad")} id="tecnologia">
      <div className={cx("section-shell")}>
        <div className={cx("technology__head", "reveal")}>
          <h2>Tecnologia que muda resultados</h2>
          <p>A O2 Fitness utiliza tecnologia única no Brasil: monitoramento 100% individualizado com mais de 60 parâmetros corporais analisados. Sua evolução, medida em tempo real.</p>
        </div>
        <div className={cx("tech-grid")}>
          {techItems.map((item) => (
            <article className={cx("tech-card", "reveal")} key={item.title}>
              <span aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
