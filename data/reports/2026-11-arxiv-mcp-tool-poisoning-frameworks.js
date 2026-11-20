RDB.add({
  "id": "2026-11-arxiv-mcp-tool-poisoning-frameworks",
  "vendor": "arxiv",
  "title": "MCP Tool Poisoning in Agentic AI Frameworks: A Cross-Framework Measurement Study",
  "title_ru": "Отравление MCP-инструментов: измерение на 12 агентных фреймворках",
  "url": "https://arxiv.org/abs/2611.03555",
  "pdf_url": "https://arxiv.org/pdf/2611.03555",
  "published": "2026-11-02",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "pub_status": "peer_reviewed",
  "venue": "ACM AISec 2026 (воркшоп при ACM CCS)",
  "authors": "Farooq Shaikh, Biagio Montaruli (Dynatrace)",
  "confidence": "high",
  "tags": [
    "ИИ-агенты",
    "MCP",
    "цепочка поставок",
    "утечки данных"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Первое измерение отравления MCP-инструментов с реальным исполнением: 9720 комбинаций из 12 фреймворков, 18 моделей и 45 сценариев. Уязвимы 22,9%, в 12,1% из них подтверждена реальная утечка секрета; ни один фреймворк не содержит намеренной защиты.",
  "summary": "MCP переносит в контекст модели контролируемые атакующим данные — описания инструментов, поля схем, ответы — без проверки. Прежние бенчмарки измеряли лишь согласие модели выполнить инструкцию. Здесь двойной оракул подтверждает реальный вызов, контакт с сервером атакующего и получение тестового секрета через canary-сервер. Устойчивость определяется моделью, а не фреймворком. Инструмент mcpvenom опубликован; все пять скоординированных раскрытий четырём вендорам были отклонены.",
  "key_findings": [
    "9720 комбинаций: 12 фреймворков × 18 моделей × 45 сценариев; уязвимы 2113 (22,9%).",
    "Из уязвимых: 64,9% вызвали инструмент атакующего, 23,0% связались с его сервером, 12,1% подтверждённо выгрузили секрет.",
    "Девять основных фреймворков дают близкий успех атак 23–26%; аудит кода не нашёл намеренной защиты ни в одном из 12.",
    "Успех атак по моделям — от 0,4% до 49,7%; сканер описаний на регулярных выражениях отсекает 20 из 45 сценариев при 7,2% ложных срабатываний.",
    "Вручную проверено 1259 траекторий."
  ],
  "stats": [
    {
      "value": "9720",
      "label": "комбинаций проверено"
    },
    {
      "value": "22,9%",
      "label": "уязвимых"
    },
    {
      "value": "12,1%",
      "label": "из них — реальная утечка"
    },
    {
      "value": "0 из 12",
      "label": "фреймворков с защитой"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Не считать популярный агентный фреймворк защитным слоем.",
    "Вести реестр разрешённых MCP-серверов и контролировать изменения описаний инструментов.",
    "Проверять фактический сетевой эффект вызовов, а не только ответ модели; ограничивать дополнительные вызовы."
  ],
  "why_it_matters": "Количественно опровергает предположение, что выбор фреймворка защищает от отравления инструментов: устойчивость зависит от модели и собственных мер контроля.",
  "limits": "Лабораторные MCP-серверы, преимущественно одиночные сценарии, фиксированные версии фреймворков; распространённость атак в реальных системах не измерялась. Авторы работают в Dynatrace — компании, заинтересованной в наблюдаемости систем.",
  "source_note": "Выжимка по полному тексту статьи (arXiv), принятой на ACM AISec 2026; код — github.com/dynatrace-research/mcpvenom.",
  "en": {
    "title": "MCP Tool Poisoning in Agentic AI Frameworks: A Cross-Framework Measurement Study",
    "tldr": "The first measurement of MCP tool poisoning with real execution: 9,720 combinations of 12 frameworks, 18 models and 45 scenarios. 22.9% are vulnerable, 12.1% of those with verified secret exfiltration; no framework implements intentional defence.",
    "summary": "MCP carries attacker-controlled content — tool descriptions, schema fields, responses — into model context without validation. Earlier benchmarks measured only model compliance. Here a dual oracle confirms the actual call, contact with the attacker's server and receipt of a test secret via a canary server. Resistance is determined by the model, not the framework. The mcpvenom tool is released; all five coordinated disclosures to four vendors were rejected.",
    "key_findings": [
      "9,720 combinations: 12 frameworks × 18 models × 45 scenarios; 2,113 (22.9%) vulnerable.",
      "Of the vulnerable: 64.9% dispatched the attacker's tool, 23.0% contacted its server, 12.1% verifiably exfiltrated a secret.",
      "Nine core frameworks cluster at 23–26% attack success; a code audit found no intentional defence in any of the 12.",
      "Model attack success ranges from 0.4% to 49.7%; a regex description scanner rejects 20 of 45 scenarios at a 7.2% false-positive rate.",
      "1,259 trajectories validated by hand."
    ],
    "stats": [
      {
        "value": "9,720",
        "label": "combinations tested"
      },
      {
        "value": "22.9%",
        "label": "vulnerable"
      },
      {
        "value": "12.1%",
        "label": "of them — real exfiltration"
      },
      {
        "value": "0 of 12",
        "label": "frameworks with a defence"
      }
    ],
    "recommendations": [
      "Do not treat a popular agent framework as a security layer.",
      "Keep a registry of approved MCP servers and monitor changes to tool descriptions.",
      "Verify the actual network effect of calls, not just the model's answer; limit additional calls."
    ],
    "why_it_matters": "Quantitatively refutes the assumption that framework choice protects against tool poisoning: resistance depends on the model and your own controls.",
    "limits": "Lab MCP servers, mostly single scenarios, fixed framework versions; real-world prevalence was not measured. The authors work at Dynatrace, which has a commercial interest in observability.",
    "source_note": "Summary based on the full text of the paper (arXiv) accepted at ACM AISec 2026; code at github.com/dynatrace-research/mcpvenom."
  }
});
