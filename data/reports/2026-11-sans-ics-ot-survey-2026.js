RDB.add({
  "id": "2026-11-sans-ics-ot-survey-2026",
  "vendor": "sans",
  "title": "SANS 2026 State of ICS/OT Security Survey Insights: Industrial Cybersecurity at a Crossroads",
  "title_ru": "SANS 2026: состояние безопасности АСУ ТП / OT",
  "url": "https://www.sans.org/white-papers/sans-2026-state-of-icsot-security-survey-insights-industrial-cybersecurity-crossroads",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "ics",
  "lang": "en",
  "importance": 3,
  "tags": [
    "АСУ ТП",
    "OT",
    "опрос",
    "вымогатели",
    "обнаружение"
  ],
  "sectors": [
    "Промышленность",
    "Энергетика",
    "Критическая инфраструктура"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Опрос 696 специалистов: доля организаций с подтверждённым инцидентом в OT выросла с 22% до 34% — самый большой скачок за девять лет наблюдений. 72% инцидентов вызвали простой, а в течение суток выявлено лишь 41%.",
  "summary": "Девятое ежегодное исследование SANS по промышленной безопасности. Впервые зафиксировано замедление обнаружения. Самые частые типы инцидентов — компрометация общих IT/OT-учётных записей и вымогатели (по 31%). Полную видимость IT/OT по всей цепочке атаки имеют лишь 13%; бюджет — главный барьер (43%). Организации, ежегодно тестирующие планы и включившие OT в BCP/DR, восстанавливаются быстрее.",
  "key_findings": [
    "34% организаций сообщили о подтверждённом инциденте в OT (22% годом ранее).",
    "72% инцидентов вызвали простой объектов или систем.",
    "Лишь 41% инцидентов выявлены в течение 24 часов (ранее более 50%).",
    "Компрометация общих IT/OT-учётных записей и вымогатели — по 31%.",
    "Только 13% имеют полную видимость IT/OT; 74% используют OT-разведку угроз.",
    "68%: потеря 1–2 ключевых специалистов серьёзно навредит безопасности OT."
  ],
  "stats": [
    {
      "value": "34%",
      "label": "столкнулись с инцидентом OT"
    },
    {
      "value": "72%",
      "label": "инцидентов с простоем"
    },
    {
      "value": "41%",
      "label": "выявлены за 24 ч"
    },
    {
      "value": "13%",
      "label": "имеют полную видимость"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T0859",
      "name": "Valid Accounts (ICS)"
    },
    {
      "id": "T0827",
      "name": "Loss of Control"
    }
  ],
  "recommendations": [
    "Разделить учётные записи IT и OT; убрать общие идентичности.",
    "Внедрить специализированный мониторинг OT — он даёт 38% обнаружений.",
    "Ежегодно тестировать планы восстановления и включить OT в BCP/DR.",
    "Снизить зависимость от ключевых специалистов: документация, дублирование ролей."
  ],
  "why_it_matters": "Крупнейший независимый срез по промышленной безопасности — сигнал резкого роста инцидентов в OT.",
  "source_note": "Выжимка по материалам SANS и обзорам (Industrial Cyber, OPSWAT).",
  "en": {
    "tldr": "Survey of 696 practitioners: organizations reporting a confirmed OT incident rose from 22% to 34% — the largest one-year jump in nine years. 72% of incidents caused downtime and only 41% were detected within 24 hours.",
    "summary": "SANS's ninth annual industrial security study. For the first time, detection slowed down. The most common incident types are compromise of shared IT/OT credentials and ransomware (31% each). Only 13% have full IT/OT visibility across the kill chain; budget is the top barrier (43%). Organizations that test plans annually and include OT in BCP/DR recover faster.",
    "key_findings": [
      "34% reported a confirmed OT incident (22% a year earlier).",
      "72% of incidents caused facility or system downtime.",
      "Only 41% of incidents were detected within 24 hours (previously over 50%).",
      "Shared IT/OT credential compromise and ransomware — 31% each.",
      "Only 13% have full IT/OT visibility; 74% use OT-specific threat intelligence.",
      "68%: losing 1–2 key people would seriously harm OT security."
    ],
    "stats": [
      {
        "value": "34%",
        "label": "hit by an OT incident"
      },
      {
        "value": "72%",
        "label": "incidents with downtime"
      },
      {
        "value": "41%",
        "label": "detected within 24 h"
      },
      {
        "value": "13%",
        "label": "have full visibility"
      }
    ],
    "recommendations": [
      "Separate IT and OT accounts; eliminate shared identities.",
      "Deploy dedicated OT monitoring — it accounts for 38% of detections.",
      "Test recovery plans annually and include OT in BCP/DR.",
      "Reduce key-person risk: documentation and role redundancy."
    ],
    "why_it_matters": "The largest independent survey of industrial security — a signal of a sharp rise in OT incidents."
  }
});
