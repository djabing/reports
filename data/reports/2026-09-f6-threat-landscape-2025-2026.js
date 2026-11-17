RDB.add({
  "id": "2026-09-f6-threat-landscape-2025-2026",
  "vendor": "f6",
  "title": "Ландшафт киберугроз 2025–2026",
  "title_ru": "F6: глобальный отчёт «Ландшафт киберугроз 2025–2026»",
  "url": "https://habr.com/ru/companies/F6/news/1078208/",
  "pdf_url": "",
  "published": "2026-09",
  "date_precision": "month",
  "added": "2026-10-16",
  "type": "landscape",
  "lang": "ru",
  "importance": 3,
  "tier": "key",
  "tags": [
    "годовой",
    "ransomware",
    "утечки",
    "андеграунд",
    "брокеры доступа",
    "0-day"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально",
    "Россия"
  ],
  "tldr": "Первый международный отчёт F6: 9 300+ инцидентов с вымогателями за 2025 и I полугодие 2026, 600+ млн строк в утечках, 66 новых группировок-вымогателей. Вымогатели и госгруппировки всё больше заимствуют тактики друг у друга.",
  "summary": "Глобальный аналитический отчёт F6 (бывш. F.A.C.C.T.) за 2025 год и первое полугодие 2026. Разобраны актуальные угрозы, утечки данных, закрытия теневых форумов, рынок ВПО в андеграунде и роль брокеров первоначального доступа. Прогноз: давление на российские организации усилится, атакующих и ущерба станет больше; злоумышленники активно применяют ИИ-чат-ботов.",
  "key_findings": [
    "Более 9 300 инцидентов с программами-вымогателями за 2025 год и I полугодие 2026.",
    "Утечки баз данных содержали более 600 млн строк с данными пользователей по всему миру.",
    "Появилось 66 новых киберпреступных групп, распространяющих вымогатели.",
    "За I полугодие 2026 в теневых магазинах найдено ещё 3,5 млн скомпрометированных банковских карт; обнаружено 65 уникальных объявлений о продаже 0-day эксплойтов.",
    "Сближение вымогателей и APT: политически мотивированные группы всё чаще шифруют данные и требуют выкуп."
  ],
  "stats": [
    {
      "value": "9 300+",
      "label": "инцидентов с вымогателями"
    },
    {
      "value": "600+ млн",
      "label": "строк в утечках"
    },
    {
      "value": "66",
      "label": "новых групп вымогателей"
    },
    {
      "value": "65",
      "label": "объявлений о продаже 0-day"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    },
    {
      "id": "T1078",
      "name": "Valid Accounts"
    }
  ],
  "recommendations": [
    "Мониторить андеграунд на предмет продажи доступов к своей инфраструктуре.",
    "Готовить защиту и от шифрования, и от утечки: вымогатели и APT используют обе тактики.",
    "Проверить, нет ли данных компании в известных утечках."
  ],
  "why_it_matters": "Крупнейший российский обзор теневой экономики киберпреступности — с данными по картам, утечкам и рынку эксплойтов.",
  "source_note": "Выжимка по анонсу на Хабре и публикациям СМИ (CISOClub, ru-bezh, SecurityLab). Сайт F6 из среды сбора не открывался; полный отчёт — на f6.ru.",
  "en": {
    "title": "F6: global report 'Threat Landscape 2025–2026'",
    "tldr": "F6's first international report: 9,300+ ransomware incidents in 2025 and H1 2026, 600+ million rows in leaks, 66 new ransomware groups. Ransomware gangs and state-sponsored groups increasingly borrow each other's tactics.",
    "summary": "F6's (formerly F.A.C.C.T.) global analytical report for 2025 and the first half of 2026. It covers current threats, data leaks, underground forum shutdowns, the underground malware market and the role of initial access brokers. Forecast: pressure on Russian organisations will increase, with more attackers and more damage; attackers actively use AI chatbots.",
    "key_findings": [
      "More than 9,300 ransomware incidents in 2025 and H1 2026.",
      "Database leaks contained more than 600 million rows of user data worldwide.",
      "66 new cybercriminal groups distributing ransomware emerged.",
      "Another 3.5 million compromised bank cards were found in underground shops in H1 2026; 65 unique listings selling 0-day exploits were found.",
      "Ransomware and APT convergence: politically motivated groups increasingly encrypt data and demand ransom."
    ],
    "stats": [
      {
        "value": "9,300+",
        "label": "ransomware incidents"
      },
      {
        "value": "600+ m",
        "label": "rows in leaks"
      },
      {
        "value": "66",
        "label": "new ransomware groups"
      },
      {
        "value": "65",
        "label": "0-day sale listings"
      }
    ],
    "recommendations": [
      "Monitor the underground for sales of access to your infrastructure.",
      "Prepare defences against both encryption and data leaks: ransomware and APT groups use both tactics.",
      "Check whether company data appears in known leaks."
    ],
    "why_it_matters": "The largest Russian review of the underground cybercrime economy — with data on cards, leaks and the exploit market.",
    "source_note": "Summary based on the Habr announcement and media coverage (CISOClub, ru-bezh, SecurityLab). The F6 website could not be opened from the collection environment; the full report is on f6.ru."
  }
});
