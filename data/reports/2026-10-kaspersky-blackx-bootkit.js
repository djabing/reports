RDB.add({
  "id": "2026-10-kaspersky-blackx-bootkit",
  "vendor": "kaspersky-great",
  "title": "Beneath the operating system: Kaspersky discovers BlackX bootkit targeting diplomatic organisations in Central Asia",
  "title_ru": "Буткит BlackX обходит Secure Boot на полностью обновлённых Windows",
  "url": "https://bleepingcomputer.com/news/security/blackx-uefi-bootkit-exploits-baton-drop-flaw-to-bypass-secure-boot",
  "pdf_url": "",
  "published": "2026-10-21",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tags": [
    "буткит",
    "UEFI",
    "Secure Boot",
    "дипломатия",
    "Центральная Азия"
  ],
  "sectors": [
    "Госсектор",
    "Дипломатия"
  ],
  "regions": [
    "Таджикистан",
    "Узбекистан",
    "Туркменистан"
  ],
  "tldr": "UEFI-буткит BlackX через старую уязвимость Baton Drop (CVE-2022-21894) обходил Secure Boot на полностью обновлённых Windows: администраторы не включили вручную дополнительные отзывы сертификатов Secure Boot. Цели — дипагентства Центральной Азии.",
  "summary": "BlackX похож на BlackLotus, но отличается реализацией эксплойта и драйверами. После обхода Secure Boot загружает вредоносный драйвер ядра. Kaspersky называет проблему разрывом в процессе обновления: патч требует ручных действий, которые редко выполняются. Попытка отключить защиту Kaspersky была заблокирована. Атрибуция в источниках расходится (некоторые связывают с APT41).",
  "key_findings": [
    "UEFI-буткит, эксплуатирует CVE-2022-21894 (Baton Drop).",
    "Все жертвы — на полностью обновлённых Windows без ручной активации отзывов Secure Boot.",
    "Цели — дипломатические ведомства Таджикистана, Узбекистана и Туркменистана.",
    "Сходство с BlackLotus; загружает вредоносный драйвер ядра."
  ],
  "stats": [],
  "actors": [],
  "malware": [
    "BlackX"
  ],
  "cves": [
    "CVE-2022-21894",
    "CVE-2023-24932"
  ],
  "ttps": [
    {
      "id": "T1542.003",
      "name": "Bootkit"
    },
    {
      "id": "T1553.006",
      "name": "Code Signing Policy Modification"
    }
  ],
  "recommendations": [
    "Вручную применить отзывы Secure Boot по руководству Microsoft для CVE-2023-24932.",
    "Проверить, что сертификат «Windows Production PCA 2011» внесён в список запрещённых UEFI (по рекомендациям вторичных источников)."
  ],
  "why_it_matters": "Показывает, что «полностью обновлённая» система может оставаться уязвимой без ручных шагов.",
  "source_note": "Выжимка по обзорам (BleepingComputer, Born City, SecurityLab); первоисточник Kaspersky в поиске не найден, ссылка ведёт на BleepingComputer."
});
