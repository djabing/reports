RDB.add({
  "id": "2026-11-elastic-agentic-offensive-frameworks",
  "vendor": "elastic",
  "title": "Inside the loop: Five AI attack frameworks that never ask permission",
  "title_ru": "Пять агентных ИИ-фреймворков для атак (ARTEX, CyberStrikeAI, Cairn, PentAGI, HexStrike): возможности, телеметрия и обнаружение",
  "url": "https://www.elastic.co/security-labs/threat-command/agentic-offensive-frameworks-detection-artex",
  "pdf_url": "",
  "published": "2026-11-13",
  "date_precision": "day",
  "added": "2026-11-19",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "агентные атаки",
    "ИИ",
    "обнаружение"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Elastic Security Labs изучила пять открытых агентных фреймворков для атак с более чем 60 тыс. звёзд на GitHub: ни один по умолчанию не проверяет авторизацию в коде, автономный режим включён по умолчанию, а индикаторы быстро меняются от релиза к релизу. Авторы советуют строить обнаружение на поведении — темпе и последовательности действий одной идентичности.",
  "summary": "ARTEX — событийный планировщик с параллельными исполнителями и расширением браузера, записывающим аутентифицированную сессию оператора; CyberStrikeAI — полноценная консоль оператора с собственными имплантами, C2 и менеджером веб-шеллов; Cairn делегирует задачи ИИ-агентам для разработки в контейнерах Kali; PentAGI при «зависании» агента отвечает за пользователя от его имени; HexStrike не имеет своей модели и отдаёт около 150 функций инструментов ИИ-ассистенту оператора через MCP. ARTEX, Cairn, HexStrike и PentAGI наблюдались в реагировании на инциденты Google и Mandiant, а Microsoft связала ARTEX со Storm-0940. Три фреймворка «требуют» авторизацию только в промпте модели; единственные ограничения целей по умолчанию — блок-листы госдоменов (ARTEX, CyberStrikeAI) и доменов образования (ARTEX). ARTEX и CyberStrikeAI меняют маршрут при блокировке — прокси, User-Agent, вплоть до бесплатных прокси и Tor. Статья приводит характерные индикаторы каждого фреймворка и ES|QL-запрос для поиска адресов, использующих три и более «семейства» клиентских инструментов.",
  "key_findings": [
    "Ни один из пяти фреймворков по умолчанию не проверяет авторизацию в коде; три полагаются только на текст промпта.",
    "Автономность по умолчанию: в CyberStrikeAI режим подтверждения выключен, Cairn отключает подтверждения в двух из трёх адаптеров исполнителей.",
    "Разработка идёт быстро (около 390 коммитов ARTEX за ~10,5 недели, более 2400 у CyberStrikeAI за первый год), поэтому строки и имена файлов устаревают — устойчивы лишь поведенческие признаки.",
    "Блокировка IP без отзыва сессий и токенов неэффективна: фреймворки переключают прокси и User-Agent."
  ],
  "stats": [
    {
      "value": "60 000+",
      "label": "звёзд на GitHub у пяти фреймворков в сумме"
    },
    {
      "value": "~150",
      "label": "функций инструментов HexStrike, доступных через MCP"
    },
    {
      "value": "2–25 с",
      "label": "длительность всплесков исполнения ARTEX"
    },
    {
      "value": "4 из 5",
      "label": "фреймворков замечены в реальных инцидентах (по данным Google и Mandiant)"
    }
  ],
  "actors": [
    "Storm-0940"
  ],
  "malware": [
    "ARTEX",
    "CyberStrikeAI",
    "Cairn",
    "PentAGI",
    "HexStrike"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1588.002",
      "name": "Obtain Capabilities: Tool"
    },
    {
      "id": "T1505.003",
      "name": "Server Software Component: Web Shell"
    },
    {
      "id": "T1090",
      "name": "Proxy"
    },
    {
      "id": "T1558.003",
      "name": "Steal or Forge Kerberos Tickets: Kerberoasting"
    }
  ],
  "recommendations": [
    "Заранее определить детектирования высокой достоверности, запускающие автоматическую изоляцию.",
    "Сочетать блокировку адреса с отзывом сессий и токенов идентичности и проверять, что следующий запрос отклонён.",
    "Измерять темп и последовательность действий по каждой идентичности в длинных окнах, учитывая легитимную автоматизацию.",
    "Минимизировать права ролей и сервисных идентичностей, убрать секреты из доступных мест и использовать короткоживущие учётные данные."
  ],
  "why_it_matters": "Открытые агентные фреймворки делают автономные атаки доступными широкому кругу злоумышленников, и защите приходится опираться на поведенческое обнаружение, а не на быстро устаревающие индикаторы.",
  "source_note": "Выжимка по первоисточнику — публикации Elastic Security Labs от 13.11.2026. Сопоставление с техниками MITRE ATT&CK выполнено редакцией портала: в статье ID техник не приводятся.",
  "en": {
    "tldr": "Elastic Security Labs studied five open-source agentic offensive frameworks with more than 60,000 GitHub stars combined: none enforces authorisation in code by default, autonomy is on by default, and indicators change quickly from release to release. The authors advise building detection on behaviour — the tempo and sequence of actions per identity.",
    "summary": "ARTEX is an event-driven planner with parallel workers and a browser extension that records the operator's authenticated session; CyberStrikeAI is a full operator console with its own implants, C2 and web shell manager; Cairn delegates tasks to coding agents in Kali containers; PentAGI replies in the user's voice when an agent stalls; HexStrike has no model of its own and exposes about 150 tool functions to the operator's AI assistant via MCP. ARTEX, Cairn, HexStrike and PentAGI were observed in Google and Mandiant incident response, and Microsoft linked ARTEX to Storm-0940. Three frameworks 'require' authorisation only in the model prompt; the only default target restrictions are government-domain blocklists (ARTEX, CyberStrikeAI) and an education-domain blocklist (ARTEX). ARTEX and CyberStrikeAI change route when blocked — proxies, User-Agents, and eventually free proxies and Tor. The article lists characteristic indicators for each framework and an ES|QL hunt for addresses using three or more client tool families.",
    "key_findings": [
      "None of the five frameworks enforces authorisation in code by default; three rely only on prompt text.",
      "Autonomy by default: CyberStrikeAI ships with approval mode off, and Cairn disables approvals in two of three worker adapters.",
      "Development is fast (about 390 ARTEX commits in ~10.5 weeks, over 2,400 for CyberStrikeAI in its first year), so strings and file names go stale — only behavioural signs persist.",
      "Blocking an IP without revoking sessions and tokens is ineffective: the frameworks switch proxies and User-Agents."
    ],
    "stats": [
      {
        "value": "60,000+",
        "label": "combined GitHub stars of the five frameworks"
      },
      {
        "value": "~150",
        "label": "HexStrike tool functions exposed via MCP"
      },
      {
        "value": "2–25 s",
        "label": "duration of ARTEX execution bursts"
      },
      {
        "value": "4 of 5",
        "label": "frameworks seen in real incidents (per Google and Mandiant)"
      }
    ],
    "recommendations": [
      "Decide in advance which high-confidence detections trigger automated containment.",
      "Pair any address block with revoking the identity's sessions and tokens, and verify the next request fails.",
      "Measure tempo and sequence of actions per identity over long windows, baselining legitimate automation.",
      "Minimise permissions of roles and service identities, remove secrets from readable locations and use short-lived credentials."
    ],
    "why_it_matters": "Open-source agentic frameworks make autonomous attacks available to a wide range of attackers, and defenders have to rely on behavioural detection rather than quickly outdated indicators.",
    "source_note": "Summary based on the primary source — Elastic Security Labs post of 13 Nov 2026. The MITRE ATT&CK mapping was done by the portal editors: the article gives no technique IDs."
  }
});
