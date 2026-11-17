RDB.add({
  "id": "2026-11-pt-ai-agents-3h-intrusion",
  "vendor": "pt",
  "title": "ИИ-агенты провели весь взлом за три часа",
  "title_ru": "ИИ-агенты провели весь взлом за три часа: расследование PT ESC IR",
  "url": "https://securitylab.ru/news/579551.php",
  "pdf_url": "",
  "published": "2026-11",
  "date_precision": "month",
  "added": "2026-11-15",
  "type": "ai",
  "lang": "ru",
  "importance": 3,
  "tier": "case",
  "tags": [
    "ИИ",
    "агентные атаки",
    "IR",
    "Россия",
    "Linux"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "PT ESC IR впервые в своей практике столкнулась с взломом, который, вероятно, целиком провели ИИ-агенты: около трёх часов от точки входа до конфиденциальных данных и доступ к 10+ узлам Linux и Windows.",
  "summary": "Специалисты Positive Technologies расследовали атаку на российскую компанию с аномально высокой скоростью развития: примерно за три часа атакующие прошли путь от первичного доступа до конфиденциальных данных и захватили более десяти узлов. По выводам экспертов, атаку, вероятно, полностью выполняли ИИ-агенты, хотя отсутствие человека «за пультом» окончательно не подтверждено. Уязвимый сервис и настройка не раскрываются.",
  "key_findings": [
    "~3 часа от первичного доступа до конфиденциальных данных.",
    "Скомпрометировано более 10 узлов инфраструктуры (Linux и Windows).",
    "По оценке PT, атака вероятно целиком выполнена ИИ-агентами — впервые в практике компании.",
    "Уязвимый сервис и конкретная ошибка конфигурации не раскрываются."
  ],
  "stats": [
    {
      "value": "~3 ч",
      "label": "до конфиденциальных данных"
    },
    {
      "value": "10+",
      "label": "скомпрометированных узлов"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1021",
      "name": "Remote Services"
    },
    {
      "id": "T1005",
      "name": "Data from Local System"
    }
  ],
  "recommendations": [
    "Сократить время обнаружения и реагирования: окно для реакции измеряется часами.",
    "Автоматизировать блокировку на уровне EDR/NDR при признаках быстрого бокового перемещения.",
    "Проводить регулярный аудит конфигураций публичных сервисов."
  ],
  "why_it_matters": "Российский кейс, подтверждающий глобальный тренд: агентные атаки уже происходят в реальных инцидентах, а не только в отчётах вендоров ИИ.",
  "source_note": "Выжимка по публикациям SecurityLab и пересказам расследования PT; вывод о полной автономности предварительный.",
  "en": {
    "title": "AI agents carried out an entire intrusion in three hours: a PT ESC IR investigation",
    "tldr": "For the first time in its practice, PT ESC IR encountered an intrusion probably carried out entirely by AI agents: about three hours from the entry point to confidential data, and access to 10+ Linux and Windows hosts.",
    "summary": "Positive Technologies specialists investigated an attack on a Russian company that developed abnormally fast: in about three hours the attackers went from initial access to confidential data and took over more than ten hosts. According to the experts, the attack was probably carried out entirely by AI agents, although the absence of a human 'at the controls' is not definitively confirmed. The vulnerable service and configuration are not disclosed.",
    "key_findings": [
      "~3 hours from initial access to confidential data.",
      "More than 10 infrastructure hosts compromised (Linux and Windows).",
      "According to PT, the attack was probably carried out entirely by AI agents — a first in the company's practice.",
      "The vulnerable service and specific misconfiguration are not disclosed."
    ],
    "stats": [
      {
        "value": "~3 h",
        "label": "to confidential data"
      },
      {
        "value": "10+",
        "label": "compromised hosts"
      }
    ],
    "recommendations": [
      "Shorten detection and response time: the reaction window is measured in hours.",
      "Automate blocking at the EDR/NDR level on signs of fast lateral movement.",
      "Regularly audit the configuration of public-facing services."
    ],
    "why_it_matters": "A Russian case confirming the global trend: agentic attacks are already happening in real incidents, not just in AI vendors' reports.",
    "source_note": "Summary based on SecurityLab articles and accounts of the PT investigation; the conclusion of full autonomy is preliminary."
  }
});
