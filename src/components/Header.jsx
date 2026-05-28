import { useEffect, useState } from "react";
import { asset } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Header.module.css";

const cx = createCx(styles);

const navLinks = [
  ["#conceito", "Conceito"],
  ["#galeria", "Estrutura"],
  ["#recovery", "Recovery"],
  ["#tecnologia", "Tecnologia"],
  ["#cta", "Contato"]
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector("#hero");
      const limit = hero ? hero.offsetHeight - 84 : 80;
      setSolid(window.scrollY > limit);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cx("site-header", solid && "is-solid")} id="siteHeader">
      <nav className={cx("nav")} aria-label="Navegacao principal">
        <a className={cx("nav__brand")} href="#hero" aria-label="O2 Fitness Noroeste">
          <img src={asset("logo-o2.png")} alt="" aria-hidden="true" />
          <span>O2 Noroeste</span>
        </a>
        <button
          className={cx("nav__toggle")}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={cx("nav__menu", open && "is-open")} id="navMenu" onClick={() => setOpen(false)}>
          {navLinks.map(([href, label]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
        <a className={cx("nav__cta")} href="#cta">Agendar visita</a>
      </nav>
    </header>
  );
}
