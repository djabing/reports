RDB.add({
  "id": "2026-11-censys-artex-agentic-asbestos",
  "vendor": "censys",
  "title": "ARTEX: Agentic Asbestos",
  "title_ru": "Censys: 1 465 открытых в интернет консолей ИИ-фреймворка ARTEX",
  "url": "https://censys.com/blog/artex-agentic-asbestos/",
  "pdf_url": "",
  "published": "2026-11-05",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "ИИ в атаках",
    "агентные атаки",
    "инфраструктура",
    "сетевая телеметрия",
    "пост-эксплуатация"
  ],
  "sectors": [],
  "regions": [
    "Глобально"
  ],
  "tldr": "Censys насчитала 1 465 хостов с открытой в интернет консолью ARTEX — автономного ИИ-фреймворка для пентеста, который уже используется злоумышленниками. После исключения однотипно настроенных блоков остаётся около 815 различных развёртываний, т. е. применение ARTEX значительно шире известных кампаний.",
  "summary": "Исследование Силаса Катлера (Censys Advanced Research Collective) о публичной инфраструктуре ARTEX — открытого фреймворка на Go с веб-консолью, который управляет ИИ-агентами и подключается к LLM; ранее его связывали с несколькими вредоносными кампаниями. Около 650 из 1 465 найденных хостов находятся в двух блоках одинаково настроенного хостинга, остальные ~815 выглядят как отдельные развёртывания. На 10,6% хостов ARTEX работает и другое ПО, которое Censys классифицирует как угрозу: C2 Vshell, Cobalt Strike и Adaptix C2, средства туннелирования, разведки и ScopeSentry от автора ARTEX. Операторы часто используют несколько агентных фреймворков одновременно — CyberStrikeAI, PentAGI, HexStrike AI, RedAmon; на 32 хостах открыты каталоги с наборами для пост-эксплуатации, стейджерами и имплантами, а на 43 работают собственные шлюзы или перепродажа доступа к LLM.",
  "key_findings": [
    "1 465 хостов по всему миру открывают в интернет консоль ARTEX.",
    "Около 650 из них — в двух блоках одинаково настроенного хостинга; остаётся примерно 815 внешне различных развёртываний.",
    "155 хостов (10,6%) параллельно запускают как минимум ещё один артефакт, который Censys относит к угрозам, — в том числе Vshell, Cobalt Strike и Adaptix C2.",
    "ARTEX соседствует с другими ИИ-фреймворками для пентеста: CyberStrikeAI встречается вместе с ним на 70 хостах; также замечены PentAGI, HexStrike AI и RedAmon.",
    "На 32 хостах ARTEX открыты каталоги с инструментами для разных стадий атаки: наборами пост-эксплуатации, стейджерами и имплантами.",
    "43 хоста запускают собственные шлюзы LLM или ПО для перепродажи доступа к моделям — доступ к ИИ становится частью атакующей инфраструктуры."
  ],
  "stats": [
    {
      "value": "1 465",
      "label": "хостов с открытой консолью ARTEX"
    },
    {
      "value": "~815",
      "label": "внешне различных развёртываний"
    },
    {
      "value": "10,6%",
      "label": "хостов ARTEX запускают и другие угрозы"
    },
    {
      "value": "43",
      "label": "хоста с собственными шлюзами LLM"
    }
  ],
  "actors": [],
  "malware": [
    "ARTEX",
    "CyberStrikeAI",
    "PentAGI",
    "HexStrike AI",
    "RedAmon",
    "ScopeSentry",
    "Vshell",
    "Cobalt Strike",
    "Adaptix C2"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1588.002",
      "name": "Obtain Capabilities: Tool"
    }
  ],
  "recommendations": [
    "Добавить признаки консолей ARTEX и сопутствующих фреймворков (CyberStrikeAI, PentAGI, HexStrike AI) в TI и блокировку на периметре.",
    "Рассматривать совместное размещение ИИ-фреймворков с C2 (Vshell, Cobalt Strike, Adaptix C2) как сильный индикатор вредоносной инфраструктуры.",
    "Учитывать в моделях угроз, что агентные атаки могут исходить от сотен независимых операторов, а не от нескольких известных группировок."
  ],
  "why_it_matters": "Агентные ИИ-фреймворки стремительно распространяются среди злоумышленников, и публично описанные кампании — лишь видимая часть. Данные интернет-сканирования дают защитникам способ заранее находить такую инфраструктуру.",
  "source_note": "Сайт Censys недоступен из среды сборщика; выжимка сделана по публикации Infosecurity Magazine от 06.11.2026, пересказывающей отчёт Censys от 05.11.2026, и обзорам профильных СМИ. Открытая консоль не доказывает злонамеренное использование каждого хоста.",
  "en": {
    "tldr": "Censys counted 1,465 hosts exposing an ARTEX console to the internet; ARTEX is an autonomous AI pentesting framework already abused by threat actors. After excluding identically configured blocks, roughly 815 distinct deployments remain, meaning ARTEX use is far wider than the reported campaigns suggest.",
    "summary": "Research by Silas Cutler (Censys Advanced Research Collective) into the public infrastructure of ARTEX, an open-source Go framework with a web console that orchestrates AI agents and plugs into LLMs and has previously been linked to several malicious campaigns. About 650 of the 1,465 hosts found sit in two blocks of identically configured hosting; the remaining ~815 look like distinct deployments. On 10.6% of ARTEX hosts, other software classified by Censys as a threat is also running: Vshell, Cobalt Strike and Adaptix C2, tunnelling and reconnaissance tools, and ScopeSentry from the ARTEX author. Operators often run several agent frameworks side by side (CyberStrikeAI, PentAGI, HexStrike AI, RedAmon); 32 hosts expose directories with post-exploitation kits, stagers and implants, and 43 run self-hosted LLM gateway or reseller software.",
    "key_findings": [
      "1,465 hosts worldwide expose an ARTEX console to the internet.",
      "About 650 of them sit in two blocks of identically configured hosting, leaving roughly 815 distinct-looking deployments.",
      "155 hosts (10.6%) also run at least one other artefact Censys classifies as a threat, including Vshell, Cobalt Strike and Adaptix C2.",
      "ARTEX shares infrastructure with other AI pentesting frameworks: CyberStrikeAI appears alongside it on 70 hosts; PentAGI, HexStrike AI and RedAmon were also seen.",
      "32 ARTEX hosts expose directories with tools for different attack stages: post-exploitation kits, stagers and implants.",
      "43 hosts run self-hosted LLM gateway or reseller software: access to AI models is becoming part of the offensive infrastructure stack."
    ],
    "stats": [
      {
        "value": "1,465",
        "label": "hosts exposing an ARTEX console"
      },
      {
        "value": "~815",
        "label": "distinct-looking deployments"
      },
      {
        "value": "10.6%",
        "label": "of ARTEX hosts also run other threats"
      },
      {
        "value": "43",
        "label": "hosts running self-hosted LLM gateways"
      }
    ],
    "recommendations": [
      "Add fingerprints of ARTEX consoles and related frameworks (CyberStrikeAI, PentAGI, HexStrike AI) to threat intelligence and perimeter blocking.",
      "Treat co-location of AI frameworks with C2 servers (Vshell, Cobalt Strike, Adaptix C2) as a strong indicator of malicious infrastructure.",
      "Factor into threat models that agentic attacks may come from hundreds of independent operators rather than a few known groups."
    ],
    "why_it_matters": "Agentic AI frameworks are spreading rapidly among threat actors, and publicly reported campaigns are only the visible part. Internet-scan data gives defenders a way to find such infrastructure proactively.",
    "source_note": "The Censys website was not reachable from the collector environment; the summary is based on Infosecurity Magazine's 6 Nov 2026 coverage of the 5 Nov 2026 Censys report and other trade media. An exposed console does not prove that every host is used maliciously."
  }
});
