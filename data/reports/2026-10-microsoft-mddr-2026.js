RDB.add({
  "id": "2026-10-microsoft-mddr-2026",
  "vendor": "microsoft",
  "group": "intl",
  "title": "Microsoft Digital Defense Report 2026",
  "title_ru": "Ежегодный доклад Microsoft о киберзащите 2026",
  "url": "https://www.microsoft.com/en-us/corporate-responsibility/topics/cybersecurity/reports/microsoft-digital-defense-report/",
  "pdf_url": "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf",
  "published": "2026-10-01",
  "date_precision": "day",
  "added": "2026-10-15",
  "type": "landscape",
  "lang": "en",
  "importance": 3,
  "tags": [
    "годовой",
    "identity",
    "ИИ",
    "supply chain",
    "госсектор"
  ],
  "sectors": [
    "Госсектор",
    "Все отрасли"
  ],
  "regions": [
    "Глобально",
    "Ближний Восток"
  ],
  "tldr": "Главный годовой отчёт Microsoft: ИИ ускоряет и атаку, и защиту; идентичность остаётся главным входом в организацию; госсектор стал самой атакуемой отраслью (27% активности против 17% годом ранее).",
  "summary": "Microsoft выделяет три сдвига 2026 года: ИИ ускоряет обе стороны противостояния, компрометация учётных записей остаётся основным способом проникновения, а последствия инцидентов всё чаще выходят за пределы исходной жертвы (цепочки поставок, обновления ПО, экосистемы вендоров). Отдельно отмечен структурный сдвиг в сторону атак на инфраструктуру идентификации госорганов: фишинг как вектор вторжения вырос втрое, а злоупотребление действующими учётными записями фигурирует более чем в половине расследованных вторжений.",
  "key_findings": [
    "Госсектор — самая атакуемая отрасль: 27% наблюдаемой активности (17% в 2025).",
    "Фишинг как вектор первичного доступа вырос втрое; кража учётных данных через валидные аккаунты — в более чем половине вторжений.",
    "В 93% случаев атаке способствовало отсутствие мер безопасного доступа и контроля перемещений в популярных онлайн-сервисах.",
    "Эксплуатация публично доступных приложений остаётся доминирующим входом для гибридных кампаний против МСБ и крупного бизнеса.",
    "Компрометация доверенных обновлений и экосистем вендоров переводит риск цепочки поставок в разряд угроз национальной безопасности."
  ],
  "stats": [
    {
      "value": "27%",
      "label": "активности — против госсектора"
    },
    {
      "value": "×3",
      "label": "рост фишинга как вектора"
    },
    {
      "value": "93%",
      "label": "инцидентов — из-за слабого контроля доступа"
    },
    {
      "value": ">50%",
      "label": "вторжений через валидные аккаунты"
    }
  ],
  "actors": [
    "Flax Typhoon"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566",
      "name": "Phishing"
    },
    {
      "id": "T1078",
      "name": "Valid Accounts"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1195",
      "name": "Supply Chain Compromise"
    }
  ],
  "recommendations": [
    "Фишингоустойчивая MFA (FIDO2/passkeys) для всех привилегированных и внешних учётных записей.",
    "Условный доступ и мониторинг аномалий входа в облачные сервисы.",
    "Инвентаризация и контроль доступа подрядчиков и поставщиков ПО.",
    "Сокращение поверхности атаки на периметре и ускорение патчинга публичных сервисов."
  ],
  "why_it_matters": "Отчёт опирается на огромную телеметрию Microsoft и фактически задаёт отраслевую повестку: идентичность — новый периметр, и инвестиции в IAM дают максимальную отдачу.",
  "source_note": "Выжимка по публикации в блоге Microsoft Security и обзорам отчёта в СМИ.",
  "en": {
    "tldr": "Microsoft's flagship annual report: AI accelerates both attack and defence; identity remains the main way into organizations; government became the most targeted sector (27% of activity vs 17% a year earlier).",
    "summary": "Microsoft highlights three shifts in 2026: AI speeds up both sides, account compromise remains the main way in, and incident impact increasingly extends beyond the original victim (supply chains, software updates, vendor ecosystems). It also notes a structural shift towards attacks on government identity infrastructure: phishing as an intrusion vector tripled, and abuse of valid accounts features in more than half of investigated intrusions.",
    "key_findings": [
      "Government is the most targeted sector: 27% of observed activity (17% in 2025).",
      "Phishing as an initial access vector tripled; valid accounts in over half of intrusions.",
      "In 93% of cases, missing secure access and lateral-movement controls in popular online services enabled the attack.",
      "Exploitation of public-facing applications remains the dominant entry for hybrid campaigns.",
      "Compromise of trusted updates and vendor ecosystems turns supply-chain risk into a national-security threat."
    ],
    "stats": [
      {
        "value": "27%",
        "label": "of activity targets government"
      },
      {
        "value": "×3",
        "label": "growth of phishing as a vector"
      },
      {
        "value": "93%",
        "label": "incidents due to weak access control"
      },
      {
        "value": ">50%",
        "label": "intrusions via valid accounts"
      }
    ],
    "recommendations": [
      "Phishing-resistant MFA (FIDO2/passkeys) for all privileged and external accounts.",
      "Conditional access and monitoring of anomalous sign-ins to cloud services.",
      "Inventory and control access for contractors and software suppliers.",
      "Reduce the perimeter attack surface and speed up patching of public services."
    ],
    "why_it_matters": "Built on Microsoft's huge telemetry, the report effectively sets the industry agenda: identity is the new perimeter, and IAM investment gives the highest return."
  }
});
