import { asset, recoveryItems } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Recovery.module.css";

const cx = createCx(styles);

export function Recovery() {
  return (
    <section className={cx("recovery", "section-shell", "section-pad")} id="recovery">
      <figure className={cx("recovery__media", "reveal", "reveal--left")}>
        <img src={asset("recovery.jpg")} alt="Aluno utilizando máscara de LED e botas pneumáticas no Recovery 360" loading="lazy" />
        <figcaption><strong>360°</strong><span>Recovery Integrado</span></figcaption>
      </figure>
      <div className={cx("recovery__copy", "reveal", "reveal--right")}>
        <p className={cx("eyebrow")}>Recovery 360°</p>
        <h2>Recovery 360</h2>
        <p className={cx("recovery__lead")}>O treino termina. A evolução continua.</p>
        <p>Um protocolo criado para fechar o ciclo do treino com a mesma qualidade com que ele começa: corpo mais leve, recuperação mais rápida e menos tensão para o próximo treino.</p>
        <div className={cx("recovery__cards")}>
          {recoveryItems.map((item) => (
            <article className={cx("recovery__card")} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
