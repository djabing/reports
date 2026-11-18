RDB.add({
  "id": "2026-11-pt-trending-vulnerabilities-november",
  "vendor": "pt",
  "title": "Positive Technologies представила ноябрьский дайджест трендовых уязвимостей",
  "title_ru": "Трендовые уязвимости ноября 2026: PHP2Shell в PHP и 12-летняя RCE в GitLab",
  "url": "https://safe.cnews.ru/news/line/2026-11-18_positive_technologies_predstavila",
  "pdf_url": "",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "vulnerabilities",
  "lang": "ru",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "уязвимости",
    "трендовые уязвимости",
    "PHP",
    "GitLab",
    "RCE"
  ],
  "sectors": [
    "Кросс-отраслевой",
    "ИТ и разработка ПО"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Positive Technologies отнесла к трендовым три уязвимости удалённого выполнения кода без аутентификации: две в PHP (PHP2Shell, CVSS 9,2, уже эксплуатируются) и одну в GitLab CE/EE (CVSS 10,0), незамеченную 12 лет; в интернете доступно более 10 000 потенциально уязвимых экземпляров GitLab.",
  "summary": "CVE-2026-109618 и CVE-2026-109619 в PHP (PT-2026-118596/118597, CVSS 9,2) активно эксплуатируются: по данным Cloudflare, попытки атак исчислялись десятками тысяч в первые 45 минут после раскрытия PHP2Shell и сотнями тысяч через два часа; Check Point сообщила об атаках на организации в нескольких странах. Влияние на свои продукты подтвердили Palo Alto Networks, Check Point и Netgate, Coolify — все ветки 4.x. Исправления — PHP 8.5.12, 8.4.27, 8.3.36 и 8.2.35, минимальные патчи выпущены и для неподдерживаемых 7.4, 8.0 и 8.1; временные меры снижают риск лишь частично. CVE-2026-110264 в GitLab CE/EE (PT-2026-120800, CVSS 10,0) существует с версии 7.0 (2014 г.); эксплуатация не подтверждена, но опубликован демонстрационный код; по Shadowserver, онлайн более 10 000 потенциально уязвимых экземпляров. Исправления — 19.5.1, 19.4.3, 19.3.6, 19.2.9, 19.1.9, 19.0.10 и 18.11.13; GitLab.com и GitLab Dedicated уже защищены.",
  "key_findings": [
    "PHP2Shell (CVE-2026-109618, CVE-2026-109619) атаковали десятками тысяч попыток уже через 45 минут после раскрытия.",
    "Уязвимости PHP затрагивают продукты Palo Alto Networks, Check Point, Netgate и Coolify; PHP используется почти на 70% сайтов.",
    "RCE в GitLab CE/EE (CVE-2026-110264, CVSS 10,0) оставалась незамеченной 12 лет — с версии 7.0.",
    "Более 10 000 потенциально уязвимых экземпляров GitLab доступны из интернета; публичный демонстрационный код уже есть."
  ],
  "stats": [
    {
      "value": "3",
      "label": "трендовые уязвимости месяца"
    },
    {
      "value": "45 мин",
      "label": "до десятков тысяч попыток атак на PHP2Shell"
    },
    {
      "value": "10 000+",
      "label": "потенциально уязвимых GitLab онлайн"
    },
    {
      "value": "10,0",
      "label": "CVSS уязвимости GitLab"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [
    "CVE-2026-109618",
    "CVE-2026-109619",
    "CVE-2026-110264"
  ],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    }
  ],
  "recommendations": [
    "Срочно обновить PHP до 8.5.12, 8.4.27, 8.3.36, 8.2.35 (или применить минимальные патчи для 7.4–8.1) и проверить продукты вендоров, встраивающих PHP.",
    "Обновить self-managed GitLab до исправленных версий и при собственной сборке — обновить Ruby.",
    "Не рассчитывать на временные меры (отключение функций, ограничение запросов и памяти) вместо исправлений.",
    "Применить правила обнаружения GitLab и WAF-правила вендоров до установки обновлений."
  ],
  "why_it_matters": "Массовая эксплуатация PHP2Shell началась в первые минуты после раскрытия; окно для патчинга интернет-сервисов практически исчезло.",
  "source_note": "Выжимка по публикации CNews от 18.11.2026 на основе дайджеста Positive Technologies; данные о попытках атак приведены PT со ссылкой на Cloudflare, Check Point и Shadowserver.",
  "en": {
    "title": "Positive Technologies presents its November digest of trending vulnerabilities",
    "tldr": "Positive Technologies flagged three unauthenticated remote code execution vulnerabilities as trending: two in PHP (PHP2Shell, CVSS 9.2, already exploited) and one in GitLab CE/EE (CVSS 10.0) that went unnoticed for 12 years; more than 10,000 potentially vulnerable GitLab instances are online.",
    "summary": "CVE-2026-109618 and CVE-2026-109619 in PHP (PT-2026-118596/118597, CVSS 9.2) are actively exploited: according to Cloudflare, attack attempts reached tens of thousands within 45 minutes of the PHP2Shell disclosure and hundreds of thousands after two hours; Check Point reported attacks on organisations in several countries. Palo Alto Networks, Check Point and Netgate confirmed impact on their products, and Coolify on all 4.x branches. Fixes: PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35, with minimal patches also for unsupported 7.4, 8.0 and 8.1; interim measures reduce risk only partially. CVE-2026-110264 in GitLab CE/EE (PT-2026-120800, CVSS 10.0) has existed since version 7.0 (2014); exploitation is not confirmed, but demonstration code is public; per Shadowserver, over 10,000 potentially vulnerable instances are online. Fixes: 19.5.1, 19.4.3, 19.3.6, 19.2.9, 19.1.9, 19.0.10 and 18.11.13; GitLab.com and GitLab Dedicated are already protected.",
    "key_findings": [
      "PHP2Shell (CVE-2026-109618, CVE-2026-109619) drew tens of thousands of attack attempts within 45 minutes of disclosure.",
      "The PHP flaws affect products from Palo Alto Networks, Check Point, Netgate and Coolify; PHP runs on almost 70% of websites.",
      "The GitLab CE/EE RCE (CVE-2026-110264, CVSS 10.0) went unnoticed for 12 years — since version 7.0.",
      "More than 10,000 potentially vulnerable GitLab instances are internet-facing; public demonstration code already exists."
    ],
    "stats": [
      {
        "value": "3",
        "label": "trending vulnerabilities this month"
      },
      {
        "value": "45 min",
        "label": "to tens of thousands of PHP2Shell attack attempts"
      },
      {
        "value": "10,000+",
        "label": "potentially vulnerable GitLab instances online"
      },
      {
        "value": "10.0",
        "label": "CVSS of the GitLab flaw"
      }
    ],
    "recommendations": [
      "Urgently update PHP to 8.5.12, 8.4.27, 8.3.36, 8.2.35 (or apply minimal patches for 7.4-8.1) and check vendor products that embed PHP.",
      "Update self-managed GitLab to fixed versions and, for custom builds, update Ruby.",
      "Do not rely on interim measures (disabling functions, limiting requests and memory) instead of patches.",
      "Apply GitLab detection rules and vendor WAF rules until updates are installed."
    ],
    "why_it_matters": "Mass exploitation of PHP2Shell began within minutes of disclosure; the patching window for internet-facing services has practically disappeared.",
    "source_note": "Summary based on a CNews article of 18 Nov 2026 covering the Positive Technologies digest; attack attempt figures are cited by PT from Cloudflare, Check Point and Shadowserver."
  }
});
