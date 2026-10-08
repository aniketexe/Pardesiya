import { useContent } from "../ContentContext";

export function ForumPage() {
  const { forum } = useContent();
  return (
    <section className="page-shell section">
      <p className="section-kicker">Community square</p>
      <h1 className="section-title">Forum</h1>
      <div className="gold-rule" />
      <p className="intro">{forum.intro}</p>
      {forum.threads.map((thread) => (
        <article className="thread" key={thread.id}>
          <h2 className="hover-name" style={{ fontSize: "1.6rem" }}>
            {thread.title}
          </h2>
          <p className="region">{thread.author}</p>
          <p>{thread.excerpt}</p>
        </article>
      ))}
      <p className="intro" style={{ marginTop: "1.4rem" }}>
        Posting, logins, and moderation land in a later pass — with a database, rate limits, and secrets kept on the
        server.
      </p>
    </section>
  );
}
