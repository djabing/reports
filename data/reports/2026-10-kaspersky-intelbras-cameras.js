RDB.add({
  "id": "2026-10-kaspersky-intelbras-cameras",
  "vendor": "kaspersky-great",
  "title": "Millions of security cameras at risk: Kaspersky discovered a vulnerability in Intelbras devices",
  "title_ru": "Уязвимость в IP-камерах Intelbras: под угрозой миллионы устройств",
  "url": "https://www.kaspersky.com/about/press-releases/millions-of-security-cameras-at-risk-kaspersky-discovered-a-vulnerability-in-intelbras-devices",
  "pdf_url": "",
  "published": "2026-10-28",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "vulnerabilities",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "tags": [
    "IoT",
    "видеонаблюдение",
    "DoS",
    "прошивка",
    "Латинская Америка"
  ],
  "sectors": [
    "Частные пользователи",
    "МСБ"
  ],
  "regions": [
    "Бразилия",
    "Латинская Америка"
  ],
  "tldr": "GReAT нашла DoS-уязвимость средней критичности в процедуре обновления прошивки IP-камер Intelbras: злоумышленник из той же Wi-Fi-сети может вывести камеру из строя. Исправлено в прошивке R.260804.",
  "summary": "Потенциально затронуты несколько миллионов устройств в разных странах; приложение Intelbras Mibo Smart скачано более 4 млн раз, в основном в Бразилии и Латинской Америке.",
  "key_findings": [
    "Уязвимость в неаутентифицированной процедуре обновления прошивки.",
    "Позволяет отключить камеру из той же сети.",
    "Исправлено в прошивке R.260804.",
    "Приложение Mibo Smart — 4 млн+ загрузок."
  ],
  "stats": [
    {
      "value": "4 млн+",
      "label": "загрузок приложения"
    },
    {
      "value": "R.260804",
      "label": "исправленная прошивка"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Обновить прошивку камер Intelbras до R.260804 или новее.",
    "Выносить IoT-устройства в отдельный сегмент сети."
  ],
  "why_it_matters": "Типичный пример массовой уязвимости потребительского IoT.",
  "source_note": "Выжимка по пресс-релизу и блогу Kaspersky.",
  "en": {
    "tldr": "GReAT found a medium-severity DoS vulnerability in the firmware update procedure of Intelbras IP cameras: an attacker on the same Wi-Fi network can disable the camera. Fixed in firmware R.260804.",
    "summary": "Potentially several million devices in different countries are affected; the Intelbras Mibo Smart app has been downloaded more than 4 million times, mainly in Brazil and Latin America.",
    "key_findings": [
      "Vulnerability in an unauthenticated firmware update procedure.",
      "Allows disabling the camera from the same network.",
      "Fixed in firmware R.260804.",
      "Mibo Smart app — 4M+ downloads."
    ],
    "stats": [
      {
        "value": "4M+",
        "label": "app downloads"
      },
      {
        "value": "R.260804",
        "label": "fixed firmware"
      }
    ],
    "recommendations": [
      "Update Intelbras camera firmware to R.260804 or later.",
      "Place IoT devices in a separate network segment."
    ],
    "why_it_matters": "A typical example of a mass consumer IoT vulnerability.",
    "source_note": "Summary based on the Kaspersky press release and blog."
  }
});
