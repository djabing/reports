RDB.add({
  "id": "2026-11-bizone-retail-sales-season-attacks",
  "vendor": "bizone",
  "title": "В сезон распродаж 2026 года число атак на онлайн-ритейл может вырасти на 30%",
  "title_ru": "Сезон распродаж 2026: прогноз роста атак на онлайн-ритейл на 30% и структура атак на веб-приложения магазинов",
  "url": "https://bi.zone/news/v-sezon-rasprodazh-2026-goda-chislo-atak-na-onlayn-riteyl-mozhet-vyrasti-na-30/",
  "pdf_url": "",
  "published": "2026-11-16",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "industry",
  "lang": "ru",
  "importance": 1,
  "tier": "analytics",
  "tags": [
    "ритейл",
    "фишинг",
    "веб-приложения",
    "WAF",
    "мошенничество"
  ],
  "sectors": [
    "Ритейл",
    "Частные пользователи"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "BI.ZONE прогнозирует рост атак на онлайн-ритейл в период распродаж на 30%. По данным WAF, 84% атак на веб-приложения ритейлеров — попытки обойти контроль доступа к чужим заказам и закрытым функциям; доля фишинговых ресурсов в зоне .ru во втором полугодии 2026 г. упала с 22% до 5%.",
  "summary": "По данным BI.ZONE Digital Risk Protection, в 2025 г. и первой половине 2026 г. домены .ru и .рф составляли 22% выявленных фишинговых ресурсов и сайтов с ВПО, нацеленных на российский ритейл, а во втором полугодии 2026 г. доля .ru снизилась до 5% — вероятно, из-за усложнения регистрации; злоумышленники ищут обходные пути, например заброшенные и скомпрометированные домены. Типичные схемы: фишинговые магазины и объявления с низкими ценами, созданные ИИ изображения знаменитостей для убедительности (рост в 2026 г.), поддельные боты программ лояльности с «подарочными картами», полная предоплата. По выборке событий BI.ZONE WAF: 84% — обход контроля доступа, 7% — поиск открытых репозиториев и резервных копий, 6% — получение конфигураций и секретов, 2% — обход ограничений доступа к каталогам и файлам.",
  "key_findings": [
    "Прогноз: в сезон скидок число атак на онлайн-ритейл может вырасти на 30%.",
    "84% атак на веб-приложения ритейлеров направлены на обход контроля доступа — к чужим заказам, личным кабинетам и бонусам.",
    "Доля зоны .ru среди фишинговых ресурсов против ритейла упала с 22% до 5% во втором полугодии 2026 г.",
    "В 2026 г. выросло использование ИИ-изображений известных людей в мошеннических объявлениях."
  ],
  "stats": [
    {
      "value": "+30%",
      "label": "прогноз роста атак в сезон распродаж"
    },
    {
      "value": "84%",
      "label": "атак WAF — обход контроля доступа"
    },
    {
      "value": "22% → 5%",
      "label": "доля .ru/.рф среди фишинговых ресурсов"
    },
    {
      "value": "6%",
      "label": "атак — поиск конфигураций и секретов"
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
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1552.001",
      "name": "Unsecured Credentials: Credentials In Files"
    }
  ],
  "recommendations": [
    "Проверять права доступа на каждую операцию и объект в веб-приложении магазина.",
    "Отслеживать и ограничивать автоматизированные запросы, раздельно контролировать сетевые DDoS-атаки и нагрузку на приложение.",
    "Закрыть доступ к служебным интерфейсам, конфигурационным файлам и резервным копиям.",
    "Ограничить массовое применение одного промокода в бонусных программах; покупателям — проверять, что предложение размещено на официальном ресурсе."
  ],
  "why_it_matters": "Для ритейла основной риск в сезон распродаж — не только фишинг от имени бренда, но и ошибки в логике доступа к заказам и бонусам, которые атакующие массово эксплуатируют.",
  "source_note": "Выжимка по пресс-релизу BI.ZONE от 16.11.2026 (комментарий Дмитрия Кирюшкина, руководителя BI.ZONE Digital Risk Protection). Цифра 30% — прогноз; методика и период выборки WAF не раскрыты.",
  "en": {
    "title": "Attacks on online retail may grow by 30% during the 2026 sales season",
    "tldr": "BI.ZONE forecasts a 30% rise in attacks on online retail during the sales season. According to WAF data, 84% of attacks on retailers' web applications are attempts to bypass access control to other customers' orders and restricted functions; the share of phishing resources in the .ru zone fell from 22% to 5% in H2 2026.",
    "summary": "According to BI.ZONE Digital Risk Protection, in 2025 and H1 2026 .ru and .rf domains made up 22% of detected phishing and malware sites targeting Russian retail, while in H2 2026 the .ru share dropped to 5% — likely due to stricter registration; attackers look for workarounds such as abandoned and compromised domains. Typical schemes: phishing stores and listings with low prices, AI-generated images of celebrities for credibility (growing in 2026), fake loyalty programme bots offering 'gift cards', and full prepayment scams. In a sample of BI.ZONE WAF events: 84% were access control bypass, 7% searches for exposed repositories and backups, 6% attempts to obtain configurations and secrets, 2% bypassing restrictions on directories and files.",
    "key_findings": [
      "Forecast: attacks on online retail may grow by 30% during the discount season.",
      "84% of attacks on retailers' web applications aim to bypass access control — to other customers' orders, accounts and bonuses.",
      "The .ru zone's share among phishing resources targeting retail fell from 22% to 5% in H2 2026.",
      "Use of AI-generated celebrity images in scam listings grew in 2026."
    ],
    "stats": [
      {
        "value": "+30%",
        "label": "forecast attack growth in sales season"
      },
      {
        "value": "84%",
        "label": "of WAF attacks are access control bypass"
      },
      {
        "value": "22% to 5%",
        "label": "share of .ru/.rf among phishing resources"
      },
      {
        "value": "6%",
        "label": "of attacks seek configurations and secrets"
      }
    ],
    "recommendations": [
      "Check access rights for every operation and object in the store's web application.",
      "Monitor and rate-limit automated requests; control network DDoS and application load separately.",
      "Close access to admin interfaces, configuration files and backups.",
      "Limit mass use of a single promo code in loyalty programmes; shoppers should check that an offer is on the official site."
    ],
    "why_it_matters": "For retail, the main sales-season risk is not only brand phishing but also flaws in access logic for orders and bonuses that attackers exploit at scale.",
    "source_note": "Summary based on BI.ZONE's press release of 16 Nov 2026 (comment by Dmitry Kiryushkin, head of BI.ZONE Digital Risk Protection). The 30% figure is a forecast; the WAF sample methodology and period are not disclosed."
  }
});
