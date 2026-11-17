RDB.add({
  "id": "2026-09-mandiant-ai-risk-and-resilience-2026",
  "vendor": "mandiant",
  "title": "AI Risk and Resilience in 2026: A Mandiant Special Report",
  "title_ru": "Риски ИИ и устойчивость в 2026: специальный отчёт Mandiant",
  "url": "https://cloud.google.com/security/resources/ai-risk-and-resilience-2026",
  "pdf_url": "",
  "published": "2026-09",
  "date_precision": "month",
  "added": "2026-11-16",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "key",
  "tags": [
    "ИИ",
    "агентные атаки",
    "ИИ-ассистенты",
    "MCP",
    "IR"
  ],
  "sectors": [
    "ИТ и разработка",
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Mandiant: атакующие перешли от промптов к агентной оркестрации атак, отравляют внутренние ИИ-репозитории и хуки CLI ИИ-ассистентов, а в ВПО встраивают лёгкие ИИ-модели для скрытного закрепления.",
  "summary": "Специальный отчёт Mandiant по итогам расследований. В одной ИТ-компании атакующие отравили внутренний ИИ-репозиторий и изменили CLI-хуки ассистента. Отмечены кампании ВПО со встроенными компактными моделями для долговременного закрепления. Среди проблем управления — отсутствие или неактуальность AI SBOM и чрезмерные полномочия ИИ-инструментов. По пересказам, описаны кейсы «отказа в кошельке» (зацикливание агента) и распространения червя Shai-Hulud через захваченную сессию ИИ-ассистента (~100 внутренних репозиториев). ИИ быстро входит в практику защиты, особенно в threat hunting.",
  "key_findings": [
    "Переход от простых промптов к агентной оркестрации атак.",
    "Отравление внутреннего ИИ-репозитория и подмена CLI-хуков ассистента.",
    "ВПО со встроенными лёгкими ИИ-моделями для скрытного закрепления.",
    "AI SBOM отсутствуют или не поддерживаются; ИИ-инструменты получают избыточные права.",
    "ИИ активно внедряется в защиту, особенно в threat hunting."
  ],
  "stats": [],
  "actors": [],
  "malware": [
    "Shai-Hulud"
  ],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Выдавать агентам отдельные идентичности и короткоживущие учётные данные с минимальными правами.",
    "Рассматривать сессии ИИ-ассистентов и MCP-серверы как привилегированные.",
    "Вести и поддерживать AI SBOM.",
    "Интегрировать агентные ИИ-системы с SOC."
  ],
  "why_it_matters": "Практические кейсы Mandiant о том, как атакуют сами ИИ-инструменты разработчиков.",
  "source_note": "Страница Google Cloud не отдаёт текст автоматически; выжимка по обзорам (SecurityBrief) и анонсу в сообществе Google Cloud. Кейсы из вторичных пересказов стоит проверить.",
  "en": {
    "tldr": "Mandiant: attackers have moved from prompts to agentic orchestration of attacks, poison internal AI repositories and AI-assistant CLI hooks, and embed lightweight AI models in malware for stealthy persistence.",
    "summary": "Mandiant special report based on its investigations. At one IT company attackers poisoned an internal AI repository and modified the assistant's CLI hooks. Malware campaigns with embedded compact models for long-term persistence were observed. Governance problems include missing or outdated AI SBOMs and excessive permissions for AI tools. According to coverage, the report describes 'denial of wallet' cases (an agent stuck in a loop) and the spread of the Shai-Hulud worm through a hijacked AI-assistant session (~100 internal repositories). AI is quickly entering defensive practice, especially threat hunting.",
    "key_findings": [
      "Shift from simple prompts to agentic orchestration of attacks.",
      "Poisoning of an internal AI repository and tampering with the assistant's CLI hooks.",
      "Malware with embedded lightweight AI models for stealthy persistence.",
      "AI SBOMs are missing or not maintained; AI tools get excessive permissions.",
      "AI is being actively adopted for defence, especially threat hunting."
    ],
    "stats": [],
    "recommendations": [
      "Give agents separate identities and short-lived least-privilege credentials.",
      "Treat AI-assistant sessions and MCP servers as privileged.",
      "Build and maintain an AI SBOM.",
      "Integrate agentic AI systems with the SOC."
    ],
    "why_it_matters": "Practical Mandiant cases showing how developers' AI tools themselves are being attacked.",
    "source_note": "The Google Cloud page does not serve text to automated tools; summary based on coverage (SecurityBrief) and an announcement in the Google Cloud community. Cases from secondary accounts should be verified."
  }
});
