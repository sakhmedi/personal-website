export interface Project {
  /** Ключ для верстки и для будущего имени файла скриншота. */
  id: string;
  title: string;
  /**
   * Рядом с тем, что это за сайт, стоит статус работы: "концепт",
   * "учебный проект". На самих сайтах об этом написано в подвале,
   * и человек увидит это через один клик. Значит, слово должно
   * стоять и здесь.
   */
  subtitle: string;
  description: string;
  url: string;
  /**
   * Адрес для скриншота, если первый экран главной плохо
   * показывает работу. Ссылка с карточки всё равно ведёт на url.
   */
  screenshotUrl?: string;
  /**
   * Имя файла скриншота в src/assets/projects (например "dala-coffee.png").
   * Пустая строка означает, что скриншота ещё нет, и карточка просто
   * отрисуется без картинки.
   */
  image: string;
  imageAlt: string;
  /** Показывать ли работу на главной. Полный список живёт на /projects. */
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "dala-coffee",
    title: "DALA COFFEE",
    subtitle: "Сайт кофейни, концепт",
    description:
      "В меню можно собрать заказ. На карте две точки с часами работы и ссылками в 2ГИС. Язык переключается одной кнопкой.",
    url: "https://dalacoffee.netlify.app/?lang=ru",
    image: "dala-coffee.png",
    imageAlt: "Главная страница сайта кофейни DALA COFFEE",
    featured: true,
  },
  {
    id: "dental-plus",
    title: "Дентал Плюс",
    subtitle: "Сайт стоматологии, концепт",
    description:
      "Шесть услуг с ценами. Рядом врачи с фотографиями. Пациент записывается через форму и сразу выбирает нужную услугу. Кнопка WhatsApp видна на любом экране.",
    url: "https://dental-plus-kz.netlify.app/",
    image: "dental-plus.png",
    imageAlt: "Главная страница сайта стоматологии Дентал Плюс",
    featured: true,
  },
  {
    id: "shart-ai",
    title: "Shart AI",
    subtitle: "Ассистент по документам, демо",
    description:
      "Сотрудник компании загружает рабочие файлы и задаёт по ним вопросы, а ответ собирается из содержимого документов. Понимает сканы и распознаёт речь. По ссылке открывается интерфейс с готовыми данными, рабочий сервер сейчас выключен.",
    url: "https://shartai.netlify.app/",
    image: "shart-ai.png",
    imageAlt:
      "Главная страница Shart AI с примером диалога по документам",
    featured: false,
  },
  {
    id: "bloom",
    title: "Bloom",
    subtitle: "Справочник цветов, учебный проект",
    description:
      "Собирала его на английском, чтобы научиться делать сайты из нескольких страниц.",
    url: "https://bloomings.netlify.app/",
    screenshotUrl: "https://bloomings.netlify.app/flowers",
    image: "bloom.png",
    imageAlt: "Страница семейства цветов в справочнике Bloom",
    featured: false,
  },
];

/** Работы для главной. Порядок берётся из общего массива. */
export const featuredProjects = projects.filter((project) => project.featured);
