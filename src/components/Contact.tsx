import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT, whatsappHref } from "../data/contact";
import { immigrationCategories, notaryCategories } from "../data/services";

const SERVICE_OPTIONS = [...immigrationCategories, ...notaryCategories];

export default function Contact() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const inputClasses =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors";

  return (
    <section id="contacto" className="bg-cream py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow={t("contactEyebrow")} title={t("contactTitle")} subtitle={t("contactSubtitle")} />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl bg-white border border-navy/8 shadow-xl shadow-navy/5 p-6 sm:p-8"
          >
            {submitted ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center gap-4 py-10">
                <CheckCircle2 className="w-14 h-14 text-gold" strokeWidth={1.5} />
                <p className="text-navy font-semibold text-lg max-w-sm">{t("formSuccess")}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-gold-hover font-semibold hover:underline"
                >
                  {lang === "es" ? "Enviar otro mensaje" : "Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-navy/70 uppercase tracking-wide mb-2">
                    {t("formName")}
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-navy/70 uppercase tracking-wide mb-2">
                    {t("formPhone")}
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-navy/70 uppercase tracking-wide mb-2">
                    {t("formEmail")}
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-navy/70 uppercase tracking-wide mb-2">
                    {t("formService")}
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" disabled>
                      {t("formServicePlaceholder")}
                    </option>
                    {SERVICE_OPTIONS.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {t(cat.titleKey)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-navy/70 uppercase tracking-wide mb-2">
                    {t("formMessage")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t("formMessagePlaceholder")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 transition-colors"
                  >
                    <Send className="w-4 h-4" strokeWidth={2.25} />
                    {t("formSubmit")}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl bg-navy text-white p-6 sm:p-8 flex flex-col gap-7"
          >
            <h3 className="font-serif-display text-xl font-bold">{t("contactInfoTitle")}</h3>

            <div className="flex flex-col gap-5">
              <a href={CONTACT.phoneHref} className="flex items-start gap-3.5 group">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-[18px] h-[18px] text-gold-bright" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/50">{t("contactPhoneLabel")}</p>
                  <p className="font-medium group-hover:text-gold-bright transition-colors">{CONTACT.phoneDisplay}</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3.5 group">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-[18px] h-[18px] text-gold-bright" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/50">{t("contactEmailLabel")}</p>
                  <p className="font-medium group-hover:text-gold-bright transition-colors break-all">{CONTACT.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-3.5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-[18px] h-[18px] text-gold-bright" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/50">{t("contactLocationLabel")}</p>
                  <p className="font-medium">{CONTACT.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-[18px] h-[18px] text-gold-bright" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/50">{t("contactHoursLabel")}</p>
                  <p className="font-medium whitespace-pre-line">{t("contactHoursValue")}</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3.5 transition-colors"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.25} />
              {t("contactWhatsappCta")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
