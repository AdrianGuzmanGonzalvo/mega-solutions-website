export const CONTACT = {
  phoneDisplay: "475-544-4809",
  phoneHref: "tel:+14755444809",
  email: "megasolutionsct@gmail.com",
  city: "Norwalk, CT 06850",
  whatsappNumber: "14755444809",
  whatsappMessage: "Hola Mega Solutions, quisiera obtener más información sobre sus servicios.",
} as const;

export const whatsappHref = (message: string = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
