RDB.add({
  "pdf_url": "https://arxiv.org/pdf/2611.06629",
  "date_precision": "day",
  "added": "2026-11-24",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "уязвимости"
  ],
  "sectors": [],
  "regions": [],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "id": "2026-11-arxiv-glasswing-cyber-defense",
  "vendor": "arxiv",
  "title": "Does Frontier AI Strengthen Cyber Defense? Evidence from Project Glasswing",
  "title_ru": "Усиливает ли передовой ИИ киберзащиту? Данные Project Glasswing",
  "url": "https://arxiv.org/abs/2611.06629",
  "published": "2026-11-04",
  "type": "ai",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Thomas Mosk (Queen Mary University of London)",
  "confidence": "medium",
  "tldr": "Препринт сравнивает раскрытие уязвимостей у компаний с ранним доступом к модели в рамках Project Glasswing и у компаний без такого доступа. У участников раскрытий стало более чем вдвое больше, а измеримое время исправления не увеличилось.",
  "summary": "Автор сопоставил публичные записи об уязвимостях до и после запуска программы и использовал сведения о раскрытии, авторстве находок и признаках эксплуатации. Оценка относится к конкретной программе раннего доступа.",
  "key_findings": [
    "У участников программы число раскрытий уязвимостей с высоким воздействием выросло примерно на 150% относительно группы сравнения.",
    "Независимые исследователи стали реже получать зачёт за находки в ПО участников и чаще находили уязвимости у других поставщиков.",
    "Доля раскрытых уязвимостей с признаками эксплуатации в течение месяца снизилась примерно на две трети. Абсолютное число таких уязвимостей не изменилось."
  ],
  "stats": [
    {
      "value": "13",
      "label": "организаций в группе раннего доступа"
    },
    {
      "value": "≈+150%",
      "label": "раскрытий уязвимостей с высоким воздействием относительно группы сравнения"
    }
  ],
  "recommendations": [
    "Оценивать ИИ-инструменты по качеству подтверждённых находок и времени исправления.",
    "Сохранять независимые каналы раскрытия уязвимостей и программы bug bounty."
  ],
  "why_it_matters": "Рост числа раскрытий можно оценивать вместе с реальной способностью команды проверять и исправлять находки.",
  "source_note": "Препринт, версия 1. Выборка и численные результаты сверены с PDF.",
  "limits": "Доступ распределялся неслучайно. Изучены преимущественно крупные американские компании, а публичные данные не охватывают всю фактическую эксплуатацию.",
  "en": {
    "tldr": "This preprint compares vulnerability disclosures by firms with early model access through Project Glasswing with those of firms without access. Disclosures more than doubled among participants relative to the comparison group, with no measurable slowdown in remediation.",
    "summary": "The author compared public vulnerability records before and after the launch, including disclosure, attribution, and evidence of exploitation. The estimates are specific to this early-access program.",
    "key_findings": [
      "Disclosures of high-impact vulnerabilities rose by about 150% relative to the comparison group.",
      "Independent researchers received credit less often for flaws in participant software and shifted some effort to other vendors.",
      "The share exploited within a month of disclosure fell by about two-thirds. The absolute number of those vulnerabilities did not change."
    ],
    "stats": [
      {
        "value": "13",
        "label": "organizations in the early-access group"
      },
      {
        "value": "~+150%",
        "label": "high-impact disclosures relative to the comparison group"
      }
    ],
    "recommendations": [
      "Evaluate AI tooling using validated findings and time to remediation.",
      "Keep independent disclosure channels and bug bounty programs available."
    ],
    "why_it_matters": "A higher disclosure volume can be assessed alongside a team's capacity to validate and fix findings.",
    "source_note": "Version 1 of a preprint. The sample and figures were checked against the PDF.",
    "limits": "Access was not randomized. The study covers mainly large US companies, and public records cannot capture all exploitation."
  }
});
