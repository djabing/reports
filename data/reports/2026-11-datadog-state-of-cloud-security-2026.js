RDB.add({
  "id": "2026-11-datadog-state-of-cloud-security-2026",
  "vendor": "datadog",
  "title": "State of Cloud Security 2026",
  "title_ru": "Datadog: состояние безопасности облаков 2026",
  "url": "https://www.datadoghq.com/state-of-cloud-security/",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-28",
  "type": "landscape",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "облачные сервисы",
    "уязвимости",
    "учётные данные",
    "цепочка поставок",
    "годовой"
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
  "ttps": [
    "T1078.004",
    "T1195.001",
    "T1552"
  ],
  "tldr": "По телеметрии тысяч организаций в AWS, Azure и Google Cloud медиана серьёзных уязвимостей в облачных нагрузках выросла вчетверо — с 4 в феврале до 16 в ноябре 2026 года. Почти половина пользователей Gemini применяют долгоживущие API-ключи, а 60% организаций запускают версии зависимостей младше 24 часов.",
  "summary": "Ежегодный отчёт Datadog основан на данных клиентов продуктов мониторинга инфраструктуры, логов и облачной безопасности (в основном — сентябрь 2026 года). Рост уязвимостей связывается с волной новых CVE, выявляемых с помощью ИИ-моделей. Облачные ИИ-сервисы инференса используют более чем каждая пятая организация; почти половина пользователей Gemini — долгоживущие ключи (у Bedrock — 17%), в Azure 97% организаций оставляют ключи Foundry по умолчанию. Datadog Security Labs фиксировала инструменты проверки украденных AWS-ключей на доступ к Bedrock в 12 организациях за 30 дней. Долгоживущие учётные данные остаются массовыми: активные ключи созданы в последний год у 43% IAM-пользователей AWS и 66% регистраций приложений Entra ID, доля ключей старше трёх лет в AWS выросла с 20% до 30%. Нагрузка в среднем зависит от 149 пакетов, более половины — транзитивные; 60% организаций используют версии младше суток. Положительные сдвиги: 55% организаций в AWS внедрили периметры данных (40% год назад), 54% — только OIDC для GitHub Actions в AWS.",
  "key_findings": [
    "Медиана high/critical уязвимостей в облачной нагрузке выросла вчетверо: с 4 (февраль 2026) до 16 (ноябрь 2026).",
    "Почти половина пользователей Gemini используют долгоживущие API-ключи; в Azure 97% организаций оставляют ключи Foundry по умолчанию.",
    "Инструменты проверки украденных AWS-ключей на доступ к Bedrock замечены в 12 организациях за 30 дней.",
    "60% организаций запускают версии зависимостей, выпущенные менее суток назад; в среднем 149 зависимостей на нагрузку, больше половины — транзитивные.",
    "Периметры данных в AWS внедрили 55% организаций (40% в 2025 году), но на уровне SCP — лишь 2,3%."
  ],
  "stats": [
    {
      "value": "4×",
      "label": "рост медианы серьёзных уязвимостей за 9 месяцев"
    },
    {
      "value": "~50%",
      "label": "пользователей Gemini с долгоживущими ключами"
    },
    {
      "value": "60%",
      "label": "организаций с зависимостями младше 24 часов"
    },
    {
      "value": "55%",
      "label": "организаций в AWS с периметрами данных"
    }
  ],
  "recommendations": [
    "Заменять статические ключи ИИ-сервисов и облаков краткоживущими идентичностями рабочих нагрузок (IAM-роли, managed identity, сервисные аккаунты).",
    "Вводить задержку на установку свежих версий пакетов и контролировать транзитивные зависимости.",
    "Переводить CI/CD на OIDC без долгоживущих секретов и внедрять периметры данных на уровне организации.",
    "Приоритизировать исправление уязвимостей в библиотеках, реально вызываемых приложениями."
  ],
  "why_it_matters": "Крупнейшая выборка реальных облачных сред показывает, что ИИ одновременно ускоряет поиск уязвимостей и создаёт новую цель для кражи — ключи доступа к ИИ-сервисам.",
  "source_note": "Выжимка по странице отчёта и пресс-релизу Datadog от 10.11.2026. Данные — клиенты Datadog, это не репрезентативная выборка рынка (в том числе российского).",
  "en": {
    "tldr": "Telemetry from thousands of organisations on AWS, Azure and Google Cloud shows the median number of serious vulnerabilities in cloud workloads quadrupled, from 4 in February to 16 in November 2026. Nearly half of Gemini users rely on long-lived API keys, and 60% of organisations run dependency versions less than 24 hours old.",
    "summary": "Datadog's annual report is based on data from customers of its infrastructure monitoring, logs and cloud security products (mostly September 2026). The vulnerability rise is linked to a wave of new CVEs found with AI models. More than one in five organisations use cloud-hosted AI inference; nearly half of Gemini users use long-lived keys (17% for Bedrock), and in Azure 97% of organisations keep default Foundry keys. Datadog Security Labs saw tools that test stolen AWS keys for Bedrock access in 12 organisations over 30 days. Long-lived credentials remain widespread: active keys created within the past year exist for 43% of AWS IAM users and 66% of Entra ID app registrations, and the share of AWS keys older than three years rose from 20% to 30%. Workloads depend on 149 packages on average, more than half transitive; 60% of organisations run versions less than a day old. Positive shifts: 55% of AWS organisations use data perimeters (40% a year ago), and 54% use OIDC only for GitHub Actions in AWS.",
    "key_findings": [
      "Median high/critical vulnerabilities per cloud workload quadrupled: from 4 (February 2026) to 16 (November 2026).",
      "Nearly half of Gemini users use long-lived API keys; in Azure 97% of organisations keep default Foundry keys.",
      "Tools testing stolen AWS keys for Bedrock access were seen in 12 organisations over 30 days.",
      "60% of organisations run dependency versions released less than a day earlier; workloads average 149 dependencies, more than half transitive.",
      "55% of AWS organisations have data perimeters (40% in 2025), but only 2.3% enforce them via SCPs."
    ],
    "stats": [
      {
        "value": "4x",
        "label": "rise in median serious vulnerabilities in 9 months"
      },
      {
        "value": "~50%",
        "label": "Gemini users with long-lived keys"
      },
      {
        "value": "60%",
        "label": "organisations running dependencies under 24 hours old"
      },
      {
        "value": "55%",
        "label": "AWS organisations with data perimeters"
      }
    ],
    "recommendations": [
      "Replace static AI and cloud keys with short-lived workload identities (IAM roles, managed identities, service accounts).",
      "Delay adoption of freshly released package versions and monitor transitive dependencies.",
      "Move CI/CD to OIDC without long-lived secrets and enforce data perimeters at organisation level.",
      "Prioritise fixing vulnerabilities in libraries that applications actually call."
    ],
    "why_it_matters": "One of the largest samples of real cloud environments shows AI both accelerating vulnerability discovery and creating a new theft target: access keys to AI services.",
    "source_note": "Summary based on the report page and Datadog's press release of 10 November 2026. Data comes from Datadog customers and is not a representative market sample (including for Russia)."
  }
});
