/**
 * Контакты в одном месте: шапка, главный экран, секция контактов и
 * липкая кнопка на телефоне берут их отсюда.
 */
export const contacts = {
  name: "Салима",
  city: "Астана",
  whatsapp: "https://wa.me/77072003612",
  telegram: "https://t.me/saliima_s",
  // TODO: заглушка. Заменить на настоящий адрес до слияния в main.
  email: "hello@example.com",
  github: "https://github.com/sakhmedi",
} as const;

/** Домен example.com зарезервирован под примеры — настоящей почтой быть не может. */
export const emailIsPlaceholder = contacts.email.endsWith("@example.com");
