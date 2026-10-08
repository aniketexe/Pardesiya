import { useContent } from "../ContentContext";

export function Footer() {
  const { contact, site } = useContent();
  return (
    <footer className="site-footer" id="contact">
      <p>
        {site.name} · {contact.place}
      </p>
      <p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
    </footer>
  );
}
