import type { SiteContent, StateRecord } from "./types";

const API = import.meta.env.VITE_API_URL ?? "";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export function fetchContent() {
  return request<SiteContent>("/api/content");
}

export function fetchState(id: string) {
  return request<StateRecord>(`/api/states/${id}`);
}

export function loginCms(password: string) {
  return request<{ token: string }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ password }),
  });
}

export function saveContent(token: string, content: SiteContent) {
  return request<{ ok: boolean }>("/api/content", {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(content),
  });
}
