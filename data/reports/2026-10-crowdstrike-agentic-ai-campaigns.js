RDB.add({
  "id": "2026-10-crowdstrike-agentic-ai-campaigns",
  "vendor": "crowdstrike",
  "title": "CrowdStrike Counter Adversary Operations Uncovers New 2026 Agentic AI Campaigns",
  "title_ru": "CrowdStrike: новые кампании с агентным ИИ в 2026 году",
  "url": "https://www.crowdstrike.com/en-us/blog/crowdstrike-uncovers-new-agentic-ai-campaigns/",
  "pdf_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Agentic-AI-Adversary-Operations.pdf",
  "published": "2026-10-21",
  "date_precision": "day",
  "added": "2026-11-15",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "analytics",
  "tags": [
    "ИИ",
    "агентные атаки",
    "облако",
    "Kubernetes",
    "здравоохранение"
  ],
  "sectors": [
    "Здравоохранение",
    "Облачные сервисы",
    "Все отрасли"
  ],
  "regions": [
    "Глобально",
    "Аргентина"
  ],
  "tldr": "CrowdStrike описала четырёх ранее неизвестных злоумышленников, проводивших вторжения агентным ИИ почти без участия человека. Главный ограничитель масштабирования таких атак — бюджет на токены, а не сложность разработки.",
  "summary": "Аналитики CrowdStrike нашли оставленные в открытых директориях наступательные агентные фреймворки четырёх группировок (активность май–август 2026). Двое использовали сложные «обвязки» (harness), двое — простые, но и последние взломали многочисленные организации. Все четыре обходили защитные механизмы моделей, выдавая вторжения за авторизованный пентест. CrowdStrike ожидает, что за 12 месяцев объём и сложность агентных вторжений почти наверняка вырастут, а малоопытные злоумышленники смогут действовать в масштабе организованной преступности.",
  "key_findings": [
    "Четыре ранее неизвестных актора проводили вторжения агентным ИИ с минимальным участием человека.",
    "Ограничение масштабирования — бюджет токенов, а не инженерная сложность.",
    "Один из акторов взломал не менее 15 медицинских организаций в Аргентине.",
    "Агент использовал облачный IAM-токен с правами администратора кластера Kubernetes и получил доступ к 726 базам данных арендаторов.",
    "Все четыре актора обходили ограничения моделей, представляя атаки как авторизованный пентест."
  ],
  "stats": [
    {
      "value": "4",
      "label": "новых агентных актора"
    },
    {
      "value": "15+",
      "label": "взломанных клиник в Аргентине"
    },
    {
      "value": "726",
      "label": "БД арендаторов через один IAM-токен"
    },
    {
      "value": "12 мес.",
      "label": "горизонт ожидаемого роста"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1078.004",
      "name": "Cloud Accounts"
    },
    {
      "id": "T1613",
      "name": "Container and Resource Discovery"
    },
    {
      "id": "T1530",
      "name": "Data from Cloud Storage"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    }
  ],
  "recommendations": [
    "Минимизировать права облачных токенов и сервисных учётных записей (особенно cluster-admin в Kubernetes).",
    "Сократить время реагирования: агентные атаки идут с машинной скоростью.",
    "Отслеживать аномально быстрые серии разведки и эксплуатации от одного источника.",
    "Проверять сегментацию мультиарендных сред и баз данных."
  ],
  "why_it_matters": "Первые подробные данные о реальных, а не экспериментальных агентных вторжениях: показывает, что порог входа для масштабных атак резко снижается.",
  "source_note": "Выжимка по блогу CrowdStrike и обзорам Cybersecurity Dive/CIO Dive; оценки темпов роста в СМИ расходятся.",
  "en": {
    "tldr": "CrowdStrike described four previously unknown adversaries carrying out intrusions with agentic AI and almost no human involvement. The main limit on scaling such attacks is the token budget, not development complexity.",
    "summary": "CrowdStrike analysts found offensive agentic frameworks of four groups left in open directories (activity May–August 2026). Two used sophisticated harnesses and two simple ones, yet the latter also breached numerous organisations. All four bypassed model safeguards by presenting intrusions as authorised penetration tests. CrowdStrike expects the volume and sophistication of agentic intrusions to almost certainly grow over 12 months, letting low-skilled actors operate at the scale of organised crime.",
    "key_findings": [
      "Four previously unknown actors carried out intrusions with agentic AI and minimal human involvement.",
      "The scaling constraint is the token budget, not engineering complexity.",
      "One actor breached at least 15 healthcare organisations in Argentina.",
      "An agent used a cloud IAM token with Kubernetes cluster-admin rights and accessed 726 tenant databases.",
      "All four actors bypassed model restrictions by presenting attacks as authorised pentests."
    ],
    "stats": [
      {
        "value": "4",
        "label": "new agentic actors"
      },
      {
        "value": "15+",
        "label": "clinics breached in Argentina"
      },
      {
        "value": "726",
        "label": "tenant DBs via one IAM token"
      },
      {
        "value": "12 mo.",
        "label": "horizon of expected growth"
      }
    ],
    "recommendations": [
      "Minimise the permissions of cloud tokens and service accounts (especially cluster-admin in Kubernetes).",
      "Shorten response times: agentic attacks run at machine speed.",
      "Watch for abnormally fast reconnaissance and exploitation sequences from a single source.",
      "Check segmentation of multi-tenant environments and databases."
    ],
    "why_it_matters": "The first detailed data on real rather than experimental agentic intrusions: shows the bar for large-scale attacks is dropping sharply.",
    "source_note": "Summary based on the CrowdStrike blog and Cybersecurity Dive/CIO Dive coverage; growth estimates differ between media outlets."
  }
});
