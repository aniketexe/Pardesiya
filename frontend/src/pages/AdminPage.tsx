import { useEffect, useState, type FormEvent } from "react";
import { fetchContent, loginCms, saveContent } from "../api";
import type { SiteContent } from "../types";

const TOKEN_KEY = "pardesiya-cms-token";

export function AdminPage() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) ?? "");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [status, setStatus] = useState("");
  const [stateId, setStateId] = useState("rj");

  useEffect(() => {
    fetchContent()
      .then((data) => {
        setContent(data);
        if (data.states[0]) setStateId(data.states[0].id);
      })
      .catch((e: Error) => setStatus(e.message));
  }, []);

  async function onLogin(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await loginCms(password);
      sessionStorage.setItem(TOKEN_KEY, res.token);
      setToken(res.token);
      setStatus("Signed in. Edit the fields and save.");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Login failed");
    }
  }

  async function onSave() {
    if (!content || !token) return;
    try {
      await saveContent(token, content);
      setStatus("Saved. Refresh the public site to see changes.");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Save failed");
    }
  }

  if (!content) return <p className="status-banner">Loading CMS…</p>;

  const state = content.states.find((s) => s.id === stateId) ?? content.states[0];

  function patchState(partial: Partial<typeof state>) {
    setContent({
      ...content!,
      states: content!.states.map((s) => (s.id === state.id ? { ...s, ...partial } : s)),
    });
  }

  if (!token) {
    return (
      <section className="page-shell admin">
        <h1 className="section-title">CMS login</h1>
        <p>For collaborators who need to change copy without touching code. Security hardening comes next.</p>
        <form onSubmit={onLogin}>
          <label className="field-label">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="chip-btn" type="submit">
            Enter
          </button>
        </form>
        {status && <p>{status}</p>}
      </section>
    );
  }

  return (
    <section className="page-shell admin">
      <h1 className="section-title">Edit Pardesiya</h1>
      <p>{status}</p>
      <button className="chip-btn" type="button" onClick={onSave}>
        Save all changes
      </button>

      <h2>Site</h2>
      <label className="field-label">Tagline</label>
      <input
        value={content.site.tagline}
        onChange={(e) => setContent({ ...content, site: { ...content.site, tagline: e.target.value } })}
      />
      <label className="field-label">Intro</label>
      <textarea
        value={content.site.intro}
        onChange={(e) => setContent({ ...content, site: { ...content.site, intro: e.target.value } })}
      />
      <label className="field-label">Vision</label>
      <textarea
        value={content.site.vision}
        onChange={(e) => setContent({ ...content, site: { ...content.site, vision: e.target.value } })}
      />

      <h2>Brand story</h2>
      <textarea
        value={content.brand.body}
        onChange={(e) => setContent({ ...content, brand: { ...content.brand, body: e.target.value } })}
      />

      <h2>State pages</h2>
      <select value={state.id} onChange={(e) => setStateId(e.target.value)}>
        {content.states.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>
      <label className="field-label">Tagline</label>
      <input value={state.tagline} onChange={(e) => patchState({ tagline: e.target.value })} />
      <label className="field-label">Culture</label>
      <textarea
        value={state.categories.culture}
        onChange={(e) => patchState({ categories: { ...state.categories, culture: e.target.value } })}
      />
      <label className="field-label">Festival</label>
      <textarea
        value={state.categories.festival}
        onChange={(e) => patchState({ categories: { ...state.categories, festival: e.target.value } })}
      />
      <label className="field-label">Language</label>
      <textarea
        value={state.categories.language}
        onChange={(e) => patchState({ categories: { ...state.categories, language: e.target.value } })}
      />
      <label className="field-label">Art</label>
      <textarea value={state.categories.art} onChange={(e) => patchState({ categories: { ...state.categories, art: e.target.value } })} />
      <label className="field-label">Food</label>
      <textarea
        value={state.categories.food}
        onChange={(e) => patchState({ categories: { ...state.categories, food: e.target.value } })}
      />
      <label className="field-label">Hidden Gems</label>
      <textarea
        value={state.categories.hiddenGems}
        onChange={(e) => patchState({ categories: { ...state.categories, hiddenGems: e.target.value } })}
      />

      <h2>Forum intro</h2>
      <textarea
        value={content.forum.intro}
        onChange={(e) => setContent({ ...content, forum: { ...content.forum, intro: e.target.value } })}
      />

      <button className="chip-btn" type="button" onClick={onSave}>
        Save all changes
      </button>
    </section>
  );
}
