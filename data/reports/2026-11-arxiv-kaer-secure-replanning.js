RDB.add({
  "id": "2026-11-arxiv-kaer-secure-replanning",
  "vendor": "arxiv",
  "title": "Kaer: Security-Aware Replanning for Multi-Agent Systems",
  "title_ru": "Kaer: безопасное перепланирование в мультиагентных системах",
  "url": "https://arxiv.org/abs/2611.24839",
  "pdf_url": "https://arxiv.org/pdf/2611.24839",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Tushin Mallick, Evan Rose, Matthew Laws, Alina Oprea, Cristina Nita-Rotaru (Northeastern University)",
  "confidence": "medium",
  "tags": [
    "ИИ-агенты",
    "промпт-инъекции",
    "мультиагентные системы"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Новая поверхность атаки: вредоносный агент встраивает инструкции в сообщение об ошибке и перехватывает перепланирование оркестратора. Kaer передаёт диагностику только через фиксированные шаблоны и разрешает лишь детерминированные правки плана — блокирует 88–92% атак против 70–80% у лучшего аналога.",
  "summary": "В популярной архитектуре мультиагентных систем оркестратор пересматривает план по обратной связи агентов — и злонамеренный агент может этим воспользоваться. Существующие защиты контролируют доступ к инструментам или политики до исполнения и не закрывают фазу перепланирования. Kaer изолирует планировщик от недоверенной обратной связи, ограничивает правки плана набором детерминированных операторов и проверяет каждый изменённый план на соответствие политикам. Авторы создали бенчмарк Cintra.",
  "key_findings": [
    "Перепланирование по обратной связи агентов — отдельная поверхность атаки, не закрытая существующими защитами.",
    "Kaer блокирует 92,3% и 88,0% атак (две модели) против 69,8% и 80,4% у ControlValve и 35,0% и 47,8% у незащищённого Magentic-One.",
    "Дополнительная проверка выходов агентов повышает защиту до 96,8%.",
    "Полезность сопоставима с ControlValve; шаблоны отказа немного ограничивают выполнение отдельных задач."
  ],
  "stats": [
    {
      "value": "88–92%",
      "label": "атак блокирует Kaer"
    },
    {
      "value": "70–80%",
      "label": "у ControlValve"
    },
    {
      "value": "35–48%",
      "label": "без защиты"
    },
    {
      "value": "96,8%",
      "label": "с проверкой выходов"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Не переносить доверие с агента на сообщения, которые он передаёт оркестратору.",
    "Использовать контролируемый словарь межагентных сообщений и повторно проверять политики после изменения плана.",
    "Обеспечить наблюдаемость всей истории перепланирования."
  ],
  "why_it_matters": "Показывает, что в мультиагентных системах опасна не только работа отдельного агента, но и канал обратной связи, по которому меняется план.",
  "limits": "Cintra — небольшой авторский симулятор (14 задач, 14 целей атак), а не реальная эксплуатация; Kaer ограничивает, но не исключает атаку (можно манипулировать выбором шаблона). Исследование финансировали Google и Good Ventures.",
  "source_note": "Выжимка по полному тексту препринта на arXiv.",
  "en": {
    "title": "Kaer: Security-Aware Replanning for Multi-Agent Systems",
    "tldr": "A new attack surface: a malicious agent embeds instructions in an error message and hijacks the orchestrator's replanning. Kaer passes diagnostics only through fixed templates and allows only deterministic plan repairs — blocking 88–92% of attacks vs 70–80% for the best baseline.",
    "summary": "In a popular multi-agent architecture the orchestrator revises the plan based on agent feedback — and a malicious agent can exploit this. Existing defences control tool access or pre-execution policies and leave replanning unprotected. Kaer shields the planner from untrusted feedback, restricts plan changes to deterministic repair operators and checks every modified plan against policies. The authors built the Cintra benchmark.",
    "key_findings": [
      "Replanning based on agent feedback is a separate attack surface not covered by existing defences.",
      "Kaer blocks 92.3% and 88.0% of attacks (two models) vs 69.8% and 80.4% for ControlValve and 35.0% and 47.8% for undefended Magentic-One.",
      "An additional check of agent outputs raises protection to 96.8%.",
      "Utility is comparable to ControlValve; failure templates slightly constrain some tasks."
    ],
    "stats": [
      {
        "value": "88–92%",
        "label": "attacks blocked by Kaer"
      },
      {
        "value": "70–80%",
        "label": "ControlValve"
      },
      {
        "value": "35–48%",
        "label": "undefended"
      },
      {
        "value": "96.8%",
        "label": "with output checks"
      }
    ],
    "recommendations": [
      "Do not transfer trust from an agent to the messages it sends the orchestrator.",
      "Use a controlled vocabulary for inter-agent messages and re-check policies after plan changes.",
      "Make the whole replanning history observable."
    ],
    "why_it_matters": "Shows that in multi-agent systems the danger lies not only in individual agents but in the feedback channel that changes the plan.",
    "limits": "Cintra is a small author-built simulator (14 tasks, 14 attack goals), not real-world exploitation; Kaer limits but does not rule out attacks (template choice can be manipulated). Funded by Google and Good Ventures.",
    "source_note": "Summary based on the full text of the arXiv preprint."
  }
});
