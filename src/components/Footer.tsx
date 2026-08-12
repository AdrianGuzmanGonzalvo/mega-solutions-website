import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT } from "../data/contact";
import logo from "../assets/logo.jpg";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.3C16.2 4.25 15.2 4.17 14.05 4.17c-2.4 0-4.05 1.47-4.05 4.16V10.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const QUICK_LINKS = [
  { href: "#home", key: "navHome" as const },
  { href: "#notarial", key: "navNotary" as const },
  { href: "#inmigracion", key: "navImmigration" as const },
  { href: "#nosotros", key: "navAbout" as const },
  { href: "#contacto", key: "navContact" as const },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Mega Solutions" className="h-11 w-11 object-contain rounded-full bg-white/5" />
            <span className="font-serif-display text-white font-bold text-lg leading-tight">MEGA SOLUTIONS</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">{t("footerTagline")}</p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">{t("footerQuickLinks")}</h4>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold-bright transition-colors">
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">{t("footerContact")}</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 hover:text-gold-bright transition-colors">
                <Phone className="w-4 h-4 text-gold shrink-0" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 hover:text-gold-bright transition-colors break-all">
                <Mail className="w-4 h-4 text-gold shrink-0" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0" /> {CONTACT.city}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">{t("footerLegal")}</h4>
          <p className="text-sm leading-relaxed">{t("footerLegalText")}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/50 text-center">
          {t("footerRights")}
        </div>
      </div>
    </footer>
  );
}
