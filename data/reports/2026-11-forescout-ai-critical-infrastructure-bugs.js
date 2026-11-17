RDB.add({
  "id": "2026-11-forescout-ai-critical-infrastructure-bugs",
  "vendor": "forescout",
  "title": "Finding Critical Infrastructure Bugs with Off-the-Shelf AI",
  "title_ru": "Поиск уязвимостей критической инфраструктуры с помощью общедоступного ИИ",
  "url": "https://www.forescout.com/research-labs/finding-critical-infrastructure-bugs-with-off-the-shelf-ai/",
  "pdf_url": "",
  "published": "2026-11-12",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "ИИ",
    "уязвимости",
    "OT",
    "IoT",
    "TCP/IP"
  ],
  "sectors": [
    "Критическая инфраструктура",
    "Промышленность"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Forescout Vedere Labs с помощью обычных ИИ-моделей и бюджета $935 нашла 66 новых уязвимостей в 10 TCP/IP-стеках, применяемых в OT и IoT. Работа заняла 90 часов вместо примерно девяти месяцев.",
  "summary": "Проект Memoria: исследователи построили ИИ-«обвязку» для поиска уязвимостей и прогнали через неё 10 TCP/IP-стеков, семь из которых уже анализировали вручную в 2020–2021 годах. Найдено 99 уязвимостей, из них 66 ранее неизвестных, 52% новых — высокого или критического уровня. Средняя стоимость находки — $2,58. Подход хорошо находит ошибки работы с памятью в коде разбора протоколов, но пропускает логические и архитектурные ошибки.",
  "key_findings": [
    "99 уязвимостей в 10 TCP/IP-стеках, из них 66 ранее неизвестных.",
    "52% новых уязвимостей — высокого или критического уровня.",
    "Общая стоимость — $935, в среднем $2,58 за находку.",
    "90 часов (≈10 ч автоматического анализа и 80 ч ручной проверки) вместо ~9 месяцев.",
    "ИИ хорошо ищет ошибки памяти в парсерах протоколов, но пропускает логические ошибки."
  ],
  "stats": [
    {
      "value": "66",
      "label": "новых уязвимостей"
    },
    {
      "value": "$935",
      "label": "стоимость всего анализа"
    },
    {
      "value": "90 ч",
      "label": "вместо ~9 месяцев"
    },
    {
      "value": "52%",
      "label": "высокого/критического уровня"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Встроить ИИ-статический анализ в конвейеры разработки и выпуска.",
    "Изолировать устройства, которые невозможно обновить, и сократить их доступность из сети.",
    "Ужесточить требования к безопасности поставщиков OT/IoT-устройств."
  ],
  "why_it_matters": "Наглядно показывает, что поиск уязвимостей в критической инфраструктуре стал дешёвым и быстрым — и для атакующих тоже.",
  "source_note": "Выжимка по публикации Forescout и обзорам (Computer Weekly, Infosecurity Magazine, Industrial Cyber).",
  "en": {
    "tldr": "Using ordinary AI models and a $935 budget, Forescout Vedere Labs found 66 new vulnerabilities in 10 TCP/IP stacks used in OT and IoT. The work took 90 hours instead of about nine months.",
    "summary": "Project Memoria: researchers built an AI vulnerability-hunting harness and ran 10 TCP/IP stacks through it, seven of which had been analysed manually in 2020–2021. 99 vulnerabilities were found, 66 of them previously unknown; 52% of the new ones are high or critical. The average cost per finding was $2.58. The approach is good at finding memory errors in protocol parsing code but misses logic and design flaws.",
    "key_findings": [
      "99 vulnerabilities in 10 TCP/IP stacks, 66 of them previously unknown.",
      "52% of new vulnerabilities are high or critical.",
      "Total cost $935, an average of $2.58 per finding.",
      "90 hours (≈10 h of automated analysis and 80 h of manual verification) instead of ~9 months.",
      "AI is good at finding memory errors in protocol parsers but misses logic errors."
    ],
    "stats": [
      {
        "value": "66",
        "label": "new vulnerabilities"
      },
      {
        "value": "$935",
        "label": "cost of the whole analysis"
      },
      {
        "value": "90 h",
        "label": "instead of ~9 months"
      },
      {
        "value": "52%",
        "label": "high/critical"
      }
    ],
    "recommendations": [
      "Build AI static analysis into development and release pipelines.",
      "Isolate devices that cannot be updated and reduce their network reachability.",
      "Tighten security requirements for OT/IoT device vendors."
    ],
    "why_it_matters": "Clearly shows that finding vulnerabilities in critical infrastructure has become cheap and fast — for attackers too.",
    "source_note": "Summary based on the Forescout publication and coverage (Computer Weekly, Infosecurity Magazine, Industrial Cyber)."
  }
});
