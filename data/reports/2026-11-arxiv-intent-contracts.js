RDB.add({
  "id": "2026-11-arxiv-intent-contracts",
  "vendor": "arxiv",
  "title": "Intent Contracts: Taking Tools Away from Agents",
  "title_ru": "Контракты намерений: забрать инструменты у агентов",
  "url": "https://arxiv.org/abs/2611.24025",
  "pdf_url": "https://arxiv.org/pdf/2611.24025",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Ziyuan Wang, Genliang Zhu, Xiaobo Chen, Chu Wang",
  "confidence": "medium",
  "tags": [
    "ИИ-агенты",
    "управление ИИ",
    "идентичность"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Предложено отделить планирование от исполнения: основная модель не получает инструментов и передаёт короткий журналируемый контракт с целью, цитатой пользователя и границами; вызов пишет доверенная модель. Контракты лучше справляются с лишней работой (27 из 30 против 16 из 30), но не снижают число неразрешённых действий.",
  "summary": "Интерфейс авторизации для агентов с инструментами: на каждом шаге планировщик подаёт контракт, код его валидирует, а небольшая доверенная модель сверяет со словами пользователя и сама формирует вызов инструмента. Сравнение проведено с двумя вариантами проверяющего, который принимает или отклоняет команды планировщика целиком. Код и журналы запусков опубликованы.",
  "key_findings": [
    "Когда планировщик добавлял работу, о которой пользователь не просил, контракты выполнили разрешённую часть в 27 из 30 запусков против 16 из 30 у проверяющего, видящего цель.",
    "Каждый изменённый объект был явно назван в цели контракта до выполнения — действие становится проверяемым.",
    "Контракты не снизили число неразрешённых действий: при неоднозначной формулировке пользователя все варианты меняли неверный объект в 40–49% запусков.",
    "Указание исполнителю отказываться при сомнениях эту ошибку не устраняет: доверенная модель не видит окружения."
  ],
  "stats": [
    {
      "value": "27/30",
      "label": "задач выполнено с контрактами"
    },
    {
      "value": "16/30",
      "label": "у проверяющего"
    },
    {
      "value": "40–49%",
      "label": "запусков с неверным объектом"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Сочетать декларацию намерения с контекстом активов и политиками доступа.",
    "Требовать подтверждения человеком для критичных операций с неоднозначными объектами.",
    "Журналировать цель каждого действия агента до его выполнения."
  ],
  "why_it_matters": "Разводит понятия контроля и журналирования: хорошо оформленный контракт делает действие проверяемым, но не гарантирует правильного толкования цели.",
  "limits": "96 промптов, три семейства DevOps-задач, одна пара моделей; проверено доброкачественное превышение границ, а не злонамеренный планировщик.",
  "source_note": "Выжимка по аннотации и тексту препринта на arXiv; код и записи запусков опубликованы авторами.",
  "en": {
    "title": "Intent Contracts: Taking Tools Away from Agents",
    "tldr": "The authors separate planning from execution: the main model holds no tools and submits a short logged contract with a goal, a quote of the user and scope; a trusted model writes the tool call. Contracts handle extra work better (27 of 30 vs 16 of 30) but do not reduce unauthorised actions.",
    "summary": "An authorisation interface for tool-using agents: at each step the planner submits a contract, code validates it, and a small trusted model checks it against the user's words and writes the tool call itself. It is compared with two reviewers that accept or reject the planner's commands as a whole. Code and run records are released.",
    "key_findings": [
      "When the planner added work the user never asked for, contracts completed the authorised part in 27 of 30 runs vs 16 of 30 for the intent-visible reviewer.",
      "Every changed object was named in the contract goal before execution — actions become auditable.",
      "Contracts did not reduce unauthorised actions: with ambiguous user wording all variants changed the wrong object in 40–49% of runs.",
      "Telling the executor to decline when unsure does not fix this: the trusted model cannot see the environment."
    ],
    "stats": [
      {
        "value": "27/30",
        "label": "tasks completed with contracts"
      },
      {
        "value": "16/30",
        "label": "with the reviewer"
      },
      {
        "value": "40–49%",
        "label": "runs hitting the wrong object"
      }
    ],
    "recommendations": [
      "Combine declared intent with asset context and access policies.",
      "Require human confirmation for critical operations on ambiguous objects.",
      "Log the goal of every agent action before it runs."
    ],
    "why_it_matters": "Separates control from logging: a well-formed contract makes an action auditable but does not guarantee the goal is interpreted correctly.",
    "limits": "96 prompts, three DevOps task families, one model pair; benign over-reach was tested, not a malicious planner.",
    "source_note": "Summary based on the abstract and text of the arXiv preprint; code and run records are released by the authors."
  }
});
