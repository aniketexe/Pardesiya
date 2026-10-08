import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import india from "@svg-maps/india";

type Props = {
  onHover: (name: string | null, id: string | null) => void;
};

export function IndiaMap({ onHover }: Props) {
  const navigate = useNavigate();
  const [hot, setHot] = useState<string | null>(null);

  const ordered = useMemo(() => {
    if (!hot) return india.locations;
    const rest = india.locations.filter((l) => l.id !== hot);
    const current = india.locations.find((l) => l.id === hot);
    return current ? [...rest, current] : india.locations;
  }, [hot]);

  return (
    <svg className="india-svg" viewBox={india.viewBox} role="img" aria-label="Interactive map of India">
      {ordered.map((loc) => (
        <path
          key={loc.id}
          d={loc.path}
          className={hot === loc.id ? "state-path is-hot" : "state-path"}
          onMouseEnter={() => {
            setHot(loc.id);
            onHover(loc.name, loc.id);
          }}
          onMouseLeave={() => {
            setHot(null);
            onHover(null, null);
          }}
          onClick={() => navigate(`/states/${loc.id}`)}
        >
          <title>{loc.name}</title>
        </path>
      ))}
    </svg>
  );
}
