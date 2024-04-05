export const questions = [
  "Не получается зарегистрироваться в библиотеке. Что делать?",
  "Как я могу узнать, сколько я прочёл?",
  "Как я могу отсортировать книги по формату аудио?",
  "Как найти приложение для чтения на личных устройствах?",
  "Как я узнаю, что прочёл/прослушал меньше 200 стр/мин и моя учетка будет заблокирована?",
  "Аудио формат поддерживают все книги? Или есть определенный перечень?",
  "Как получить доступ к библиотеке MyBook сотруднице, которая находится в декретном отпуске? У неё нет доступа к рабочей почте(",
  "Сохранится ли то, что я читала или сохраняла в своем профиле, если моя учётка заблокирована?",
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
      content: `б) проверьте адрес электронной почты, который вы вводите при регистрации - это должен быть ваш корпоративный адрес с доменом rosbank.ru или ucscards.ru. если ваша корпоративная почта с другим доменом, обратитесь на <a style="color:#e40038" href="mailto:e-learning@rosbank.ru">
            e-learning@rosbank.ru
          </a> `,
    },
    {
      type: "text",
      content: `в) если ваш корпоративный адрес с доменом rosbank.ru или ucscards.ru, но все равно не получается, обратитесь на <a style="color:#e40038" href="mailto:e-learning@rosbank.ru">
            e-learning@rosbank.ru
          </a> , возможно свободных учетных записей нет, тогда вас внесут в лист ожидания.`,
    },
  ],
  [
    {
      type: "text",
      content: `Можно посмотреть в приложении MyBook, в разделе «Статистика» на вкладке «Профиль», или сориентироваться по количеству прочитанных страниц в вашей книге, или обратиться на <a style="color:#e40038" href="mailto:e-learning@rosbank.ru">
            e-learning@rosbank.ru
          </a> `,
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
        "Вы можете найти приложение для скачивания в Google Play / AppStore, забив в строке поиска MyBook или по QR- коду:",
    },
    {
      type: "image",
      content: "./assets/qr_registration.svg",
    },
  ],
  [
    {
      type: "text",
      content: `Корпоративная библиотека заботится о своих пользователях, поэтому за неделю до   
      блокировки всем, чья активность за месяц была ниже 200 стр/мин, направляется уведомление. 
      Так, у пользователей есть время, чтобы "нагнать" недостающие страницы/минуты и сохранить 
      свою учётку.`,
    },
  ],
  [
    {
      type: "text",
      content: `Не у всех книг есть аудиоформат. В нашем корпоративном тарифе доступны 7000+  
      аудиокниг, и их можно найти в приложении MyBook.`,
    },
  ],
  [
    {
      type: "text",
      content: `Чтобы зарегистрировать в библиотеке коллегу, которая находится в декрете, направьте 
      её личный адрес эл.почты на <a style="color:#e40038" href="mailto:e-learning@rosbank.ru">
            e-learning@rosbank.ru
          </a>. Как только учётная запись будет создана, 
      ей на почту придёт уведомление с паролем.`,
    },
  ],
  [
    {
      type: "text",
      content: `Да, сохранится. После восстановления учётной записи вы сможете вернуться к своим  
      любимым книгам.`,
    },
  ],
];

export const books = [
  {
    link: "https://rosbank.mybook.ru/author/dzhen-sinsero-2/ni-sy-vostochnaya-mudrost-kotoraya-glasit-bud-uver/ ",
    img: "/rosbank/libraryMB/images/book-1.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhon-keho/podsoznanie-mozhet-vsyo/ ",
    img: "/rosbank/libraryMB/images/book-2.png",
  },
  {
    link: " https://rosbank.mybook.ru/author/dzhejms-klir/atomnye-privychki-kak-priobresti-horoshie-privychk/  ",
    img: "/rosbank/libraryMB/images/book-3.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhen-sinsero-2/ne-noj-tolko-tot-kto-perestal-setovat-na-sudbu-moz/ ",
    img: "/rosbank/libraryMB/images/book-4.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/robert-kijosaki/bogatyj-papa-bednyj-papa/",
    img: "/rosbank/libraryMB/images/book-5.png",
  },
  {
    link: " https://rosbank.mybook.ru/author/dzhen-sinsero-2/ne-tupi-tolko-tot-kto-ezhednevno-rabotaet-nad-sobo/ ",
    img: "/rosbank/libraryMB/images/book-6.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhordzh-oruell/1984-39/ ",
    img: "/rosbank/libraryMB/images/book-7.png",
  },
  {
    link: "  https://rosbank.mybook.ru/author/gregori-roberts/shantaram/  ",
    img: "/rosbank/libraryMB/images/book-8.png",
  },
  {
    link: " https://rosbank.mybook.ru/author/maksim-batyrev-2/45-tatuirovok-menedzhera-pravila-rossijskogo-rukov/ ",
    img: "/rosbank/libraryMB/images/book-9.png",
  },
  {
    link: "https://rosbank.mybook.ru/author/dzhorzh-klejson/samyj-bogatyj-chelovek-v-vavilone-10/",
    img: "/rosbank/libraryMB/images/book-10.png",
  },
];
