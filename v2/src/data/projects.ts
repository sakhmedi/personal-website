export interface Project {
  /** Ключ для верстки и для будущего имени файла скриншота. */
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  /**
   * Имя файла скриншота в src/assets/projects (например "dala-coffee.png").
   * Пустая строка означает, что скриншота ещё нет — карточка просто
   * отрисуется без картинки.
   */
  image: string;
  imageAlt: string;
  /**
   * Первым идёт тег статуса — "Концепт" или "Учебный проект".
   * Cards.astro подсвечивает его, чтобы никто не принял работу
   * за реальный клиентский заказ.
   */
  tags: string[];
  /** Показывать ли работу на главной. Полный список живёт на /projects. */
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "dala-coffee",
    title: "DALA COFFEE",
    subtitle: "Сайт кофейни",
    description:
      "Двуязычная страница кофейни в Астане: меню с корзиной, две точки на карте с часами работы и ссылками в 2ГИС, форма обратной связи. Языки переключаются без перезагрузки страницы.",
    url: "https://dalacoffee.netlify.app/?lang=ru",
    image: "dala-coffee.png",
    imageAlt: "Главная страница сайта кофейни DALA COFFEE",
    tags: ["Концепт", "RU/EN", "Адаптив"],
    featured: true,
  },
  {
    id: "dental-plus",
    title: "Дентал Плюс",
    subtitle: "Сайт стоматологии",
    description:
      "Лендинг клиники: шесть услуг с ценами, карточки врачей, запись через форму с выбором услуги и согласием на обработку данных. Русский и казахский, кнопка WhatsApp в шапке.",
    url: "https://dental-plus-kz.netlify.app/",
    image: "dental-plus.png",
    imageAlt: "Главная страница сайта стоматологии Дентал Плюс",
    tags: ["Концепт", "RU/KZ", "Форма записи"],
    featured: true,
  },
  {
    id: "bloom",
    title: "Bloom",
    subtitle: "Справочник цветов",
    description:
      "Многостраничный справочник цветов на английском. Делала, чтобы разобраться с роутингом и выводом списков.",
    url: "https://bloomings.netlify.app/",
    image: "bloom.png",
    imageAlt: "Главная страница справочника цветов Bloom",
    tags: ["Учебный проект", "Многостраничный"],
    featured: false,
  },
];

/** Работы для главной. Порядок берётся из общего массива. */
export const featuredProjects = projects.filter((project) => project.featured);
