import SectionHeading from "./SectionHeading";
import ServiceCategoryCard from "./ServiceCategoryCard";
import { immigrationCategories } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";

export default function ImmigrationServices() {
  const { t } = useLanguage();

  return (
    <section id="inmigracion" className="bg-cream py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("immigrationEyebrow")}
          title={t("immigrationTitle")}
          subtitle={t("immigrationSubtitle")}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {immigrationCategories.map((category, i) => (
            <ServiceCategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
