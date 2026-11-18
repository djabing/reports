RDB.add({
  "id": "2026-11-microsoft-device-code-ai-coding-agents",
  "vendor": "microsoft",
  "title": "The risks of device code authentication for AI coding agents",
  "title_ru": "Фишинг через device code против ИИ-агентов для разработки: что получает атакующий на примере GitHub Copilot CLI",
  "url": "https://www.microsoft.com/en-us/security/blog/2026/11/17/the-risks-of-device-code-authentication-for-ai-coding-agents/",
  "pdf_url": "",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "ИИ-агенты",
    "device code phishing",
    "OAuth",
    "GitHub",
    "цепочка поставок"
  ],
  "sectors": [
    "ИТ и разработка ПО"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Microsoft Security Research в лабораторной симуляции показала, что фишинг с кодом устройства (device code) против GitHub Copilot CLI даёт атакующему не только доступ к приватным репозиториям, но и возможность управлять активной сессией агента, отравлять его память и читать синхронизированные сессии. В реальных атаках эти сценарии пока не наблюдались.",
  "summary": "Атакующий запускает запрос device code со своего клиента и отправляет жертве короткий код и подлинную ссылку проверки GitHub под предлогом ИТ-запроса или проверки лицензии; после подтверждения жертвой клиент атакующего получает токен с областями repo, read:user, read:org, gist и codespace. Исследователи выделили четыре последствия: удалённое управление активной сессией агента (если включено и разрешено политикой; локальные запросы подтверждения сохраняются, это не RCE без аутентификации), отравление памяти через /memory, чтение синхронизированных облачных сессий, доступ к приватным репозиториям. Контекст — кампании Storm-2372 (февраль 2025 г.), ИИ-кампания (апрель 2026 г.) и EvilTokens (сентябрь 2026 г.). Microsoft Defender получил два детектирования (почта и Teams), сопоставляющих подозрительные сообщения с созданием OAuth-токенов GitHub, а также действие по приостановке идентичности для GitHub Enterprise Managed Users.",
  "key_findings": [
    "Подлинная страница проверки github.com не делает запрос безопасным: жертва сама авторизует клиента атакующего.",
    "Через украденный токен агента атакующий может влиять на будущие сессии — через отравленную память агента.",
    "При включённом облачном хранении сессий доступны и старые синхронизированные сессии с контекстом разработки.",
    "Так же можно злоупотребить любым публичным клиентом, поддерживающим device flow, — Copilot CLI лишь пример."
  ],
  "stats": [
    {
      "value": "4",
      "label": "возможных последствия компрометации"
    },
    {
      "value": "5",
      "label": "областей OAuth в токене (repo, read:user, read:org, gist, codespace)"
    },
    {
      "value": "2",
      "label": "новых детектирования Microsoft Defender"
    }
  ],
  "actors": [
    "Storm-2372"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.002",
      "name": "Phishing: Spearphishing Link"
    },
    {
      "id": "T1528",
      "name": "Steal Application Access Token"
    }
  ],
  "recommendations": [
    "Вводить коды устройства только для входов, начатых самим пользователем; незапрошенные «verify/activate Copilot» считать фишингом.",
    "Пересмотреть настройки Copilot CLI, особенно «Store local sessions in the Cloud», и выбрать минимально разрешающий вариант.",
    "Регулярно проверять и отзывать неожиданные авторизованные OAuth-приложения и подозрительные записи памяти агента.",
    "Подключить GitHub Enterprise Cloud к Defender for Cloud Apps и включить Safe Links, в том числе для Teams."
  ],
  "why_it_matters": "ИИ-агенты для разработки накапливают доступ к коду, секретам и контексту проектов; фишинг их токенов становится новым путём к атакам на цепочку поставок ПО.",
  "source_note": "Выжимка по первоисточнику — публикации Microsoft Security Research от 17.11.2026. Описанные последствия получены в лабораторной симуляции и, по словам авторов, в реальных атаках не наблюдались.",
  "en": {
    "tldr": "In a lab simulation Microsoft Security Research showed that device code phishing against GitHub Copilot CLI gives an attacker not only access to private repositories but also the ability to steer an active agent session, poison its memory and read synced sessions. These scenarios have not yet been observed in real attacks.",
    "summary": "The attacker starts a device code request from their own client and sends the victim the short code and the genuine GitHub verification link under the pretext of an IT request or licence check; once the victim approves, the attacker's client receives a token with the repo, read:user, read:org, gist and codespace scopes. The researchers identified four outcomes: remote steering of an active agent session (if enabled and allowed by policy; local approval prompts still apply, so this is not unauthenticated RCE), memory poisoning via /memory, reading synced cloud sessions, and access to private repositories. The context is the Storm-2372 campaign (February 2025), an AI-enabled campaign (April 2026) and EvilTokens (September 2026). Microsoft Defender gained two detections (email and Teams) correlating suspicious messages with GitHub OAuth token creation, plus an identity suspension action for GitHub Enterprise Managed Users.",
    "key_findings": [
      "A genuine github.com verification page does not make the request safe: the victim authorises the attacker's client themselves.",
      "With the agent's stolen token an attacker can influence future sessions through poisoned agent memory.",
      "With cloud session storage enabled, older synced sessions with development context are also exposed.",
      "Any public client supporting the device flow can be abused the same way — Copilot CLI is just an example."
    ],
    "stats": [
      {
        "value": "4",
        "label": "possible compromise outcomes"
      },
      {
        "value": "5",
        "label": "OAuth scopes in the token (repo, read:user, read:org, gist, codespace)"
      },
      {
        "value": "2",
        "label": "new Microsoft Defender detections"
      }
    ],
    "recommendations": [
      "Enter device codes only for sign-ins you started; treat unsolicited 'verify/activate Copilot' requests as phishing.",
      "Review Copilot CLI settings, especially 'Store local sessions in the Cloud', and choose the least permissive option.",
      "Regularly review and revoke unexpected authorised OAuth apps and suspicious agent memory entries.",
      "Connect GitHub Enterprise Cloud to Defender for Cloud Apps and enable Safe Links, including for Teams."
    ],
    "why_it_matters": "AI coding agents accumulate access to code, secrets and project context; phishing their tokens becomes a new path to software supply chain attacks.",
    "source_note": "Summary based on the primary source — Microsoft Security Research post of 17 Nov 2026. The outcomes were obtained in a lab simulation and, according to the authors, have not been observed in real attacks."
  }
});
