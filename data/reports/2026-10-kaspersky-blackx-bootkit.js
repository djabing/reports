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
  "tier": "case",
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
  "source_note": "Выжимка по обзорам (BleepingComputer, Born City, SecurityLab); первоисточник Kaspersky в поиске не найден, ссылка ведёт на BleepingComputer.",
  "en": {
    "tldr": "The BlackX UEFI bootkit bypassed Secure Boot on fully updated Windows via the old Baton Drop vulnerability (CVE-2022-21894): administrators had not manually enabled additional Secure Boot certificate revocations. Targets were diplomatic agencies in Central Asia.",
    "summary": "BlackX resembles BlackLotus but differs in its exploit implementation and drivers. After bypassing Secure Boot it loads a malicious kernel driver. Kaspersky calls this a gap in the update process: the patch requires manual steps that are rarely performed. An attempt to disable Kaspersky protection was blocked. Attribution differs between sources (some link it to APT41).",
    "key_findings": [
      "UEFI bootkit exploiting CVE-2022-21894 (Baton Drop).",
      "All victims ran fully updated Windows without manual activation of Secure Boot revocations.",
      "Targets: diplomatic agencies in Tajikistan, Uzbekistan and Turkmenistan.",
      "Similar to BlackLotus; loads a malicious kernel driver."
    ],
    "stats": [],
    "recommendations": [
      "Manually apply Secure Boot revocations per Microsoft's guidance for CVE-2023-24932.",
      "Check that the 'Windows Production PCA 2011' certificate is in the UEFI forbidden list (per secondary sources' recommendations)."
    ],
    "why_it_matters": "Shows that a 'fully updated' system can stay vulnerable without manual steps.",
    "source_note": "Summary based on coverage (BleepingComputer, Born City, SecurityLab); the Kaspersky primary source was not found in search, so the link leads to BleepingComputer."
  }
});
