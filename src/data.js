export const questions = [
  "Не получается зарегистрироваться в библиотеке. Что делать?",
  "Как я могу узнать, сколько я прочёл?",
  "Как я могу отсортировать книги по формату аудио?",
  "Как найти приложение для чтения на личных устройствах?",
];

export const answers = [
  [
    {
      type: "text",
      content:
        "а) убедитесь в том, что вы регистрируетесь на компьютере, личном или корпоративном.",
    },
    {
      type: "text",
      content:
        "б) проверьте адрес электронной почты, который вы вводите при регистрации - это должен быть ваш корпоративный адрес с доменом rosbank.ru или ucscards.ru. если ваша корпоративная почта с другим доменом, обратитесь на e-learning@rosbank.ru",
    },
    {
      type: "text",
      content:
        "в) если ваш корпоративный адрес с доменом rosbank.ru или ucscards.ru, но все равно не получается, обратитесь на e-learning@rosbank.ru, возможно свободных учетных записей нет, тогда вас внесут в лист ожидания.",
    },
  ],
  [
    {
      type: "text",
      content:
        "Можно посмотреть в приложении MyBook, в разделе «Статистика» на вкладке «Профиль», или сориентироваться по количеству прочитанных страниц в вашей книге, или обратиться на e-learning@rosbank.ru.",
    },
  ],
  [
    {
      type: "text",
      content:
        "Для этого надо зайти в приложение MyBook, нажать на значок поиска на нижней панели, вписать название книги в строку поиска, в результатах поиска появится раздел «Аудиокниги».",
    },
  ],
  [
    {
      type: "text",
      content:
        "Вы можете найти приложение для скачивания в Google Play, забив в строке поиска MyBook или по QR- коду:",
    },
    {
      type: "image",
      content: "./assets/qr_registration.svg",
    },
  ],
];

export const books = [
  {
    link: "https://rosbank.mybook.ru/author/dzhen-sinsero-2/ni-sy-vostochnaya-mudrost-kotoraya-glasit-bud-uver/ ",
    img: "/images/book-1.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhon-keho/podsoznanie-mozhet-vsyo/ ",
    img: "/images/book-2.png",
  },
  {
    link: " https://rosbank.mybook.ru/author/dzhejms-klir/atomnye-privychki-kak-priobresti-horoshie-privychk/  ",
    img: "/images/book-3.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhen-sinsero-2/ne-noj-tolko-tot-kto-perestal-setovat-na-sudbu-moz/ ",
    img: "/images/book-4.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/robert-kijosaki/bogatyj-papa-bednyj-papa/",
    img: "/images/book-5.png",
  },
  {
    link: " https://rosbank.mybook.ru/author/dzhen-sinsero-2/ne-tupi-tolko-tot-kto-ezhednevno-rabotaet-nad-sobo/ ",
    img: "/images/book-6.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhordzh-oruell/1984-39/ ",
    img: "/images/book-7.png",
  },
  {
    link: "  https://rosbank.mybook.ru/author/gregori-roberts/shantaram/  ",
    img: "/images/book-8.png",
  },
  {
    link: " https://rosbank.mybook.ru/author/maksim-batyrev-2/45-tatuirovok-menedzhera-pravila-rossijskogo-rukov/ ",
    img: "/images/book-9.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhorzh-klejson/samyj-bogatyj-chelovek-v-vavilone-10/",
    img: "/images/book-10.png",
  },
];
