export type SessionStatus = "IN FOCUS" | "ARCHIVE" | "FOUND" | "LIVE";

export type Session = {
  id: string;
  slug: string;
  artist: string;
  track: string;
  location: string;
  date: string;
  status: SessionStatus;
  format: string;
  logline: string;
  beforeNoise: string;
  imageTone: string;
};

export type Event = {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  capacity: number;
  status: string;
  lineup: string[];
};

export const sessions: Session[] = [
  {
    id: "SS-001",
    slug: "bruma-noche-roja",
    artist: "BRUMA",
    track: "Noche Roja",
    location: "CDMX",
    date: "23.05.24",
    status: "IN FOCUS",
    format: "LIVE SESSION",
    logline: "Una toma cerrada, una voz al frente y la ciudad respirando bajo el monitor.",
    beforeNoise: "BRUMA aparece como una señal nocturna: mínima, tensa, lista para abrir una grieta.",
    imageTone: "from-red/25 via-white/5 to-transparent",
  },
  {
    id: "SS-002",
    slug: "noches-antes-del-ruido",
    artist: "NOCHES",
    track: "Antes del Ruido",
    location: "General Prim",
    date: "07.06.24",
    status: "ARCHIVE",
    format: "LIVE SESSION",
    logline: "Guitarras bajas, luz dura y un registro que se siente encontrado, no producido.",
    beforeNoise: "NOCHES no entra buscando permiso. Entra con una canción que ya trae polvo de calle.",
    imageTone: "from-neutral-500/20 via-red/10 to-transparent",
  },
  {
    id: "SS-003",
    slug: "lumina-signal",
    artist: "LÚMINA",
    track: "Signal",
    location: "CDMX",
    date: "14.06.24",
    status: "FOUND",
    format: "VISUAL SESSION",
    logline: "Un pulso frío, casi técnico. The artist enters the frame.",
    beforeNoise: "LÚMINA trabaja en baja frecuencia: imagen, textura y una melodía que tarda en irse.",
    imageTone: "from-acid/20 via-white/5 to-transparent",
  },
];

export const events: Event[] = [
  {
    id: "EV-001",
    title: "SPOTTED Live 001",
    venue: "General Prim",
    city: "CDMX",
    date: "TBA 2024",
    capacity: 500,
    status: "Presale Soon",
    lineup: ["BRUMA", "NOCHES", "Guest DJ"],
  },
  {
    id: "EV-002",
    title: "SPOTTED Sessions Night",
    venue: "Foro Indie Rocks / placeholder",
    city: "CDMX",
    date: "TBA 2024",
    capacity: 800,
    status: "In Curatorship",
    lineup: ["LÚMINA", "Live AV Set", "Editorial Screening"],
  },
];

export const brandWords = [
  "Before the noise",
  "Talento en foco",
  "La escena, detectada",
  "No todos lo ven",
  "A signal worth following",
  "Lo vimos antes",
];
