import SectionHeading from "./SectionHeading";
import ServiceCategoryCard from "./ServiceCategoryCard";
import { notaryCategories } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";

export default function NotaryServices() {
  const { t } = useLanguage();

  return (
    <section id="notarial" className="relative bg-navy py-20 md:py-28 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("notaryEyebrow")}
          title={t("notaryTitle")}
          subtitle={t("notarySubtitle")}
          light
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notaryCategories.map((category, i) => (
            <ServiceCategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
