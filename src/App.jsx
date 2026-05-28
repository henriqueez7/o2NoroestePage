import { Concept } from "./components/Concept";
import { Cta } from "./components/Cta";
import { Differentials } from "./components/Differentials";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Recovery } from "./components/Recovery";
import { Technology } from "./components/Technology";
import { Ticker } from "./components/Ticker";
import { useReveal } from "./hooks/useReveal";
import { cx } from "./utils/styles";

function App() {
  useReveal();

  return (
    <>
      <a className={cx("skip-link")} href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Ticker />
        <Concept />
        <Differentials />
        <Gallery />
        <Recovery />
        <Technology />
        <Experience />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
