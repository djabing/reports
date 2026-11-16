RDB.add({
  "id": "2026-10-kaspersky-netamloader-government-windows",
  "vendor": "kaspersky-great",
  "title": "Kaspersky GReAT uncovers attack targeting government-only Windows system in Asia",
  "title_ru": "NetamLoader: атака на правительственную сборку Windows 10 в Азии",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-great-uncovers-attack-targeting-government-only-windows-system-in-asia",
  "pdf_url": "",
  "published": "2026-10-29",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tags": [
    "APT",
    "госсектор",
    "цепочка поставок",
    ".NET",
    "Windows"
  ],
  "sectors": [
    "Госсектор"
  ],
  "regions": [
    "Азия"
  ],
  "tldr": "GReAT обнаружила NetamLoader — ранее неизвестный .NET-фреймворк загрузки сборок — в архиве в каталоге обновлений Windows на специальной правительственной сборке Windows 10. Место и состав архива указывают на возможную атаку на цепочку поставок.",
  "summary": "Представлено на Security Analyst Summit 2026. NetamLoader собирает сведения о системе, обходит сканирование Windows, удаляет следы и загружает дополнительный код. Выявлена одна жертва; атрибуции нет; страна не названа. Признаков компрометации Patch My PC не обнаружено.",
  "key_findings": [
    "Новый .NET-загрузчик NetamLoader.",
    "Найден в CAB-архиве в каталоге пакетов обновлений Windows.",
    "Цель — сборка Windows 10 исключительно для госорганов.",
    "Возможная атака на цепочку поставок; одна выявленная жертва."
  ],
  "stats": [],
  "actors": [],
  "malware": [
    "NetamLoader"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1195.002",
      "name": "Compromise Software Supply Chain"
    },
    {
      "id": "T1070",
      "name": "Indicator Removal"
    },
    {
      "id": "T1562.001",
      "name": "Disable or Modify Tools"
    }
  ],
  "recommendations": [
    "Проверять целостность пакетов обновлений и сторонних систем распространения ПО.",
    "Мониторить подозрительные архивы в каталогах обновлений Windows."
  ],
  "why_it_matters": "Целевая атака на специализированные госсборки ОС через канал обновлений.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (The Record, The Hacker News)."
});
