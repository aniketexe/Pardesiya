import { createContext, useContext } from "react";
import type { SiteContent } from "./types";

export const ContentContext = createContext<SiteContent | null>(null);

export function useContent() {
  const value = useContext(ContentContext);
  if (!value) throw new Error("Content is still loading.");
  return value;
}
