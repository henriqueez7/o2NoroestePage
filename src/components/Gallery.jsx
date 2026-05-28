import { useRef } from "react";
import { asset, galleryItems } from "../data/content";
import { createCx } from "../utils/styles";
import styles from "./Gallery.module.css";

const cx = createCx(styles);

export function Gallery() {
  const railRef = useRef(null);

  const scrollGallery = (direction) => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.82, 720),
      behavior: "smooth"
    });
  };

  return (
    <section className={cx("gallery", "section-pad")} id="galeria" aria-labelledby="galeriaTitulo">
      <div className={cx("section-shell")}>
        <div className={cx("gallery__head", "reveal")}>
          <h2 id="galeriaTitulo">Nossa estrutura</h2>
          <div className={cx("gallery__nav")} aria-label="Controles da galeria">
            <span>Arraste ou navegue</span>
            <button type="button" aria-label="Ver cards anteriores" onClick={() => scrollGallery(-1)}>
              ←
            </button>
            <button type="button" aria-label="Ver próximos cards" onClick={() => scrollGallery(1)}>
              →
            </button>
          </div>
        </div>
      </div>
      <div className={cx("gallery__viewport")}>
        <div ref={railRef} className={cx("gallery__rail")} tabIndex="0" aria-label="Galeria de imagens da estrutura">
          {galleryItems.map((item) => (
            <figure key={item.image}>
              <img src={asset(item.image)} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
