RDB.add({
  "id": "2026-10-crowdstrike-vapor-panda-artex",
  "vendor": "crowdstrike",
  "title": "VAPOR PANDA Uses AI-Driven ARTEX to Grow Global Espionage Campaign",
  "title_ru": "VAPOR PANDA масштабирует шпионскую кампанию с помощью ИИ-фреймворка ARTEX",
  "url": "https://www.crowdstrike.com/en-us/blog/vapor-panda-uses-artex-to-scale-global-campaign/",
  "pdf_url": "",
  "published": "2026-10-29",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "apt",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "агентные атаки",
    "кибершпионаж",
    "ИИ-агенты",
    "государственные группировки"
  ],
  "sectors": [
    "Госсектор",
    "Дипломатия",
    "Оборона",
    "Телеком",
    "Полупроводники и производство"
  ],
  "regions": [
    "Глобально",
    "Латинская Америка",
    "Европа",
    "Ближний Восток",
    "США"
  ],
  "tldr": "CrowdStrike: связанная с Китаем группировка VAPOR PANDA за 11 дней применила мультиагентный фреймворк ARTEX с моделью DeepSeek против более чем 200 организаций в 14+ странах. Пост-эксплуатация подтверждена в 9 организациях; оператор-человек управлял агентами в ключевых точках.",
  "summary": "CrowdStrike OverWatch с 17 октября 2026 года наблюдала один контроллер ARTEX, связанный с инфраструктурой VAPOR PANDA; на нём периодически были открыты инструменты, файлы целей и транскрипты агентов. Цели — МИД стран Латинской Америки, Европы, Азии и Ближнего Востока, МВД ближневосточной страны, 19 американских организаций (фармацевтика, полупроводники, оборона, атомная отрасль, финансы) и телеком-операторы. ARTEX координирует главного агента, планировщиков и исполнителей через общий граф фактов и целей; оператор давал команды на китайском языке. Агенты параллельно атаковали веб-приложения, облака, контейнеры, Active Directory, почту и VPN, а также искали узлы без установленного сенсора Falcon. Это первое наблюдаемое применение ИИ-инструментов группировкой и расширение её целей на новые отрасли и регионы; кампания отделена от активности Storm-0940, о которой сообщала Microsoft.",
  "key_findings": [
    "Один контроллер ARTEX за 11 дней использовался против более чем 200 организаций минимум в 14 странах.",
    "Пост-эксплуатация подтверждена в 9 организациях (бэкдор BLOODALCHEMY, подбор паролей, сканирование, разведка); ещё минимум 12 — атаки подбором учётных данных.",
    "ARTEX работал в основном на DeepSeek и второй коммерческой модели; одно вторжение потребовало около 1,4 млрд входных токенов.",
    "Человек оставался в контуре: команды на китайском с меткой «человеческая инструкция» — написать веб-шеллы, извлечь пароли администраторов домена, найти машины без сенсора Falcon.",
    "BLOODALCHEMY загружался через легитимный GameHook, переименованный в svchost.exe (подмена DLL); CrowdStrike ожидает, что китайские группировки почти наверняка продолжат внедрять агентные фреймворки в ближайшие 12 месяцев."
  ],
  "stats": [
    {
      "value": "200+",
      "label": "атакованных организаций"
    },
    {
      "value": "14+",
      "label": "стран за 11 дней"
    },
    {
      "value": "9",
      "label": "организаций с подтверждённой пост-эксплуатацией"
    },
    {
      "value": "~1,4 млрд",
      "label": "входных токенов на одно вторжение"
    }
  ],
  "actors": [
    "VAPOR PANDA"
  ],
  "malware": [
    "ARTEX",
    "BLOODALCHEMY"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1110.003",
      "name": "Password Spraying"
    },
    {
      "id": "T1505.003",
      "name": "Web Shell"
    },
    {
      "id": "T1574.002",
      "name": "DLL Side-Loading"
    },
    {
      "id": "T1046",
      "name": "Network Service Discovery"
    },
    {
      "id": "T1518.001",
      "name": "Security Software Discovery"
    }
  ],
  "recommendations": [
    "Обеспечить полное покрытие сенсорами EDR: атакующие целенаправленно ищут незащищённые узлы.",
    "Защищать учётные записи от подбора паролей: MFA, блокировки, мониторинг массовых попыток входа.",
    "Детектировать загрузку DLL легитимными бинарями из нестандартных путей и веб-шеллы на публичных серверах.",
    "Проверить IoC из отчёта CrowdStrike, особенно госорганам, телеком-операторам и высокотехнологичным компаниям."
  ],
  "why_it_matters": "Документированный случай, когда один оператор с агентным фреймворком параллельно ведёт десятки вторжений против государственных и высокотехнологичных целей.",
  "source_note": "Выжимка по первоисточнику — блогу CrowdStrike от 29.10.2026.",
  "en": {
    "tldr": "CrowdStrike: China-nexus group VAPOR PANDA used the ARTEX multi-agent framework with the DeepSeek model against more than 200 organisations in 14+ countries over 11 days. Post-exploitation was confirmed at 9 organisations; a human operator steered the agents at key decision points.",
    "summary": "From 17 October 2026 CrowdStrike OverWatch observed a single ARTEX controller linked to VAPOR PANDA infrastructure, which intermittently exposed tooling, target files and agent transcripts. Targets included foreign ministries in Latin America, Europe, Asia and the Middle East, a Middle Eastern interior ministry, 19 US organisations (pharmaceuticals, semiconductors, defence, nuclear, finance) and telecom providers. ARTEX coordinates a main agent with planner and worker agents over a shared graph of facts and goals; the operator issued instructions in Chinese. The agents attacked web applications, cloud, containers, Active Directory, mail and VPN in parallel, and looked for hosts without the Falcon sensor. This is the group's first observed use of AI tooling and a broadening of its targeting to new sectors and regions; the campaign is separate from the Storm-0940 activity reported by Microsoft.",
    "key_findings": [
      "A single ARTEX controller was used against more than 200 organisations in at least 14 countries over 11 days.",
      "Post-exploitation confirmed at 9 organisations (BLOODALCHEMY backdoor, password spraying, scanning, reconnaissance); credential attacks against at least 12 more.",
      "ARTEX ran mainly on DeepSeek plus a second commercial model; one intrusion consumed about 1.4 billion input tokens.",
      "A human stayed in the loop: Chinese-language instructions labelled 'human instruction' — write web shells, extract domain admin passwords, find machines without the Falcon sensor.",
      "BLOODALCHEMY was loaded via a legitimate GameHook binary renamed svchost.exe (DLL side-loading); CrowdStrike assesses China-nexus groups will highly likely keep adopting agentic frameworks over the next 12 months."
    ],
    "stats": [
      {
        "value": "200+",
        "label": "organisations targeted"
      },
      {
        "value": "14+",
        "label": "countries in 11 days"
      },
      {
        "value": "9",
        "label": "organisations with confirmed post-exploitation"
      },
      {
        "value": "~1.4B",
        "label": "input tokens per intrusion"
      }
    ],
    "recommendations": [
      "Ensure full EDR sensor coverage: attackers deliberately look for unprotected hosts.",
      "Protect accounts against password spraying: MFA, lockouts, monitoring of mass login attempts.",
      "Detect DLL loading by legitimate binaries from unusual paths and web shells on public servers.",
      "Check the IoCs in the CrowdStrike report, especially for government bodies, telecom operators and high-tech companies."
    ],
    "why_it_matters": "A documented case of a single operator with an agentic framework running dozens of intrusions in parallel against government and high-tech targets.",
    "source_note": "Summary based on the primary source — CrowdStrike's blog post of 29 Oct 2026."
  }
});
