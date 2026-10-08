import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchState } from "../api";
import { CATEGORIES, type CategoryKey, type StateRecord } from "../types";

export function StatePage() {
  const { id } = useParams();
  const [state, setState] = useState<StateRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cat, setCat] = useState<CategoryKey>("culture");

  useEffect(() => {
    if (!id) return;
    fetchState(id)
      .then(setState)
      .catch((e: Error) => setError(e.message));
  }, [id]);

  if (error) return <p className="status-banner">{error}</p>;
  if (!state) return <p className="status-banner">Unfolding the map…</p>;

  return (
    <article>
      <div className="state-hero" style={{ backgroundImage: `url(${state.heroImage})` }}>
        <div>
          <p className="section-kicker">Travel With Us</p>
          <h1 className="wordmark" style={{ fontSize: "3.2rem", color: "#fff6e4" }}>
            {state.name}
          </h1>
          <p className="tagline" style={{ color: "#e8d48a" }}>
            {state.tagline}
          </p>
        </div>
      </div>
      <div className="page-shell">
        <p style={{ marginTop: "1.2rem" }}>
          <Link to="/#map">← Back to the map</Link>
        </p>
        <p className="region">Places to keep in the notebook</p>
        <p>{state.locations.join(" · ")}</p>
        <div className="cats">
          {CATEGORIES.map((c) => (
            <button key={c.key} className={cat === c.key ? "on" : ""} onClick={() => setCat(c.key)} type="button">
              {c.label}
            </button>
          ))}
        </div>
        <div className="panel" style={{ padding: "1.4rem 1.6rem" }}>
          <h2 className="section-title" style={{ fontSize: "2rem" }}>
            {CATEGORIES.find((c) => c.key === cat)?.label}
          </h2>
          <p className="intro">{state.categories[cat]}</p>
        </div>
      </div>
    </article>
  );
}
