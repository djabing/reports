RDB.add({
  "id": "2026-11-unit42-optimjack-supply-chain",
  "vendor": "unit42",
  "title": "Borrowed Code, Real Consequences: What OPTIMJACK Teaches Us",
  "title_ru": "OPTIMJACK: через уязвимость Optimizely вредоносный JavaScript попал на сайты как минимум 178 организаций",
  "url": "https://unit42.paloaltonetworks.com/optimjack-supply-chain-attack/",
  "pdf_url": "",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "other",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "цепочка поставок",
    "веб-скимминг",
    "JavaScript",
    "криптовалюта",
    "iOS"
  ],
  "sectors": [
    "СМИ",
    "Финансы",
    "ИТ"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Unit 42 разобрала кампанию OPTIMJACK: 16 ноября 2026 г. атакующий через уязвимость платформы Optimizely Web Experimentation внедрил вредоносный JavaScript в проекты клиентов, и код с легитимного CDN Optimizely получили посетители сайтов как минимум 178 организаций. Скрипт подменял криптокошельки, крал данные карт и пытался доставить эксплойт-киты на iPhone и iPad.",
  "summary": "Вредоносный код размещался в поле Project JavaScript клиентских проектов и раздавался с собственного CDN Optimizely под его сертификатом, поэтому выглядел доверенным и для владельцев сайтов, и для посетителей. В браузере жертвы скрипт подменял скопированные адреса криптокошельков на адреса атакующего, собирал данные платёжных карт из форм оформления заказа и пытался доставить на устройства Apple эксплойт-киты Coruna и DarkSword. Среди затронутых — известные бренды из СМИ, технологий и финансовых услуг. Optimizely закрыла уязвимость рано утром 17 ноября, удалила внедрённый код и защитила затронутые аккаунты. Атрибуция и CVE не приводятся.",
  "key_findings": [
    "Атака на поставщика маркетинговой/экспериментальной платформы мгновенно распространила вредоносный код на сайты как минимум 178 организаций.",
    "Код доставлялся с легитимного CDN Optimizely под его сертификатом — признаки доверия не помогли его распознать.",
    "Полезная нагрузка совмещала подмену криптокошельков, веб-скимминг карт и попытку эксплуатации iOS/iPadOS через Coruna и DarkSword.",
    "Окно атаки — менее суток: внедрение 16 ноября, исправление и очистка ранним утром 17 ноября."
  ],
  "stats": [
    {
      "value": "178+",
      "label": "организаций, чьи посетители получили вредоносный код"
    },
    {
      "value": "<1 суток",
      "label": "от внедрения до исправления"
    },
    {
      "value": "2",
      "label": "эксплойт-кита для iOS (Coruna, DarkSword)"
    }
  ],
  "actors": [],
  "malware": [
    "Coruna",
    "DarkSword"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1195.002",
      "name": "Supply Chain Compromise: Compromise Software Supply Chain"
    },
    {
      "id": "T1189",
      "name": "Drive-by Compromise"
    },
    {
      "id": "T1115",
      "name": "Clipboard Data"
    },
    {
      "id": "T1056.003",
      "name": "Input Capture: Web Portal Capture"
    }
  ],
  "recommendations": [
    "Проверить все изменения проектов Optimizely за период присутствия вредоносного кода.",
    "Считать потенциально скомпрометированными платёжные данные, введённые на затронутых страницах оформления заказа.",
    "Убрать необязательные маркетинговые, аналитические и A/B-теги со страниц аутентификации и оплаты; выносить сбор платежей в изолированные кросс-доменные iframe.",
    "Относиться к любому стороннему скрипту на сайте как к собственному производственному коду."
  ],
  "why_it_matters": "Сторонние скрипты аналитики и экспериментов выполняются с полными правами на страницах оплаты; компрометация одного SaaS-поставщика превращается в массовый веб-скимминг у сотен клиентов.",
  "source_note": "Выжимка по первоисточнику — публикации Unit 42 (Palo Alto Networks) от 17.11.2026. Атакующий, CVE и число пострадавших посетителей не указаны.",
  "en": {
    "tldr": "Unit 42 analysed the OPTIMJACK campaign: on 16 November 2026 an attacker exploited a vulnerability in the Optimizely Web Experimentation platform to inject malicious JavaScript into customer projects, and the code served from Optimizely's legitimate CDN reached visitors of at least 178 organisations. The script swapped crypto wallet addresses, stole card data and tried to deliver exploit kits to iPhones and iPads.",
    "summary": "The malicious code was placed in the Project JavaScript field of customer projects and served from Optimizely's own CDN under its certificate, so it looked trustworthy to both site owners and visitors. In the victim's browser the script replaced copied crypto wallet addresses with the attacker's, harvested payment card details from checkout forms and attempted to deliver the Coruna and DarkSword exploit kits to Apple devices. Those affected include well-known media, technology and financial services brands. Optimizely patched the flaw early on 17 November, removed the injected code and secured affected accounts. No attribution or CVE is given.",
    "key_findings": [
      "An attack on a marketing/experimentation platform vendor instantly spread malicious code to the sites of at least 178 organisations.",
      "The code was delivered from Optimizely's legitimate CDN under its certificate — trust signals did not help to spot it.",
      "The payload combined crypto wallet swapping, card skimming and an attempt to exploit iOS/iPadOS via Coruna and DarkSword.",
      "The attack window was under a day: injection on 16 November, fix and cleanup early on 17 November."
    ],
    "stats": [
      {
        "value": "178+",
        "label": "organisations whose visitors received the malicious code"
      },
      {
        "value": "<1 day",
        "label": "from injection to fix"
      },
      {
        "value": "2",
        "label": "iOS exploit kits (Coruna, DarkSword)"
      }
    ],
    "recommendations": [
      "Audit all Optimizely project changes made while the malicious code was present.",
      "Treat payment data entered on affected checkout pages as potentially compromised.",
      "Strip non-essential marketing, analytics and A/B tags from authentication and payment pages; isolate payment collection in hardened cross-origin iframes.",
      "Treat any third-party script running on your site as your own production code."
    ],
    "why_it_matters": "Third-party analytics and experimentation scripts run with full privileges on payment pages; compromising a single SaaS vendor becomes mass web skimming across hundreds of customers.",
    "source_note": "Summary based on the primary source — Unit 42 (Palo Alto Networks) post of 17 Nov 2026. The attacker, CVE and number of affected visitors are not stated."
  }
});
