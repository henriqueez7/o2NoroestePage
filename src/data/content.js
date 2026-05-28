export const heroSlides = ["hero-slide-01.png", "hero-slide-02.png", "hero-slide-03.png", "hero-slide-04.png"];

export const tickerItems = [
  "Recovery 360°",
  "Musculação Premium",
  "Pilates Reformer",
  "Personal Club 2Gether",
  "Serviço All-Inclusive",
  "Tecnologia Integrada",
  "Sauna · Jacuzzi · Massagem",
  "Private Wellness Club · Noroeste"
];

export const features = [
  {
    number: "01",
    title: "Personal Club 2Gether",
    text: "Equipe de treinadores qualificados disponíveis via app. Escolha horário, treinador e treino com autonomia."
  },
  {
    number: "02",
    title: "Monitoramento total",
    text: "Pulseiras inteligentes rastreiam 100% da sua performance, com mais de 60 parâmetros corporais analisados."
  },
  {
    number: "03",
    title: "Recovery 360°",
    text: "Botas pneumáticas, máscara de LED e protocolos para acelerar sua recuperação depois do treino."
  },
  {
    number: "04",
    title: "Serviço all-inclusive",
    text: "Café Nespresso, frutas, castanhas, suplementos, energéticos e toalhas sempre disponíveis."
  },
  {
    number: "05",
    title: "Tecnologia de acesso",
    text: "Reconhecimento facial na entrada e armários via app. Sem chave, sem cadeado, sem atrito."
  },
  {
    number: "06",
    title: "Vagas limitadas",
    text: "Ambiente exclusivo com número controlado de membros. Sem filas, sem ruído, só foco."
  }
];

export const galleryItems = [
  { image: "o2-05.png", alt: "Fachada da O2 Fitness Noroeste", label: "Fachada" },
  { image: "musculacao.jpg", alt: "Treino de musculação acompanhado por profissional da O2 Fitness", label: "Musculação" },
  { image: "o2-07.png", alt: "Área de recovery 360", label: "Recovery 360°" },
  { image: "pilates.png", alt: "Sala de Pilates Reformer da O2 Fitness Noroeste", label: "Pilates" },
  { image: "pulseira-monitoramento.jpg", alt: "Pulseira de monitoramento sendo colocada no aluno", label: "Pulseira de monitoramento" },
  { image: "o2-08.png", alt: "Equipamentos premium da academia", label: "Equipamentos" },
  { image: "estrutura-premium.jpg", alt: "Serviço premium da O2 Fitness Noroeste durante o treino", label: "Estrutura Premium" }
];

export const techItems = [
  {
    icon: "◎",
    title: "Reconhecimento facial",
    text: "Acesso automático por biometria. Sem cartão, sem app: você é reconhecido ao chegar."
  },
  {
    icon: "▣",
    title: "Armários inteligentes",
    text: "Abertura via smartphone. Sem chave, sem cadeado, sem preocupação."
  },
  {
    icon: "⌁",
    title: "Pulseiras de performance",
    text: "100% do treino monitorado com indicadores individualizados e evolução diária."
  },
  {
    icon: "◌",
    title: "Mapeamento corporal",
    text: "Mais de 60 parâmetros analisados para alinhar metas, treino e resultados com precisão."
  }
];

export const recoveryItems = [
  {
    label: "01",
    title: "Botas pneumáticas",
    text: "Compressão sequencial que ativa a circulação e ajuda a eliminar a tensão muscular."
  },
  {
    label: "02",
    title: "Máscara de LED",
    text: "Apoia a regeneração celular, reduz inflamações e amplia o cuidado para além do músculo."
  },
  {
    label: "03",
    title: "Ciclo completo",
    text: "Dois recursos com um objetivo: devolver ao corpo tudo que ele entregou no treino."
  }
];

export const ctaItems = [
  "Avaliação corporal completa grátis na 1ª visita",
  "Serviço all-inclusive desde o primeiro treino",
  "Personal Club disponível para agendamento",
  "Recovery 360° incluso no plano",
  "Acesso por indicação ou agendamento"
];

export function asset(name) {
  return `/assets/${name}`;
}
