import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ServiceCategory } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";

export default function ServiceCategoryCard({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
}) {
  const { t, lang } = useLanguage();
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl bg-white border border-navy/8 p-7 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
        <Icon className="w-6 h-6 text-gold-bright group-hover:text-navy transition-colors duration-300" strokeWidth={1.75} />
      </div>
      <h3 className="font-serif-display text-lg font-bold text-navy mb-4 leading-snug">
        {t(category.titleKey)}
      </h3>
      <ul className="space-y-2.5">
        {category.items.map((item) => (
          <li key={item.es} className="flex items-start gap-2.5 text-sm text-ink/70 leading-snug">
            <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={2.5} />
            <span>{item[lang]}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
