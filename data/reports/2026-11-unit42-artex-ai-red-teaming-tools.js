RDB.add({
  "id": "2026-11-unit42-artex-ai-red-teaming-tools",
  "vendor": "unit42",
  "title": "ARTEX and AI-Powered Red Teaming Tools: What Defenders Need to Know",
  "title_ru": "ARTEX и ИИ-инструменты для «красных команд»: что нужно знать защитникам",
  "url": "https://unit42.paloaltonetworks.com/artex-and-ai-powered-red-teaming-tools/",
  "pdf_url": "",
  "published": "2026-11-11",
  "date_precision": "day",
  "added": "2026-11-17",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "analytics",
  "tags": [
    "ИИ-агенты",
    "ARTEX",
    "CyberStrikeAI",
    "облако",
    "API",
    "идентификация"
  ],
  "sectors": [
    "Ритейл",
    "Консалтинг",
    "Кросс-отраслевой"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Unit 42 разобрала, как злоумышленники используют открытые мультиагентные ИИ-фреймворки для пентеста — прежде всего ARTEX — в реальных атаках. На октябрь 2026 г. в интернете найдено 609 серверов с ARTEX и 1323 с CyberStrikeAI; агенты превращают публичные страницы сброса пароля и открытые API в доступ к облаку иногда менее чем за сутки и без эксплуатации уязвимостей.",
  "summary": "ARTEX — открытый мультиагентный фреймворк для тестирования на проникновение, опубликованный в середине 2026 г. и широко форкнутый; после взлома корейского банка автор закрыл код. Unit 42 наблюдала попытки вторжений и скоординированную кампанию против облачных сред клиентов из разных отраслей, включая ритейл и консалтинг. Агенты скачивают OpenAPI-спецификации и source map, вставляют «канареечные» значения, исправляются после ошибок HTTP 422, проверяют запись повторным GET и злоупотребляют самообслуживанием (регистрация, сброс пароля, коды подтверждения). Поведение узнаваемо: пачки по 1–14 запросов с паузами 25–31 с на «раздумья» модели, переход к следующему шагу в течение минуты после получения учётных данных, проверка более 200 client secret за три минуты. Unit 42 проанализировала 14 инструментов этого класса (ARL, PentAGI, Cairn, DeepAudit, AI-Infra-Guard и др.).",
  "key_findings": [
    "На октябрь 2026 г. в интернете обнаружено 609 узлов с ARTEX, 1323 — с CyberStrikeAI и 21 — с обоими.",
    "Атаки нацелены на процессы идентификации и открытые API; полученные учётные данные и доверительные связи ведут в облако — иногда менее чем за сутки и без эксплуатации уязвимостей ПО.",
    "Характерный ритм: 1–14 запросов с интервалом около секунды, затем пауза 25–31 с (ожидание ответа модели); проверка более 200 client secret за ~3 минуты.",
    "Агенты параллельно в течение часа атакуют контроллер доставки приложений, более десятка VPN-шлюзов, NAS, корпоративную идентификацию и облачные порты.",
    "Часть шагов выполняется человеком или через автоматизацию браузера — например, сброс пароля и первый запрос токена."
  ],
  "stats": [
    {
      "value": "609",
      "label": "открытых серверов с ARTEX"
    },
    {
      "value": "1323",
      "label": "открытых серверов с CyberStrikeAI"
    },
    {
      "value": "200+",
      "label": "client secret проверено за ~3 мин"
    },
    {
      "value": "14",
      "label": "ИИ-инструментов проанализировано"
    }
  ],
  "actors": [],
  "malware": [
    "ARTEX",
    "CyberStrikeAI",
    "Cairn",
    "PentAGI"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1595",
      "name": "Active Scanning"
    },
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1110",
      "name": "Brute Force"
    },
    {
      "id": "T1078.004",
      "name": "Valid Accounts: Cloud Accounts"
    },
    {
      "id": "T1552.001",
      "name": "Unsecured Credentials: Credentials In Files"
    }
  ],
  "recommendations": [
    "Убрать из публичного доступа «карты атаки»: OpenAPI-спецификации, source map, конфигурации с токенами и client ID.",
    "Требовать аутентификацию на всех эндпоинтах записи (включая dev и staging), ограничивать частоту и защищать от ботов регистрацию, сброс пароля и проверку кодов.",
    "Заменить долгоживущие облачные ключи ролевым доступом и вынести секреты в менеджер секретов.",
    "Детектировать поведение: канареечные логины в журналах IdP, первое использование облачного ключа с нового IP, тесты «записал — удалил» в хранилищах."
  ],
  "why_it_matters": "Открытые ИИ-фреймворки для пентеста стали массовым инструментом атакующих: они дёшевы, быстры и находят слабые места в процессах идентификации, а не в коде, — защита должна строиться на поведенческом детектировании и сокращении внешней поверхности.",
  "source_note": "Выжимка по первоисточнику — публикации Unit 42 от 11.11.2026. Дополняет индикаторы Unit 42 по ARTEX от 30.10.2026, уже размещённые на портале.",
  "en": {
    "tldr": "Unit 42 analysed how attackers use open multi-agent AI pentest frameworks — above all ARTEX — in real attacks. As of October 2026, 609 ARTEX servers and 1,323 CyberStrikeAI servers were found on the internet; agents turn public password reset pages and exposed APIs into cloud access, sometimes in under a day and without exploiting vulnerabilities.",
    "summary": "ARTEX is an open multi-agent penetration testing framework published in mid-2026 and widely forked; after a Korean bank was breached, the author closed the code. Unit 42 observed intrusion attempts and a coordinated campaign against customers' cloud environments in various industries, including retail and consulting. The agents download OpenAPI specs and source maps, insert 'canary' values, self-correct after HTTP 422 errors, verify writes with a follow-up GET and abuse self-service flows (registration, password reset, verification codes). The behaviour is recognisable: bursts of 1–14 requests with 25–31 s pauses for model 'thinking', moving to the next step within a minute of obtaining credentials, and testing more than 200 client secrets in three minutes. Unit 42 analysed 14 tools of this class (ARL, PentAGI, Cairn, DeepAudit, AI-Infra-Guard and others).",
    "key_findings": [
      "As of October 2026, 609 hosts with ARTEX, 1,323 with CyberStrikeAI and 21 with both were found on the internet.",
      "Attacks target identity processes and exposed APIs; obtained credentials and trust relationships lead into the cloud — sometimes in under a day and without exploiting software vulnerabilities.",
      "Characteristic rhythm: 1–14 requests about a second apart, then a 25–31 s pause (waiting for the model's response); more than 200 client secrets tested in ~3 minutes.",
      "Within an hour the agents attack an application delivery controller, more than a dozen VPN gateways, NAS, corporate identity and cloud ports in parallel.",
      "Some steps are performed by a human or via browser automation — e.g. password reset and the first token request."
    ],
    "stats": [
      {
        "value": "609",
        "label": "exposed ARTEX servers"
      },
      {
        "value": "1,323",
        "label": "exposed CyberStrikeAI servers"
      },
      {
        "value": "200+",
        "label": "client secrets tested in ~3 min"
      },
      {
        "value": "14",
        "label": "AI tools analysed"
      }
    ],
    "recommendations": [
      "Remove 'attack maps' from public access: OpenAPI specs, source maps, configs with tokens and client IDs.",
      "Require authentication on all write endpoints (including dev and staging); rate-limit and bot-protect registration, password reset and code verification.",
      "Replace long-lived cloud keys with role-based access and move secrets into a secrets manager.",
      "Detect behaviour: canary logins in IdP logs, first use of a cloud key from a new IP, 'write — delete' tests in storage."
    ],
    "why_it_matters": "Open AI pentest frameworks have become a mass attacker tool: they are cheap, fast and find weaknesses in identity processes rather than code — defence must rely on behavioural detection and reducing the external surface.",
    "source_note": "Summary based on the primary source — Unit 42 post of 11 Nov 2026. Complements Unit 42's ARTEX indicators of 30 Oct 2026 already on the portal."
  }
});
