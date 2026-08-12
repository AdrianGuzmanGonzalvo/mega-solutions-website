import {
  Users,
  Award,
  ShieldCheck,
  FileSignature,
  Globe2,
  Languages,
  type LucideIcon,
} from "lucide-react";

export interface Bilingual {
  es: string;
  en: string;
}

export interface ServiceCategory {
  id: string;
  titleKey:
    | "catFamilyTitle"
    | "catCitizenshipTitle"
    | "catProtectionTitle"
    | "catNotaryGeneralTitle"
    | "catApostilleTitle"
    | "catTranslationTitle";
  icon: LucideIcon;
  items: Bilingual[];
}

export const immigrationCategories: ServiceCategory[] = [
  {
    id: "family",
    titleKey: "catFamilyTitle",
    icon: Users,
    items: [
      { es: "Solicitudes de Visas (Residencia, Turista, Trabajo, Novios)", en: "Visa Applications (Residency, Tourist, Work, Fiancé)" },
      { es: "Ajuste de Estatus", en: "Adjustment of Status" },
      { es: "Peticiones Familiares", en: "Family Petitions" },
      { es: "Remoción de Condiciones de Residencia", en: "Removal of Conditions on Residence" },
    ],
  },
  {
    id: "citizenship",
    titleKey: "catCitizenshipTitle",
    icon: Award,
    items: [
      { es: "Naturalización / Ciudadanía Estadounidense", en: "Naturalization / U.S. Citizenship" },
      { es: "Permisos de Trabajo", en: "Work Permits" },
      { es: "Reemplazo o Renovación de Green Card", en: "Green Card Replacement or Renewal" },
      { es: "Permisos de Viaje", en: "Travel Permits" },
    ],
  },
  {
    id: "protection",
    titleKey: "catProtectionTitle",
    icon: ShieldCheck,
    items: [
      { es: "Procesos de Asilo", en: "Asylum Processes" },
      { es: "Trámites Migratorios Generales", en: "General Immigration Procedures" },
    ],
  },
];

export const notaryCategories: ServiceCategory[] = [
  {
    id: "notary-general",
    titleKey: "catNotaryGeneralTitle",
    icon: FileSignature,
    items: [
      { es: "Remote Online Notary (RON)", en: "Remote Online Notary (RON)" },
      { es: "Poderes / Cartas de Poder", en: "Powers of Attorney" },
      { es: "Declaraciones Juradas (Affidavits)", en: "Affidavits" },
      { es: "Certificación de Pasaportes", en: "Passport Certification" },
      { es: "Documentos de Tutela de Niños", en: "Child Custody Documents" },
      { es: "Contratos", en: "Contracts" },
      { es: "Escrituras", en: "Deeds" },
      { es: "Divorcio", en: "Divorce Documents" },
      { es: "Préstamos y Registro de Propiedad", en: "Loan & Property Recording Documents" },
      { es: "Testamentos", en: "Wills" },
    ],
  },
  {
    id: "apostille",
    titleKey: "catApostilleTitle",
    icon: Globe2,
    items: [
      { es: "Apostillado de Documentos", en: "Document Apostille" },
      { es: "Certificación Notarial Internacional", en: "International Notarial Certification" },
      { es: "Copias Certificadas", en: "Certified Copies" },
    ],
  },
  {
    id: "translation",
    titleKey: "catTranslationTitle",
    icon: Languages,
    items: [
      { es: "Cartas / Certificados de Matrimonio", en: "Marriage Certificates / Letters" },
      { es: "Acuerdos Prenupciales", en: "Prenuptial Agreements" },
      { es: "Sentencias de Divorcio", en: "Divorce Decrees" },
      { es: "Documentos Legales", en: "Legal Documents" },
    ],
  },
];
