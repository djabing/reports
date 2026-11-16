RDB.add({
  "id": "2026-11-elastic-threats-etc-november",
  "vendor": "elastic",
  "title": "threats, etc — Elastic Security Threat Command, November 2026",
  "title_ru": "Квартальный отчёт Elastic Security Threat Command, ноябрь 2026",
  "url": "https://www.elastic.co/resources/security/report/threat-command-cybersecurity-report",
  "pdf_url": "https://www.elastic.co/pdf/elastic-threats-etc-elastic-security-threat-command-nov-2026.pdf",
  "published": "2026-11-04",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tags": [
    "ИИ-инструменты",
    "инфостилеры",
    "ClickFix",
    "RMM",
    "блокчейн-C2"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Elastic: атакующие используют украденные учётные данные в среднем через 8 минут после заражения и выполняют команды через доверенные ИИ-инструменты — Claude Code в Windows и ChatGPT для macOS.",
  "summary": "Квартальный отчёт по подтверждённым вторжениям апреля–сентября 2026. Злоумышленники всё чаще обращают против организаций доверенные ИИ- и ИТ-инструменты. В 23 случаях для закрепления устанавливалось легитимное ПО удалённого доступа (чаще всего ScreenConnect). 12 из 27 подтверждённых заражений инфостилерами начались с ClickFix-приманки. Elastic прогнозирует, что C2 через блокчейн станет стандартом для массовых загрузчиков.",
  "key_findings": [
    "Украденные учётные данные используются в среднем через 8 минут после заражения.",
    "Команды выполнялись через Claude Code (Windows) и ChatGPT desktop (macOS).",
    "23 случая установки легитимного ПО удалённого доступа, чаще всего ScreenConnect.",
    "12 из 27 заражений инфостилерами (44%) начались с ClickFix.",
    "Прогноз: блокчейн-C2 станет стандартом для массовых загрузчиков."
  ],
  "stats": [
    {
      "value": "8 мин",
      "label": "до использования украденных данных"
    },
    {
      "value": "23",
      "label": "случая злоупотребления RMM"
    },
    {
      "value": "44%",
      "label": "стилеров через ClickFix"
    }
  ],
  "actors": [],
  "malware": [
    "ScreenConnect"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1219",
      "name": "Remote Access Software"
    },
    {
      "id": "T1204.004",
      "name": "Malicious Copy and Paste"
    },
    {
      "id": "T1102",
      "name": "Web Service"
    }
  ],
  "recommendations": [
    "Инвентаризировать доверенные ИИ-, ИТ-инструменты и подписанное ПО и оценивать их по поведению.",
    "Ограничить установку RMM-инструментов списком разрешённых.",
    "Обучить пользователей распознавать ClickFix (вставка команд из буфера обмена)."
  ],
  "why_it_matters": "Показывает новую поверхность атаки — легитимные ИИ-ассистенты на рабочих местах как канал исполнения команд.",
  "source_note": "Выжимка по пресс-релизу Elastic и обзорам (iTWire, Business Wire)."
});
