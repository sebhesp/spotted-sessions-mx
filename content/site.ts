import sessionsData from "@/content/sessions.json";
import { withBasePath } from "@/lib/paths";
import type { Role, Session, TeamMember } from "@/lib/types";

export const sessions = (sessionsData as Session[]).map((session) => ({
  ...session,
  image: withBasePath(session.image),
  video: {
    ...session.video,
    poster: withBasePath(session.video.poster),
  },
  photos: session.photos.map((photo) => ({
    ...photo,
    src: withBasePath(photo.src),
  })),
}));

export const values = [
  {
    title: "Intención",
    body: "Cada decisión existe para servir a la canción, al artista y al momento que se está documentando.",
  },
  {
    title: "Atención",
    body: "Escuchamos antes de mover cámaras. La producción se adapta a lo que la pieza pide.",
  },
  {
    title: "Calidez",
    body: "El cuarto, la mesa y el trato importan tanto como la toma final.",
  },
  {
    title: "Calidad",
    body: "La ejecucion debe sentirse editorial y precisa sin volverse pretenciosa.",
  },
] as const;

export const whatWeDo = [
  "Escuchamos antes de grabar y diseñamos la sesión alrededor de una canción.",
  "Documentamos con dirección creativa, audio, video, luz, fotografía y archivo.",
  "Amplificamos piezas sin prometer fama ni apropiarnos de la narrativa.",
  "Integramos hospitalidad y marcas solo cuando elevan el cuidado de la producción.",
] as const;

export const teamMembers: TeamMember[] = [
  {
    name: "Equipo SPOTTED",
    role: "Dirección creativa",
    status: "occupied",
    note: "Rol cubierto actualmente; puede sumar colaboradores por producción.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Video",
    status: "occupied",
    note: "Base cubierta para sesiones piloto.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Iluminación",
    status: "occupied",
    note: "Rol ocupado, con necesidades variables por set.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Ingeniería de audio",
    status: "occupied",
    note: "Base técnica cubierta para captura y mezcla.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Styling",
    status: "occupied",
    note: "Rol cubierto, abierto a colaboraciones por artista.",
  },
];

export const collaborationRoles: Role[] = [
  { id: "musicos", label: "Músicos", category: "Música", status: "flexible", description: "Apoyo por sesión según arreglo y repertorio." },
  { id: "arreglistas", label: "Arreglistas", category: "Música", status: "open", description: "Versiones íntimas y adaptaciones para cuarto." },
  { id: "produccion", label: "Producción", category: "Set", status: "open", description: "Coordinación de llamado, tiempos y necesidades." },
  { id: "fotografia", label: "Fotografía", category: "Imagen", status: "open", description: "Still photography y archivo editorial." },
  { id: "video", label: "Video", category: "Imagen", status: "occupied", description: "Rol base ocupado; se consideran refuerzos por sesión." },
  { id: "audio", label: "Audio", category: "Técnica", status: "occupied", description: "Ingeniería cubierta; posibles asistentes por producción." },
  { id: "iluminacion", label: "Iluminación", category: "Técnica", status: "occupied", description: "Base cubierta, con apoyo variable por set." },
  { id: "styling", label: "Styling", category: "Cuidado", status: "occupied", description: "Rol cubierto, abierto a colaboraciones puntuales." },
  { id: "maquillaje", label: "Maquillaje", category: "Cuidado", status: "open", description: "Look natural, editorial y sensible al artista." },
  { id: "chef", label: "Chef", category: "Hospitalidad", status: "open", description: "Comida sencilla y cuidada para artistas y equipo." },
  { id: "sous-chef", label: "Sous-chef", category: "Hospitalidad", status: "open", description: "Apoyo de cocina en sesiones con mayor equipo." },
  { id: "hospitalidad", label: "Hospitalidad", category: "Hospitalidad", status: "open", description: "Recibir, cuidar tiempos, mesa y experiencia humana." },
  { id: "otros", label: "Otros", category: "Abierto", status: "open", description: "Oficios y miradas que puedan elevar una producción." },
];

export function getPublishedSessions() {
  return sessions.filter((session) => session.status === "published");
}

export function getFeaturedSession() {
  return sessions.find((session) => session.featured) ?? getPublishedSessions()[0] ?? sessions[0];
}

export function getSessionBySlug(slug: string) {
  return sessions.find((session) => session.slug === slug);
}
