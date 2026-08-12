import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "../data/contact";
import { useLanguage } from "../i18n/LanguageContext";

export default function WhatsAppFloat() {
  const { lang } = useLanguage();

  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label={lang === "es" ? "Escríbenos por WhatsApp" : "Message us on WhatsApp"}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-xl shadow-black/25 hover:shadow-2xl transition-shadow"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <MessageCircle className="relative w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} fill="white" fillOpacity={0.15} />
    </motion.a>
  );
}
