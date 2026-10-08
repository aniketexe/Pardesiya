export function LogoMark({ className = "logo-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="34" r="18" fill="#c9a24a" />
      <circle cx="32" cy="34" r="8" fill="#7a1f1a" />
      <path d="M32 8l2.2 14L32 20l-2.2 2z" fill="#e8d48a" />
      <path d="M18 22c8 4 20 4 28 0" fill="none" stroke="#7a1f1a" strokeWidth="1.4" />
    </svg>
  );
}
