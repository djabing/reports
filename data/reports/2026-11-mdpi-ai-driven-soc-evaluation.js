RDB.add({
  "id": "2026-11-mdpi-ai-driven-soc-evaluation",
  "vendor": "mdpi",
  "title": "Design, Implementation, and Performance Evaluation of an AI-Driven SOC",
  "title_ru": "Проектирование, внедрение и оценка AI-SOC в университетской сети",
  "url": "https://www.mdpi.com/2076-3417/16/22/11295",
  "pdf_url": "https://www.mdpi.com/2076-3417/16/22/11295/pdf",
  "published": "2026-11-14",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "pub_status": "peer_reviewed",
  "venue": "Applied Sciences (MDPI), 16(22), 11295 · doi:10.3390/app162211295",
  "authors": "Hafzullah İş (Batman University)",
  "confidence": "medium-low",
  "tags": [
    "SOC",
    "обнаружение",
    "автоматизация",
    "реагирование на инциденты"
  ],
  "sectors": [
    "Образование"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Редкая оценка AI-SOC на рабочей сети (~17 тыс. пользователей, ~25,5 млн записей за два 60-дневных периода): при переходе от традиционного SOC (2023) к гибридному AI-SOC (2025) обнаружение выросло с 61% до 91%, ложные срабатывания снизились с 14% до 5%, MTTR — с 480 до 140 секунд.",
  "summary": "Архитектура сочетала Random Forest, Isolation Forest, LSTM, поддержку LLM и участие человека в контуре. Сравнивались два периода наблюдения в одной университетской сети. Одновременно менялись инфраструктура, политики доступа, обучение персонала, процессы SOAR и конфигурации, поэтому автор не приписывает улучшение только ИИ.",
  "key_findings": [
    "Обнаружение: 61% → 91%; доля ложных срабатываний: 14% → 5%.",
    "MTTD: 210 → 65 секунд; MTTR: 480 → 140 секунд.",
    "Число сигналов SIEM снизилось примерно с 2450 до 1200.",
    "Эффект появился на уровне целостной модернизации SOC (технологии, процессы, люди), а не одного ИИ-компонента."
  ],
  "stats": [
    {
      "value": "61% → 91%",
      "label": "уровень обнаружения"
    },
    {
      "value": "14% → 5%",
      "label": "ложные срабатывания"
    },
    {
      "value": "480 → 140 с",
      "label": "MTTR"
    },
    {
      "value": "~25,5 млн",
      "label": "записей журналов"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Оценивать внедрение ИИ в SOC вместе с процессами и обучением, а не как отдельный компонент.",
    "Сохранять человека в контуре для подтверждения решений моделей.",
    "Фиксировать исходные метрики SOC до модернизации, чтобы измерять эффект."
  ],
  "why_it_matters": "Один из немногих примеров измерения AI-SOC в реальной сети, а не на учебных датасетах — с честной оговоркой о причинах эффекта.",
  "limits": "Одна организация и сравнение разных лет; одновременно менялись инфраструктура, политики, обучение и SOAR; исходные знаменатели ключевых метрик не сохранились, сырые журналы закрыты — независимо воспроизвести нельзя. Уверенность низкая для причинного вывода, средняя — как для кейса внедрения.",
  "source_note": "Сайт журнала MDPI закрыт проверкой на роботов; выжимка по аннотации и описанию результатов статьи из открытых обзоров. Цифры стоит сверить с полным текстом.",
  "en": {
    "title": "Design, Implementation, and Performance Evaluation of an AI-Driven SOC",
    "tldr": "A rare evaluation of an AI-SOC on a production network (~17,000 users, ~25.5M records over two 60-day periods): moving from a traditional SOC (2023) to a hybrid AI-SOC (2025), detection rose from 61% to 91%, false positives fell from 14% to 5%, and MTTR from 480 to 140 seconds.",
    "summary": "The architecture combined Random Forest, Isolation Forest, LSTM, LLM support and a human in the loop. Two observation periods on the same university network were compared. Infrastructure, access policies, staff training, SOAR processes and configurations changed at the same time, so the author does not attribute the improvement to AI alone.",
    "key_findings": [
      "Detection: 61% → 91%; false-positive rate: 14% → 5%.",
      "MTTD: 210 → 65 seconds; MTTR: 480 → 140 seconds.",
      "SIEM alerts fell from about 2,450 to 1,200.",
      "The effect came from holistic SOC modernisation (technology, processes, people), not a single AI component."
    ],
    "stats": [
      {
        "value": "61% → 91%",
        "label": "detection rate"
      },
      {
        "value": "14% → 5%",
        "label": "false positives"
      },
      {
        "value": "480 → 140 s",
        "label": "MTTR"
      },
      {
        "value": "~25.5M",
        "label": "log records"
      }
    ],
    "recommendations": [
      "Assess AI adoption in the SOC together with processes and training, not as a standalone component.",
      "Keep a human in the loop to confirm model decisions.",
      "Record baseline SOC metrics before modernisation to measure the effect."
    ],
    "why_it_matters": "One of the few measurements of an AI-SOC on a real network rather than training datasets — with an honest caveat about what caused the effect.",
    "limits": "A single organisation and a comparison of different years; infrastructure, policies, training and SOAR changed at the same time; baseline denominators for key metrics were not kept and raw logs are closed — independent replication is impossible. Confidence is low for causal claims and medium as an implementation case.",
    "source_note": "The MDPI journal site is behind an anti-bot check; summary based on the paper's abstract and descriptions of its results in public reviews. Figures should be checked against the full text."
  }
});
