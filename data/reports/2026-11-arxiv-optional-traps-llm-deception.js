RDB.add({
  "id": "2026-11-arxiv-optional-traps-llm-deception",
  "vendor": "arxiv",
  "title": "Optional Traps: An Empirical Study of LLM Agents Against Credential Deception and Alert-Driven Revocation",
  "title_ru": "Необязательные ловушки: как LLM-агенты реагируют на приманки-учётные данные и отзыв доступа по алерту",
  "url": "https://arxiv.org/abs/2611.19295",
  "pdf_url": "https://arxiv.org/pdf/2611.19295",
  "published": "2026-11-14",
  "date_precision": "day",
  "added": "2026-11-28",
  "type": "ai",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv (cs.CR)",
  "authors": "Raditio Ghifiardi (независимый исследователь, Джакарта)",
  "confidence": "medium-low",
  "tags": [
    "ИИ-агенты",
    "ловушки",
    "учётные данные",
    "обнаружение"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    "T1552",
    "T1078"
  ],
  "tldr": "В изолированной лаборатории атакующий LLM-агент проигнорировал приманки и выгрузил данные через реальную утечку ключа. Закрытие уязвимости остановило выгрузки (0 из 20 против 20 из 20), а канареечные учётные данные добавили быстрое обнаружение и отзыв доступа, но не дополнительную защиту.",
  "summary": "Работа проверяет допущение deception-технологий (ханипоты, приманки, канареечные учётные данные): легитимный пользователь никогда не трогает фальшивые ресурсы. Стенд — mock Records API с отладочным эндпоинтом, раскрывающим настоящий сервисный ключ; агенты — локальные модели на 4 и 9,7 млрд параметров. Четыре исследования: агент на 9,7B проигнорировал статические и адаптивные приманки и дошёл до реальной выгрузки за 6 HTTP-запросов; в зафиксированном эксперименте из 60 сессий выгрузка удалась 20/20 без защиты, 0/20 с исправлением уязвимости и 0/20 с исправлением плюс канарейкой (p≈1,9·10⁻⁶ для базовой против защищённой, p=1 между защищёнными); в Google Cloud подписанный алерт OpenCanary привёл к отказу атакующему за ≤303 мс при 100/100 успешных запросах легитимного клиента; в мультиагентном сценарии агенты отзывались через 39–59 с, но приманку взял и легитимный LLM-агент.",
  "key_findings": [
    "Атакующий LLM-агент проигнорировал приманки и использовал реальную утечку ключа — ловушка работает, только если стоит на пути атакующего.",
    "Выгрузка данных: 20/20 без защиты, 0/20 при исправлении уязвимости, 0/20 при исправлении и канареечных учётных данных.",
    "Deception добавил обнаружение и отзыв доступа конкретного клиента в 19 из 20 защищённых сессий, но не дал дополнительной защиты сверх исправления.",
    "В облачном тесте подписанный алерт приводил к отказу атакующему за ≤303 мс без влияния на легитимного клиента (100/100 запросов).",
    "Легитимный LLM-агент тоже взял приманку — новый источник ложных срабатываний для deception-систем."
  ],
  "stats": [
    {
      "value": "20/20 → 0/20",
      "label": "успешных выгрузок до и после исправления"
    },
    {
      "value": "19/20",
      "label": "сессий с обнаружением и отзывом"
    },
    {
      "value": "≤303 мс",
      "label": "до отказа атакующему в облаке"
    }
  ],
  "recommendations": [
    "Сначала устранять реальные уязвимости и утечки секретов: именно это предотвращает выгрузку данных.",
    "Размещать канареечные учётные данные на вероятном пути атакующего агента и использовать их прежде всего для быстрого обнаружения.",
    "Учитывать, что легитимные ИИ-агенты могут взять приманку: настраивать отзыв доступа точечно и проверять ложные срабатывания."
  ],
  "why_it_matters": "Показывает реальные пределы deception-технологий против автономных атакующих агентов и новый риск ложных срабатываний от собственных ИИ-клиентов.",
  "limits": "Один синтетический стенд с одной заложенной уязвимостью; малые выборки (20 пар, остальные исследования — единичные прогоны); две небольшие локальные модели (4B и 9,7B); во втором исследовании агенту заранее известны маршруты, проверяется эксплуатация, а не поиск. Один автор, протокол не регистрировался внешне. Сам автор подчёркивает: результаты лабораторного масштаба.",
  "source_note": "Выжимка по полному тексту препринта на arXiv (v1 от 14.11.2026).",
  "en": {
    "tldr": "In an isolated lab an attacking LLM agent ignored decoys and exported data through a genuine key leak. Fixing the weakness stopped exports (0 of 20 vs 20 of 20), while canary credentials added fast detection and revocation but no extra prevention.",
    "summary": "The paper tests a core assumption of deception technology (honeypots, decoys, canary credentials): legitimate users never touch fake assets. The testbed is a mock Records API with a debug endpoint leaking the real service key; agents are local 4B and 9.7B models. Four studies: the 9.7B agent ignored static and adaptive decoys and reached the genuine export in 6 HTTP calls; in a frozen 60-session study exports succeeded 20/20 at baseline, 0/20 with hardening and 0/20 with hardening plus a canary (p≈1.9e-6 baseline vs defended, p=1 between defended conditions); in Google Cloud a signed OpenCanary alert led to the attacker being refused within 303 ms while a legitimate client completed 100/100 requests; in a multi-agent setting agents were revoked 39-59 s after taking bait, but a legitimate LLM agent took the bait too.",
    "key_findings": [
      "The attacking LLM agent ignored decoys and used the genuine key leak: a trap works only if it sits on the attacker's path.",
      "Data exports: 20/20 at baseline, 0/20 with hardening, 0/20 with hardening plus canary credentials.",
      "Deception added detection and per-client revocation in 19 of 20 defended sessions, but no prevention beyond hardening.",
      "In the cloud test a signed alert led to the attacker being refused within 303 ms without affecting a legitimate client (100/100 requests).",
      "A legitimate LLM agent also took the bait, a new source of false positives for deception systems."
    ],
    "stats": [
      {
        "value": "20/20 to 0/20",
        "label": "successful exports before and after hardening"
      },
      {
        "value": "19/20",
        "label": "sessions with detection and revocation"
      },
      {
        "value": "<=303 ms",
        "label": "to attacker refusal in the cloud"
      }
    ],
    "recommendations": [
      "Fix real vulnerabilities and secret leaks first: this is what prevents data export.",
      "Place canary credentials on the likely path of an attacking agent and use them mainly for fast detection.",
      "Expect legitimate AI agents to take bait: scope revocation narrowly and review false positives."
    ],
    "why_it_matters": "Shows the practical limits of deception against autonomous attacking agents and a new false-positive risk from an organisation's own AI clients.",
    "limits": "One synthetic target with one planted weakness; small samples (20 pairs, other studies single runs); two small local models (4B and 9.7B); in Study 2 the agent is given the routes, so it tests exploitation rather than discovery. Single author; the protocol was not externally registered. The author stresses the results are lab-scale.",
    "source_note": "Summary based on the full text of the arXiv preprint (v1, 14 November 2026)."
  }
});
