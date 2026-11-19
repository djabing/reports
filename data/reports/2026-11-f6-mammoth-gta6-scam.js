RDB.add({
  "id": "2026-11-f6-mammoth-gta6-scam",
  "vendor": "f6",
  "title": "«Мамонт» атакует фанатов GTA VI: скамеры предлагают пополнить баланс PlayStation Store через фейковый сервис",
  "title_ru": "Схема «Мамонт» против фанатов GTA VI: фейковый магазин Play2Win за пять дней похитил 914 тыс. рублей",
  "url": "https://www.f6.ru/media-center/press-releases/mammoth-gta6/",
  "pdf_url": "",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-19",
  "type": "phishing",
  "lang": "ru",
  "importance": 1,
  "tier": "case",
  "tags": [
    "мошенничество",
    "фишинг",
    "геймеры"
  ],
  "sectors": [
    "Игры",
    "Частные пользователи"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "F6 обнаружила фейковый магазин цифровых товаров Play2Win, который по схеме «Мамонт» предлагает российским игрокам пополнить баланс PlayStation Store на фоне интереса к GTA VI и крадёт данные карт; за пять дней работы группа похитила 914 тыс. рублей.",
  "summary": "После приостановки продаж PlayStation Store в России в марте 2022 г. игроки пополняют баланс через посредников, чем и пользуются мошенники. Фейковый магазин Play2Win предлагает пополнение восьми сервисов (включая PlayStation Store и AppStore & iTunes) и подписки PlayStation Plus, Xbox Game Pass и ChatGPT Plus с правдоподобной наценкой 6–11% и обещанием зачисления за 1–3 минуты. Введённые на странице оплаты данные карты попадают к злоумышленникам, деньги списываются безвозвратно. Ссылки распространяются через бесплатные доски объявлений, игровые форумы, Telegram, соцсети и комментарии; промокоды в ссылках позволяют организатору учитывать, какой «воркер» привёл жертву. Магазин можно перебрендировать под легитимные сервисы, работающие в России. В январе 2026 г. F6 уже описывала похожий фейковый магазин Zadrotik.",
  "key_findings": [
    "Группа за пять дней активности похитила 914 180 рублей.",
    "Наценка 6–11% и цены, близкие к рыночным (например, PlayStation Plus за 890 рублей в месяц), делают магазин правдоподобным.",
    "Промокоды в ссылках используются для учёта «воркеров» внутри схемы «Мамонт».",
    "Схема «Мамонт» используется уже более шести лет и быстро подстраивается под инфоповоды — здесь под выход GTA VI."
  ],
  "stats": [
    {
      "value": "914 тыс. ₽",
      "label": "похищено за 5 дней работы магазина"
    },
    {
      "value": "6–11%",
      "label": "наценка на «пополнение»"
    },
    {
      "value": "8",
      "label": "сервисов для пополнения в фейковом магазине"
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
    }
  ],
  "recommendations": [
    "Покупать цифровые товары только на проверенных площадках, лучше через официальные приложения маркетплейсов.",
    "Не вводить данные карты и личные данные на впервые посещаемых сайтах; проверять возраст домена через WHOIS.",
    "Проверять реквизиты продавца (ИНН, ОГРН) в официальных базах и искать отзывы о незнакомом сервисе."
  ],
  "why_it_matters": "Мошенники быстро используют громкие релизы и ограничения доступа к зарубежным сервисам, превращая спрос геймеров в источник кражи платёжных данных.",
  "source_note": "Выжимка по пресс-релизу F6 от 18.11.2026.",
  "en": {
    "title": "'Mammoth' targets GTA VI fans: scammers offer PlayStation Store top-ups via a fake service",
    "tldr": "F6 found a fake digital goods store, Play2Win, that uses the 'Mammoth' scheme to offer Russian players PlayStation Store top-ups amid interest in GTA VI and steals card data; in five days of activity the group stole 914,000 roubles.",
    "summary": "Since PlayStation Store sales were suspended in Russia in March 2022, players top up their balances through intermediaries, which scammers exploit. The fake Play2Win store offers top-ups for eight services (including PlayStation Store and AppStore & iTunes) and PlayStation Plus, Xbox Game Pass and ChatGPT Plus subscriptions with a plausible 6–11% markup and a promise of crediting within 1–3 minutes. Card data entered on the payment page goes to the criminals and the money is lost irreversibly. Links are spread through free classifieds, gaming forums, Telegram, social networks and comments; promo codes in links let the organiser track which 'worker' brought in each victim. The store can be rebranded to imitate legitimate services operating in Russia. In January 2026 F6 had already described a similar fake store, Zadrotik.",
    "key_findings": [
      "In five days of activity the group stole 914,180 roubles.",
      "A 6–11% markup and near-market prices (e.g. PlayStation Plus for 890 roubles a month) make the store look plausible.",
      "Promo codes in links are used to track 'workers' within the Mammoth scheme.",
      "The Mammoth scheme has been in use for more than six years and quickly adapts to news hooks — here the GTA VI release."
    ],
    "stats": [
      {
        "value": "914K RUB",
        "label": "stolen in 5 days of the store's operation"
      },
      {
        "value": "6–11%",
        "label": "markup on the 'top-up'"
      },
      {
        "value": "8",
        "label": "services offered for top-up in the fake store"
      }
    ],
    "recommendations": [
      "Buy digital goods only on trusted platforms, ideally through official marketplace apps.",
      "Do not enter card or personal data on sites visited for the first time; check domain age via WHOIS.",
      "Verify seller registration details (INN, OGRN) in official databases and look for reviews of unfamiliar services."
    ],
    "why_it_matters": "Scammers quickly exploit high-profile releases and restricted access to foreign services, turning gamers' demand into a source of payment data theft.",
    "source_note": "Summary based on F6's press release of 18 Nov 2026."
  }
});
