RDB.add({
  "id": "2025-05-arxiv-fides-information-flow",
  "vendor": "arxiv",
  "title": "Securing AI Agents with Information-Flow Control",
  "title_ru": "FIDES: контроль потоков информации для защиты ИИ-агентов",
  "url": "https://arxiv.org/abs/2505.23643",
  "pdf_url": "https://arxiv.org/pdf/2505.23643v2",
  "published": "2025-05-29",
  "date_precision": "day",
  "added": "2026-11-22",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Manuel Costa, Boris Köpf, Aashish Kolluri, Andrew Paverd, Mark Russinovich, Ahmed Salem, Shruti Tople, Lukas Wutschitz, Santiago Zanella-Béguelin (Microsoft)",
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
  "tldr": "FIDES отслеживает конфиденциальность и целостность данных и проверяет политику перед вызовами инструментов. Авторы измерили на AgentDojo, как эти проверки влияют на безопасность и выполнение задач.",
  "summary": "Работа сравнивает несколько способов планирования действий агента. FIDES скрывает выбранные данные от планировщика, пока ему достаточно передавать ссылки на значения, а при выполнении действий учитывает метки входных данных и ограничения инструмента.",
  "key_findings": [
    "Авторы оценили подход на пяти моделях с поддержкой вызовов инструментов.",
    "В таблице 1 для GPT-4o у FIDES с проверкой политики был один успешный случай по критериям AgentDojo против 163 у базового планировщика без этих проверок.",
    "При оценке только нарушений заданной политики у FIDES с проверками успешных случаев не было."
  ],
  "stats": [
    {
      "value": "5",
      "label": "моделей в оценке"
    },
    {
      "value": "949",
      "label": "сценариев инъекций в AgentDojo"
    },
    {
      "value": "1 / 163",
      "label": "успешный случай у FIDES с проверками и у базового планировщика без проверок (GPT-4o)"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Маркировать данные по конфиденциальности и доверию к источнику.",
    "Проверять допустимость действий перед каждым значимым вызовом и отдельно оценивать целостность ответа пользователю."
  ],
  "why_it_matters": "Разделение политики и планировщика даёт разработчикам проверяемый способ ограничивать действия агента при работе с данными разного уровня доверия.",
  "limits": "Результаты зависят от набора инструментов и правил AgentDojo. Проверки в работе применяются к вызовам инструментов, поэтому часть изменений текста ответа вне их охвата.",
  "source_note": "Выжимка по полному тексту arXiv v2, разделы 7–8 и таблица 1.",
  "en": {
    "tldr": "FIDES tracks data confidentiality and integrity and checks policy before tool calls. The authors use AgentDojo to measure how these checks affect security and task completion.",
    "summary": "The paper compares several approaches to planning agent actions. FIDES hides selected data from the planner when references to values suffice, and uses input labels and tool restrictions when authorizing actions.",
    "key_findings": [
      "The authors evaluated the approach with five models that support tool calls.",
      "In Table 1 for GPT-4o, FIDES with policy checks had one successful case under AgentDojo’s criteria, compared with 163 for the basic planner without those checks.",
      "FIDES with checks had zero successful cases when counting only violations of the specified policy."
    ],
    "stats": [
      {
        "value": "5",
        "label": "models evaluated"
      },
      {
        "value": "949",
        "label": "AgentDojo injection cases"
      },
      {
        "value": "1 / 163",
        "label": "successful cases for FIDES with checks and the basic planner without checks (GPT-4o)"
      }
    ],
    "recommendations": [
      "Label data by confidentiality and trust in its source.",
      "Enforce policy before consequential calls and evaluate the integrity of user-facing responses separately."
    ],
    "why_it_matters": "Separating policy from the planner gives developers a testable way to constrain agent actions when handling data from sources with different trust levels.",
    "limits": "Results depend on AgentDojo’s tools and the selected policies. The paper applies checks to tool calls, so some changes to response text fall outside their coverage.",
    "source_note": "Based on the full arXiv v2 text, Sections 7–8 and Table 1."
  }
});
