RDB.add({
  "id": "2026-07-trendmicro-h1-apt-report",
  "vendor": "trendmicro",
  "title": "2026 H1 APT Report: How APTs Are Weaponizing Trust in the Age of AI",
  "title_ru": "APT-активность в I полугодии 2026: как группировки превращают доверие в оружие в эпоху ИИ",
  "url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/2026-h1-apt-report-how-apts-are-weaponizing-trust-in-the-age-of-ai",
  "pdf_url": "https://documents.trendmicro.com/assets/pdf/APT_Activity_Roundup_2026.pdf",
  "published": "2026-07-29",
  "date_precision": "day",
  "added": "2026-10-15",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tags": ["APT", "полугодовой", "ИИ", "Китай", "КНДР", "Иран", "Россия", "OT"],
  "sectors": ["Госсектор", "Промышленность / OT", "Криптовалюта"],
  "regions": ["Глобально", "Азия"],
  "tldr": "Госгруппировки встраивают ИИ во все этапы атаки и прячут C2 внутри сервисов, которым доверяют компании: облака, dev-туннели, блокчейны, paste-сайты. Впервые зафиксировано применение GenAI китайскими Earth Krahang и Earth Naga (Flax Typhoon).",
  "summary": "Полугодовой обзор TrendAI по активности APT, связанных с Китаем, Россией, КНДР и Ираном. ИИ теперь присутствует на многих стадиях жизненного цикла вторжения — от доработки эксплойтов до автономной разведки и горизонтального перемещения. Отчёт содержит профили кампаний: ИИ-ассистированная разработка, C2 через легитимные сервисы, многоэтапный фишинг, BYOVD, отравление цепочек поставок, кража криптовалюты, атаки на OT и рекламная разведка (ADINT).",
  "key_findings": [
    "Впервые задокументировано использование GenAI в нескольких стадиях атаки группировками Earth Krahang, Earth Naga (Flax Typhoon) и неидентифицированным актором.",
    "C2 всё чаще размещается на доверенных платформах: крупные облака, туннели для разработчиков, публичные блокчейны, paste-сайты.",
    "ИИ применяется для доработки эксплойтов, автономной разведки и горизонтального перемещения.",
    "Профили кампаний охватывают BYOVD, supply chain, кражу криптовалюты, атаки на OT и ADINT-слежку."
  ],
  "stats": [
    { "value": "4", "label": "страны-спонсора в обзоре" },
    { "value": "6 мес", "label": "наблюдений" }
  ],
  "actors": ["Earth Krahang", "Earth Naga", "Flax Typhoon"],
  "malware": [],
  "cves": [],
  "ttps": [
    { "id": "T1102", "name": "Web Service" },
    { "id": "T1068", "name": "Exploitation for Privilege Escalation" },
    { "id": "T1195", "name": "Supply Chain Compromise" },
    { "id": "T1566", "name": "Phishing" }
  ],
  "recommendations": [
    "Не считать трафик к доверенным облакам и dev-туннелям безопасным по умолчанию: анализировать поведение.",
    "Блокировать загрузку уязвимых драйверов (Microsoft Vulnerable Driver Blocklist, WDAC).",
    "Сегментировать OT и мониторить ИТ→OT переходы."
  ],
  "why_it_matters": "Хороший стратегический обзор для CISO: показывает, куда движутся государственные группировки и почему allow-list доверенных сервисов перестаёт работать.",
  "source_note": "Выжимка по аннотации отчёта на сайте Trend Micro и пресс-релизу; полный PDF — по ссылке."
});
