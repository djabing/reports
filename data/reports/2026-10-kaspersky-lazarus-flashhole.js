RDB.add({
  "id": "2026-10-kaspersky-lazarus-flashhole",
  "vendor": "kaspersky",
  "title": "Kaspersky identifies new Lazarus APT campaign utilizing AI and post-quantum encryption",
  "title_ru": "Lazarus Operation FlashHole: ИИ и постквантовое шифрование в кибершпионаже",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-identifies-new-lazarus-apt-campaign-utilizing-ai-and-post-quantum-encryption",
  "pdf_url": "",
  "published": "2026-10-21",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tags": [
    "APT",
    "Lazarus",
    "КНДР",
    "постквантовая криптография",
    "ИИ"
  ],
  "sectors": [
    "Строительство",
    "ИТ и разработка",
    "Телеком"
  ],
  "regions": [
    "Южная Корея"
  ],
  "tldr": "Lazarus применяет в Operation FlashHole постквантовый алгоритм ML-KEM-1024 для защиты связи и доставки нагрузки, а ИИ — для создания приманок. Пострадали как минимум три южнокорейские компании.",
  "summary": "Представлено на Security Analyst Summit 2026 (Бали). Кампания активна как минимум с июля 2025 года и связана с Operation SyncHole со средней или высокой уверенностью. Обновлённый LPEClient использует ML-KEM-1024. ИИ, по оценке Kaspersky, использовался для фото-приманки и сайтов-портфолио фальшивых соискателей.",
  "key_findings": [
    "Активна с июля 2025; не менее трёх жертв в Южной Корее (строительство, ПО, телеком-оборудование).",
    "Связь с Operation SyncHole — средняя/высокая уверенность.",
    "LPEClient использует постквантовый ML-KEM-1024.",
    "ИИ для приманок и фальшивых сайтов соискателей."
  ],
  "stats": [],
  "actors": [
    "Lazarus"
  ],
  "malware": [
    "LPEClient"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566",
      "name": "Phishing"
    },
    {
      "id": "T1573",
      "name": "Encrypted Channel"
    }
  ],
  "recommendations": [
    "Не полагаться на анализ трафика: детектировать вредонос в памяти на конечных точках.",
    "Проверять кандидатов и их портфолио при найме, особенно в ИТ."
  ],
  "why_it_matters": "Первые случаи применения постквантовой криптографии в инструментарии государственной APT.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (BleepingComputer, TechRadar)."
});
