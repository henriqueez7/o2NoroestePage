import { useEffect, useState } from "react";
import { asset, heroSlides } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Hero.module.css";

const cx = createCx(styles);
const slideDuration = 6500;

export function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, slideDuration);

    return () => window.clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    let rafId;
    const startedAt = performance.now();

    const tick = (now) => {
      const pct = Math.min(((now - startedAt) / slideDuration) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafId = requestAnimationFrame(tick);
    };

    setProgress(0);
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active]);

  return (
    <section className={cx("hero")} id="hero" aria-label="O2 Fitness Noroeste">
      <div className={cx("hero__slides")} aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            className={cx("hero__slide", active === index && "is-active")}
            style={{
              "--bg": `url('${asset(slide)}')`,
              "--bg-position": "center top"
            }}
            key={slide}
          />
        ))}
      </div>
      <div className={cx("hero__shade")}></div>

      <div className={cx("hero__content")}>
        <p className={cx("eyebrow", "eyebrow--light", "reveal")}>
          <span></span>Private Wellness Club · Noroeste · Brasília
        </p>
        <h1 className={cx("hero__title", "reveal")}>
          <span>O novo padrão</span>
          <span className={cx("text-outline")}>de fitness</span>
          <span>premium</span>
        </h1>
        <div className={cx("hero__bottom", "reveal")}>
          <p>Treinamento, tecnologia, recovery e bem-estar em uma experiência exclusiva no Noroeste. Onde cada detalhe foi pensado para quem leva performance a sério.</p>
          <div className={cx("hero__actions")}>
            <a className={cx("button", "button--light")} href="#cta">Agendar experiência</a>
            <a className={cx("button", "button--ghost")} href="#galeria">Ver estrutura</a>
          </div>
        </div>
      </div>

      <div className={cx("hero__controls")} aria-label="Selecionar foto da estrutura">
        {heroSlides.map((slide, index) => (
          <button
            className={cx("hero__dot", active === index && "is-active")}
            type="button"
            aria-label={`Foto ${index + 1}`}
            onClick={() => setActive(index)}
            key={slide}
          />
        ))}
      </div>
      <div className={cx("hero__progress")} aria-hidden="true">
        <span style={{ width: `${progress}%` }}></span>
      </div>
      <span className={cx("hero__scroll")} aria-hidden="true">Scroll</span>
    </section>
  );
}
