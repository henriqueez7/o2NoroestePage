import { useEffect } from "react";
import { shared } from "../utils/styles";

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(shared["is-visible"]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(`.${shared.reveal}`).forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
