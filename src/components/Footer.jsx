import { createCx } from "../utils/styles";
import styles from "./Footer.module.css";

const cx = createCx(styles);

export function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer__grid", "section-shell")}>
        <div>
          <a className={cx("footer__logo")} href="#hero">O2<sup>®</sup></a>
          <p>Private Wellness Club. O novo padrão de fitness premium em Brasília.</p>
        </div>
        <div>
          <h2>Endereço</h2>
          <p>CLSW 8/9</p>
          <p>Trend Noroeste</p>
          <p>Setor Noroeste</p>
          <p>Brasília - DF</p>
        </div>
        <div>
          <h2>Contato</h2>
          <a href="https://instagram.com/o2noroeste" target="_blank" rel="noopener noreferrer">@o2noroeste</a>
          <a href="https://www.o2fitness.com.br" target="_blank" rel="noopener noreferrer">o2fitness.com.br</a>
        </div>
        <div>
          <h2>Horários</h2>
          <p>Seg-Sex: 06h - 22h</p>
          <p>Sábado: 08h - 18h</p>
          <p>Domingo: 09h - 13h</p>
        </div>
      </div>
      <div className={cx("footer__bottom", "section-shell")}>
        <span>© 2025 O2 Fitness Noroeste. Todos os direitos reservados.</span>
        <a href="https://instagram.com/o2noroeste" target="_blank" rel="noopener noreferrer">@o2noroeste no Instagram</a>
      </div>
    </footer>
  );
}
