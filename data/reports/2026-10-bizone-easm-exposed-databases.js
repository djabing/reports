RDB.add({
  "id": "2026-10-bizone-easm-exposed-databases",
  "vendor": "bizone",
  "title": "У каждой пятой компании в России сервисы баз данных доступны из интернета",
  "title_ru": "BI.ZONE EASM: у каждой пятой компании базы данных доступны из интернета",
  "url": "https://bi.zone/news/u-kazhdoy-pyatoy-kompanii-v-rossii-servisy-baz-dannykh-dostupny-iz-interneta/",
  "pdf_url": "",
  "published": "2026-10-05",
  "date_precision": "day",
  "added": "2026-10-16",
  "type": "vulnerabilities",
  "lang": "ru",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "периметр",
    "EASM",
    "RDP",
    "базы данных",
    "поверхность атаки"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "По данным BI.ZONE EASM, в 2026 году у 22% российских компаний СУБД доступны прямо из интернета, у 18% — RDP, у 15% — SMB, у 6% — LDAP. За III квартал найдено 90 тыс. систем с открытым удалённым доступом на фоне критической уязвимости в RDS.",
  "summary": "Исследование внешнего периметра российских компаний сервисом управления поверхностью атаки BI.ZONE EASM. Открытые СУБД, RDP, SMB и LDAP сами по себе не означают взлом, но резко повышают шанс успешной атаки — от подбора паролей до эксплуатации уязвимостей без участия пользователя.",
  "key_findings": [
    "22% компаний с начала 2026 года имели сервисы баз данных на внешнем периметре.",
    "18% — RDP доступен из интернета: риск подбора и повторного использования украденных паролей.",
    "15% — открыт SMB, 6% — LDAP (раскрывает структуру сети и учётные записи).",
    "Июль–сентябрь 2026: 90 тыс. систем в рунете с активным удалённым доступом на фоне уязвимости Microsoft Remote Desktop Services, позволяющей выполнить код без участия пользователя."
  ],
  "stats": [
    {
      "value": "22%",
      "label": "компаний с открытыми СУБД"
    },
    {
      "value": "18%",
      "label": "с RDP из интернета"
    },
    {
      "value": "90 тыс.",
      "label": "систем с открытым удалённым доступом"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1133",
      "name": "External Remote Services"
    },
    {
      "id": "T1110",
      "name": "Brute Force"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    }
  ],
  "recommendations": [
    "Регулярно сканировать внешний периметр и выявлять сервисы, не предназначенные для интернета.",
    "Убрать СУБД, SMB и LDAP из интернета; RDP — только через VPN/шлюз с MFA.",
    "Срочно обновить Remote Desktop Services."
  ],
  "why_it_matters": "Быстрая самопроверка: эти четыре протокола на периметре — самые дешёвые для закрытия дыры.",
  "source_note": "Выжимка по полному тексту публикации BI.ZONE.",
  "en": {
    "title": "BI.ZONE EASM: one in five companies has databases exposed to the internet",
    "tldr": "According to BI.ZONE EASM, in 2026 22% of Russian companies have databases directly reachable from the internet, 18% RDP, 15% SMB and 6% LDAP. In Q3, 90,000 systems with open remote access were found amid a critical RDS vulnerability.",
    "summary": "A study of Russian companies' external perimeter by the BI.ZONE EASM attack surface management service. Exposed databases, RDP, SMB and LDAP do not in themselves mean a breach, but sharply increase the chance of a successful attack — from password guessing to exploiting vulnerabilities without user interaction.",
    "key_findings": [
      "22% of companies have had database services on the external perimeter since the start of 2026.",
      "18% have RDP reachable from the internet: risk of brute force and reuse of stolen passwords.",
      "15% have SMB open, 6% LDAP (which reveals network structure and accounts).",
      "July–September 2026: 90,000 systems in the Russian internet segment with active remote access amid a Microsoft Remote Desktop Services vulnerability allowing code execution without user interaction."
    ],
    "stats": [
      {
        "value": "22%",
        "label": "of companies with exposed databases"
      },
      {
        "value": "18%",
        "label": "with RDP exposed to the internet"
      },
      {
        "value": "90,000",
        "label": "systems with open remote access"
      }
    ],
    "recommendations": [
      "Scan the external perimeter regularly and find services not meant for the internet.",
      "Remove databases, SMB and LDAP from the internet; RDP only via a gateway with MFA.",
      "Update Remote Desktop Services urgently."
    ],
    "why_it_matters": "A quick self-check: these four protocols on the perimeter are the cheapest holes to close.",
    "source_note": "Summary based on the full text of the BI.ZONE publication."
  }
});
