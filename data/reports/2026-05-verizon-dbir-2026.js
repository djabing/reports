RDB.add({
  "id": "2026-05-verizon-dbir-2026",
  "vendor": "verizon",
  "title": "2026 Data Breach Investigations Report",
  "title_ru": "Отчёт Verizon о расследовании утечек данных (DBIR) 2026",
  "url": "https://www.verizon.com/business/resources/reports/dbir/",
  "pdf_url": "https://www.verizon.com/business/resources/T9fc/reports/2026-dbir-data-breach-investigations-report.pdf",
  "published": "2026-05-19",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "landscape",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "годовой",
    "утечки",
    "уязвимости",
    "третьи стороны",
    "вымогатели"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Впервые за 19 лет DBIR эксплуатация уязвимостей (31%) обогнала кражу учётных данных как главный вектор проникновения. Третьи стороны замешаны в 48% утечек, а полностью закрыто лишь 26% критичных уязвимостей из каталога CISA KEV.",
  "summary": "Ежегодный отчёт Verizon по более чем 22 000 утечек и 31 000 инцидентов (ноябрь 2024 — октябрь 2025). Главный сдвиг — эксплуатация уязвимостей стала доминирующим способом первичного доступа (31% против 20% годом ранее). Злоумышленники действуют быстрее, чем организации успевают устранять уязвимости. Вымогатели — в 48% подтверждённых утечек. Генеративный ИИ применялся на многих этапах атак, но в основном для стандартных техник; исходный код — самый частый тип данных, загружаемых сотрудниками в неразрешённые ИИ-сервисы.",
  "key_findings": [
    "Эксплуатация уязвимостей — главный вектор (31%, годом ранее 20%), впервые за историю отчёта.",
    "Третьи стороны вовлечены в 48% утечек (+60% год к году).",
    "Полностью устранено лишь 26% критичных уязвимостей из CISA KEV (38% годом ранее).",
    "Вымогатели — в 48% подтверждённых утечек (44% годом ранее).",
    "Человеческий фактор — в 62% утечек.",
    "Исходный код — самые частые данные, загружаемые в неразрешённые ИИ-сервисы."
  ],
  "stats": [
    {
      "value": "31%",
      "label": "утечек через эксплуатацию уязвимостей"
    },
    {
      "value": "48%",
      "label": "с участием третьих сторон"
    },
    {
      "value": "26%",
      "label": "KEV закрыто полностью"
    },
    {
      "value": "22 000+",
      "label": "утечек в выборке"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Сократить время устранения уязвимостей из CISA KEV на периметре.",
    "Внедрить программу управления рисками поставщиков с регулярной оценкой.",
    "Контролировать использование неразрешённых ИИ-сервисов и утечки исходного кода."
  ],
  "why_it_matters": "Крупнейшая эмпирическая база по утечкам: смена главного вектора на эксплуатацию уязвимостей — ключевой сигнал для приоритизации.",
  "source_note": "Выжимка по пресс-релизу Verizon и обзорам (SecureWorld, TechRepublic, Help Net Security); часть процентов — из вторичных источников.",
  "en": {
    "tldr": "For the first time in the DBIR's 19 years, vulnerability exploitation (31%) overtook credential theft as the top initial access vector. Third parties are involved in 48% of breaches, and only 26% of critical CISA KEV vulnerabilities were fully remediated.",
    "summary": "Verizon's annual report covering 22,000+ breaches and 31,000 incidents (November 2024 — October 2025). The key shift: vulnerability exploitation became the dominant initial access method (31% vs 20% a year earlier). Attackers move faster than organizations can remediate. Ransomware is present in 48% of confirmed breaches. Generative AI was used across many attack stages, mostly for standard techniques; source code is the most common data employees upload to unsanctioned AI services.",
    "key_findings": [
      "Vulnerability exploitation is the top vector (31%, up from 20%) — a first in the report's history.",
      "Third parties involved in 48% of breaches (+60% year on year).",
      "Only 26% of critical CISA KEV vulnerabilities fully remediated (38% a year earlier).",
      "Ransomware in 48% of confirmed breaches (44% a year earlier).",
      "Human element in 62% of breaches.",
      "Source code is the data most often uploaded to unsanctioned AI services."
    ],
    "stats": [
      {
        "value": "31%",
        "label": "breaches via exploitation"
      },
      {
        "value": "48%",
        "label": "involving third parties"
      },
      {
        "value": "26%",
        "label": "KEV fully remediated"
      },
      {
        "value": "22,000+",
        "label": "breaches in dataset"
      }
    ],
    "recommendations": [
      "Shorten remediation time for CISA KEV vulnerabilities on the perimeter.",
      "Implement a third-party risk programme with regular assessments.",
      "Control use of unsanctioned AI services and source-code leakage."
    ],
    "why_it_matters": "The largest empirical breach dataset: the shift to exploitation as the top vector is a key prioritization signal."
  }
});
