RDB.add({
  "id": "2026-11-ox-plug-and-pray",
  "vendor": "oxsecurity",
  "title": "Plug and Pray: How AI Is Changing Software Supply Chain Attacks",
  "title_ru": "Plug and Pray: как ИИ меняет атаки на цепочки поставок ПО",
  "url": "https://www.ox.security/reports/plug-and-pray-how-ai-is-changing-software-supply-chain-attacks/",
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
  "tldr": "Исследованы 542 207 компонентов npm, PyPI, MCP и Agent Skills за июль–октябрь 2026 года. В 22% отмеченных подозрительных MCP-серверов встречались prompt injection или tool poisoning, в 16% — выполнение кода при установке или импорте.",
  "summary": "Исследованы 542 207 компонентов npm, PyPI, MCP и Agent Skills за июль–октябрь 2026 года. В 22% отмеченных подозрительных MCP-серверов встречались prompt injection или tool poisoning, в 16% — выполнение кода при установке или импорте. 44% из 179 отмеченных подозрительных Skills содержали инструкции на передачу данных наружу. У 30,2% отслеженных MCP-серверов не удалось установить владельца исходного компонента. Открытая страница отчёта и официальный анонс от 23.11.2026: https://www.ox.security/blog/plug-and-pray-your-ai-agents-are-taking-orders-from-strangers/. Прямой PDF не подтверждён. Доли для flagged-компонентов не описывают всю экосистему; использованы только открытые выводы.",
  "key_findings": [
    "Исследованы 542 207 компонентов npm, PyPI, MCP и Agent Skills за июль–октябрь 2026 года.",
    "В 22% отмеченных подозрительных MCP-серверов встречались prompt injection или tool poisoning, в 16% — выполнение кода при установке или импорте.",
    "44% из 179 отмеченных подозрительных Skills содержали инструкции на передачу данных наружу.",
    "У 30,2% отслеженных MCP-серверов не удалось установить владельца исходного компонента."
  ],
  "stats": [
    {
      "value": "542 207",
      "label": "проанализированных компонентов"
    },
    {
      "value": "22%",
      "label": "подозрительных MCP с внедрением инструкций"
    },
    {
      "value": "179",
      "label": "подозрительных Skills в выборке"
    }
  ],
  "recommendations": [
    "Инвентаризировать MCP-подключения и полномочия агентов.",
    "Проверять происхождение компонентов, инструкции и фактически исполняемый код."
  ],
  "why_it_matters": "Показывает риски сторонних инструкций и инструментов, действующих с легитимными правами агентов.",
  "source_note": "Открытая страница отчёта и официальный анонс от 23.11.2026: https://www.ox.security/blog/plug-and-pray-your-ai-agents-are-taking-orders-from-strangers/. Прямой PDF не подтверждён. Доли для flagged-компонентов не описывают всю экосистему; использованы только открытые выводы.",
  "en": {
    "tldr": "OX analyzed 542,207 npm, PyPI, MCP and Agent Skills components from July to October 2026. Prompt injection or tool poisoning appeared in 22% of flagged MCP servers; install/import-time execution appeared in 16%.",
    "summary": "OX analyzed 542,207 npm, PyPI, MCP and Agent Skills components from July to October 2026. Prompt injection or tool poisoning appeared in 22% of flagged MCP servers; install/import-time execution appeared in 16%. 44% of 179 flagged Skills contained instructions directing agents to send data out. A source owner could not be identified for 30.2% of tracked MCP servers. Public report page and official announcement dated 23 November 2026: https://www.ox.security/blog/plug-and-pray-your-ai-agents-are-taking-orders-from-strangers/. No direct PDF verified. Percentages for flagged components do not describe ecosystem-wide prevalence; only publicly accessible findings are used.",
    "key_findings": [
      "OX analyzed 542,207 npm, PyPI, MCP and Agent Skills components from July to October 2026.",
      "Prompt injection or tool poisoning appeared in 22% of flagged MCP servers; install/import-time execution appeared in 16%.",
      "44% of 179 flagged Skills contained instructions directing agents to send data out.",
      "A source owner could not be identified for 30.2% of tracked MCP servers."
    ],
    "stats": [
      {
        "value": "542 207",
        "label": "components analyzed"
      },
      {
        "value": "22%",
        "label": "flagged MCP servers with prompt injection or tool poisoning"
      },
      {
        "value": "179",
        "label": "flagged Skills in the sample"
      }
    ],
    "recommendations": [
      "Inventory MCP connections and agent permissions.",
      "Verify component provenance, instructions and the code actually executed."
    ],
    "why_it_matters": "Highlights third-party instructions and tools that can abuse agents' legitimate permissions.",
    "source_note": "Public report page and official announcement dated 23 November 2026: https://www.ox.security/blog/plug-and-pray-your-ai-agents-are-taking-orders-from-strangers/. No direct PDF verified. Percentages for flagged components do not describe ecosystem-wide prevalence; only publicly accessible findings are used."
  }
});
