RDB.add({
  "id": "2026-10-kaspersky-ics-vehicle-ota-security",
  "vendor": "kaspersky-ics",
  "title": "Cybersecurity of over-the-air update mechanisms for vehicles",
  "title_ru": "Кибербезопасность механизмов обновления автомобилей по воздуху (OTA)",
  "url": "https://ics-cert.kaspersky.com/publications/reports/2026/10/15/cybersecurity-of-over-the-air-update-mechanisms-for-vehicles/",
  "pdf_url": "https://ics-cert.kaspersky.com/media/Kaspersky-ICS-CERT-Cybersecurity-of-over%E2%80%91the%E2%80%91air-update-mechanisms-for-vehicles-En.pdf",
  "published": "2026-10-15",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ics",
  "lang": "en",
  "importance": 2,
  "tier": "key",
  "tags": [
    "автомобильная безопасность",
    "OTA-обновления",
    "цепочка поставок"
  ],
  "sectors": [
    "Автопром",
    "Транспорт"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Kaspersky ICS CERT разбирает угрозы обновлениям ПО автомобилей по воздуху: пока основные атаки направлены на ИТ-инфраструктуру автопроизводителей и цифровые сервисы, но уязвимости в бортовых блоках и сервисах открывают путь к атакам на целые парки машин. Отчёт предлагает архитектурные подходы к защите кампаний обновления по требованиям UN R156.",
  "summary": "Современный автомобиль содержит более 100 электронных блоков управления (ЭБУ); по прогнозу SBD Automotive, через 10 лет доля машин с OTA-обновлениями в США, ЕС и Китае вырастет более чем втрое — до 30–40% парка, а частота обновлений, по данным VicOne, может вырасти с 4–5 до 12–14 в год. Первая часть отчёта — обзор инцидентов и исследований: атака шифровальщика на Jaguar Land Rover в сентябре 2025 года (остановка заводов, по оценкам британского центра мониторинга — около 5000 затронутых организаций и $2,5 млрд потерь для экономики Великобритании), уязвимости порталов Subaru STARLINK и Spireon (потенциальный контроль над 15,5 млн машин), червь Truck-to-Truck через бортовые регистраторы ELD и собственный анализ модемов Telit Cinterion. Вывод: сегодня чаще атакуют инфраструктуру производителей и поставщиков, но в будущем ожидаются атаки на подключённые парки. Вторая часть — архитектура защищённых обновлений: где хранить реестр идентификаторов ПО RxSWIN (на платформе, в FOTA Master или в каждом блоке), аппаратные модули безопасности, проверка подлинности и целостности пакетов, принципы secure by design.",
  "key_findings": [
    "Самые распространённые атаки сейчас — на инфраструктуру автопроизводителей, поставщиков и сторонних сервисов, а не на сами машины.",
    "Уязвимости в цифровых сервисах (Subaru STARLINK, Spireon) давали потенциальный удалённый контроль над машинами и доступ к данным владельцев; в случае Spireon — до 15,5 млн машин.",
    "Дополнительное оборудование (например, регистраторы ELD) часто ставится без требований ИБ и может стать каналом удалённого управления.",
    "Компрометация FOTA Master позволяет развить атаку на все управляемые им блоки, поэтому ему нужны аппаратный модуль безопасности и строгие проверки.",
    "Формальное соответствие UN R155/R156 базовыми мерами быстро устареет; безопасность обновлений нужно закладывать в архитектуру с начала проектирования."
  ],
  "stats": [
    {
      "value": ">100",
      "label": "ЭБУ в современном автомобиле"
    },
    {
      "value": "30–40%",
      "label": "парка с OTA через 10 лет (прогноз SBD)"
    },
    {
      "value": "15,5 млн",
      "label": "машин под потенциальным контролем через уязвимость Spireon"
    },
    {
      "value": "$2,5 млрд",
      "label": "оценка потерь экономики Великобритании от атаки на JLR"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Закладывать механизмы защищённого обновления во все серийные модели на этапе архитектурного проектирования.",
    "Проверять подлинность и целостность пакетов обновлений на каждом этапе, использовать аппаратные модули безопасности для ключей и реестра RxSWIN.",
    "Предъявлять требования ИБ к поставщикам ЭБУ и дополнительного оборудования и контролировать их выполнение.",
    "Планировать поддержку обновлений и защиты на весь реальный срок эксплуатации машины (15–20 лет и более)."
  ],
  "why_it_matters": "Рост числа программно-определяемых автомобилей делает платформы OTA-обновлений точкой, компрометация которой может затронуть целые парки машин.",
  "source_note": "Выжимка по открытой публикации Kaspersky ICS CERT от 15.10.2026 (есть PDF). Обзорная часть опирается в основном на публичные инциденты и сторонние исследования; собственная телеметрия атак на автомобили не приводится.",
  "en": {
    "tldr": "Kaspersky ICS CERT examines threats to over-the-air vehicle software updates: most attacks today hit automakers' IT infrastructure and digital services, but vulnerabilities in on-board units and services open the way to attacks on entire fleets. The report proposes architectural approaches to securing update campaigns under UN R156.",
    "summary": "A modern vehicle contains more than 100 electronic control units (ECUs); SBD Automotive forecasts that within 10 years the share of OTA-capable vehicles in the US, EU and China will more than triple to 30–40% of the fleet, while VicOne expects update frequency to rise from 4–5 to 12–14 per year. The first part reviews incidents and research: the September 2025 ransomware attack on Jaguar Land Rover (plant shutdowns, about 5,000 affected organisations and $2.5 billion in losses to the UK economy per a British monitoring centre), vulnerabilities in the Subaru STARLINK and Spireon portals (potential control over 15.5 million vehicles), the Truck-to-Truck worm via ELD loggers and Kaspersky's own analysis of Telit Cinterion modems. Conclusion: attackers currently target manufacturer and supplier infrastructure, but attacks on connected fleets are expected. The second part covers secure update architecture: where to store the RxSWIN software identifier registry (platform, FOTA Master or each unit), hardware security modules, package authenticity and integrity checks, and secure-by-design principles.",
    "key_findings": [
      "The most common attacks today target automakers, suppliers and third-party services rather than vehicles themselves.",
      "Vulnerabilities in digital services (Subaru STARLINK, Spireon) gave potential remote control of vehicles and access to owner data; up to 15.5 million vehicles in the Spireon case.",
      "Aftermarket equipment such as ELD loggers is often installed without security requirements and can become a remote-control channel.",
      "Compromising the FOTA Master lets an attacker pivot to every unit it manages, so it needs a hardware security module and strict checks.",
      "Baseline formal compliance with UN R155/R156 will soon be inadequate; update security must be designed in from the start."
    ],
    "stats": [
      {
        "value": ">100",
        "label": "ECUs in a modern vehicle"
      },
      {
        "value": "30–40%",
        "label": "of fleet OTA-capable in 10 years (SBD forecast)"
      },
      {
        "value": "15.5M",
        "label": "vehicles potentially controllable via the Spireon flaw"
      },
      {
        "value": "$2.5B",
        "label": "estimated UK economic loss from the JLR attack"
      }
    ],
    "recommendations": [
      "Design secure update capabilities into all production models at the architecture stage.",
      "Verify update package authenticity and integrity at every stage and use hardware security modules for keys and the RxSWIN registry.",
      "Impose security requirements on ECU and aftermarket equipment suppliers and monitor compliance.",
      "Plan update and protection support for a vehicle's actual service life (15–20 years or more)."
    ],
    "why_it_matters": "As software-defined vehicles spread, OTA update platforms become a point whose compromise could affect entire fleets.",
    "source_note": "Summary based on the open Kaspersky ICS CERT publication of 15 Oct 2026 (PDF available). The review part relies mainly on public incidents and third-party research; no proprietary telemetry on vehicle attacks is given."
  }
});
