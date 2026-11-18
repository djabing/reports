RDB.add({
  "id": "2026-11-kaspersky-theatre-ticket-phishing",
  "vendor": "kaspersky",
  "title": "«Свободных мест нет»: «Лаборатория Касперского» предупреждает о фишинговых сайтах по продаже билетов в театр",
  "title_ru": "Фишинговые сайты продажи театральных билетов: поддельные афиши и схемы залов для кражи данных карт",
  "url": "https://www.kaspersky.ru/about/press-releases/svobodnyh-mest-net-laboratoriya-kasperskogo-preduprezhdaet-o-fishingovyh-sajtah-po-prodazhe-biletov-v-teatr",
  "pdf_url": "",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "phishing",
  "lang": "ru",
  "importance": 1,
  "tier": "case",
  "tags": [
    "фишинг",
    "мошенничество",
    "билеты"
  ],
  "sectors": [
    "Частные пользователи"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "«Лаборатория Касперского» обнаружила фишинговые страницы, имитирующие сайты билетных сервисов и театров разных городов России: они воспроизводят весь процесс покупки, включая выбор мест на схеме зала, и крадут платёжные данные. Эксперты ждут роста таких схем перед праздниками и зимними каникулами.",
  "summary": "Поддельные сайты показывают афиши, фотографии артистов и схемы залов с «проданными» местами, предлагая билеты стоимостью в несколько тысяч рублей. Ссылки пользователи получают через поиск, рекламу или от новых знакомых на сайтах знакомств. При оформлении заказа мошенники запрашивают имя, телефон, электронную почту и данные банковской карты, а билеты так и не выдаются. Старший контент-аналитик Ольга Алтухова отмечает, что ссылка может прийти даже от недавнего знакомого; эксперт Kaspersky GReAT Константин Исаков прогнозирует рост подобных схем в предпраздничный период.",
  "key_findings": [
    "Фишинговые страницы копируют сайты театров и билетных сервисов разных городов России и воспроизводят весь процесс покупки.",
    "Для правдоподобия используются афиши, фотографии артистов и схемы залов с занятыми местами.",
    "Каналы распространения — поисковая выдача, реклама и ссылки от знакомых с сайтов знакомств.",
    "Цель — имя, телефон, email и данные банковской карты жертвы."
  ],
  "stats": [
    {
      "value": "несколько тысяч ₽",
      "label": "цена «билета» на изученных сайтах"
    },
    {
      "value": "4 вида",
      "label": "данных, которые запрашивают мошенники"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1583.001",
      "name": "Acquire Infrastructure: Domains"
    },
    {
      "id": "T1566.002",
      "name": "Phishing: Spearphishing Link"
    },
    {
      "id": "T1656",
      "name": "Impersonation"
    }
  ],
  "recommendations": [
    "Покупать билеты только на официальных сайтах театров и в проверенных билетных сервисах.",
    "Проверять адрес сайта перед вводом данных: схема зала не гарантирует подлинность.",
    "С осторожностью относиться к ссылкам от малознакомых людей.",
    "Использовать защитное решение, блокирующее переход на фишинговые ресурсы."
  ],
  "why_it_matters": "Сезонные схемы с «культурными» покупками нацелены на массового пользователя и ведут к прямой краже платёжных данных; перед праздниками их активность растёт.",
  "source_note": "Выжимка по пресс-релизу «Лаборатории Касперского» от 17.11.2026. Количественных данных о числе сайтов и пострадавших в релизе нет.",
  "en": {
    "title": "'No seats available': Kaspersky warns of phishing sites selling theatre tickets",
    "tldr": "Kaspersky found phishing pages imitating ticketing services and theatres in various Russian cities: they reproduce the entire purchase process, including seat selection on a seating plan, and steal payment data. Experts expect such schemes to grow ahead of the holidays and winter break.",
    "summary": "The fake sites show playbills, photos of performers and seating plans with 'sold' seats, offering tickets costing several thousand roubles. Users get the links via search, ads or from new acquaintances on dating sites. At checkout the scammers ask for name, phone number, email and bank card details, and no tickets are ever issued. Senior content analyst Olga Altukhova notes the link may even come from a recent acquaintance; Kaspersky GReAT expert Konstantin Isakov expects such schemes to grow in the pre-holiday period.",
    "key_findings": [
      "The phishing pages copy theatre and ticketing service websites in various Russian cities and reproduce the whole purchase flow.",
      "Playbills, performer photos and seating plans with occupied seats are used for credibility.",
      "Distribution channels are search results, advertising and links from acquaintances met on dating sites.",
      "The goal is the victim's name, phone, email and bank card details."
    ],
    "stats": [
      {
        "value": "several thousand RUB",
        "label": "'ticket' price on the sites studied"
      },
      {
        "value": "4 types",
        "label": "of data requested by the scammers"
      }
    ],
    "recommendations": [
      "Buy tickets only on official theatre websites and trusted ticketing services.",
      "Check the site address before entering data: a seating plan does not guarantee authenticity.",
      "Be wary of links from people you barely know.",
      "Use a security solution that blocks access to phishing resources."
    ],
    "why_it_matters": "Seasonal schemes built around 'cultural' purchases target mass users and lead directly to payment data theft; their activity grows before the holidays.",
    "source_note": "Summary based on Kaspersky's press release of 17 Nov 2026. The release gives no figures on the number of sites or victims."
  }
});
