RDB.add({
  "id": "2026-11-arxiv-statefence-soc-agents",
  "vendor": "arxiv",
  "title": "StateFence: Task-State Protection Against Evidence-Chain Contamination in Blue-Team LLM Agents",
  "title_ru": "StateFence: защита агентного SOC от «заражения» цепочки доказательств",
  "url": "https://arxiv.org/abs/2611.02605",
  "pdf_url": "https://arxiv.org/pdf/2611.02605",
  "published": "2026-11-02",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Haowen Dai, Alejandro Guerra-Manzanares (University of Nottingham Ningbo China)",
  "confidence": "medium",
  "tags": [
    "ИИ-агенты",
    "промпт-инъекции",
    "SOC",
    "обнаружение"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Промпт-инъекция в телеметрии, тикете или памяти может последовательно исказить работу ИИ-агентов SOC: критичность алерта, сводку инцидента, рекомендации и набор IOC. StateFence защищает эти «состояния» и на публичных данных SOC даёт 91,4% успешных задач при 8,6% успешных атак.",
  "summary": "Авторы называют проблему «заражением цепочки доказательств»: вредоносная инструкция проходит через триаж, сводку, рекомендации по реагированию и извлечение IOC как правдоподобные промежуточные решения. Сложность в том, что подозрительная строка может быть вредной для сводки, но важной уликой для IOC. StateFence рассматривает метку критичности, описание инцидента, политику реагирования и набор IOC как защищаемые состояния и подбирает защиту под атакуемое состояние.",
  "key_findings": [
    "Выполнено 1024 атакующих запуска на четырёх моделях в контролируемых сценариях SOC.",
    "В сквозном сценарии StateFence повысил успешность задачи до 89,06% и сохранил 96,88% IOC.",
    "На менее курируемых публичных данных (Wazuh, Splunk BOTS и др.) — 91,41% успешных задач и 8,59% успешных атак.",
    "Фильтрация без учёта задачи теряет индикаторы: защиту нужно выбирать по тому, какое состояние атакуется."
  ],
  "stats": [
    {
      "value": "1024",
      "label": "атакующих запуска"
    },
    {
      "value": "91,4%",
      "label": "успешных задач на публичных данных"
    },
    {
      "value": "8,6%",
      "label": "успешных атак"
    },
    {
      "value": "96,9%",
      "label": "IOC сохранено"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Оценивать агентный SOC по качеству всей цепочки расследования: приоритет, полнота IOC, допустимость действий.",
    "Изолировать недоверенные данные (телеметрию, тикеты, результаты поиска) от управляющих инструкций агента.",
    "Проверять устойчивость последующих шагов к ошибке на раннем этапе."
  ],
  "why_it_matters": "Предупреждает, что ИИ в SOC сам становится мишенью: одна инъекция в данных может исказить всё расследование.",
  "limits": "Атаки сконструированы авторами, правила защиты и защищаемые состояния заданы вручную; производственный SOC не исследовался; препринт не рецензирован, открытая реализация не указана.",
  "source_note": "Выжимка по полному тексту препринта на arXiv.",
  "en": {
    "title": "StateFence: Task-State Protection Against Evidence-Chain Contamination in Blue-Team LLM Agents",
    "tldr": "A prompt injection in telemetry, a ticket or memory can progressively distort SOC AI agents: alert severity, incident summary, recommendations and the IOC set. StateFence protects these 'states' and on public SOC data achieves 91.4% task success with 8.6% attack success.",
    "summary": "The authors call the problem 'evidence-chain contamination': a malicious instruction passes through triage, summarisation, response recommendations and IOC extraction as plausible intermediate decisions. The difficulty is that a suspicious string may be harmful to a summary yet essential evidence for IOC extraction. StateFence treats severity labels, incident narratives, response policies and IOC sets as protected states and routes defences by the attacked state.",
    "key_findings": [
      "1,024 attacked runs across four models in controlled SOC scenarios.",
      "In the end-to-end scenario StateFence raised task success to 89.06% and preserved 96.88% of IOCs.",
      "On less curated public data (Wazuh, Splunk BOTS and others) — 91.41% task success and 8.59% attack success.",
      "Task-agnostic filtering loses indicators: the defence must match the attacked state."
    ],
    "stats": [
      {
        "value": "1,024",
        "label": "attacked runs"
      },
      {
        "value": "91.4%",
        "label": "task success on public data"
      },
      {
        "value": "8.6%",
        "label": "attack success"
      },
      {
        "value": "96.9%",
        "label": "IOCs preserved"
      }
    ],
    "recommendations": [
      "Evaluate an agentic SOC on the quality of the whole investigation chain: priority, IOC completeness, admissibility of actions.",
      "Isolate untrusted data (telemetry, tickets, search results) from the agent's control instructions.",
      "Test whether later steps withstand an early error."
    ],
    "why_it_matters": "Warns that AI in the SOC is itself a target: one injection in the data can distort the entire investigation.",
    "limits": "Attacks were constructed by the authors, defence rules and protected states were set manually; no production SOC was studied; the preprint is not peer-reviewed and no open implementation is given.",
    "source_note": "Summary based on the full text of the arXiv preprint."
  }
});
