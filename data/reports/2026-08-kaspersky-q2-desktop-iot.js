RDB.add({
  "id": "2026-08-kaspersky-q2-desktop-iot",
  "vendor": "kaspersky-securelist",
  "title": "IT threat evolution in Q2 2026. Non-mobile statistics",
  "title_ru": "Эволюция киберугроз во II квартале 2026: статистика (ПК и IoT)",
  "url": "https://securelist.com/malware-report-q2-2026-pc-iot-statistics/120960/",
  "pdf_url": "",
  "published": "2026-08-10",
  "date_precision": "day",
  "added": "2026-10-15",
  "type": "landscape",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "статистика",
    "квартальный",
    "ransomware",
    "майнеры",
    "macOS",
    "IoT"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Kaspersky за Q2 2026: ~400 млн заблокированных веб-атак, 2 538 новых модификаций вымогателей, Qilin снова №1 по жертвам на DLS (14,57%), число новых майнеров почти удвоилось.",
  "summary": "Квартальная статистика Securelist по данным продуктов Kaspersky. Активность вымогателей стабилизировалась после пиков прошлых кварталов, но Qilin вернул лидерство и, по данным Check Point, эксплуатировал 0-day в Check Point Remote Access VPN. Отмечены ликвидация Microsoft сервиса подписи вредоносного ПО Fox Tempest, эксплуатация BlueHammer (CVE-2026-33825) в атаках вымогателей и использование QEMU-виртуалок для скрытия инструментов группировкой PayoutsKing. На macOS — GlassWorm через расширения IDE и бэкдор FlutterShell, прошедший нотаризацию Apple.",
  "key_findings": [
    "Почти 400 млн атак с веб-ресурсов заблокировано; более 16 млн вредоносных объектов файловым антивирусом.",
    "Вымогатели: 4 новых семейства, 2 538 модификаций, 71 860 атакованных пользователей (пик — апрель).",
    "Рейтинг DLS: Qilin 14,57%, Akira 7,80%, DragonForce 6,88%.",
    "Qilin связан с эксплуатацией 0-day CVE-2026-50751 в Check Point Remote Access VPN (с 7 мая, пик в начале июня).",
    "Microsoft ликвидировала malware-signing-as-a-service группы Fox Tempest, которым пользовались Rhysida, Akira, INC, Qilin, BlackByte.",
    "PayoutsKing разворачивает скрытые Alpine Linux VM через QEMU для обхода EDR.",
    "Майнеры: 6 067 новых вариантов (почти ×2), 213 003 атакованных пользователя."
  ],
  "stats": [
    {
      "value": "~400 млн",
      "label": "заблокированных веб-атак"
    },
    {
      "value": "2 538",
      "label": "новых модификаций вымогателей"
    },
    {
      "value": "14,57%",
      "label": "жертв DLS — Qilin"
    },
    {
      "value": "213 003",
      "label": "пользователя атаковано майнерами"
    }
  ],
  "actors": [
    "Qilin",
    "Akira",
    "DragonForce",
    "Fox Tempest",
    "PayoutsKing"
  ],
  "malware": [
    "GlassWorm",
    "FlutterShell",
    "Coruna",
    "Lumma",
    "Vidar",
    "Oyster"
  ],
  "cves": [
    "CVE-2026-50751",
    "CVE-2026-50752",
    "CVE-2026-33825"
  ],
  "ttps": [
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1564.006",
      "name": "Run Virtual Instance"
    },
    {
      "id": "T1553.002",
      "name": "Code Signing"
    },
    {
      "id": "T1496",
      "name": "Resource Hijacking"
    }
  ],
  "recommendations": [
    "Срочно проверить обновление Check Point Remote Access VPN / Mobile Access (CVE-2026-50751).",
    "Отслеживать запуск QEMU и других гипервизоров на рабочих станциях и серверах.",
    "Не доверять цифровой подписи как единственному признаку легитимности.",
    "Контролировать установку расширений IDE у разработчиков (Open VSX, VS Code Marketplace)."
  ],
  "why_it_matters": "Регулярный статистический срез с конкретными CVE и группировками — удобно для квартального отчёта SOC.",
  "source_note": "Выжимка по полному тексту статьи на Securelist.",
  "en": {
    "tldr": "Kaspersky for Q2 2026: ~400 million web attacks blocked, 2,538 new ransomware modifications, Qilin again #1 by leak-site victims (14.57%), and the number of new miners almost doubled.",
    "summary": "Securelist's quarterly statistics based on Kaspersky product data. Ransomware activity stabilised after previous peaks, but Qilin regained the lead and, according to Check Point, exploited a 0-day in Check Point Remote Access VPN. Also noted: Microsoft's takedown of Fox Tempest's malware-signing service, exploitation of BlueHammer (CVE-2026-33825) in ransomware attacks, and the PayoutsKing group using QEMU VMs to hide tools. On macOS — GlassWorm via IDE extensions and the FlutterShell backdoor that passed Apple notarisation.",
    "key_findings": [
      "Almost 400 million web-borne attacks blocked; more than 16 million malicious objects caught by file anti-virus.",
      "Ransomware: 4 new families, 2,538 modifications, 71,860 users attacked (peak in April).",
      "Leak-site ranking: Qilin 14.57%, Akira 7.80%, DragonForce 6.88%.",
      "Qilin linked to exploitation of 0-day CVE-2026-50751 in Check Point Remote Access VPN (from 7 May, peaking in early June).",
      "Microsoft took down Fox Tempest's malware-signing-as-a-service used by Rhysida, Akira, INC, Qilin and BlackByte.",
      "PayoutsKing deploys hidden Alpine Linux VMs via QEMU to evade EDR.",
      "Miners: 6,067 new variants (almost ×2), 213,003 users attacked."
    ],
    "stats": [
      {
        "value": "~400 m",
        "label": "web attacks blocked"
      },
      {
        "value": "2,538",
        "label": "new ransomware modifications"
      },
      {
        "value": "14.57%",
        "label": "of leak-site victims — Qilin"
      },
      {
        "value": "213,003",
        "label": "users attacked by miners"
      }
    ],
    "recommendations": [
      "Check the Check Point Remote Access VPN / Mobile Access update urgently (CVE-2026-50751).",
      "Monitor QEMU and other hypervisors starting on workstations and servers.",
      "Do not trust a digital signature as the only sign of legitimacy.",
      "Control IDE extension installation by developers (Open VSX, VS Code Marketplace)."
    ],
    "why_it_matters": "A regular statistical snapshot with specific CVEs and groups — convenient for a quarterly SOC report.",
    "source_note": "Summary based on the full text of the Securelist article."
  }
});
