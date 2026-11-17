RDB.add({
  "id": "2026-11-lumen-defender-threatscape-ciso-update",
  "vendor": "lumen",
  "title": "2026 Defender Threatscape Report: CISO Update",
  "title_ru": "Lumen Defender Threatscape 2026: обновление для CISO",
  "url": "https://www.lumen.com/en-us/resources/2026-threat-intelligence-report.html",
  "pdf_url": "",
  "published": "2026-11-10",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "landscape",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "сетевая телеметрия",
    "периметр",
    "прокси",
    "уязвимости",
    "ботнеты"
  ],
  "sectors": [
    "Телеком",
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Black Lotus Labs: тренды начала года ускорились — атакующие начинают эксплуатировать новую уязвимость в течение 24 часов, а за 72 часа к атаке подключаются 100+ серверов. В среднем почти 4000 брутфорс-атак и сканеров в день.",
  "summary": "Ноябрьское обновление апрельского отчёта Lumen. Главная идея — самые ценные сигналы об угрозах находятся в сети, а не на конечных точках: атакующие нацелены на пограничные устройства (маршрутизаторы, VPN-шлюзы, межсетевые экраны), которые обходят EDR, и используют «резидентно замаскированные» прокси из взломанных домашних и офисных устройств.",
  "key_findings": [
    "Эксплуатация новых уязвимостей начинается в течение 24 часов.",
    "За 72 часа к атаке подключаются более 100 серверов.",
    "Почти 4000 брутфорс-атак и эксплойт-сканеров в день (I полугодие 2026).",
    "Главная цель — пограничные сетевые устройства, обходящие EDR.",
    "Рост «резидентных» прокси на взломанных SOHO-устройствах."
  ],
  "stats": [
    {
      "value": "24 ч",
      "label": "до начала эксплуатации"
    },
    {
      "value": "100+",
      "label": "серверов атаки за 72 ч"
    },
    {
      "value": "~4000",
      "label": "атак и сканеров в день"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1110",
      "name": "Brute Force"
    },
    {
      "id": "T1090.003",
      "name": "Multi-hop Proxy"
    }
  ],
  "recommendations": [
    "Сократить окно патчинга пограничных устройств до часов.",
    "Добавить сетевую телеметрию (NetFlow, DNS) к EDR.",
    "Отслеживать трафик с резидентных IP-адресов как возможный прокси."
  ],
  "why_it_matters": "Взгляд крупного магистрального провайдера: показывает скорость массовой эксплуатации, недоступную телеметрии EDR.",
  "source_note": "Выжимка по пресс-релизам Lumen и обзорам (TelecomTV, CIO Influence).",
  "en": {
    "tldr": "Black Lotus Labs: early-year trends have accelerated — attackers start exploiting a new vulnerability within 24 hours, and within 72 hours 100+ servers join the attack. On average almost 4,000 brute-force attacks and scanners per day.",
    "summary": "November update to Lumen's April report. The main idea: the most valuable threat signals are in the network, not on endpoints. Attackers target edge devices (routers, VPN gateways, firewalls) that bypass EDR and use 'residentially disguised' proxies built from compromised home and office devices.",
    "key_findings": [
      "Exploitation of new vulnerabilities starts within 24 hours.",
      "Within 72 hours more than 100 servers join the attack.",
      "Almost 4,000 brute-force attacks and exploit scanners per day (H1 2026).",
      "The main target is edge network devices that bypass EDR.",
      "Growth of 'residential' proxies on compromised SOHO devices."
    ],
    "stats": [
      {
        "value": "24 h",
        "label": "until exploitation starts"
      },
      {
        "value": "100+",
        "label": "attack servers within 72 h"
      },
      {
        "value": "~4,000",
        "label": "attacks and scanners per day"
      }
    ],
    "recommendations": [
      "Shorten the patching window for edge devices to hours.",
      "Add network telemetry (NetFlow, DNS) to EDR.",
      "Track traffic from residential IP addresses as possible proxies."
    ],
    "why_it_matters": "A backbone provider's view: shows the speed of mass exploitation invisible to EDR telemetry.",
    "source_note": "Summary based on Lumen press releases and coverage (TelecomTV, CIO Influence)."
  }
});
