import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full bg-(--accent) px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-(--accent)/20 transition-colors hover:bg-(--accent)/90";

export default function ButtonLink({
  href,
  children,
  className = "",
  external = false,
}: ButtonLinkProps) {
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
