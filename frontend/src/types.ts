export type CategoryKey =
  | "culture"
  | "festival"
  | "language"
  | "art"
  | "food"
  | "hiddenGems";

export type StateRecord = {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  locations: string[];
  categories: Record<CategoryKey, string>;
};

export type SiteContent = {
  site: {
    name: string;
    hindi: string;
    tagline: string;
    intro: string;
    sidePanelTitle: string;
    sidePanel: { title: string; body: string }[];
    vision: string;
  };
  gallery: { id: string; title: string; caption: string; image: string }[];
  products: { id: string; name: string; region: string; description: string; image: string }[];
  sponsors: { id: string; name: string; note: string }[];
  brand: { title: string; kicker: string; image: string; body: string };
  team: { id: string; name: string; role: string; bio: string; photo: string }[];
  social: { instagram: string; youtube: string; linkedin: string };
  contact: { email: string; place: string };
  forum: { intro: string; threads: { id: string; title: string; author: string; excerpt: string }[] };
  states: StateRecord[];
};

export const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: "culture", label: "Culture" },
  { key: "festival", label: "Festival" },
  { key: "language", label: "Language" },
  { key: "art", label: "Art" },
  { key: "food", label: "Food" },
  { key: "hiddenGems", label: "Hidden Gems" },
];
