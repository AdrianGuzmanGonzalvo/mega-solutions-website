import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  action?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  action,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4 ${
          light ? "bg-gold/10 border border-gold/40 text-gold-soft" : "bg-navy/5 border border-navy/10 text-navy"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif-display text-3xl sm:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${light ? "text-white/65" : "text-ink/60"}`}>{subtitle}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </motion.div>
  );
}
