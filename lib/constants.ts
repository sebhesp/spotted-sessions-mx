import type { FormConfig, Role, SessionPreview } from "@/lib/types";

export const navigation = [
  { label: "Inicio", href: "#top" },
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Artistas", href: "#artistas" },
  { label: "Join SPOTTED", href: "#colaboradores" },
  { label: "Marcas", href: "#marcas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Sesiones", href: "#sesiones" },
];

export const pillars = [
  "Música en vivo",
  "Dirección creativa",
  "Video",
  "Iluminación",
  "Ingeniería de audio",
  "Styling",
  "Hospitalidad",
  "Gastronomía",
  "Comunidad",
];

export const sessionMoments = [
  {
    title: "Antes de grabar",
    body: "Conversación, café, montaje tranquilo y una mesa que ayuda a bajar el ruido.",
  },
  {
    title: "Durante la toma",
    body: "Audio atento, luz cálida, cámara cercana y un equipo que entiende cuándo intervenir y cuándo guardar silencio.",
  },
  {
    title: "Después",
    body: "Créditos claros, memoria visual y una comunidad que puede volver a encontrarse alrededor de la sesión.",
  },
];

export const occupiedRoles: Role[] = [
  { name: "Video", group: "Core Team", status: "Ocupado" },
  { name: "Iluminación", group: "Core Team", status: "Ocupado" },
  { name: "Ingeniería de audio", group: "Core Team", status: "Ocupado" },
  { name: "Dirección creativa", group: "Core Team", status: "Ocupado" },
  { name: "Styling", group: "Core Team", status: "Ocupado" },
];

export const openRoles: Role[] = [
  { name: "Chef", group: "Hospitalidad", status: "Abierto" },
  { name: "Sous chef", group: "Hospitalidad", status: "Abierto" },
  { name: "Catering", group: "Hospitalidad", status: "Abierto" },
  { name: "Barista", group: "Hospitalidad", status: "Abierto" },
  { name: "Mixología", group: "Hospitalidad", status: "Abierto" },
  { name: "Fotografía", group: "Producción", status: "Abierto" },
  { name: "BTS", group: "Producción", status: "Abierto" },
  { name: "Producción de campo", group: "Producción", status: "Abierto" },
  { name: "Asistente de producción", group: "Producción", status: "Abierto" },
  { name: "Flores", group: "Experiencia", status: "Abierto" },
  { name: "Decoración", group: "Experiencia", status: "Abierto" },
  { name: "Guest experience", group: "Experiencia", status: "Abierto" },
  { name: "Host", group: "Experiencia", status: "Abierto" },
  { name: "Community manager", group: "Experiencia", status: "Abierto" },
  { name: "Instrumentistas", group: "Música", status: "Abierto" },
  { name: "Arreglistas", group: "Música", status: "Abierto" },
  { name: "Backline", group: "Música", status: "Abierto" },
  { name: "Productores musicales", group: "Música", status: "Abierto" },
];

export const brandCategories = [
  "Café",
  "Vino",
  "Audio",
  "Moda",
  "Diseño",
  "Tecnología",
  "Gastronomía",
  "Instrumentos",
  "Lifestyle",
];

export const sessionPreviews: SessionPreview[] = [
  {
    title: "Session 001 — Casa Abierta",
    status: "En preparación",
    focus: "Primera sesión piloto con artista emergente.",
  },
  {
    title: "Session 002 — Mesa Compartida",
    status: "Buscando colaboradores",
    focus: "Sesión con hospitalidad, cocina y comunidad.",
  },
  {
    title: "Session 003 — Archivo Vivo",
    status: "Próximamente",
    focus: "Documentación visual y musical de artistas emergentes.",
  },
];

export const sessionDetails = [
  "Artista",
  "Fecha",
  "Créditos",
  "Equipo participante",
  "Marcas aliadas",
  "Fotos",
  "Video",
  "Descripción",
];

export const formConfigs: Record<FormConfig["kind"], FormConfig> = {
  artist: {
    kind: "artist",
    eyebrow: "Aplicación de artista",
    title: "Cuéntanos qué quieres poner sobre la mesa.",
    description:
      "Este formulario es una primera conversación. Queremos entender tu proyecto, tu ciudad y la canción que quieres habitar con calma.",
    submitLabel: "Aplicar como artista",
    successMessage:
      "Recibimos tu aplicación. Si la sesión encuentra su momento, te escribiremos para conversar con cuidado.",
    fields: [
      { name: "artistName", label: "Nombre artístico", type: "text", required: true },
      { name: "contactName", label: "Nombre de contacto", type: "text", required: true, autoComplete: "name" },
      { name: "city", label: "Ciudad", type: "text", required: true, autoComplete: "address-level2" },
      { name: "instagram", label: "Instagram", type: "text", required: true, placeholder: "@tu_proyecto", autoComplete: "url" },
      {
        name: "musicLink",
        label: "Spotify / Apple Music / YouTube",
        type: "url",
        required: true,
        placeholder: "https://",
      },
      {
        name: "project",
        label: "Canción o proyecto que quieres presentar",
        type: "textarea",
        required: true,
        minLength: 12,
        helpText: "Puede ser una canción, un EP, un nuevo arreglo o una idea que quieras probar en vivo.",
      },
      {
        name: "message",
        label: "Mensaje",
        type: "textarea",
        required: true,
        minLength: 20,
        helpText: "Cuéntanos qué buscas sentir o construir con esta sesión.",
      },
    ],
  },
  collaborator: {
    kind: "collaborator",
    eyebrow: "Postulación de equipo",
    title: "Dinos desde dónde quieres entrar a la sesión.",
    description:
      "Trabajamos por fechas concretas. Buscamos personas responsables, sensibles al detalle y buenas para crear con otras personas.",
    submitLabel: "Postularme al equipo",
    successMessage:
      "Recibimos tu postulación. La guardaremos para las sesiones donde tu rol haga sentido.",
    fields: [
      { name: "name", label: "Nombre", type: "text", required: true, autoComplete: "name" },
      { name: "city", label: "Ciudad", type: "text", required: true, autoComplete: "address-level2" },
      { name: "instagram", label: "Instagram", type: "text", required: true, autoComplete: "url" },
      { name: "primaryRole", label: "Rol principal", type: "text", required: true },
      { name: "secondaryRoles", label: "Roles secundarios", type: "text" },
      { name: "portfolio", label: "Portafolio", type: "url", placeholder: "https://" },
      {
        name: "availability",
        label: "Disponibilidad",
        type: "select",
        required: true,
        options: ["Entre semana", "Fines de semana", "Fechas puntuales", "Flexible"],
      },
      {
        name: "experience",
        label: "Experiencia",
        type: "textarea",
        required: true,
        minLength: 20,
        helpText: "No tiene que ser un CV frío. Queremos entender cómo trabajas y qué has cuidado antes.",
      },
      {
        name: "sessions",
        label: "¿En qué tipo de sesiones te gustaría participar?",
        type: "textarea",
        helpText: "Ejemplo: sesiones acústicas, comida para equipo, BTS, producción de campo, arreglos, etc.",
      },
    ],
  },
  brand: {
    kind: "brand",
    eyebrow: "Colaboración de marca",
    title: "Pongamos algo honesto sobre la mesa.",
    description:
      "Buscamos aliados que entiendan la cultura como una relación, no como una interrupción.",
    submitLabel: "Colaborar con SPOTTED",
    successMessage:
      "Recibimos tu mensaje. Si la colaboración se siente natural, seguiremos la conversación.",
    fields: [
      { name: "brand", label: "Marca", type: "text", required: true, autoComplete: "organization" },
      { name: "contact", label: "Contacto", type: "text", required: true, autoComplete: "name" },
      {
        name: "category",
        label: "Categoría",
        type: "select",
        required: true,
        options: brandCategories,
      },
      { name: "website", label: "Instagram / web", type: "text", required: true, autoComplete: "url" },
      {
        name: "collaboration",
        label: "Tipo de colaboración",
        type: "textarea",
        required: true,
        minLength: 12,
      },
      { name: "message", label: "Mensaje", type: "textarea", required: true, minLength: 20 },
    ],
  },
};
