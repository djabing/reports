RDB.add({
  "id": "2026-10-kaspersky-armored-likho-still-toolkit",
  "vendor": "kaspersky-great",
  "title": "Armored Likho: inside the Still Toolkit",
  "title_ru": "Armored Likho: шпионаж через фальшивое приложение для пожертвований",
  "url": "https://securelist.com/armored-likho-still-toolkit/121033/",
  "pdf_url": "",
  "published": "2026-10",
  "date_precision": "month",
  "added": "2026-11-16",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tags": [
    "APT",
    "Россия",
    "Telegram",
    "Rust",
    "шпионаж"
  ],
  "sectors": [
    "Частные пользователи",
    "Все отрасли"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Armored Likho (Eagle Werewolf) распространяет в России шпионский набор Still Toolkit на Rust через правдоподобное приложение для сбора пожертвований; компонент Still Sync крадёт сессии Telegram.",
  "summary": "Группа совмещает финансово мотивированные кампании против частных лиц и целевой шпионаж против организаций. Кампания обнаружена в мае 2026 года. Ранее Kaspersky описывала кампанию группы с BusySnake Stealer против госсектора и энергетики в России, Казахстане и Бразилии.",
  "key_findings": [
    "Приманка — поддельное приложение для пожертвований.",
    "Still Toolkit на Rust; Still Sync крадёт данные сессий Telegram.",
    "Группа совмещает финансовые атаки и кибершпионаж.",
    "Кампания обнаружена в мае 2026 года."
  ],
  "stats": [],
  "actors": [
    "Armored Likho",
    "Eagle Werewolf"
  ],
  "malware": [
    "Still Toolkit",
    "Still Sync",
    "BusySnake Stealer"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1204.002",
      "name": "Malicious File"
    },
    {
      "id": "T1539",
      "name": "Steal Web Session Cookie"
    }
  ],
  "recommendations": [
    "Проверять источники приложений для пожертвований и сборов.",
    "Защищать сессии Telegram: облачный пароль, контроль активных сеансов."
  ],
  "why_it_matters": "Активная APT-группа против российских пользователей и организаций.",
  "source_note": "Выжимка по Securelist и обзорам (Cyber Security News); дата — октябрь 2026."
});
