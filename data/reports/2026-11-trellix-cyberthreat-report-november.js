RDB.add({
  "id": "2026-11-trellix-cyberthreat-report-november",
  "vendor": "trellix",
  "title": "The CyberThreat Report: November 2026",
  "title_ru": "Отчёт Trellix о киберугрозах: ноябрь 2026",
  "url": "https://www.trellix.com/advanced-research-center/threat-reports/november-2026/",
  "pdf_url": "https://www.trellix.com/assets/threat-reports/trellix-cyberthreat-report-november-2026-executive-summary.pdf",
  "published": "2026-11-04",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "landscape",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "полугодовой",
    "вымогатели",
    "ИИ",
    "инфостилеры",
    "эксплойты"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Полугодовой отчёт Trellix (апрель–сентябрь 2026): рекордная активность вымогателей, инфостилеры в 60,5% кампаний, а ИИ из помощника превращается в исполнителя — вплоть до агента, прошедшего всю цепочку атаки до шифровальщика.",
  "summary": "Trellix фиксирует максимальное за всю историю наблюдений число публикаций жертв вымогателей за полугодие: более 2,2 млн детектов, связанных с вымогателями, в 775 уникальных кампаниях. Доля кампаний с инфостилерами выросла до 60,5%, а доля APT-кампаний снизилась до 9,1%. Отдельный блок посвящён коммерциализации вредоносного ИИ: RaaS-проект TITAN AI автоматически разбирает украденные документы и готовит пакеты для вымогательства, а LLM-агент прошёл всю цепочку атаки и развернул шифровальщик, нацеленный на уничтожение ИИ-моделей и обучающих данных. Старые уязвимости по-прежнему лидируют в телеметрии.",
  "key_findings": [
    "Рекордное число публикаций жертв вымогателей за шестимесячный период в данных Trellix.",
    "Инфостилеры — в 60,5% кампаний (56,5% в прошлом периоде); доля APT-кампаний снизилась с 16,6% до 9,1%.",
    "TITAN AI (RaaS, реклама на русскоязычном форуме с июня 2026) использует NLP-конвейеры для разбора украденных документов и подготовки требований выкупа.",
    "Зафиксирован LLM-агент, прошедший всю цепочку атаки и развернувший шифровальщик против ИИ-моделей и обучающих данных.",
    "Самый детектируемый эксплойт — CVE-2022-1388 (F5 BIG-IP), 1,2 млн срабатываний.",
    "ИИ-агенты становятся новым слоем работы с учётными данными, который выпадает из инвентаризации активов."
  ],
  "stats": [
    {
      "value": "2,2 млн+",
      "label": "детектов, связанных с вымогателями"
    },
    {
      "value": "775",
      "label": "кампаний вымогателей (+4,7%)"
    },
    {
      "value": "60,5%",
      "label": "кампаний с инфостилерами"
    },
    {
      "value": "1,2 млн",
      "label": "детектов CVE-2022-1388"
    }
  ],
  "actors": [
    "TITAN"
  ],
  "malware": [
    "TITAN AI"
  ],
  "cves": [
    "CVE-2022-1388"
  ],
  "ttps": [
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    },
    {
      "id": "T1555",
      "name": "Credentials from Password Stores"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1562.001",
      "name": "Disable or Modify Tools"
    }
  ],
  "recommendations": [
    "Закрыть давно известные уязвимости периметра (в т.ч. F5 BIG-IP CVE-2022-1388) — они по-прежнему лидируют в эксплуатации.",
    "Включить ИИ-агентов и их токены в инвентаризацию активов и учётных записей.",
    "Отслеживать попытки отключения и изменения средств защиты — это частый шаг перед шифрованием.",
    "Защищать резервные копии ИИ-моделей и обучающих датасетов наравне с бизнес-данными."
  ],
  "why_it_matters": "Один из немногих отчётов, где ИИ описан как полноценный оператор атаки с измеримыми последствиями, а не как вспомогательный инструмент.",
  "source_note": "Выжимка по странице отчёта и обзорам в отраслевых СМИ; цифры стоит сверить с полным PDF.",
  "en": {
    "tldr": "Trellix half-year report (April–September 2026): record ransomware activity, infostealers in 60.5% of campaigns, and AI turning from assistant into executor — up to an agent that went through the entire attack chain to ransomware.",
    "summary": "Trellix records the highest number of ransomware victim postings for a half-year in its history: more than 2.2 million ransomware-related detections across 775 unique campaigns. The share of campaigns with infostealers rose to 60.5%, while APT campaigns fell to 9.1%. A separate section covers the commercialisation of malicious AI: the TITAN AI RaaS project automatically parses stolen documents and prepares extortion packages, and an LLM agent went through the entire attack chain and deployed ransomware aimed at destroying AI models and training data. Old vulnerabilities still lead in telemetry.",
    "key_findings": [
      "Record number of ransomware victim postings for a six-month period in Trellix data.",
      "Infostealers in 60.5% of campaigns (56.5% in the previous period); APT campaigns fell from 16.6% to 9.1%.",
      "TITAN AI (RaaS, advertised on a Russian-language forum since June 2026) uses NLP pipelines to parse stolen documents and prepare ransom demands.",
      "An LLM agent was observed going through the whole attack chain and deploying ransomware against AI models and training data.",
      "The most detected exploit is CVE-2022-1388 (F5 BIG-IP), 1.2 million hits.",
      "AI agents are becoming a new layer of credential handling that falls outside asset inventory."
    ],
    "stats": [
      {
        "value": "2.2M+",
        "label": "ransomware-related detections"
      },
      {
        "value": "775",
        "label": "ransomware campaigns (+4.7%)"
      },
      {
        "value": "60.5%",
        "label": "campaigns with infostealers"
      },
      {
        "value": "1.2M",
        "label": "CVE-2022-1388 detections"
      }
    ],
    "recommendations": [
      "Close long-known perimeter vulnerabilities (including F5 BIG-IP CVE-2022-1388) — they still lead in exploitation.",
      "Include AI agents and their tokens in asset and account inventory.",
      "Monitor attempts to disable or modify security tools — a common step before encryption.",
      "Protect backups of AI models and training datasets on a par with business data."
    ],
    "why_it_matters": "One of the few reports where AI is described as a full attack operator with measurable consequences, not an auxiliary tool.",
    "source_note": "Summary based on the report page and industry media coverage; figures should be checked against the full PDF."
  }
});
