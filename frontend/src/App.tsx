import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { fetchContent } from "./api";
import { ContentContext } from "./ContentContext";
import { Footer } from "./components/Footer";
import { NavConsole } from "./components/NavConsole";
import { AdminPage } from "./pages/AdminPage";
import { ForumPage } from "./pages/ForumPage";
import { HomePage } from "./pages/HomePage";
import { StatePage } from "./pages/StatePage";
import type { SiteContent } from "./types";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContent()
      .then(setContent)
      .catch((e: Error) => setError(e.message));
  }, []);

  if (error) {
    return (
      <p className="status-banner">
        Could not reach the API. Start the backend on port 4000. ({error})
      </p>
    );
  }

  if (!content) return <p className="status-banner">Warming the kraft paper…</p>;

  return (
    <ContentContext.Provider value={content}>
      <div className="kraft-grain" />
      <NavConsole />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/states/:id" element={<StatePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </ContentContext.Provider>
  );
}
