RDB.add({
  "id": "2026-11-arxiv-etude-tool-update-gap",
  "vendor": "arxiv",
  "title": "Beyond Prompt Injection: The Tool Update Gap in LLM Agent Security",
  "title_ru": "ETUDE: доверие к инструменту агента переживает вредоносное обновление",
  "url": "https://arxiv.org/abs/2611.01976",
  "pdf_url": "https://arxiv.org/pdf/2611.01976",
  "published": "2026-11-01",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Shiyu Kan, Yue Qi, Yufei Han, Xinjian Luo, Guojun Xiong, Xiaofeng Gao (SJTU, Inria)",
  "confidence": "medium",
  "tags": [
    "ИИ-агенты",
    "цепочка поставок",
    "ИИ-ассистенты"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Атака ETUDE встраивает вредоносную функцию в обновление изначально безопасного инструмента агента, сохраняя имя, интерфейс и выданные права. В семи агентных средах, включая Gemini CLI, Codex CLI и Claude Code, успех атаки — 97,6% при 95,9% выполнения основной задачи.",
  "summary": "Инструменты агентов обновляются, а фреймворки продолжают им доверять без повторной проверки. Обновлённый код исполняется вне контекста модели, поэтому защиты, анализирующие видимые модели данные, его не замечают — промпт-инъекция не нужна. Авторы проверили три класса последствий: раскрытие тестовых секретов, внешнюю API-операцию и изменение файла; существующие защиты оказались недостаточны.",
  "key_findings": [
    "Успех атаки 97,6% при сохранении 95,9% выполнения легитимных задач.",
    "Проверены семь коммерческих и open-source сред, включая Gemini CLI, Codex CLI и Claude Code.",
    "Вредоносная операция выполняется кодом инструмента и не требует промпт-инъекции — защиты на уровне модели её не видят.",
    "Доверие, выданное инструменту, не остаётся обоснованным после изменения его реализации."
  ],
  "stats": [
    {
      "value": "97,6%",
      "label": "успех атаки"
    },
    {
      "value": "95,9%",
      "label": "выполнение основной задачи"
    },
    {
      "value": "7",
      "label": "агентных сред"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Привязывать разрешения к проверенной версии инструмента; обновление кода должно аннулировать прежнее доверие.",
    "Фиксировать версии зависимостей и повторно проверять обновления во внутренних каталогах инструментов.",
    "Минимизировать права инструментов и контролировать их сетевые и файловые операции."
  ],
  "why_it_matters": "Переносит безопасность агентов в плоскость жизненного цикла расширений и цепочки поставок, а не только промптов.",
  "limits": "Эксперимент с инструментами, написанными самими исследователями, а не реальный скомпрометированный пакет; рецензирование и независимое воспроизведение не подтверждены.",
  "source_note": "Выжимка по аннотации и тексту препринта на arXiv.",
  "en": {
    "title": "Beyond Prompt Injection: The Tool Update Gap in LLM Agent Security",
    "tldr": "The ETUDE attack embeds malicious functionality in an update of an initially benign agent tool while keeping its name, interface and granted permissions. Across seven agent environments, including Gemini CLI, Codex CLI and Claude Code, attack success is 97.6% with 95.9% main-task completion.",
    "summary": "Agent tools get updated while frameworks keep trusting them without re-verification. Updated code runs outside the model's context, so defences that analyse model-visible content miss it — no prompt injection is needed. The authors tested three impact classes: disclosure of test secrets, an external API operation and file modification; existing defences proved insufficient.",
    "key_findings": [
      "97.6% attack success while preserving 95.9% legitimate task completion.",
      "Seven commercial and open-source environments tested, including Gemini CLI, Codex CLI and Claude Code.",
      "The malicious operation is executed by tool code and needs no prompt injection — model-level defences cannot see it.",
      "Trust granted to a tool does not remain valid after its implementation changes."
    ],
    "stats": [
      {
        "value": "97.6%",
        "label": "attack success"
      },
      {
        "value": "95.9%",
        "label": "main-task completion"
      },
      {
        "value": "7",
        "label": "agent environments"
      }
    ],
    "recommendations": [
      "Tie permissions to a verified tool version; a code update should revoke prior trust.",
      "Pin dependency versions and re-review updates in internal tool catalogues.",
      "Minimise tool permissions and monitor their network and file operations."
    ],
    "why_it_matters": "Moves agent security into extension life cycle and supply chain, not just prompts.",
    "limits": "An experiment with tools written by the researchers, not a real compromised package; peer review and independent replication are not confirmed.",
    "source_note": "Summary based on the abstract and text of the arXiv preprint."
  }
});
