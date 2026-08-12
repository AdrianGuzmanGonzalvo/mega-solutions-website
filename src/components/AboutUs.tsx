import { motion } from "framer-motion";
import { Scale, Lock, Award, HeartHandshake, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";

const VALUES = [
  { icon: Scale, titleKey: "valueEthicsTitle" as const, descKey: "valueEthicsDesc" as const },
  { icon: Lock, titleKey: "valueDiscretionTitle" as const, descKey: "valueDiscretionDesc" as const },
  { icon: Award, titleKey: "valueProfessionalismTitle" as const, descKey: "valueProfessionalismDesc" as const },
  { icon: HeartHandshake, titleKey: "valueHonestyTitle" as const, descKey: "valueHonestyDesc" as const },
  { icon: Zap, titleKey: "valueSpeedTitle" as const, descKey: "valueSpeedDesc" as const },
];

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="bg-off-white py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow={t("aboutEyebrow")} title={t("aboutTitle")} />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="font-serif-display text-2xl font-bold text-navy leading-snug mb-5">
              {t("aboutTagline")}
            </p>
            <p className="text-ink/70 leading-relaxed">{t("aboutBody")}</p>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl bg-white border border-navy/8 p-6 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 ${
                  i === VALUES.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-gold-hover" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-navy mb-1.5">{t(value.titleKey)}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{t(value.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
