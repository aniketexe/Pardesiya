import { useState } from "react";
import { useContent } from "../ContentContext";
import { IndiaMap } from "../components/IndiaMap";
import { LogoMark } from "../components/LogoMark";

export function HomePage() {
  const data = useContent();
  const [hover, setHover] = useState<{ name: string; id: string } | null>(null);

  return (
    <div className="page-shell">
      <section className="hero" id="opening">
        <article className="panel hero-main">
          <LogoMark />
          <p className="hindi">{data.site.hindi}</p>
          <h1 className="wordmark">{data.site.name}</h1>
          <p className="tagline">{data.site.tagline}</p>
          <p className="intro">{data.site.intro}</p>
        </article>
        <aside className="panel side-panel" aria-label={data.site.sidePanelTitle}>
          <h3>{data.site.sidePanelTitle}</h3>
          {data.site.sidePanel.map((note) => (
            <div className="note" key={note.title}>
              <h4>{note.title}</h4>
              <p>{note.body}</p>
            </div>
          ))}
        </aside>
      </section>

      <section className="section" id="map">
        <p className="section-kicker">Travel planner</p>
        <h2 className="section-title">Travel With Us</h2>
        <div className="gold-rule" />
        <div className="panel map-wrap">
          <div className="map-layout">
            <IndiaMap
              onHover={(name, id) => {
                if (name && id) setHover({ name, id });
                else setHover(null);
              }}
            />
            <div className="map-legend">
              <p className="section-kicker">Choose a state</p>
              <p className="hover-name">{hover?.name ?? "India"}</p>
              <p>
                Hover to lift a state from the cardboard. Click to open Culture, Festival, Language, Art, Food, and
                Hidden Gems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <p className="section-kicker">Still rooms</p>
        <h2 className="section-title">Photo Gallery</h2>
        <div className="gold-rule" />
        <div className="gallery-grid">
          {data.gallery.map((shot) => (
            <figure className="gallery-card" key={shot.id}>
              <img src={shot.image} alt={shot.title} />
              <figcaption>
                <h3>{shot.title}</h3>
                <p>{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="products">
        <p className="section-kicker">Shop</p>
        <h2 className="section-title">Piece of Our Culture</h2>
        <div className="gold-rule" />
        {data.products.map((product) => (
          <article className="panel product-row" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-copy">
              <p className="region">{product.region}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section" id="sponsors">
        <p className="section-kicker">Companions on the road</p>
        <h2 className="section-title">People who trusted us</h2>
        <div className="gold-rule" />
        <div className="sponsors">
          {data.sponsors.map((s) => (
            <div className="sponsor-seal" key={s.id}>
              <strong>{s.name}</strong>
              <span>{s.note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="brand">
        <p className="section-kicker">{data.brand.kicker}</p>
        <h2 className="section-title">{data.brand.title}</h2>
        <div className="gold-rule" />
        <article className="brand-story panel">
          <div className="photo" style={{ backgroundImage: `url(${data.brand.image})` }} />
          <div className="copy">
            <p className="section-kicker">From the notebook</p>
            <h2>How this house was raised</h2>
            <p>{data.brand.body}</p>
          </div>
        </article>
      </section>

      <section className="section" id="vision">
        <p className="section-kicker">Know us more</p>
        <h2 className="section-title">Vision</h2>
        <div className="gold-rule" />
        <article className="panel" style={{ padding: "1.4rem 1.6rem" }}>
          <p className="intro">{data.site.vision}</p>
          <div className="team-grid">
            {data.team.map((person) => (
              <div className="person" key={person.id}>
                <img src={person.photo} alt={person.name} />
                <h3 className="hover-name" style={{ fontSize: "1.5rem" }}>
                  {person.name}
                </h3>
                <p className="region">{person.role}</p>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>
          <div className="socials">
            <a href={data.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={data.social.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
