RDB.add({
  "id": "2026-11-infratrust-pulse-november",
  "vendor": "eclypsium",
  "title": "InfraTrust Pulse November 2026: What to Patch First",
  "title_ru": "InfraTrust Pulse: приоритеты исправления инфраструктурных уязвимостей, ноябрь 2026",
  "url": "https://pulse.infra-trust.org/november-2026/",
  "pdf_url": "",
  "published": "2026-11-25",
  "date_precision": "day",
  "added": "2026-11-26",
  "type": "vulnerabilities",
  "importance": 3,
  "tier": "analytics",
  "lang": "en",
  "tags": [
    "уязвимости"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "tldr": "За 15 октября — 19 ноября отслежены 373 новых бюллетеня безопасности от 23 поставщиков инфраструктуры. 98 бюллетеней имеют максимальную критичность Critical: CVSS не ниже 9,0.",
  "summary": "За 15 октября — 19 ноября отслежены 373 новых бюллетеня безопасности от 23 поставщиков инфраструктуры. 98 бюллетеней имеют максимальную критичность Critical: CVSS не ниже 9,0. 38 бюллетеней включают CVE из каталога подтверждённо эксплуатируемых уязвимостей CISA KEV. В 33 из этих 38 бюллетеней эксплуатируемый дефект связан со встроенным сторонним компонентом, а не собственным кодом поставщика. Установка обновления не удаляет уже внедрённый веб-шелл или бэкдор: ранее доступные из интернета устройства требуют проверки компрометации. Первичный отчёт InfraTrust / Eclypsium от 25.11.2026, Paul Asadoorian и Chase Snyder. Открытый HTML, отдельный PDF не найден. Числа относятся к бюллетеням поставщиков: один CVE может встречаться в нескольких бюллетенях; это не число уникальных эксплуатируемых CVE или инцидентов. Состояние исправлений меняется после публикации.",
  "key_findings": [
    "За 15 октября — 19 ноября отслежены 373 новых бюллетеня безопасности от 23 поставщиков инфраструктуры.",
    "98 бюллетеней имеют максимальную критичность Critical: CVSS не ниже 9,0.",
    "38 бюллетеней включают CVE из каталога подтверждённо эксплуатируемых уязвимостей CISA KEV.",
    "В 33 из этих 38 бюллетеней эксплуатируемый дефект связан со встроенным сторонним компонентом, а не собственным кодом поставщика.",
    "Установка обновления не удаляет уже внедрённый веб-шелл или бэкдор: ранее доступные из интернета устройства требуют проверки компрометации."
  ],
  "stats": [
    {
      "value": "373",
      "label": "новых бюллетеня от 23 поставщиков"
    },
    {
      "value": "98",
      "label": "бюллетеней Critical"
    },
    {
      "value": "33/38",
      "label": "бюллетеней с KEV: дефект стороннего компонента"
    }
  ],
  "recommendations": [
    "Закрыть публичный доступ к административным интерфейсам и сегментировать управление.",
    "Приоритизировать исправления по эксплуатации и экспозиции, проверять ранее открытые устройства на компрометацию.",
    "Отслеживать встроенные компоненты и сроки выпуска исправленных сборок поставщиками."
  ],
  "why_it_matters": "Связывает безопасность сетевой инфраструктуры с цепочкой поставок компонентов, управлением экспозицией и проверкой следов атаки после обновления.",
  "source_note": "Первичный отчёт InfraTrust / Eclypsium от 25.11.2026, Paul Asadoorian и Chase Snyder. Открытый HTML, отдельный PDF не найден. Числа относятся к бюллетеням поставщиков: один CVE может встречаться в нескольких бюллетенях; это не число уникальных эксплуатируемых CVE или инцидентов. Состояние исправлений меняется после публикации.",
  "en": {
    "tldr": "From October 15 to November 19, InfraTrust tracked 373 new security advisories from 23 infrastructure vendors. 98 advisories were rated Critical, with a CVSS score of at least 9.0.",
    "summary": "From October 15 to November 19, InfraTrust tracked 373 new security advisories from 23 infrastructure vendors. 98 advisories were rated Critical, with a CVSS score of at least 9.0. 38 advisories included a CVE listed in the CISA Known Exploited Vulnerabilities catalog. In 33 of those 38 advisories, the exploited flaw was in a bundled component rather than vendor-written code. Installing a patch does not remove an existing webshell or backdoor; previously exposed appliances require compromise assessment. InfraTrust / Eclypsium primary report dated 25 November 2026 by Paul Asadoorian and Chase Snyder. Open HTML; no separate PDF found. Counts refer to vendor advisories: a CVE may appear in several advisories, so these are not counts of unique exploited CVEs or incidents. Patch status changes after publication.",
    "key_findings": [
      "From October 15 to November 19, InfraTrust tracked 373 new security advisories from 23 infrastructure vendors.",
      "98 advisories were rated Critical, with a CVSS score of at least 9.0.",
      "38 advisories included a CVE listed in the CISA Known Exploited Vulnerabilities catalog.",
      "In 33 of those 38 advisories, the exploited flaw was in a bundled component rather than vendor-written code.",
      "Installing a patch does not remove an existing webshell or backdoor; previously exposed appliances require compromise assessment."
    ],
    "stats": [
      {
        "value": "373",
        "label": "new advisories from 23 vendors"
      },
      {
        "value": "98",
        "label": "Critical advisories"
      },
      {
        "value": "33/38",
        "label": "KEV-related advisories involving bundled components"
      }
    ],
    "recommendations": [
      "Remove public access to management interfaces and segment management networks.",
      "Prioritize by exploitation and exposure; investigate previously exposed devices for compromise.",
      "Track bundled components and vendor timelines for rebuilt, fixed releases."
    ],
    "why_it_matters": "Connects network infrastructure security with component supply chains, exposure management and post-patch compromise assessment.",
    "source_note": "InfraTrust / Eclypsium primary report dated 25 November 2026 by Paul Asadoorian and Chase Snyder. Open HTML; no separate PDF found. Counts refer to vendor advisories: a CVE may appear in several advisories, so these are not counts of unique exploited CVEs or incidents. Patch status changes after publication."
  }
});
