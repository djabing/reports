RDB.add({
  "id": "2026-11-solar-npm-pypi-malicious-packages",
  "vendor": "solar",
  "title": "Установил библиотеку — потерял данные: как вредоносные пакеты npm и PyPI крадут секреты разработчиков",
  "title_ru": "Установил библиотеку — потерял данные: как вредоносные пакеты npm и PyPI крадут секреты разработчиков",
  "url": "https://habr.com/ru/companies/solarsecurity/articles/1111860/",
  "pdf_url": "",
  "published": "2026-11-25",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "other",
  "lang": "ru",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "цепочка поставок",
    "open source",
    "npm",
    "PyPI",
    "кража секретов"
  ],
  "sectors": [
    "ИТ и разработка ПО"
  ],
  "regions": [
    "Глобально"
  ],
  "actors": [],
  "malware": [
    "Shai-Hulud"
  ],
  "cves": [],
  "ttps": [
    "T1195.001",
    "T1552.001",
    "T1567.004",
    "T1027"
  ],
  "tldr": "Solar 4RAYS проанализировал сотни тысяч пакетов npm и PyPI, прошедших через собственный агрегатор с мая 2025 по июнь 2026 года, и нашёл среди них десятки тысяч вредоносных; 86% из них — в npm. Главный общий приём — выполнение кода при установке пакета с последующим сбором окружения и секретов.",
  "summary": "Выборка: сотни тысяч пакетов из npm и PyPI за май 2025 — июнь 2026 года, среди них десятки тысяч вредоносных (точные числа не раскрыты). 86% вредоносных пакетов — npm, 14% — PyPI; пик сканирования пришёлся на декабрь 2025 года (41% выборки). Самый частый паттерн — исполнение кода во время установки: в npm через lifecycle-скрипты preinstall/install/postinstall, в PyPI через setup.py, переопределённый cmdclass или модуль, исполняемый при импорте. Далее — сбор переменных окружения, секретов (в том числе смонтированных в контейнерах токенов Kubernetes), загрузка полезной нагрузки, закрепление и проверка на песочницу. Около 10% выборки использует эксфильтрацию через Discord-, Telegram- или иные вебхуки — сотни почти одинаковых пакетов с разными именами. Отдельно разобран троянизированный @posthog/cli 0.5.15 из волны кампании Shai-Hulud конца ноября 2025 года: через Bun запускается обфусцированная нагрузка, крадущая токены GitHub и npm и облачные секреты, а при неудаче уничтожающая файлы пользователя.",
  "key_findings": [
    "Среди сотен тысяч пакетов npm и PyPI за май 2025 — июнь 2026 года выявлены десятки тысяч вредоносных; 86% — в npm, 14% — в PyPI.",
    "Самый частый приём — исполнение кода при установке (lifecycle-скрипты npm, setup.py и cmdclass в PyPI).",
    "Одиночные признаки дают ложные срабатывания; надёжный сигнал — сочетание install-хука, сетевого кода, сбора окружения, порождения процессов и обфускации.",
    "Около 10% выборки отправляют данные через вебхуки Discord, Telegram и аналогичные сервисы.",
    "Наиболее опасны троянизированные легитимные пакеты из скомпрометированных аккаунтов разработчиков, как @posthog/cli в кампании Shai-Hulud."
  ],
  "stats": [
    {
      "value": "86%",
      "label": "вредоносных пакетов приходится на npm"
    },
    {
      "value": "14%",
      "label": "на PyPI"
    },
    {
      "value": "~10%",
      "label": "используют эксфильтрацию через вебхуки"
    }
  ],
  "recommendations": [
    "Использовать внутренний проверенный реестр или прокси вместо прямой загрузки из публичных npm и PyPI.",
    "Оценивать пакет не только по имени и популярности: учитывать транзитивные зависимости и маскировку под известные библиотеки.",
    "Закреплять версии и хеши проверенных пакетов и отдельно анализировать обновления.",
    "Подключить фиды threat intelligence по вредоносным пакетам npm и PyPI."
  ],
  "why_it_matters": "Показывает на большой выборке, что атаки через публичные реестры в основном просты и массовы, и даёт практичные признаки для их детектирования в CI/CD.",
  "source_note": "Выжимка по статье Solar 4RAYS в блоге «Солара» на Хабре от 25.11.2026 (сайт rt-solar.ru недоступен из среды сборщика). Точные размеры выборки не раскрыты — только «сотни тысяч» пакетов и «десятки тысяч» вредоносных; помесячное распределение приведено не за все месяцы.",
  "en": {
    "title": "Installed a library, lost your data: how malicious npm and PyPI packages steal developer secrets",
    "tldr": "Solar 4RAYS analysed hundreds of thousands of npm and PyPI packages passing through its own aggregator from May 2025 to June 2026 and found tens of thousands of malicious ones; 86% were on npm. The most common technique is install-time code execution followed by harvesting of the environment and secrets.",
    "summary": "Sample: hundreds of thousands of npm and PyPI packages from May 2025 to June 2026, including tens of thousands of malicious ones (exact numbers not disclosed). 86% of malicious packages were npm and 14% PyPI; scanning peaked in December 2025 (41% of the sample). The most common pattern is code execution at install time: npm lifecycle scripts preinstall/install/postinstall, and in PyPI setup.py, an overridden cmdclass or a module executed on import. Next come harvesting of environment variables and secrets (including mounted Kubernetes tokens in containers), payload download, persistence and sandbox checks. About 10% of the sample exfiltrates via Discord, Telegram or other webhooks, with hundreds of near-identical packages under different names. A separate case covers the trojanised @posthog/cli 0.5.15 from the late-November 2025 Shai-Hulud wave: an obfuscated payload launched via Bun steals GitHub and npm tokens and cloud secrets, and wipes user files if that fails.",
    "key_findings": [
      "Among hundreds of thousands of npm and PyPI packages from May 2025 to June 2026, tens of thousands were malicious; 86% on npm, 14% on PyPI.",
      "The most common technique is install-time execution (npm lifecycle scripts, setup.py and cmdclass in PyPI).",
      "Single indicators cause false positives; the reliable signal is a combination of install hook, network code, environment collection, child processes and obfuscation.",
      "About 10% of the sample sends data via Discord, Telegram and similar webhooks.",
      "Most dangerous are trojanised legitimate packages from compromised maintainer accounts, such as @posthog/cli in the Shai-Hulud campaign."
    ],
    "stats": [
      {
        "value": "86%",
        "label": "of malicious packages are on npm"
      },
      {
        "value": "14%",
        "label": "are on PyPI"
      },
      {
        "value": "~10%",
        "label": "use webhook-based exfiltration"
      }
    ],
    "recommendations": [
      "Use an internal vetted registry or proxy instead of pulling directly from public npm and PyPI.",
      "Assess packages beyond name and popularity, considering transitive dependencies and look-alike names.",
      "Pin versions and hashes of vetted packages and review updates separately.",
      "Use threat intelligence feeds on malicious npm and PyPI packages."
    ],
    "why_it_matters": "Shows on a large sample that public registry attacks are mostly simple and mass-produced, and gives practical signals for detecting them in CI/CD.",
    "source_note": "Summary based on the Solar 4RAYS article on Solar's Habr blog dated 25 Nov 2026 (rt-solar.ru was not reachable from the collector environment). Exact sample sizes are not disclosed, only 'hundreds of thousands' of packages and 'tens of thousands' of malicious ones; the monthly breakdown does not cover all months."
  }
});
