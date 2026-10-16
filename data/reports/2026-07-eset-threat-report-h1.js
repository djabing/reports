RDB.add({
  "id": "2026-07-eset-threat-report-h1",
  "vendor": "eset",
  "title": "ESET Threat Report H1 2026",
  "title_ru": "Отчёт ESET об угрозах за I полугодие 2026",
  "url": "https://www.eset.com/us/business/threat-report/",
  "pdf_url": "",
  "published": "2026-07",
  "date_precision": "month",
  "added": "2026-10-15",
  "type": "landscape",
  "lang": "en",
  "importance": 2,
  "tags": ["полугодовой", "ClickFix", "ИИ", "Android", "QR-фишинг", "EDR killers"],
  "sectors": ["Все отрасли"],
  "regions": ["Глобально"],
  "tldr": "ClickFix вырос на 108% и мутировал в ConsentFix (угон облачных аккаунтов через OAuth без кражи пароля); найден PromptSpy — первый Android-зловред с GenAI в цепочке выполнения; в атаках вымогателей замечено 100+ «убийц EDR».",
  "summary": "Полугодовой обзор телеметрии ESET за декабрь 2025 — май 2026. Злоумышленники не столько изобретают новое, сколько доводят до совершенства проверенные техники. Отдельное исследование экосистемы «ИИ-навыков» (skills) для агентов выявило тысячи вредоносных экземпляров. Растёт QR-фишинг (quishing).",
  "key_findings": [
    "ClickFix +108% (H2 2025 → H1 2026): от поддельных CAPTCHA к фейковым ИИ-страницам поддержки, расширениям браузера и сценариям облачной аутентификации.",
    "ConsentFix — комбинация ClickFix и злоупотребления OAuth-согласием: угон облачного аккаунта без кражи учётных данных.",
    "Анализ 900 000 ИИ-навыков: 25 000 подозрительных и 3 000+ вредоносных (с Mimikatz, Impacket, самомодификацией и закреплением).",
    "PromptSpy — первый известный Android-зловред, использующий генеративный ИИ в ходе выполнения.",
    "Более 100 различных EDR killers задокументировано в атаках вымогателей."
  ],
  "stats": [
    { "value": "+108%", "label": "детектов ClickFix" },
    { "value": "3 000+", "label": "вредоносных ИИ-навыков" },
    { "value": "100+", "label": "EDR killers" }
  ],
  "actors": [],
  "malware": ["PromptSpy"],
  "cves": [],
  "ttps": [
    { "id": "T1204.004", "name": "Malicious Copy and Paste" },
    { "id": "T1528", "name": "Steal Application Access Token" },
    { "id": "T1562.001", "name": "Disable or Modify Tools" },
    { "id": "T1068", "name": "Exploitation for Privilege Escalation" }
  ],
  "recommendations": [
    "Обучить пользователей: никогда не вставлять команды из браузера в Win+R/терминал.",
    "Ограничить пользовательское согласие на OAuth-приложения, ввести admin consent workflow.",
    "Проверять ИИ-навыки и плагины агентов перед установкой; вести реестр разрешённых.",
    "Включить защиту от загрузки уязвимых драйверов и tamper protection EDR."
  ],
  "why_it_matters": "ClickFix/ConsentFix — один из самых массовых векторов 2026 года, и он обходит MFA. Тема ИИ-навыков как новой поверхности атаки только начинает раскрываться.",
  "source_note": "Выжимка по обзорам отчёта (Intelligent CIO, CXOToday, TechNadu). Дата — приблизительно."
});
