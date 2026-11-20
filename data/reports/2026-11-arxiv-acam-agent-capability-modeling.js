RDB.add({
  "id": "2026-11-arxiv-acam-agent-capability-modeling",
  "vendor": "arxiv",
  "title": "ACaM: Automated Capability Modeling for Agentic AI Security",
  "title_ru": "ACaM: автоматическое моделирование возможностей ИИ-агентов",
  "url": "https://arxiv.org/abs/2611.23507",
  "pdf_url": "https://arxiv.org/pdf/2611.23507",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Monika Santra, Dhilung Kirat, Qiushi Wu, Kevin Eykholt, Xiaokui Shu, Ian Molloy (Penn State, IBM Research)",
  "confidence": "medium-high",
  "tags": [
    "ИИ-агенты",
    "цепочка поставок",
    "секреты",
    "уязвимости"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "ACaM определяет, что ИИ-агент реально может сделать, по исходному коду его инструментов, а не по их текстовым описаниям. На 43 open-source агентах метод нашёл 123 пути к исполнению кода или раскрытию учётных данных; 10 подтверждены рабочими эксплойтами.",
  "summary": "Авторы описывают проблему расхождения описания и кода инструментов (Description-Code Inconsistency) и класс угроз «отмывание возможностей»: опасное поведение спрятано в реализации инструмента, а его описание безобидно — из-за дрейфа кода или компрометации цепочки поставок. ACaM строит граф свойств возможностей агента (ACPG): статический анализ кода задаёт факты, которые LLM не может переопределить, а модель добавляет только смысл поведения. По графу восстанавливаются цепочки угроз через несколько вызовов инструментов.",
  "key_findings": [
    "На 24 вручную размеченных агентах ACaM восстанавливает свойства возможностей с macro-F1 98,3%, а внедрённые цепочки угроз — с оценкой 0,980 (на 8 пунктов выше лучшего аналога).",
    "Проверено 43 реальных open-source агента, включая 9 мультиагентных систем.",
    "Найдено 123 пути к исполнению кода и раскрытию учётных данных; 10 уязвимостей подтверждены PoC-эксплойтами, 6 из них — произвольное исполнение кода.",
    "Описание инструмента на естественном языке не гарантирует его поведения: опасная возможность может выполняться при каждом «безобидном» вызове."
  ],
  "stats": [
    {
      "value": "98,3%",
      "label": "macro-F1 на размеченных агентах"
    },
    {
      "value": "43",
      "label": "реальных агента"
    },
    {
      "value": "123",
      "label": "пути к исполнению кода и утечке секретов"
    },
    {
      "value": "10",
      "label": "подтверждённых эксплойтов"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Перед внедрением агента проверять код его инструментов, а не только описания и манифесты.",
    "Моделировать цепочки вызовов инструментов целиком: опасность часто возникает в комбинации.",
    "Ограничивать постоянный доступ инструментов к учётным данным, файлам и внешним сервисам."
  ],
  "why_it_matters": "Показывает, что реальная поверхность риска агента определяется кодом инструментов и их комбинациями, а не списком подключённых инструментов.",
  "limits": "Только Python; контролируемая часть оценки включает искусственно внедрённые цепочки; около 1,8 тыс. менее серьёзных путей проверял ИИ-агент, а не человек. Анализ консервативно моделирует худший порядок вызовов, поэтому структурная возможность ещё не означает эксплуатацию. Соавторы из IBM Research — возможный отраслевой интерес.",
  "source_note": "Выжимка по полному тексту препринта на arXiv.",
  "en": {
    "title": "ACaM: Automated Capability Modeling for Agentic AI Security",
    "tldr": "ACaM determines what an AI agent can actually do from its tools' source code rather than their text descriptions. Across 43 open-source agents it found 123 paths to code execution or credential exposure; 10 were confirmed with working exploits.",
    "summary": "The authors describe Description-Code Inconsistency in tools and a threat class called 'capability laundering': dangerous behaviour hides in a tool's implementation behind a benign description, through code drift or supply-chain compromise. ACaM builds an Agent Capability Property Graph (ACPG): static analysis establishes facts the LLM cannot override, and the model adds only behavioural meaning. The graph is used to reconstruct threat chains spanning several tool calls.",
    "key_findings": [
      "On 24 manually annotated agents ACaM recovers capability properties with 98.3% macro-F1 and reconstructs injected threat chains with a score of 0.980 (8 points above the best baseline).",
      "43 real open-source agents tested, including 9 multi-agent systems.",
      "123 code-execution and credential-exposure paths found; 10 vulnerabilities confirmed with PoC exploits, 6 of them arbitrary code execution.",
      "A tool's natural-language description does not guarantee its behaviour: a dangerous capability can run on every 'benign' call."
    ],
    "stats": [
      {
        "value": "98.3%",
        "label": "macro-F1 on annotated agents"
      },
      {
        "value": "43",
        "label": "real-world agents"
      },
      {
        "value": "123",
        "label": "code-execution and secret-exposure paths"
      },
      {
        "value": "10",
        "label": "confirmed exploits"
      }
    ],
    "recommendations": [
      "Before deploying an agent, review its tools' code, not just descriptions and manifests.",
      "Model tool-call chains as a whole: danger often arises from combinations.",
      "Limit tools' standing access to credentials, files and external services."
    ],
    "why_it_matters": "Shows that an agent's real risk surface is defined by its tools' code and their combinations, not by the list of connected tools.",
    "limits": "Python only; the controlled part of the evaluation includes artificially injected chains; about 1,800 less severe paths were checked by an AI agent rather than a human. The analysis conservatively models the worst call order, so structural possibility does not imply exploitation. Co-authors from IBM Research may have an industry interest.",
    "source_note": "Summary based on the full text of the arXiv preprint."
  }
});
