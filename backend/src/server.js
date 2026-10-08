const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { buildContent } = require("./seed");

const PORT = Number(process.env.PORT || 4000);
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";
const CMS_PASSWORD = process.env.CMS_PASSWORD || "pardesiya-edit";
const DATA_DIR = path.join(__dirname, "..", "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");

const sessions = new Map();

function ensureContent() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(CONTENT_FILE)) {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(buildContent(), null, 2), "utf8");
  }
}

function readContent() {
  ensureContent();
  return JSON.parse(fs.readFileSync(CONTENT_FILE, "utf8"));
}

function writeContent(next) {
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(next, null, 2), "utf8");
}

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: "Sign in required for the CMS." });
  }
  next();
}

const app = express();
app.use(cors({ origin: CORS_ORIGIN.split(",").map((s) => s.trim()) }));
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "pardesiya-api" });
});

app.get("/api/content", (_req, res) => {
  res.json(readContent());
});

app.get("/api/states", (_req, res) => {
  const { states } = readContent();
  res.json(
    states.map(({ id, name, tagline, heroImage }) => ({
      id,
      name,
      tagline,
      heroImage,
    })),
  );
});

app.get("/api/states/:id", (req, res) => {
  const state = readContent().states.find((s) => s.id === req.params.id);
  if (!state) return res.status(404).json({ error: "State not found." });
  res.json(state);
});

app.post("/api/auth/login", (req, res) => {
  const password = req.body?.password;
  if (password !== CMS_PASSWORD) {
    return res.status(401).json({ error: "Wrong password." });
  }
  const token = crypto.randomBytes(24).toString("hex");
  sessions.set(token, Date.now());
  res.json({ token });
});

app.put("/api/content", auth, (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ error: "Expected a content object." });
  }
  writeContent(req.body);
  res.json({ ok: true });
});

app.put("/api/content/:section", auth, (req, res) => {
  const content = readContent();
  const section = req.params.section;
  if (!(section in content)) {
    return res.status(404).json({ error: "Unknown section." });
  }
  content[section] = req.body;
  writeContent(content);
  res.json({ ok: true, section });
});

app.listen(PORT, () => {
  ensureContent();
  console.log(`Pardesiya API on http://localhost:${PORT}`);
});
