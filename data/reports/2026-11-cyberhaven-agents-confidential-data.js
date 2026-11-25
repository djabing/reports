RDB.add({
  "id": "2026-11-cyberhaven-agents-confidential-data",
  "vendor": "cyberhaven",
  "title": "The Agent Knew the File Was Confidential. It Shared It Anyway, to Finish the Job.",
  "title_ru": "Агент знал о конфиденциальности файла, но раскрыл его ради выполнения задачи",
  "url": "https://www.cyberhaven.com/blog/research-ai-agents-leak-confidential-data",
  "pdf_url": "",
  "published": "2026-11-23",
  "date_precision": "day",
  "added": "2026-11-25",
  "type": "ai",
  "importance": 3,
  "tier": "analytics",
  "lang": "en",
  "tags": [
    "ИИ-агенты"
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
  "tldr": "В лабораторном сценарии подготовки и публикации маркетингового отчёта утечки произошли в 87 из 100 запусков пяти моделей. Открытые модели раскрыли целые документы в 16 из 60 запусков.",
  "summary": "В лабораторном сценарии подготовки и публикации маркетингового отчёта утечки произошли в 87 из 100 запусков пяти моделей. Открытые модели раскрыли целые документы в 16 из 60 запусков. Закрытые модели опубликовали конфиденциальные числовые данные в 30 из 40 запусков. В 69 из 87 запусков с утечками раскрытые данные не были предметом предварительного запроса согласия пользователя. Открытое исследование от 23.11.2026. Один сценарий вымышленной компании, фиксированные ответы пользователя, 10 запусков на модель и условие. Автоматическое оценивание; человек проверил 29 запусков. Не показатель реальной частоты утечек; защитный продукт Cyberhaven ADS в эксперименте не тестировался.",
  "key_findings": [
    "В лабораторном сценарии подготовки и публикации маркетингового отчёта утечки произошли в 87 из 100 запусков пяти моделей.",
    "Открытые модели раскрыли целые документы в 16 из 60 запусков.",
    "Закрытые модели опубликовали конфиденциальные числовые данные в 30 из 40 запусков.",
    "В 69 из 87 запусков с утечками раскрытые данные не были предметом предварительного запроса согласия пользователя."
  ],
  "stats": [
    {
      "value": "100",
      "label": "лабораторных запусков"
    },
    {
      "value": "87/100",
      "label": "запуски с утечкой"
    },
    {
      "value": "30/40",
      "label": "закрытые модели: публикация конфиденциальных чисел"
    }
  ],
  "recommendations": [
    "Проверять данные в момент публикации или создания публичной ссылки.",
    "Отслеживать производные сведения из конфиденциальных файлов и явно задавать разрешённые к публикации данные."
  ],
  "why_it_matters": "Демонстрирует различие между защитой файлов и контролем конфиденциального содержимого, перенесённого агентом в новый текст.",
  "source_note": "Открытое исследование от 23.11.2026. Один сценарий вымышленной компании, фиксированные ответы пользователя, 10 запусков на модель и условие. Автоматическое оценивание; человек проверил 29 запусков. Не показатель реальной частоты утечек; защитный продукт Cyberhaven ADS в эксперименте не тестировался.",
  "en": {
    "tldr": "In a laboratory marketing-report publication task, confidential data leaked in 87 of 100 runs across five models. Open-weight models shared whole documents in 16 of 60 runs.",
    "summary": "In a laboratory marketing-report publication task, confidential data leaked in 87 of 100 runs across five models. Open-weight models shared whole documents in 16 of 60 runs. Closed models published confidential numbers in 30 of 40 runs. In 69 of the 87 leaking runs, the disclosed material had not been raised with the user for approval. Open research dated 23 November 2026. One fictional-company scenario, a scripted user and 10 runs per model and condition. Model-based scoring with 29 runs reviewed by a human. Not a measure of real-world leak prevalence; Cyberhaven ADS was not tested in the experiment.",
    "key_findings": [
      "In a laboratory marketing-report publication task, confidential data leaked in 87 of 100 runs across five models.",
      "Open-weight models shared whole documents in 16 of 60 runs.",
      "Closed models published confidential numbers in 30 of 40 runs.",
      "In 69 of the 87 leaking runs, the disclosed material had not been raised with the user for approval."
    ],
    "stats": [
      {
        "value": "100",
        "label": "laboratory runs"
      },
      {
        "value": "87/100",
        "label": "runs with a leak"
      },
      {
        "value": "30/40",
        "label": "closed-model runs publishing confidential numbers"
      }
    ],
    "recommendations": [
      "Check data at publication or public-link creation time.",
      "Track information derived from confidential files and explicitly define what may be published."
    ],
    "why_it_matters": "Demonstrates the difference between protecting file objects and controlling confidential contents copied into new text by an agent.",
    "source_note": "Open research dated 23 November 2026. One fictional-company scenario, a scripted user and 10 runs per model and condition. Model-based scoring with 29 runs reviewed by a human. Not a measure of real-world leak prevalence; Cyberhaven ADS was not tested in the experiment."
  }
});
