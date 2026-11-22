RDB.add({
  "id": "2025-03-arxiv-camel-prompt-injection-defense",
  "vendor": "arxiv",
  "title": "Defeating Prompt Injections by Design",
  "title_ru": "CaMeL: архитектурная защита ИИ-агентов от инъекций инструкций",
  "url": "https://arxiv.org/abs/2503.18813",
  "pdf_url": "https://arxiv.org/pdf/2503.18813v2",
  "published": "2025-03-24",
  "date_precision": "day",
  "added": "2026-11-22",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "pub_status": "peer_reviewed",
  "venue": "IEEE SaTML 2026",
  "authors": "Edoardo Debenedetti, Ilia Shumailov, Tianqi Fan, Jamie Hayes, Nicholas Carlini, Daniel Fabian, Christoph Kern, Chongyang Shi, Andreas Terzis, Florian Tramèr (Google, Google DeepMind, ETH Zurich)",
  "confidence": "medium-high",
  "tags": [
    "ИИ-агенты"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "CaMeL отделяет управление агентом от обработки недоверенных данных и проверяет политику при вызове инструментов. В версии arXiv v2 агент выполнил 77% задач AgentDojo с гарантиями в рамках модели угроз против 84% у системы без защиты.",
  "summary": "Архитектура формирует план из доверенного запроса. Отдельная модель без доступа к инструментам извлекает структурированные сведения из недоверенных материалов. Среда исполнения отслеживает происхождение данных и проверяет, разрешено ли передавать их выбранному получателю.",
  "key_findings": [
    "Недоверенные материалы изолированы от компонента, который определяет порядок действий.",
    "Правила доступа применяются при вызове инструментов и ограничивают передачу приватных данных.",
    "В AgentDojo архитектурная защита сохранила большую часть функциональности исходной системы."
  ],
  "stats": [
    {
      "value": "77%",
      "label": "задач выполнено с гарантиями в arXiv v2"
    },
    {
      "value": "84%",
      "label": "задач выполнено системой без защиты"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Проверять разрешения на уровне среды исполнения перед вызовами инструментов.",
    "Оценивать защиту и долю выполненных задач на собственных рабочих сценариях."
  ],
  "why_it_matters": "Работа показывает, как ограничить опасные действия агента независимо от того, распознала ли модель недоверенную инструкцию.",
  "limits": "Оценка проведена на AgentDojo. Модель угроз предполагает доверенный запрос пользователя. Гарантии касаются потоков управления и данных. Искажение текста ответа без изменения этих потоков остаётся вне рамок защиты.",
  "source_note": "Цифры взяты из полного текста arXiv v2 от 24 июня 2025 года. Статья опубликована в материалах IEEE SaTML 2026.",
  "en": {
    "tldr": "CaMeL separates agent control from untrusted data processing and checks policy at tool calls. In arXiv v2 it completed 77% of AgentDojo tasks with guarantees under the paper’s threat model, compared with 84% for an undefended system.",
    "summary": "The architecture builds a plan from the trusted request. A separate model without tool access extracts structured information from untrusted material. The runtime tracks data provenance and checks whether the selected destination is permitted.",
    "key_findings": [
      "Untrusted material is isolated from the component that decides the sequence of actions.",
      "Access rules are enforced at tool calls and restrict the transfer of private data.",
      "In AgentDojo the architecture preserved most of the undefended system’s functionality."
    ],
    "stats": [
      {
        "value": "77%",
        "label": "tasks completed with guarantees in arXiv v2"
      },
      {
        "value": "84%",
        "label": "tasks completed by the undefended system"
      }
    ],
    "recommendations": [
      "Enforce permissions in the runtime before tool calls.",
      "Measure both protection and task completion on representative workflows."
    ],
    "why_it_matters": "The work shows how to constrain consequential agent actions independently of whether the model recognizes an untrusted instruction.",
    "limits": "The evaluation uses AgentDojo. The threat model assumes a trusted user request. Guarantees cover control and data flows. Corruption of response text without changes to these flows is outside the defense’s scope.",
    "source_note": "Figures come from the full arXiv v2 text dated June 24, 2025. The paper appeared in the IEEE SaTML 2026 proceedings."
  }
});
