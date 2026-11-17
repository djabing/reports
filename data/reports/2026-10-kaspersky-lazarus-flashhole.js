RDB.add({
  "id": "2026-10-kaspersky-lazarus-flashhole",
  "vendor": "kaspersky-great",
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
  "tier": "case",
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
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (BleepingComputer, TechRadar).",
  "en": {
    "tldr": "In Operation FlashHole, Lazarus uses the post-quantum ML-KEM-1024 algorithm to protect communications and payload delivery, and AI to create lures. At least three South Korean companies were affected.",
    "summary": "Presented at Security Analyst Summit 2026 (Bali). The campaign has been active since at least July 2025 and is linked to Operation SyncHole with medium to high confidence. The updated LPEClient uses ML-KEM-1024. According to Kaspersky, AI was used for a photo lure and portfolio sites of fake job seekers.",
    "key_findings": [
      "Active since July 2025; at least three victims in South Korea (construction, software, telecom equipment).",
      "Link to Operation SyncHole — medium/high confidence.",
      "LPEClient uses post-quantum ML-KEM-1024.",
      "AI used for lures and fake job-seeker sites."
    ],
    "stats": [],
    "recommendations": [
      "Do not rely on traffic analysis: detect in-memory malware on endpoints.",
      "Vet candidates and their portfolios during hiring, especially in IT."
    ],
    "why_it_matters": "The first cases of post-quantum cryptography in a state APT's toolkit.",
    "source_note": "Summary based on the Kaspersky press release and coverage (BleepingComputer, TechRadar)."
  }
});
