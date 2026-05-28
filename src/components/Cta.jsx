import { useState } from "react";
import { ctaItems } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Cta.module.css";

const cx = createCx(styles);

export function Cta() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSent(true);
  }

  return (
    <section className={cx("cta", "section-pad")} id="cta">
      <div className={cx("section-shell", "cta__grid")}>
        <div className={cx("cta__copy", "reveal")}>
          <p className={cx("eyebrow", "eyebrow--light")}>Faça parte</p>
          <h2>Viva a experiência O2 Noroeste</h2>
          <p>Vagas limitadas para um ambiente exclusivo no coração do Noroeste. Agende sua visita e descubra pessoalmente o que nos torna diferentes.</p>
          <ul className={cx("check-list", "check-list--light")}>
            {ctaItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <form className={cx("lead-form", "reveal")} id="leadForm" onSubmit={handleSubmit}>
          <h2>Agendar visita</h2>
          <div className={cx("form-grid")}>
            <label>Nome<input name="nome" autoComplete="name" required placeholder="Seu nome completo" /></label>
            <label>WhatsApp<input name="whatsapp" inputMode="tel" autoComplete="tel" placeholder="(61) 9 0000-0000" /></label>
          </div>
          <label>E-mail<input name="email" type="email" autoComplete="email" placeholder="seu@email.com" /></label>
          <label>Interesse principal
            <select name="interesse" defaultValue="">
              <option value="">Selecione uma modalidade</option>
              <option>Musculação Premium</option>
              <option>Pilates Reformer</option>
              <option>Recovery 360°</option>
              <option>Personal Club 2Gether</option>
              <option>Plano completo</option>
            </select>
          </label>
          <button className={cx("button", "button--submit")} type="submit" disabled={sent}>
            {sent ? "Solicitação enviada" : "Agendar visita exclusiva"}
          </button>
          <p className={cx("form-note")} role="status">
            {sent ? "Recebemos seus dados. A equipe O2 entrará em contato para confirmar o melhor horário." : "Retornamos em até 2 horas úteis para confirmar seu horário."}
          </p>
        </form>
      </div>
    </section>
  );
}
