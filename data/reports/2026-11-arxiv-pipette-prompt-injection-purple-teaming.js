RDB.add({
  "id": "2026-11-arxiv-pipette-prompt-injection-purple-teaming",
  "vendor": "arxiv",
  "title": "PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents",
  "title_ru": "PIPETTE: purple-teaming против промпт-инъекций для устойчивых агентов",
  "url": "https://arxiv.org/abs/2611.24362",
  "pdf_url": "https://arxiv.org/pdf/2611.24362",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Lipeng He, Yihan Wang, Jiawen Zhang, N. Asokan (Waterloo и др.)",
  "confidence": "medium",
  "tags": [
    "ИИ-агенты",
    "промпт-инъекции",
    "джейлбрейк"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Высокая результативность red team не гарантирует, что дообучение на найденных атаках сделает агента устойчивее: RL-атакующие зацикливаются на нескольких удачных стратегиях. PIPETTE поощряет разнообразие атак и снижает успех адаптивных атак до 0–10% в зависимости от модели.",
  "summary": "Авторы показывают «коллапс мод» у двух современных RL-методов red teaming (RL-Hammer, PISmith): дополнительные успешные атаки однотипны и не добавляют устойчивости при состязательном обучении. PIPETTE использует награду на основе словарного обучения для покрытия разных стратегий и встроенный конвейер обучения защиты от непрямых промпт-инъекций. Оценка — на AgentDojo и ASB.",
  "key_findings": [
    "Высокий процент успешных атак при red teaming не означает выигрыша в устойчивости после дообучения.",
    "При итеративно-адаптивных атаках на 40 парах задач успех атак для моделей с PIPETTE: Llama-3.1-8B — 0–2,5%, GPT-OSS-20B — 5–10%.",
    "Без защиты успех тех же атак доходил до 92,5% (GPT-OSS-20B).",
    "Полезность на обычных задачах остаётся близкой к модели без защиты."
  ],
  "stats": [
    {
      "value": "0–2,5%",
      "label": "успех атак, Llama-8B с PIPETTE"
    },
    {
      "value": "5–10%",
      "label": "GPT-OSS-20B с PIPETTE"
    },
    {
      "value": "до 92,5%",
      "label": "без защиты"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Оценивать red teaming не только по проценту успеха, но и по покрытию разных механизмов обхода.",
    "Не рассчитывать только на обучение модели: сохранять системные ограничения инструментов и прав.",
    "Повторять тестирование после усиления модели — атакующий адаптируется."
  ],
  "why_it_matters": "Уточняет, как правильно измерять тестирование ИИ: однотипные атаки дают ложное чувство защищённости.",
  "limits": "Лабораторное состязательное обучение, а не системная защита работающего агента; адаптивный тест ограничен ~250 попытками и 40 парами задач; оценщик разнообразия атак (LLM) не сверялся с разметкой людей; многораундовая адаптация атакующего не проверялась.",
  "source_note": "Выжимка по полному тексту препринта на arXiv.",
  "en": {
    "title": "PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents",
    "tldr": "High red-team success does not guarantee that fine-tuning on discovered attacks makes an agent more robust: RL attackers fixate on a few successful strategies. PIPETTE rewards attack diversity and cuts adaptive attack success to 0–10% depending on the model.",
    "summary": "The authors show mode collapse in two state-of-the-art RL red-teaming methods (RL-Hammer, PISmith): additional successful attacks are similar and add no robustness in adversarial training. PIPETTE uses a dictionary-learning reward to cover diverse strategies and an integrated training pipeline for indirect prompt injection defence. Evaluation uses AgentDojo and ASB.",
    "key_findings": [
      "A high attack success rate during red teaming does not translate into robustness gains after fine-tuning.",
      "Under iterative adaptive attacks on 40 task pairs, attack success against PIPETTE-trained models: Llama-3.1-8B — 0–2.5%, GPT-OSS-20B — 5–10%.",
      "Without defence the same attacks reached up to 92.5% (GPT-OSS-20B).",
      "Utility on benign tasks stays close to the undefended model."
    ],
    "stats": [
      {
        "value": "0–2.5%",
        "label": "attack success, Llama-8B with PIPETTE"
      },
      {
        "value": "5–10%",
        "label": "GPT-OSS-20B with PIPETTE"
      },
      {
        "value": "up to 92.5%",
        "label": "without defence"
      }
    ],
    "recommendations": [
      "Judge red teaming by coverage of different bypass mechanisms, not only by success rate.",
      "Do not rely on model training alone: keep system-level limits on tools and permissions.",
      "Re-test after hardening — the attacker adapts."
    ],
    "why_it_matters": "Clarifies how to measure AI testing properly: repetitive attacks create a false sense of security.",
    "limits": "Lab adversarial training, not system-level protection of a live agent; the adaptive test is limited to ~250 attempts and 40 task pairs; the LLM grader of attack diversity was not checked against human labels; multi-round attacker adaptation was not tested.",
    "source_note": "Summary based on the full text of the arXiv preprint."
  }
});
