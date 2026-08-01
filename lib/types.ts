export type SessionStatus = "published" | "upcoming" | "draft";

export type ArtistLink = {
  label: string;
  href: string;
};

export type Artist = {
  name: string;
  city: string;
  bio: string;
  links: ArtistLink[];
};

export type Track = {
  title: string;
  duration?: string;
  description: string;
};

export type Credit = {
  area: string;
  name: string;
};

export type BrandPartner = {
  name: string;
  integration: string;
  status: "placeholder" | "confirmed";
};

export type SessionPhoto = {
  src: string;
  alt: string;
};

export type SessionVideo = {
  embedUrl?: string;
  poster: string;
  caption: string;
};

export type Session = {
  id: string;
  slug: string;
  status: SessionStatus;
  featured: boolean;
  date: string;
  location: string;
  city: string;
  format: string;
  year: string;
  artist: Artist;
  track: Track;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  video: SessionVideo;
  photos: SessionPhoto[];
  credits: Credit[];
  musicians: string[];
  hospitality: string;
  brandPartners: BrandPartner[];
  audioNotes: string;
  placeholder: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  status: "occupied" | "rotating";
  note: string;
};

export type Role = {
  id: string;
  label: string;
  category: string;
  status: "open" | "occupied" | "flexible";
  description: string;
};

export type ApplicationKind = "artist" | "collaborator" | "brand";
