RDB.add({
  "id": "2026-11-kaspersky-esxi-blacknevas",
  "vendor": "kaspersky-gert",
  "title": "ESXi ransomware: why it is dangerous and how to defend against it",
  "title_ru": "Шифровальщики для ESXi: почему они опасны и как защищаться",
  "url": "https://securelist.com/esxi-ransomware/121959/",
  "pdf_url": "",
  "published": "2026-11-13",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "ransomware",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "вымогатели",
    "ESXi",
    "vCenter",
    "резервные копии",
    "IR"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Kaspersky GERT разобрала атаку BlackNevas: за 10 дней злоумышленник уничтожил всю виртуализацию жертвы — 4 хоста ESXi, все ВМ, оба vCenter и резервные копии — без единой уязвимости гипервизора.",
  "summary": "Исследование Global Emergency Response Team о шифровальщиках для гипервизоров. В ключевом кейсе доступ получен через учётные данные, извлечённые из PRTG Network Monitor, и общий root-пароль на нескольких хостах. Необычная техника — злоупотребление vCenter Host Profiles для массового включения SSH. За несколько дней до основной атаки была отключена антивирусная защита среды резервного копирования, затем остановлены сервисы бэкапа и зашифрована инфраструктура восстановления. Бинарь не восстановлен, атрибуция к семейству Trigona/BlackNevas сделана по стилю командной строки. По данным GERT, на вымогателей пришлось 39,4% инцидентов 2025 года.",
  "key_findings": [
    "Уничтожены 4 хоста ESXi, все ВМ, оба vCenter Server Appliance и резервная инфраструктура за 10 дней.",
    "Эксплойты гипервизора не использовались: учётные данные из PRTG и переиспользуемый root-пароль.",
    "Злоупотребление vCenter Host Profiles для включения SSH на всех хостах.",
    "Защита резервных копий отключена за несколько дней до удара.",
    "Вымогатели — 39,4% инцидентов, которые GERT обрабатывала в 2025 году."
  ],
  "stats": [
    {
      "value": "10 дней",
      "label": "длительность атаки"
    },
    {
      "value": "4",
      "label": "хоста ESXi уничтожено"
    },
    {
      "value": "39,4%",
      "label": "инцидентов GERT — вымогатели"
    }
  ],
  "actors": [
    "BlackNevas"
  ],
  "malware": [
    "BlackNevas",
    "Trigona"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1552",
      "name": "Unsecured Credentials"
    },
    {
      "id": "T1021.004",
      "name": "SSH"
    },
    {
      "id": "T1490",
      "name": "Inhibit System Recovery"
    },
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    },
    {
      "id": "T1562.001",
      "name": "Disable or Modify Tools"
    }
  ],
  "recommendations": [
    "Уникальные root-пароли на каждом ESXi-хосте и хранение в PAM; SSH выключен по умолчанию.",
    "Изолировать управление vCenter/ESXi в отдельном сегменте с MFA.",
    "Мониторить изменения Host Profiles и включение SSH на хостах.",
    "Держать неизменяемые/офлайн-копии и отдельный контур для системы резервного копирования.",
    "Ограничить учётные данные мониторинговых систем (PRTG и др.) минимально необходимыми правами."
  ],
  "why_it_matters": "Показывает, что виртуализацию разрушают не 0-day, а слабая гигиена учётных данных — и что бэкапы атакуют первыми.",
  "source_note": "Выжимка по Securelist и пересказам в СМИ (GBHackers и др.).",
  "en": {
    "tldr": "Kaspersky GERT analysed a BlackNevas attack: in 10 days the attacker destroyed the victim's entire virtualisation — 4 ESXi hosts, all VMs, both vCenters and the backups — without a single hypervisor vulnerability.",
    "summary": "A Global Emergency Response Team study of hypervisor ransomware. In the key case, access was gained via credentials extracted from PRTG Network Monitor and a shared root password on several hosts. An unusual technique was abuse of vCenter Host Profiles to enable SSH en masse. A few days before the main attack, antivirus protection of the backup environment was disabled, then backup services were stopped and the recovery infrastructure encrypted. The binary was not recovered; attribution to the Trigona/BlackNevas family was based on command-line style. According to GERT, ransomware accounted for 39.4% of incidents in 2025.",
    "key_findings": [
      "4 ESXi hosts, all VMs, both vCenter Server Appliances and the backup infrastructure destroyed in 10 days.",
      "No hypervisor exploits: credentials from PRTG and a reused root password.",
      "Abuse of vCenter Host Profiles to enable SSH on all hosts.",
      "Backup protection disabled a few days before the strike.",
      "Ransomware accounted for 39.4% of incidents handled by GERT in 2025."
    ],
    "stats": [
      {
        "value": "10 days",
        "label": "attack duration"
      },
      {
        "value": "4",
        "label": "ESXi hosts destroyed"
      },
      {
        "value": "39.4%",
        "label": "of GERT incidents — ransomware"
      }
    ],
    "recommendations": [
      "Unique root passwords on every ESXi host stored in PAM; SSH off by default.",
      "Isolate vCenter/ESXi management in a separate segment with MFA.",
      "Monitor Host Profile changes and SSH enablement on hosts.",
      "Keep immutable/offline copies and a separate perimeter for the backup system.",
      "Restrict monitoring system credentials (PRTG etc.) to the minimum necessary rights."
    ],
    "why_it_matters": "Shows that virtualisation is destroyed not by zero-days but by weak credential hygiene — and that backups are attacked first.",
    "source_note": "Summary based on Securelist and media accounts (GBHackers and others)."
  }
});
