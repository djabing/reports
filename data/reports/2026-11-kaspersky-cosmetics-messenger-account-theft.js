RDB.add({
  "id": "2026-11-kaspersky-cosmetics-messenger-account-theft",
  "vendor": "kaspersky",
  "title": "Красота не требует жертв: мошенники крадут аккаунты в мессенджерах через фейковые каналы магазинов косметики",
  "title_ru": "Красота не требует жертв: мошенники крадут аккаунты в мессенджерах через фейковые каналы магазинов косметики",
  "url": "https://www.kaspersky.ru/about/press-releases/krasota-ne-trebuet-zhertv-moshenniki-kradut-akkaunty-v-messendzherah-cherez-fejkovye-kanaly-magazinov-kosmetiki",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-17",
  "type": "phishing",
  "lang": "ru",
  "importance": 1,
  "tier": "case",
  "tags": [
    "мошенничество",
    "фишинг",
    "угон аккаунтов",
    "мессенджеры",
    "ритейл"
  ],
  "sectors": [
    "Потребители",
    "Ритейл"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "«Лаборатория Касперского» описала схему угона аккаунтов: фейковый Telegram-чат «сообщества» магазина косметики и парфюмерии обещает 5000 бонусных баллов, но для их получения нужно «подписаться» на канал бренда в другом мессенджере через фишинговую страницу входа.",
  "summary": "Пользователей приглашают в поддельный чат, имитирующий сообщество популярной сети магазинов косметики. Ради обещанных 5000 бонусов жертва переходит по ссылке на поддельную страницу входа в другой популярный мессенджер и вводит номер телефона и код из SMS — после этого мошенники получают полный доступ к аккаунту, который затем используют для спама, фишинга или кражи конфиденциальных данных. Доверие создают фейковые отзывы «покупателей» и анонсы дополнительных розыгрышей, например подарочных сертификатов на 8000 рублей. Писать в чат участники не могут — так мошенники не дают предупредить других. Число подобных акций растёт перед сезонами распродаж. Схему прокомментировал Георгий Кучерин, старший эксперт GReAT.",
  "key_findings": [
    "Приманка — 5000 бонусных баллов «на скидку» и розыгрыши сертификатов на 8000 рублей.",
    "Для «получения бонуса» жертва вводит номер телефона и код из SMS на фишинговой странице входа в мессенджер — и теряет аккаунт.",
    "Угнанные аккаунты используются для рассылки спама, фишинга и кражи конфиденциальных данных.",
    "Признаки обмана: ссылка не совпадает с официальным доменом бренда, участники не могут писать в чат; активность схем растёт перед распродажами."
  ],
  "stats": [
    {
      "value": "5000",
      "label": "бонусных баллов в приманке"
    },
    {
      "value": "8000 ₽",
      "label": "сертификаты в «дополнительных розыгрышах»"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.002",
      "name": "Phishing: Spearphishing Link"
    },
    {
      "id": "T1056.003",
      "name": "Input Capture: Web Portal Capture"
    },
    {
      "id": "T1585",
      "name": "Establish Accounts"
    }
  ],
  "recommendations": [
    "Проверять адрес и название сайта перед вводом персональных данных.",
    "Не вводить логины, номера телефонов и коды подтверждения на сомнительных ресурсах.",
    "Использовать защитные решения с антифишинговыми функциями."
  ],
  "why_it_matters": "Угон аккаунтов в мессенджерах — массовый способ получить «доверенный» канал для дальнейшего мошенничества против контактов жертвы; сезон распродаж усиливает активность таких схем.",
  "source_note": "Выжимка по первоисточнику — пресс-релизу «Лаборатории Касперского» от 10.11.2026. Мессенджер, на который ведёт фишинговая страница, в релизе не назван; количественных данных о жертвах нет.",
  "en": {
    "title": "Beauty without sacrifice? Scammers steal messenger accounts via fake cosmetics shop channels",
    "tldr": "Kaspersky described an account takeover scheme: a fake Telegram 'community' chat of a cosmetics and perfume store promises 5,000 bonus points, but to get them the victim must 'subscribe' to the brand's channel in another messenger via a phishing login page.",
    "summary": "Users are invited to a fake chat imitating the community of a popular cosmetics retail chain. For the promised 5,000 bonus points the victim follows a link to a fake login page of another popular messenger and enters their phone number and SMS code — after which the scammers gain full access to the account and use it for spam, phishing or theft of confidential data. Trust is built with fake customer reviews and announcements of extra prize draws, such as 8,000-rouble gift certificates. Members cannot post in the chat, so scammers prevent anyone from warning others. Such schemes grow ahead of sales seasons. Georgy Kucherin, senior GReAT expert, commented on the scheme.",
    "key_findings": [
      "Lure: 5,000 bonus points 'towards a discount' and draws for 8,000-rouble certificates.",
      "To 'claim the bonus' the victim enters their phone number and SMS code on a phishing messenger login page — and loses the account.",
      "Hijacked accounts are used for spam, phishing and theft of confidential data.",
      "Red flags: the link does not match the brand's official domain, members cannot post in the chat; activity grows ahead of sales."
    ],
    "stats": [
      {
        "value": "5,000",
        "label": "bonus points in the lure"
      },
      {
        "value": "8,000 ₽",
        "label": "certificates in 'extra draws'"
      }
    ],
    "recommendations": [
      "Check the site address and name before entering personal data.",
      "Do not enter logins, phone numbers or confirmation codes on dubious sites.",
      "Use security solutions with anti-phishing features."
    ],
    "why_it_matters": "Messenger account takeover is a mass way to obtain a 'trusted' channel for further fraud against the victim's contacts; the sales season boosts such schemes.",
    "source_note": "Summary based on the primary source — Kaspersky's press release of 10 Nov 2026. The messenger the phishing page leads to is not named in the release; there are no quantitative data on victims."
  }
});
