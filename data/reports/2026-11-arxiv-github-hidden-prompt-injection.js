RDB.add({
  "id": "2026-11-arxiv-github-hidden-prompt-injection",
  "vendor": "arxiv",
  "title": "Who Is Prompt-Injecting Coding Agents? An Empirical Study of Hidden AI-Directed Text on GitHub",
  "title_ru": "Кто внедряет промпт-инъекции в ИИ-агентов для разработки? Скрытый текст для ИИ на GitHub",
  "url": "https://arxiv.org/abs/2611.28763",
  "pdf_url": "https://arxiv.org/pdf/2611.28763",
  "published": "2026-11-21",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Gabi Nakibly (Radware; Technion), Zvika Babo (Radware)",
  "confidence": "medium-high",
  "tags": [
    "ИИ-агенты",
    "промпт-инъекции",
    "цепочка поставок",
    "секреты",
    "GitHub"
  ],
  "sectors": [
    "ИТ и разработка ПО"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Первое масштабное измерение скрытого текста для ИИ-агентов на GitHub: около 145 млн issues, pull request, комментариев и README. Найдено 2281 подтверждённое срабатывание, из них лишь 43 атаки, но они нацелены на собственных агентов сопровождающих (триаж, ревью, CI) и чаще всего пытаются украсть секреты.",
  "summary": "Авторы искали текст, который GitHub не показывает человеку (HTML-комментарии, невидимый Unicode, «белый» LaTeX, скрытый CSS), но который агент получает целиком. Кандидаты прошли двухэтапную LLM-классификацию, сверку с шаблонами репозиториев и ручную проверку каждого случая. Скрытый текст для ИИ встречается примерно с той же частотой, что и в открытом вебе, но атаки составляют лишь 2%. Две трети находок — внутренние маркеры, которыми проекты координируют собственных агентов. Это неаутентифицированный канал управления, который может подделать любой комментатор.",
  "key_findings": [
    "Из 142,7 млн issues, pull request и комментариев подтверждены 2281 находка в 435 репозиториях (16 на миллион). Ещё 107 репозиториев содержат скрытый текст для ИИ в README.",
    "Атак 43 (примерно одна на 3,3 млн объектов): 56% направлены на собственных агентов проекта (17 — на агента триажа), 44% — на репозитории Microsoft, Google, OpenAI, Anthropic, GitHub и Elastic, 21% упоминают реальные инструменты или поля вывода агента-жертвы.",
    "Самая частая цель атак (44%) — секреты: вывести переменные окружения, прочитать .env или отправить GITHUB_TOKEN на внешний сервер. 34 из 43 атак месяцы спустя оставались на месте.",
    "Внутренние маркеры координации агентов — 1519 находок (67%). Их частота выросла в пять раз за четыре месяца; 47 маркеров в 10 проектах фиксируют одобрение или пропуск проверки, и их может подделать любой, кто может оставить комментарий.",
    "При офлайн-повторе атак четыре из пяти моделей ни разу не выполнили внедрённую инструкцию; небольшая быстрая gpt-5.6-luna выполнила 8 из 43 (19%). После удаления HTML-комментариев не сработала ни одна атака.",
    "Поиск по ключевым словам на GitHub почти бесполезен: 116 из 123 совпадений — обсуждения и тесты промпт-инъекций, а не атаки."
  ],
  "stats": [
    {
      "value": "≈145 млн",
      "label": "проанализированных issues, PR, комментариев и README"
    },
    {
      "value": "2281",
      "label": "подтверждённая находка скрытого текста для ИИ"
    },
    {
      "value": "43",
      "label": "атаки на агентов в issues и PR"
    },
    {
      "value": "19%",
      "label": "атак сработали против небольшой быстрой модели"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Не выдавать агентам, читающим issues, секреты, лишние права на запись и shell; явно задавать права токена в workflow; не открывать защитные шлюзы по одному лишь вердикту модели.",
    "Перед тем как агент или скрипт выполнит действие по маркеру, проверять автора маркера (author association или список разрешённых); для одобрений использовать видимые сигналы, которые ставят только сопровождающие (метки, статусы проверок).",
    "Фильтровать скрытый текст по автору, а не по формату: удалять написанное посторонними и сохранять маркеры собственных участников и ботов; вести перечень используемых маркеров и шаблонов.",
    "Регулярно сканировать свои репозитории на скрытый текст для ИИ, например открытым инструментом авторов ipi-scan."
  ],
  "why_it_matters": "Показывает реальные, а не лабораторные атаки на ИИ-агентов в цепочке разработки ПО: злоумышленники уже изучают workflow проектов и целятся в токены CI.",
  "limits": "Учтён только скрытый текст; видимые инъекции, коммиты, код и файлы инструкций агентов не охвачены, поэтому все числа — нижние границы. Комментарии видны лишь через выборку GH Archive. Пропуски классификаторов не восстанавливались. Повтор атак выполнен офлайн с имитацией инструментов и одним ответом модели. Авторы работают в ИБ-вендоре Radware. Препринт не рецензирован; инструмент и данные опубликованы.",
  "source_note": "Препринт, версия 1. Выжимка по полному тексту на arXiv; числа сверены с таблицами статьи.",
  "en": {
    "tldr": "The first large-scale measurement of hidden AI-directed text on GitHub, covering about 145 million issues, pull requests, comments and READMEs. It finds 2,281 validated findings, of which only 43 are attacks, but those attacks target maintainers' own triage, review and CI agents and most often try to steal secrets.",
    "summary": "The authors searched for text that GitHub does not render to a human (HTML comments, invisible Unicode, white LaTeX, CSS hiding) but that an agent receives in full. Candidates went through two-stage LLM classification, a template provenance check and manual review of every case. AI-directed hidden text appears at roughly the same rate as on the open web, but attacks make up only 2% of it. Two thirds of the findings are first-party markers that projects use to coordinate their own agents. This is an unauthenticated control channel that any commenter can forge.",
    "key_findings": [
      "Across 142.7 million issues, pull requests and comments, 2,281 findings in 435 repositories were validated (16 per million). Another 107 repositories carry AI-directed hidden text in their README.",
      "There are 43 attacks (about one in 3.3 million items): 56% address the project's own agent (17 an issue triage agent), 44% target repositories of Microsoft, Google, OpenAI, Anthropic, GitHub and Elastic, and 21% name the victim agent's real tools or output fields.",
      "The most common attack goal (44%) is secrets: printing environment variables, reading .env files or sending the GITHUB_TOKEN to an external server. 34 of the 43 attacks were still intact months later.",
      "First-party orchestration markers account for 1,519 findings (67%). Their rate grew fivefold in four months; 47 markers in 10 projects record an approval or a bypassed check, and anyone who can comment can forge them.",
      "Replayed offline, four of five models never carried out an injected instruction; the small, fast gpt-5.6-luna complied with 8 of 43 (19%). With HTML comments stripped, no attack succeeded.",
      "Keyword matching is of little use on GitHub: 116 of 123 matches were discussions or tests of prompt injection, not attacks."
    ],
    "stats": [
      {
        "value": "~145M",
        "label": "issues, PRs, comments and READMEs analysed"
      },
      {
        "value": "2,281",
        "label": "validated findings of AI-directed hidden text"
      },
      {
        "value": "43",
        "label": "attacks on agents in issues and PRs"
      },
      {
        "value": "19%",
        "label": "of attacks succeeded against a small, fast model"
      }
    ],
    "recommendations": [
      "Give issue-reading agents no secrets, no unneeded write access and no shell; set workflow token permissions explicitly; never let a model verdict open a security gate alone.",
      "Before an agent or script acts on a marker, verify the marker's author (author association or an allowlist); for approvals, use visible signals that only maintainers can set (labels, check statuses).",
      "Filter hidden text by author, not by format: strip what outsiders write and keep the markers of the project's own members and bots; keep an inventory of the markers and templates in use.",
      "Scan your own repositories for AI-directed hidden text regularly, for example with the authors' open-source ipi-scan tool."
    ],
    "why_it_matters": "It shows real-world rather than lab attacks on AI agents in the software development pipeline: attackers already study project workflows and go after CI tokens.",
    "limits": "Only hidden text is counted; visible injections, commits, code and agent instruction files are out of scope, so all counts are lower bounds. Comments are observed only through the GH Archive sample. Classifier misses were not recovered. The attack replay was offline, with mocked tools and a single model response. The authors work for the security vendor Radware. The preprint is not peer-reviewed; the tool and data are released.",
    "source_note": "Version 1 of a preprint. Summary based on the full text on arXiv; figures checked against the paper's tables."
  }
});
