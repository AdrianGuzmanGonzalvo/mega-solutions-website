import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function LegalDisclaimer() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream px-6 -mt-1 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto rounded-2xl border border-gold/40 bg-gradient-to-r from-navy to-navy-light px-6 py-7 md:px-10 md:py-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left shadow-lg shadow-navy/10"
      >
        <div className="shrink-0 w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
          <ShieldAlert className="w-7 h-7 text-gold-bright" strokeWidth={1.75} />
        </div>
        <p className="text-white/90 text-base sm:text-[0.95rem] leading-relaxed font-medium">
          {t("disclaimerText")}
        </p>
      </motion.div>
    </section>
  );
}
