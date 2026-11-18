RDB.add({
  "id": "2026-11-crowdstrike-backdoored-lora-models",
  "vendor": "crowdstrike",
  "title": "Hidden in the Weights: Supply Chain Risk from Backdoored LoRA Models",
  "title_ru": "Бэкдоры в весах: как выявлять закладки в LoRA-адаптерах открытых моделей",
  "url": "https://www.crowdstrike.com/en-us/blog/supply-chain-risk-from-backdoored-lora-models/",
  "pdf_url": "",
  "published": "2026-11-16",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "безопасность ИИ",
    "LoRA",
    "открытые модели",
    "цепочка поставок",
    "бэкдор"
  ],
  "sectors": [
    "ИТ и разработка ПО",
    "Кросс-отраслевой"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "CrowdStrike (Cyber Superintelligence Lab) предложила двухэтапный метод поиска бэкдоров в открытых моделях с влитыми LoRA-адаптерами — статический анализ разницы весов и восстановление триггера — и на 16 тестовых артефактах выявила все 8 моделей с закладками.",
  "summary": "Исследователи сами создали модели с бэкдорами нескольких типов (перехват вызова инструментов, внедрение команд оболочки, импорт пакетов-тайпсквоттеров, «переворот» отказов, воспроизведение атаки на ProjectDiscovery) и сравнили их с публичными и безопасными контрольными моделями. Этап 1 вычитает базовую модель из проверяемой и анализирует распределение обновления по слоям, спектр (признак влитого LoRA и его ранга) и продвигаемые токены. Этап 2 по вероятностям следующего токена, без базовой модели и знания триггера, ищет входы, переключающие модель на вредоносный выбор, и подтверждает их генерацией. Все 8 моделей с закладками помечены на этапе 1 и подтверждены на этапе 2; два безопасных слияния эскалированы, но триггеры у них не найдены. Побочный вывод: дообучение на несвязанной задаче может ослаблять отказы модели.",
  "key_findings": [
    "Этап 1 пометил все 8 моделей с бэкдорами; 5 из 8 безопасных моделей признаны чистыми, абляцию отказов метод распознал отдельно.",
    "Этап 2 подтвердил триггеры для всех 8 моделей с бэкдорами и не нашёл их у двух безопасных слияний.",
    "Оценка риска (0–100) сама по себе не разделяет вредоносные и безопасные модели: у бэкдоров 15–40, у безопасного слияния — 20.",
    "Зашумление весов скрыло признак LoRA от части проверок, но не от поиска триггера.",
    "Ограничения: всего 16 моделей, нужна известная базовая модель, покрыты 4 типа нагрузок и однословные триггеры."
  ],
  "stats": [
    {
      "value": "16",
      "label": "протестированных артефактов"
    },
    {
      "value": "8 из 8",
      "label": "моделей с бэкдорами выявлено"
    },
    {
      "value": "15–40",
      "label": "оценка риска у моделей с бэкдорами (из 100)"
    },
    {
      "value": "до 393 136",
      "label": "кандидатов-триггеров на модель"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1195.001",
      "name": "Supply Chain Compromise: Compromise Software Dependencies and Development Tools"
    }
  ],
  "recommendations": [
    "Статически сканировать каждую открытую модель при загрузке: недекларированные влитые LoRA, нетипичный профиль слоёв, «полезная нагрузка» в продвигаемых токенах.",
    "Эскалировать помеченные модели на этап восстановления триггера.",
    "Решать о блокировке, карантине или допуске по доказательствам, а не по карточке модели.",
    "Относиться к открытым моделям как к любому стороннему коду."
  ],
  "why_it_matters": "Компании массово берут открытые модели и адаптеры из публичных хабов; закладка в весах не видна обычным сканерам кода и может заставить ИИ-агента выполнять вредоносные команды по триггеру.",
  "source_note": "Выжимка по первоисточнику — блогу CrowdStrike от 16.11.2026. Результаты получены на лабораторной выборке из 16 моделей; авторы подчёркивают, что пороги и базовые частоты не установлены.",
  "en": {
    "tldr": "CrowdStrike (Cyber Superintelligence Lab) proposed a two-stage method to find backdoors in open-weight models with merged LoRA adapters — static weight-difference analysis plus trigger recovery — and detected all 8 backdoored models among 16 test artifacts.",
    "summary": "The researchers built models with several backdoor types (tool-call hijacking, shell injection, typosquatted imports, refusal flips, a rebuilt ProjectDiscovery attack) and compared them with public and benign control models. Stage 1 subtracts the base model from the suspect one and reads the update's layer shape, spectrum (whether it is a merged LoRA and its rank) and the tokens it promotes. Stage 2 uses next-token probabilities, without the base model or knowledge of the trigger, to find inputs that flip the model to a malicious choice, then confirms them with full generations. All 8 backdoored models were flagged in Stage 1 and confirmed in Stage 2; two benign merges were escalated but no triggers were found. A side finding: fine-tuning on an unrelated task can weaken a model's refusals.",
    "key_findings": [
      "Stage 1 flagged all 8 backdoored models; 5 of 8 benign models were reported clean, and abliteration was identified separately.",
      "Stage 2 confirmed triggers for all 8 backdoored models and found none in the two benign merges.",
      "The risk score (0-100) alone does not separate malicious from benign: backdoors scored 15-40, a benign merge 20.",
      "Noise padding hid the LoRA signature from some readings but not from the trigger search.",
      "Limitations: only 16 models, the true base model must be known, 4 payload types and single-word triggers covered."
    ],
    "stats": [
      {
        "value": "16",
        "label": "artifacts tested"
      },
      {
        "value": "8 of 8",
        "label": "backdoored models detected"
      },
      {
        "value": "15-40",
        "label": "risk score of backdoored models (out of 100)"
      },
      {
        "value": "up to 393,136",
        "label": "trigger candidates per model"
      }
    ],
    "recommendations": [
      "Statically scan every open-weight model on ingestion: undisclosed merged LoRAs, unusual layer profiles, payload-like promoted vocabulary.",
      "Escalate flagged models to trigger recovery.",
      "Decide to block, quarantine or approve based on evidence, not the model card.",
      "Treat open-weight models like any other third-party code."
    ],
    "why_it_matters": "Companies widely pull open models and adapters from public hubs; a backdoor in the weights is invisible to ordinary code scanners and can make an AI agent run malicious commands on a trigger.",
    "source_note": "Summary based on the primary source — CrowdStrike blog of 16 Nov 2026. Results come from a lab set of 16 models; the authors stress that thresholds and base rates are not established."
  }
});
