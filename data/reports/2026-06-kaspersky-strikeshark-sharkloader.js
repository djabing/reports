RDB.add({
  "id": "2026-06-kaspersky-strikeshark-sharkloader",
  "vendor": "kaspersky",
  "title": "Kaspersky warns of a new StrikeShark campaign targeting organizations in Asia, Latin America and Europe with advanced malware",
  "title_ru": "Кампания StrikeShark: новый загрузчик SharkLoader против организаций Азии, Латинской Америки и Европы",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-warns-of-a-new-strikeshark-campaign-targeting-organizations-in-asia-latin-america-and-europe-with-advanced-malware",
  "pdf_url": "",
  "published": "2026-06",
  "date_precision": "month",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tags": [
    "APT",
    "загрузчик",
    "Cobalt Strike",
    "DLL side-loading",
    "госсектор"
  ],
  "sectors": [
    "Госсектор",
    "Дипломатия",
    "ИТ и разработка"
  ],
  "regions": [
    "Азия",
    "Латинская Америка",
    "Европа"
  ],
  "tldr": "Ранее неизвестный загрузчик SharkLoader через DLL side-loading запускает Cobalt Strike Beacon. Цели — дипломатическая организация в Индонезии, госструктуры Тайваня, разработчики ПО.",
  "summary": "Приманки — поддельные установщики Cisco AnyConnect и Google Update, а также PDF-документы. SharkLoader использует легитимные приложения Windows для подгрузки зашифрованных модулей. Часть инструментов связана с китаеязычными разработчиками, но к известной группе кампания не привязана.",
  "key_findings": [
    "Новый загрузчик SharkLoader доставляет Cobalt Strike Beacon.",
    "DLL side-loading через легитимные приложения Windows.",
    "Приманки — поддельные установщики Cisco AnyConnect и Google Update.",
    "Жертвы: дипломатия в Индонезии, госсектор Тайваня, разработчики ПО.",
    "Связь с китаеязычными разработчиками без атрибуции к группе."
  ],
  "stats": [],
  "actors": [],
  "malware": [
    "SharkLoader",
    "Cobalt Strike"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1574.002",
      "name": "DLL Side-Loading"
    },
    {
      "id": "T1036",
      "name": "Masquerading"
    },
    {
      "id": "T1204.002",
      "name": "Malicious File"
    }
  ],
  "recommendations": [
    "Скачивать VPN-клиенты и обновления только с официальных ресурсов.",
    "Детектировать DLL side-loading и маяки Cobalt Strike."
  ],
  "why_it_matters": "Новая кампания с собственным загрузчиком против госструктур и разработчиков.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (The Hacker News, SC World); дата — июнь 2026."
});
