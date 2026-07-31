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
    title: "Intencion",
    body: "Cada decision existe para servir a la cancion, al artista y al momento que se esta documentando.",
  },
  {
    title: "Atencion",
    body: "Escuchamos antes de mover camaras. La produccion se adapta a lo que la pieza pide.",
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
  "Acompanamos procesos musicales en sesiones audiovisuales intimas.",
  "Documentamos canciones con direccion creativa, audio, video, luz y fotografia.",
  "Amplificamos piezas desde una mirada editorial, sin prometer fama ni descubrimiento.",
  "Convergemos artistas, equipo tecnico, hospitalidad y marcas cuando la integracion tiene sentido.",
] as const;

export const teamMembers: TeamMember[] = [
  {
    name: "Equipo SPOTTED",
    role: "Direccion creativa",
    status: "occupied",
    note: "Rol cubierto actualmente; puede sumar colaboradores por produccion.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Video",
    status: "occupied",
    note: "Base cubierta para sesiones piloto.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Iluminacion",
    status: "occupied",
    note: "Rol ocupado, con necesidades variables por set.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Ingenieria de audio",
    status: "occupied",
    note: "Base tecnica cubierta para captura y mezcla.",
  },
  {
    name: "Equipo SPOTTED",
    role: "Styling",
    status: "occupied",
    note: "Rol cubierto, abierto a colaboraciones por artista.",
  },
];

export const collaborationRoles: Role[] = [
  { id: "musicos", label: "Musicos", category: "Musica", status: "flexible", description: "Apoyo por sesion segun arreglo y repertorio." },
  { id: "arreglistas", label: "Arreglistas", category: "Musica", status: "open", description: "Versiones intimas y adaptaciones para cuarto." },
  { id: "produccion", label: "Produccion", category: "Set", status: "open", description: "Coordinacion de llamado, tiempos y necesidades." },
  { id: "fotografia", label: "Fotografia", category: "Imagen", status: "open", description: "Still photography y archivo editorial." },
  { id: "video", label: "Video", category: "Imagen", status: "occupied", description: "Rol base ocupado; se consideran refuerzos por sesion." },
  { id: "audio", label: "Audio", category: "Tecnica", status: "occupied", description: "Ingenieria cubierta; posibles asistentes por produccion." },
  { id: "iluminacion", label: "Iluminacion", category: "Tecnica", status: "occupied", description: "Base cubierta, con apoyo variable por set." },
  { id: "styling", label: "Styling", category: "Cuidado", status: "occupied", description: "Rol cubierto, abierto a colaboraciones puntuales." },
  { id: "maquillaje", label: "Maquillaje", category: "Cuidado", status: "open", description: "Look natural, editorial y sensible al artista." },
  { id: "chef", label: "Chef", category: "Hospitalidad", status: "open", description: "Comida sencilla y cuidada para artistas y equipo." },
  { id: "sous-chef", label: "Sous-chef", category: "Hospitalidad", status: "open", description: "Apoyo de cocina en sesiones con mayor equipo." },
  { id: "hospitalidad", label: "Hospitalidad", category: "Hospitalidad", status: "open", description: "Recibir, cuidar tiempos, mesa y experiencia humana." },
  { id: "otros", label: "Otros", category: "Abierto", status: "open", description: "Oficios y miradas que puedan elevar una produccion." },
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
