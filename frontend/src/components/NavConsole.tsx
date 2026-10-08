import { NavLink } from "react-router-dom";
import { LogoMark } from "./LogoMark";

const links = [
  { to: "/forum", label: "Forum Page", end: false },
  { to: "/#products", label: "Product Detail", hash: true },
  { to: "/#brand", label: "Brand Portfolio", hash: true },
  { to: "/#vision", label: "Vision", hash: true },
];

export function NavConsole() {
  return (
    <header className="nav-console">
      <NavLink to="/" className="nav-brand">
        <LogoMark />
        PARDESIYA
      </NavLink>
      <nav className="nav-links" aria-label="Console">
        {links.map((link) =>
          link.hash ? (
            <a key={link.label} href={link.to}>
              {link.label}
            </a>
          ) : (
            <NavLink key={link.label} to={link.to}>
              {link.label}
            </NavLink>
          ),
        )}
      </nav>
    </header>
  );
}
