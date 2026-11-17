RDB.add({
  "id": "2026-09-anthropic-ai-misuse-september",
  "vendor": "anthropic",
  "title": "Detecting and countering misuse of AI: September 2026",
  "title_ru": "Выявление и пресечение злоупотреблений ИИ: сентябрь 2026",
  "url": "https://www.anthropic.com/threat-intelligence-report-september-2026",
  "pdf_url": "",
  "published": "2026-09-10",
  "date_precision": "day",
  "added": "2026-10-15",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "ИИ",
    "агентные атаки",
    "supply chain",
    "мошенничество",
    "хактивизм"
  ],
  "sectors": [
    "ИИ-компании",
    "Все отрасли"
  ],
  "regions": [
    "Глобально",
    "Франция"
  ],
  "tldr": "Anthropic описывает ~40 групп, злоупотреблявших Claude с декабря 2025 по август 2026 в семи категориях. Ключевой тренд — злоумышленники делегируют ИИ-агентам целые этапы атак, оставляя человеку только выбор цели и проверку результата.",
  "summary": "Отчёт команды Threat Intelligence Anthropic о выявленных и пресечённых случаях злоупотребления моделями: кибероперации, операции влияния, слежка, мошенничество, биологические и обычные вооружения, нелегальная дистилляция моделей. Главный вывод — LLM встраивают в автономные многоагентные фреймворки, которые выполняют сложные задачи с машинной скоростью, что сокращает разрыв между государственными группировками и злоумышленниками с малыми ресурсами.",
  "key_findings": [
    "Около 40 отслеживаемых групп в семи категориях злоупотреблений.",
    "Агентные кибероперации: человек выбирает цели и проверяет итог, остальное выполняет ИИ.",
    "Атака на цепочку поставок ИИ: 30 ИИ-компаний за четыре дня, цель — предрелизные модели и продакшн API-ключи.",
    "Мошеннические «реселлеры» ИИ проксировали трафик к другим моделям и собирали учётные данные аккаунтов.",
    "Французский хактивист взломал 14 из 42 целей и собрал движок доксинга на десятки миллионов записей."
  ],
  "stats": [
    {
      "value": "~40",
      "label": "групп выявлено"
    },
    {
      "value": "7",
      "label": "категорий злоупотреблений"
    },
    {
      "value": "30",
      "label": "ИИ-компаний атаковано за 4 дня"
    },
    {
      "value": "14/42",
      "label": "успешных взломов хактивиста"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1195",
      "name": "Supply Chain Compromise"
    },
    {
      "id": "T1552",
      "name": "Unsecured Credentials"
    }
  ],
  "recommendations": [
    "Защищать API-ключи ИИ-провайдеров как продакшн-секреты: хранилище секретов, ротация, мониторинг использования.",
    "Пользоваться только официальными каналами доступа к моделям — не сторонними «дешёвыми реселлерами».",
    "Закладывать в модель угроз скорость атак, выполняемых ИИ-агентами."
  ],
  "why_it_matters": "Первоисточник о том, как реально используют ИИ злоумышленники, — от вендора модели, а не по косвенным признакам.",
  "source_note": "Выжимка по публикациям об отчёте (Unite.AI, FoneArena, Enterprise DNA). Прямой доступ к сайту из среды сбора был ограничен.",
  "en": {
    "tldr": "Anthropic describes ~40 groups that misused Claude between December 2025 and August 2026 across seven categories. The key trend: attackers delegate entire attack stages to AI agents, leaving humans only to pick targets and check results.",
    "summary": "A report by Anthropic's Threat Intelligence team on detected and disrupted model misuse: cyber operations, influence operations, surveillance, fraud, biological and conventional weapons, and illicit model distillation. The main conclusion is that LLMs are being built into autonomous multi-agent frameworks that perform complex tasks at machine speed, narrowing the gap between state-sponsored groups and low-resource attackers.",
    "key_findings": [
      "About 40 tracked groups across seven misuse categories.",
      "Agentic cyber operations: a human chooses targets and checks the outcome, AI does the rest.",
      "AI supply-chain attack: 30 AI companies in four days, targeting pre-release models and production API keys.",
      "Fraudulent AI 'resellers' proxied traffic to other models and harvested account credentials.",
      "A French hacktivist breached 14 of 42 targets and built a doxing engine with tens of millions of records."
    ],
    "stats": [
      {
        "value": "~40",
        "label": "groups identified"
      },
      {
        "value": "7",
        "label": "misuse categories"
      },
      {
        "value": "30",
        "label": "AI companies attacked in 4 days"
      },
      {
        "value": "14/42",
        "label": "successful hacktivist breaches"
      }
    ],
    "recommendations": [
      "Protect AI provider API keys as production secrets: secrets vault, rotation, usage monitoring.",
      "Use only official channels to access models — not third-party 'cheap resellers'.",
      "Factor the speed of AI agent-driven attacks into the threat model."
    ],
    "why_it_matters": "A primary source on how attackers really use AI — from the model vendor itself, not inferred indirectly.",
    "source_note": "Summary based on articles about the report (Unite.AI, FoneArena, Enterprise DNA). Direct access to the website from the collection environment was restricted."
  }
});
