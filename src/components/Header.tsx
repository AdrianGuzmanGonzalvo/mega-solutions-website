import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT, whatsappHref } from "../data/contact";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { href: "#home", key: "navHome" as const },
  { href: "#notarial", key: "navNotary" as const },
  { href: "#inmigracion", key: "navImmigration" as const },
  { href: "#nosotros", key: "navAbout" as const },
  { href: "#contacto", key: "navContact" as const },
];

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top contact bar */}
      <div className="hidden md:block bg-navy-dark text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 hover:text-gold-bright transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" strokeWidth={2} />
              {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-gold-bright transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" strokeWidth={2} />
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" strokeWidth={2} />
              {CONTACT.city}
            </span>
          </div>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 hover:text-gold-bright transition-colors cursor-pointer"
            aria-label="Cambiar idioma / Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-gold" strokeWidth={2} />
            <span className={lang === "es" ? "text-gold-bright font-semibold" : ""}>ES</span>
            <span className="text-white/40">/</span>
            <span className={lang === "en" ? "text-gold-bright font-semibold" : ""}>EN</span>
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/10" : "bg-navy"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="Mega Solutions" className="h-11 w-11 object-contain rounded-full bg-white/5" />
            <span className="font-serif-display text-white leading-tight">
              <span className="block text-lg font-bold tracking-wide">MEGA SOLUTIONS</span>
              <span className="block text-[10px] text-gold-soft tracking-[0.2em] uppercase font-sans">
                {lang === "es" ? "Notarial & Inmigración" : "Notary & Immigration"}
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/85 hover:text-gold-bright transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-hover text-navy font-semibold text-sm px-5 py-2.5 transition-colors shadow-gold"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
              {t("navCta")}
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-dark/98 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-navy flex flex-col px-6 py-5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <img src={logo} alt="Mega Solutions" className="h-10 w-10 object-contain rounded-full bg-white/5" />
                <button onClick={() => setMenuOpen(false)} className="text-white p-2" aria-label="Cerrar menú">
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/90 text-lg font-medium py-3.5 border-b border-white/10 hover:text-gold-bright transition-colors"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2 text-white/80 text-sm"
                >
                  <Phone className="w-4 h-4 text-gold" /> {CONTACT.phoneDisplay}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-white/80 text-sm">
                  <Mail className="w-4 h-4 text-gold" /> {CONTACT.email}
                </a>
                <span className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="w-4 h-4 text-gold" /> {CONTACT.city}
                </span>
              </div>

              <button
                onClick={toggleLang}
                className="mt-6 flex items-center gap-2 text-sm text-white/80 self-start"
              >
                <Globe className="w-4 h-4 text-gold" />
                <span className={lang === "es" ? "text-gold-bright font-semibold" : ""}>Español</span>
                <span className="text-white/40">/</span>
                <span className={lang === "en" ? "text-gold-bright font-semibold" : ""}>English</span>
              </button>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold hover:bg-gold-hover text-navy font-semibold text-base px-5 py-3.5 transition-colors"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                {t("navCta")}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
