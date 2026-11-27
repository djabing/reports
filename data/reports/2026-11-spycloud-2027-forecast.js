RDB.add({
  "id": "2026-11-spycloud-2027-forecast",
  "vendor": "spycloud",
  "title": "SpyCloud 2026 Forecast Report",
  "title_ru": "SpyCloud: прогноз угроз идентификации на 2027 год",
  "url": "https://spycloud.com/resource/report/spycloud-2026-forecast-report/",
  "pdf_url": "",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "forecast",
  "importance": 2,
  "tier": "analytics",
  "lang": "en",
  "tags": [
    "прогноз",
    "2027",
    "идентичность",
    "инфостилеры",
    "ИИ-агенты",
    "третьи стороны"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "actors": [],
  "malware": [
    "WardenStealer",
    "Aoki"
  ],
  "cves": [],
  "ttps": [
    "T1539",
    "T1557",
    "T1528",
    "T1199"
  ],
  "tldr": "SpyCloud прогнозирует, что в 2027 году самые разрушительные атаки будут идти через уже доверенный доступ: похищенные сессии, API-ключи и токены ИИ-инструментов, интеграции подрядчиков. Прогнозы упорядочены по уверенности экспертов, первым идёт обход MFA через захват сессии или доверенного устройства.",
  "summary": "Прогноз составлен экспертами SpyCloud по исследованиям угроз, расследованиям, продукту и данным, а также по опросу 50 специалистов ИБ крупных компаний. Самый уверенный прогноз — злоумышленники продолжат обходить MFA, захватывая сессию или доверенное устройство: фишинговые наборы переходят на device code phishing и AiTM, часть атакующих работает через browser-in-the-middle. Следующей любимой целью станут API-ключи и токены ИИ-инструментов и агентов: стилеры WardenStealer и Aoki уже собирают токены ИИ-инструментов разработки, SpyCloud зафиксировала более 127 тыс. заражений WardenStealer с августа. Наибольший ущерб дадут доверенные связи — интеграции подрядчиков и инсайдеры: 68% опрошенных пострадали от взлома поставщика, подрядчика или SaaS. Ожидаются синтетические личности на основе реальных данных и ИИ-контента, фишинг ИИ-агентов, миграция киберпреступных сообществ между мессенджерами (средняя уверенность). Полностью автономные атаки привлекут внимание, но основной ущерб нанесут обычные атаки, ускоренные ИИ; автономную часть прогноза SpyCloud оценивает с низкой уверенностью.",
  "key_findings": [
    "Обход MFA через захват сессии или доверенного устройства (AiTM, device code phishing, browser-in-the-middle) — прогноз с наибольшей уверенностью.",
    "API-ключи и токены ИИ-инструментов и агентов станут приоритетной целью; с августа зафиксировано более 127 тыс. заражений WardenStealer.",
    "68% опрошенных специалистов пострадали от взлома поставщика, подрядчика или SaaS-провайдера.",
    "Синтетические личности на основе украденных данных и ИИ-контента встречали лишь 6% респондентов — прогноз опережает текущую практику.",
    "Злоумышленники начнут фишинг ИИ-агентов: уже замечены вредоносные навыки на маркетплейсе агентов, предписывающие установить инфостилер.",
    "46% опрошенных ожидают, что атакующие усилят позиции в I полугодии 2027 года."
  ],
  "stats": [
    {
      "value": "127,000+",
      "label": "заражений WardenStealer с августа"
    },
    {
      "value": "68%",
      "label": "пострадали от взлома поставщика или SaaS"
    },
    {
      "value": "46%",
      "label": "ожидают усиления атакующих в I полугодии 2027"
    },
    {
      "value": "50",
      "label": "опрошенных специалистов ИБ"
    }
  ],
  "recommendations": [
    "Не считать MFA достаточной защитой: отслеживать и отзывать скомпрометированные сессии и cookie, внедрять фишингоустойчивую аутентификацию.",
    "Инвентаризировать и ротировать API-ключи, токены и сервисные учётные записи, включая используемые ИИ-агентами.",
    "Пересматривать права давних интеграций подрядчиков и SaaS, убирая избыточные административные привилегии."
  ],
  "why_it_matters": "Прогноз смещает фокус защиты с паролей на нечеловеческие учётные данные и сессии, которые ИИ-агенты и SaaS-интеграции делают главным путём в корпоративную среду.",
  "source_note": "Сайт spycloud.com недоступен из среды сборщика; выжимка по официальному пресс-релизу SpyCloud (CyberNewswire, 17.11.2026), прочитанному в перепечатке Cybersecurity Insiders. Полный отчёт не прочитан. Опрос — 50 специалистов крупных компаний; данные о заражениях — из собственной телеметрии SpyCloud.",
  "en": {
    "tldr": "SpyCloud predicts that in 2027 the most damaging attacks will come through access organisations already trust: hijacked sessions, API keys and tokens of AI tools, and vendor integrations. Predictions are ordered by expert confidence, led by MFA bypass via session or trusted-device takeover.",
    "summary": "The forecast draws on SpyCloud experts in threat research, investigations, product and data science, plus a survey of 50 security professionals at large enterprises. The most confident prediction is that attackers will keep bypassing MFA by taking over the session or the trusted device: phishing kits are moving to device code phishing and AiTM, and some attackers work through browser-in-the-middle. API keys and tokens behind AI tools and agents will become the next favourite target: the WardenStealer and Aoki infostealers already harvest tokens stored by AI coding tools, and SpyCloud has recaptured more than 127,000 WardenStealer infections since August. The most damaging compromises will come through trusted connections such as vendor integrations and insiders: 68% of respondents were affected by a vendor, contractor or SaaS breach. SpyCloud also expects synthetic identities built from real data and AI content, phishing of AI agents, and criminal communities shifting between chat apps (medium confidence). Fully autonomous attacks will grab headlines, but ordinary attacks accelerated by AI will do most of the damage; SpyCloud rates the autonomous part of that call low-confidence.",
    "key_findings": [
      "MFA bypass via session or trusted-device takeover (AiTM, device code phishing, browser-in-the-middle) is the highest-confidence prediction.",
      "API keys and tokens of AI tools and agents will become a priority target; more than 127,000 WardenStealer infections recaptured since August.",
      "68% of surveyed professionals were affected by a breach at a vendor, contractor or SaaS provider.",
      "Only 6% of respondents have encountered synthetic identities built from stolen data and AI content, so the call runs ahead of current practice.",
      "Attackers will start phishing AI agents: malicious skills on an AI agent marketplace already instruct agents to install infostealers.",
      "46% of respondents expect attackers to gain ground in the first half of 2027."
    ],
    "stats": [
      {
        "value": "127,000+",
        "label": "WardenStealer infections since August"
      },
      {
        "value": "68%",
        "label": "affected by a vendor or SaaS breach"
      },
      {
        "value": "46%",
        "label": "expect attackers to gain ground in H1 2027"
      },
      {
        "value": "50",
        "label": "security professionals surveyed"
      }
    ],
    "recommendations": [
      "Do not treat MFA as sufficient: monitor and revoke compromised sessions and cookies and adopt phishing-resistant authentication.",
      "Inventory and rotate API keys, tokens and service accounts, including those used by AI agents.",
      "Review permissions of long-standing vendor and SaaS integrations and remove excess admin privileges."
    ],
    "why_it_matters": "The forecast shifts defensive focus from passwords to non-human credentials and sessions, which AI agents and SaaS integrations are making the main path into the enterprise.",
    "source_note": "spycloud.com was unreachable from the collector environment; summary based on SpyCloud's official press release (CyberNewswire, 17 November 2026) as republished by Cybersecurity Insiders. The full report was not read. The survey covers 50 professionals at large enterprises; infection data comes from SpyCloud's own telemetry."
  }
});
