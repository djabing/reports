RDB.add({
  "id": "2026-11-bitdefender-threat-debrief-november",
  "vendor": "bitdefender",
  "title": "Bitdefender Threat Debrief | November 2026",
  "title_ru": "Bitdefender Threat Debrief, ноябрь 2026: вымогатели в октябре и «раздутая» группа N0n",
  "url": "https://www.bitdefender.com/en-us/blog/businessinsights/bitdefender-threat-debrief-november-2026",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ransomware",
  "lang": "en",
  "importance": 1,
  "tier": "analytics",
  "tags": [
    "шифровальщики",
    "сайты утечек",
    "ИИ в атаках",
    "новые группы",
    "статистика"
  ],
  "sectors": [
    "Все отрасли",
    "Здравоохранение",
    "Госсектор"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Bitdefender насчитала 1072 заявленные жертвы вымогателей в октябре 2026 года (946 без сомнительных заявлений группы N0n). Утечка сервера N0n показала, что группа, вышедшая в топ, атаковала лишь около 20 организаций и опирается на ИИ-инструменты.",
  "summary": "Ежемесячный обзор по сайтам утечек и открытым источникам за 1–31 октября 2026. Главная тема — группа N0n, появившаяся в середине сентября: на её сайте более 100 жертв, но открытый файловый сервер (адрес связан со Швецией) показал, что реальных целей чуть больше 20; группа использует открытую ИИ-платформу OpenCode, потратила более $7000 на генеративный ИИ для скриптов разведки и повторно использует одни и те же ключи шифрования. Другие события: аффилиат The Gentlemen Azazel откололся, украв более 6 ТБ данных, и использовал MCP для связи ИИ-ассистента с обратной оболочкой как канала управления; группа BYOD атаковала университетскую клинику; Booba Team заявила более 9 госорганизаций (более 800 ГБ данных); за два месяца появилось более 17 новых групп. В топе месяца — N0n, The Gentlemen, Qilin, Akira, Booba Team; здравоохранение поднялось на 2-е место среди отраслей.",
  "key_findings": [
    "1072 заявленные жертвы в октябре 2026; без 126 сомнительных жертв N0n — 946.",
    "N0n: на сайте утечек более 100 жертв, по данным её открытого сервера — чуть больше 20; использует OpenCode и потратила более $7000 на генеративный ИИ.",
    "N0n повторно использует одни и те же ключи шифрования в разных кампаниях — это может помочь расшифровке.",
    "Azazel (бывший аффилиат The Gentlemen) — более 6 ТБ украденных данных; ИИ-ассистент через MCP использовался как канал управления.",
    "Booba Team — более 9 госорганизаций и более 800 ГБ данных за октябрь; больше, чем Qilin (6) и The Gentlemen (3) в госсекторе.",
    "Более 17 новых групп вымогателей за два месяца; здравоохранение — на 2-м месте среди атакуемых отраслей."
  ],
  "stats": [
    {
      "value": "1072",
      "label": "заявленные жертвы за октябрь"
    },
    {
      "value": "946",
      "label": "без сомнительных заявлений N0n"
    },
    {
      "value": ">17",
      "label": "новых групп за два месяца"
    },
    {
      "value": ">6 ТБ",
      "label": "данных украл Azazel"
    }
  ],
  "actors": [
    "N0n",
    "The Gentlemen",
    "Azazel",
    "Qilin",
    "Akira",
    "Booba Team",
    "BYOD"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    "T1486",
    "T1567",
    "T1133",
    "T1059"
  ],
  "recommendations": [
    "Не доверять заявлениям о краже данных без подтверждений; вести реестр активов и критичных данных.",
    "Защитить удалённый доступ: ограничить RDP, требовать MFA, регулярно менять учётные данные.",
    "Хранить резервные копии отдельно от основной инфраструктуры и проверять восстановление."
  ],
  "why_it_matters": "Показывает, что статистика сайтов утечек может искажаться «раздутыми» заявлениями, а ИИ снижает порог входа для новых групп вымогателей.",
  "source_note": "Выжимка по обзору Bitdefender от 10.11.2026; данные основаны на заявлениях на сайтах утечек и не проверены независимо.",
  "en": {
    "tldr": "Bitdefender counted 1,072 claimed ransomware victims in October 2026 (946 excluding N0n's dubious claims). A leak of N0n's server showed that the group, which reached the top of the chart, targeted only about 20 organisations and relies on AI tools.",
    "summary": "Monthly review of leak sites and open sources for 1 to 31 October 2026. The featured story is N0n, which emerged in mid-September: its leak site lists more than 100 victims, but an exposed file server (located in Sweden) showed just over 20 actual targets; the group uses the open-source AI platform OpenCode, spent more than $7,000 on generative AI for reconnaissance scripts and reuses the same encryption keys. Other events: The Gentlemen affiliate Azazel broke away after stealing more than 6 TB of data and used MCP to link an AI coding assistant to a reverse shell as a command channel; the BYOD group hit a university clinic; Booba Team claimed more than 9 government organisations (over 800 GB of data); more than 17 new groups appeared in two months. Top groups of the month: N0n, The Gentlemen, Qilin, Akira, Booba Team; healthcare rose to second place among industries.",
    "key_findings": [
      "1,072 claimed victims in October 2026; 946 excluding 126 dubious N0n victims.",
      "N0n: more than 100 victims on its leak site but just over 20 per its exposed server; uses OpenCode and spent more than $7,000 on generative AI.",
      "N0n reuses the same encryption keys across campaigns, which may help decryption.",
      "Azazel (a former The Gentlemen affiliate): more than 6 TB of stolen data; an AI assistant was used via MCP as a command channel.",
      "Booba Team: more than 9 government organisations and over 800 GB of data in October, more than Qilin (6) and The Gentlemen (3) in government.",
      "More than 17 new ransomware groups in two months; healthcare ranks second among targeted industries."
    ],
    "stats": [
      {
        "value": "1,072",
        "label": "claimed victims in October"
      },
      {
        "value": "946",
        "label": "excluding dubious N0n claims"
      },
      {
        "value": ">17",
        "label": "new groups in two months"
      },
      {
        "value": ">6 TB",
        "label": "data stolen by Azazel"
      }
    ],
    "recommendations": [
      "Do not trust data-theft claims without evidence; keep an inventory of assets and critical data.",
      "Harden remote access: restrict RDP, require MFA, rotate credentials regularly.",
      "Keep backups separate from core infrastructure and test restores."
    ],
    "why_it_matters": "Shows that leak-site statistics can be skewed by inflated claims and that AI lowers the barrier to entry for new ransomware groups.",
    "source_note": "Summary based on Bitdefender's review of 10 Nov 2026; figures are based on leak-site claims and are not independently verified."
  }
});
