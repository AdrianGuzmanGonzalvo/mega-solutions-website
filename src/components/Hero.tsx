import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, UserCheck, FileStack, Stamp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { whatsappHref } from "../data/contact";
import teamPhoto from "../assets/team-photo.jpg";

const CARDS = [
  { icon: UserCheck, titleKey: "heroCard1Title" as const, descKey: "heroCard1Desc" as const },
  { icon: FileStack, titleKey: "heroCard2Title" as const, descKey: "heroCard2Desc" as const },
  { icon: Stamp, titleKey: "heroCard3Title" as const, descKey: "heroCard3Desc" as const },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative bg-navy overflow-hidden pt-28 md:pt-36 pb-32 md:pb-40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-navy-light/60 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-soft uppercase mb-6">
            {t("heroEyebrow")}
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-9">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#inmigracion"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold hover:bg-gold-hover text-navy font-semibold px-7 py-3.5 transition-colors shadow-gold"
            >
              {t("heroCtaServices")}
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:border-gold-bright hover:text-gold-bright text-white font-semibold px-7 py-3.5 transition-colors"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              {t("heroCtaWhatsapp")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-gold/15 -z-10 hidden sm:block" />
          <img
            src={teamPhoto}
            alt="Equipo Mega Solutions"
            className="relative rounded-[1.75rem] w-full aspect-[5/4] object-cover object-top shadow-2xl shadow-black/40"
          />
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="relative max-w-7xl mx-auto px-6 mt-16 md:mt-20">
        <div className="grid sm:grid-cols-3 gap-5 md:absolute md:inset-x-6 md:-bottom-20">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white shadow-xl shadow-navy/10 border border-gold/15 p-6 flex items-start gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <card.icon className="w-6 h-6 text-gold-bright" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">{t(card.titleKey)}</h3>
                <p className="text-sm text-ink/60 leading-snug">{t(card.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
