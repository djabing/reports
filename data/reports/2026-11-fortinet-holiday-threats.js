RDB.add({
  "id": "2026-11-fortinet-holiday-threats",
  "vendor": "fortinet",
  "title": "Holiday Season Cyber Threats Report 2026",
  "title_ru": "FortiGuard Labs: киберугрозы сезона праздничных распродаж 2026",
  "url": "https://www.fortinet.com/blog/threat-research/fake-delivery-notices-stolen-logins-and-malicious-domains-threaten-holiday-shoppers",
  "pdf_url": "https://www.fortinet.com/content/dam/fortinet/assets/threat-reports/threat-report-holiday-season-cyber-2026.pdf",
  "published": "2026-11-24",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "phishing",
  "importance": 2,
  "tier": "analytics",
  "lang": "en",
  "tags": [
    "фишинг",
    "мошенничество",
    "инфостилеры",
    "даркнет",
    "эксплойты",
    "ИИ"
  ],
  "sectors": [
    "Ритейл",
    "Частные пользователи"
  ],
  "regions": [
    "Глобально",
    "США"
  ],
  "actors": [],
  "malware": [],
  "cves": [
    "CVE-2026-75650",
    "CVE-2026-87902",
    "CVE-2026-71362",
    "CVE-2026-48356"
  ],
  "ttps": [
    "T1583.001",
    "T1566",
    "T1555.003",
    "T1539",
    "T1190"
  ],
  "tldr": "FortiGuard Labs выявила более 24 тыс. недавно зарегистрированных доменов с праздничной и торговой тематикой, из них более 4,4 тыс. — вредоносные. На теневых площадках за август–октябрь 2026 года собрано около 1,72 млн записей стилер-логов, связанных с крупными площадками электронной коммерции.",
  "summary": "Отчёт FortiGuard Labs к сезону Black Friday и Cyber Monday анализирует регистрацию доменов, утечки учётных данных и предложения теневого рынка, нацеленные на покупателей и интернет-магазины. Самая частая тема новых доменов — доставка и посылки (34,88%), тогда как Black Friday встречается лишь в 1,64%. Найдены поддельные сайты служб доставки (DHL, UPS, FedEx, USPS) и копия Walmart с «акциями» Black Friday. Среди вредоносных доменов лидируют зоны .com (45,77%) и .xyz (19,21%). На российской теневой площадке за август–октябрь собрано около 1,72 млн стилер-логов по семи площадкам, из них 1,49 млн — Amazon. На форумах продаются фишинговые наборы с обходом MFA, сервисы проверки карт, «возвраты как услуга», подмена Caller ID и SMS, доступ к магазинам на Magento, PrestaShop, WordPress и OpenCart, а также неограниченные LLM для социальной инженерии. Отдельно перечислены критические уязвимости Adobe Commerce/Magento, WooCommerce и PHP, часть из которых уже эксплуатируется.",
  "key_findings": [
    "Более 24 тыс. новых доменов с праздничной тематикой, из них более 4,4 тыс. признаны вредоносными.",
    "Доставка и посылки — самая распространённая тема (34,88% доменов); Black Friday — лишь 1,64%.",
    "Около 1,72 млн стилер-логов по семи площадкам электронной коммерции за август–октябрь 2026 года, из них около 1,49 млн — Amazon.",
    "На форумах рекламируются фишинговые наборы с обходом MFA, сервисы проверки карт, «возвраты как услуга», подмена Caller ID и SMS.",
    "Продаются предполагаемые zero-day и доступ к магазинам на Magento, PrestaShop, WordPress и OpenCart; ряд уязвимостей Adobe Commerce/Magento подтверждённо эксплуатируется.",
    "Злоумышленники ищут неограниченные LLM и фреймворки оркестрации ИИ-агентов для локализованной социальной инженерии."
  ],
  "stats": [
    {
      "value": "4,400+",
      "label": "вредоносных доменов с праздничной тематикой"
    },
    {
      "value": "24,000+",
      "label": "новых праздничных доменов"
    },
    {
      "value": "1.72M",
      "label": "стилер-логов по площадкам e-commerce"
    },
    {
      "value": "34.88%",
      "label": "доменов с темой доставки"
    }
  ],
  "recommendations": [
    "Добавить выявленные вредоносные домены в DNS-фильтрацию, почтовую защиту и веб-шлюзы.",
    "Интернет-магазинам — срочно закрыть критические уязвимости Adobe Commerce/Magento, WooCommerce и PHP, ограничить доступ к админ-панелям и следить за изменениями страниц оплаты.",
    "Отслеживать утечки учётных данных и сессионных cookie клиентов в стилер-логах и инвалидировать скомпрометированные сессии.",
    "Предупреждать покупателей о запросах оплаты «за доставку» и о незнакомых промо-ссылках."
  ],
  "why_it_matters": "Отчёт показывает, что в сезон распродаж основная угроза — не экзотические техники, а массовые фишинговые домены, кража сессий через инфостилеры и компрометация CMS интернет-магазинов.",
  "source_note": "Выжимка по первоисточнику: PDF отчёта FortiGuard Labs (37 стр., ноябрь 2026) и блог Fortinet от 24.11.2026. Данные основаны на телеметрии и мониторинге теневых площадок Fortinet; предложения на форумах не всегда проверены.",
  "en": {
    "tldr": "FortiGuard Labs identified more than 24,000 newly registered holiday- and shopping-themed domains, of which more than 4,400 were malicious. It also collected about 1.72 million stealer log entries tied to major e-commerce platforms on underground markets between August and October 2026.",
    "summary": "The FortiGuard Labs report ahead of Black Friday and Cyber Monday analyses domain registrations, credential leaks and underground market offerings targeting shoppers and online stores. Parcel and delivery was the most common theme in new domains (34.88%), while Black Friday terms appeared in only 1.64%. Researchers found fake carrier sites (DHL, UPS, FedEx, USPS) and a Walmart clone advertising Black Friday deals. Among malicious domains, .com (45.77%) and .xyz (19.21%) led. On a Russian underground marketplace, about 1.72 million stealer log entries across seven platforms were collected for August to October, 1.49 million of them for Amazon. Forums advertise MFA-bypass phishing kits, card-checking services, refund-as-a-service, caller ID and SMS spoofing, access to Magento, PrestaShop, WordPress and OpenCart stores, and unrestricted LLMs for social engineering. The report also lists critical Adobe Commerce/Magento, WooCommerce and PHP vulnerabilities, some already exploited.",
    "key_findings": [
      "More than 24,000 new holiday-themed domains, of which more than 4,400 were classified as malicious.",
      "Parcel and delivery was the most prevalent theme (34.88% of domains); Black Friday only 1.64%.",
      "About 1.72 million stealer log entries for seven e-commerce platforms in August to October 2026, about 1.49 million of them for Amazon.",
      "Forums advertise MFA-bypass phishing kits, card-checking services, refund-as-a-service, and caller ID and SMS spoofing.",
      "Alleged zero-days and access to Magento, PrestaShop, WordPress and OpenCart stores are sold; several Adobe Commerce/Magento vulnerabilities are confirmed exploited.",
      "Threat actors seek unrestricted LLMs and AI agent orchestration frameworks for localised social engineering."
    ],
    "stats": [
      {
        "value": "4,400+",
        "label": "malicious holiday-themed domains"
      },
      {
        "value": "24,000+",
        "label": "newly registered holiday domains"
      },
      {
        "value": "1.72M",
        "label": "e-commerce stealer log entries"
      },
      {
        "value": "34.88%",
        "label": "domains with delivery themes"
      }
    ],
    "recommendations": [
      "Add identified malicious domains to DNS filtering, email security and secure web gateways.",
      "Online retailers should urgently patch critical Adobe Commerce/Magento, WooCommerce and PHP flaws, restrict admin access and monitor checkout pages for changes.",
      "Monitor stealer logs for leaked customer credentials and session cookies and invalidate compromised sessions.",
      "Warn shoppers about delivery-fee requests and unfamiliar promotional links."
    ],
    "why_it_matters": "The report shows that the main holiday-season threat is not exotic techniques but mass phishing domains, session theft via infostealers and compromise of online store CMS platforms.",
    "source_note": "Summary based on the primary source: the FortiGuard Labs report PDF (37 pages, November 2026) and Fortinet's 24 November 2026 blog post. Data comes from Fortinet telemetry and underground monitoring; forum offerings are not always verified."
  }
});
