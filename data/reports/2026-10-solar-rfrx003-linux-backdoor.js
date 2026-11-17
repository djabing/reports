RDB.add({
  "id": "2026-10-solar-rfrx003-linux-backdoor",
  "vendor": "solar",
  "title": "В Solar 4RAYS выявили опасное для большинства компаний в России шпионское ПО",
  "title_ru": "Solar 4RAYS: бэкдор RFRx003 для Linux-серверов",
  "url": "https://safe.cnews.ru/news/line/2026-10-22_v_solar_4rays_vyyavili_opasnoe",
  "pdf_url": "",
  "published": "2026-10-22",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "apt",
  "lang": "ru",
  "importance": 2,
  "tier": "case",
  "tags": [
    "Linux",
    "бэкдор",
    "APT",
    "шпионаж",
    "Россия"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Solar 4RAYS обнаружила при расследовании целевой атаки ранее неизвестный бэкдор RFRx003 для Linux, который маскируется под службу синхронизации времени и потенциально угрожает всем компаниям с серверами на Linux.",
  "summary": "RFRx003 найден при расследовании инцидента в неназванной организации. Бэкдор построен на встраиваемом C-фреймворке Mongoose и поддерживает два транспорта — HTTPS и WSS; выгрузку данных маскирует под запросы пользовательского аватара. Закрепление — через сервис, имитирующий демон синхронизации времени, и cron-задание от root. Совпадений с известными наборами ВПО нет; за атакой может стоять APT-группировка.",
  "key_findings": [
    "Новый бэкдор для Linux, без пересечений с известными семействами.",
    "Транспорт HTTPS и WSS на базе фреймворка Mongoose.",
    "Эксфильтрация маскируется под загрузку аватара пользователя.",
    "Закрепление через поддельный сервис синхронизации времени и cron от root.",
    "Вероятный актор — APT-группировка (предположение Solar)."
  ],
  "stats": [
    {
      "value": "1",
      "label": "подтверждённая атака в РФ"
    },
    {
      "value": "2",
      "label": "транспортных режима (HTTPS/WSS)"
    }
  ],
  "actors": [],
  "malware": [
    "RFRx003"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1543.002",
      "name": "Systemd Service"
    },
    {
      "id": "T1053.003",
      "name": "Cron"
    },
    {
      "id": "T1071.001",
      "name": "Web Protocols"
    },
    {
      "id": "T1036",
      "name": "Masquerading"
    }
  ],
  "recommendations": [
    "Проверить Linux-серверы на неизвестные сервисы синхронизации времени и cron-задания от root.",
    "Загрузить IoC из отчёта Solar 4RAYS в средства мониторинга.",
    "Развернуть EDR на Linux-серверах."
  ],
  "why_it_matters": "Linux-инфраструктура в России всё чаще становится целью шпионских кампаний, а EDR на серверах по-прежнему редкость.",
  "source_note": "Выжимка по публикациям CNews, SecurityLab и Газеты.Ru.",
  "en": {
    "title": "Solar 4RAYS: RFRx003 backdoor for Linux servers",
    "tldr": "While investigating a targeted attack, Solar 4RAYS discovered RFRx003, a previously unknown Linux backdoor that masquerades as a time synchronisation service and potentially threatens every company with Linux servers.",
    "summary": "RFRx003 was found while investigating an incident at an unnamed organisation. The backdoor is built on the embeddable Mongoose C framework and supports two transports — HTTPS and WSS; data exfiltration is disguised as user avatar requests. Persistence is via a service imitating a time synchronisation daemon and a root cron job. There are no overlaps with known malware sets; an APT group may be behind the attack.",
    "key_findings": [
      "A new Linux backdoor with no overlaps with known families.",
      "HTTPS and WSS transport based on the Mongoose framework.",
      "Exfiltration disguised as a user avatar upload.",
      "Persistence via a fake time synchronisation service and a root cron job.",
      "Likely actor — an APT group (Solar's assumption)."
    ],
    "stats": [
      {
        "value": "1",
        "label": "confirmed attack in Russia"
      },
      {
        "value": "2",
        "label": "transport modes (HTTPS/WSS)"
      }
    ],
    "recommendations": [
      "Check Linux servers for unknown time synchronisation services and root cron jobs.",
      "Load IoCs from the Solar 4RAYS report into monitoring tools.",
      "Deploy EDR on Linux servers."
    ],
    "why_it_matters": "Linux infrastructure in Russia is increasingly targeted by espionage campaigns, while EDR on servers is still rare.",
    "source_note": "Summary based on articles in CNews, SecurityLab and Gazeta.Ru."
  }
});
