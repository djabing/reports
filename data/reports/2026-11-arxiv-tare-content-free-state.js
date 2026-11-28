RDB.add({
  "id": "2026-11-arxiv-tare-content-free-state",
  "vendor": "arxiv",
  "title": "Attributing Security Outcomes in LLM-Agent Evaluations: The Role of Content-Free State",
  "title_ru": "Кому приписать результат: как «пустые» параметры запуска искажают оценки безопасности LLM-агентов",
  "url": "https://arxiv.org/abs/2611.30259",
  "pdf_url": "https://arxiv.org/pdf/2611.30259",
  "published": "2026-11-23",
  "date_precision": "day",
  "added": "2026-11-28",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv (cs.CR, cs.AI, cs.LG)",
  "authors": "Abdelmonaim Bounite, Zangir Iklassov (MBZUAI, Абу-Даби)",
  "confidence": "medium-high",
  "tags": [
    "ИИ-агенты",
    "промпт-инъекции",
    "бенчмарки",
    "безопасность ИИ"
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
  "ttps": [],
  "tldr": "Вердикты бенчмарков безопасности LLM-агентов зависят от параметров, не несущих информации о системе: смена hash seed меняет до 17% вердиктов, порядок инструментов сдвигает долю успешных атак (ASR) до 19 пунктов. Авторы предлагают метод TARE, который приписывает эффект защите только если он превышает этот шум.",
  "summary": "На Agent Security Bench (ASB) с семью открытыми моделями четырёх семейств (Llama, Qwen, Gemma, Mistral) авторы измерили влияние «бессодержательного состояния» — hash seed Python, порядка инструментов и улик, способа подсчёта сбойных запусков. Смена seed меняла до 17% вердиктов агента при сдвиге ASR не более 5 пунктов; сортировка списка инструментов вместо обратной поднимала ASR трёх агентов на 6,5–18,8 пункта, потому что инструменты атакующего в ASB идут первыми. Шесть из семи LLM-судей меняли решение на 17–91% из 98 действий только из-за порядка улик. Из трёх защит ASB метод TARE подтвердил эффект двух, причём одна действовала в противоположных направлениях на разных агентах; заранее зарегистрированный тест подтвердил снижение ASR на 4,8 пункта от «сэндвич»-защиты. В 35–69% «остановленных» атак агент просто не вызвал инструмент — ASB считает это неудачей атаки.",
  "key_findings": [
    "Смена hash seed меняет до 17% вердиктов агента (в среднем 14,2% для Llama-3.1-8B), хотя ASR сдвигается не более чем на 5 пунктов.",
    "Порядок списка инструментов сдвигает ASR на 6,5–18,8 пункта: в ASB инструменты атакующего при сортировке оказываются первыми.",
    "Шесть из семи LLM-судей меняют решение на 17–91% действий только из-за порядка тех же улик.",
    "Из трёх промпт-защит ASB эффект подтверждён у двух, причём одна действует в разных направлениях на разных агентах.",
    "35–69% «остановленных» атак — это бездействие агента, а не отражение атаки."
  ],
  "stats": [
    {
      "value": "до 17%",
      "label": "вердиктов меняет смена hash seed"
    },
    {
      "value": "до 19 п.",
      "label": "сдвиг ASR от порядка инструментов"
    },
    {
      "value": "17–91%",
      "label": "решений LLM-судей меняет порядок улик"
    }
  ],
  "recommendations": [
    "В отчётах об оценке агентов указывать параметры запуска, повторный прогон и измеренное влияние каждого из них, а также долю «неопределённых» исходов.",
    "Не выводить порядок инструментов и улик из хешей и сортировки имён; использовать ключи оценщика и усреднять по нескольким ключам.",
    "Не считать бездействие агента успешной защитой: вводить отдельный вердикт «неопределённо».",
    "Для ИИ-шлюзов показывать улики в нескольких порядках и воздерживаться от решения при расхождении."
  ],
  "why_it_matters": "Выбор защит для ИИ-агентов часто опирается на бенчмарки; работа показывает, что заметная часть «эффекта защиты» может быть артефактом настроек запуска.",
  "limits": "Глубокий анализ — на одном бенчмарке (ASB), на AgentDojo эффект слабее; только открытые модели до 70B; у LLM-судей нет эталонных ответов (измеряется согласованность, а не правильность); оценки влияния — нижние границы по 3–6 seed; полностью заранее зарегистрирован лишь один тест. Код и данные опубликованы.",
  "source_note": "Выжимка по полному тексту препринта на arXiv (v1 от 23.11.2026).",
  "en": {
    "tldr": "Security benchmark verdicts for LLM agents depend on state that carries no information about the system: changing the hash seed flips up to 17% of verdicts, and tool order shifts attack success rate (ASR) by up to 19 points. The authors propose TARE, which credits an effect to a defence only if it exceeds this noise.",
    "summary": "On Agent Security Bench (ASB) with seven open models from four families (Llama, Qwen, Gemma, Mistral), the authors measured the influence of 'content-free state': the Python hash seed, tool and evidence order, and how failed runs are scored. Changing the seed flipped up to 17% of an agent's verdicts while ASR moved at most 5 points; sorting the tool list instead of reverse-sorting raised ASR for three agents by 6.5-18.8 points because ASB's attacker tools sort first. Six of seven LLM judges changed their decision on 17-91% of 98 actions purely due to evidence order. Of ASB's three defences, TARE attributed effects to two, one of which moved results in opposite directions on different agents; a pre-registered test confirmed a 4.8-point ASR decrease from the sandwich defence. In 35-69% of 'stopped' attacks the agent simply made no tool call, which ASB counts as a failed attack.",
    "key_findings": [
      "Changing the hash seed flips up to 17% of an agent's verdicts (14.2% on average for Llama-3.1-8B), while ASR moves at most 5 points.",
      "Tool list order shifts ASR by 6.5-18.8 points: ASB's attacker tools come first when sorted.",
      "Six of seven LLM judges change their decision on 17-91% of actions purely due to the order of the same evidence.",
      "Of ASB's three prompt defences, effects are attributed to two, and one acts in opposite directions on different agents.",
      "35-69% of 'stopped' attacks are agent inaction rather than a repelled attack."
    ],
    "stats": [
      {
        "value": "up to 17%",
        "label": "verdicts flipped by hash seed"
      },
      {
        "value": "up to 19 pts",
        "label": "ASR shift from tool order"
      },
      {
        "value": "17-91%",
        "label": "LLM judge decisions changed by evidence order"
      }
    ],
    "recommendations": [
      "In agent evaluation reports, state run parameters, a same-state rerun and the measured influence of each, plus the rate of inconclusive outcomes.",
      "Do not derive tool or evidence order from hashes or name sorting; use evaluator keys and average over several keys.",
      "Do not count agent inaction as a successful defence: add a separate 'inconclusive' verdict.",
      "For AI gates, present evidence in several orders and abstain when judgments disagree."
    ],
    "why_it_matters": "Choices of defences for AI agents often rest on benchmarks; the paper shows a notable part of a 'defence effect' can be an artefact of run settings.",
    "limits": "Deep analysis covers one benchmark (ASB), with a weaker effect on AgentDojo; only open models up to 70B; LLM judges have no reference answers (consistency, not correctness, is measured); influence estimates are lower bounds from 3-6 seeds; only one test was fully pre-registered. Code and data are released.",
    "source_note": "Summary based on the full text of the arXiv preprint (v1, 23 November 2026)."
  }
});
