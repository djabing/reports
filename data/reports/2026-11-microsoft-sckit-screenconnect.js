RDB.add({
  "id": "2026-11-microsoft-sckit-screenconnect",
  "vendor": "microsoft",
  "title": "SCKit abuses ScreenConnect to deploy remote access and target technician sessions",
  "title_ru": "SCKit: червь злоупотребляет ScreenConnect, чтобы проникнуть на рабочие станции техподдержки MSP",
  "url": "https://www.microsoft.com/en-us/security/blog/2026/11/13/sckit-abuses-screenconnect-deploy-remote-access-target-technician-sessions/",
  "pdf_url": "",
  "published": "2026-11-13",
  "date_precision": "day",
  "added": "2026-11-17",
  "type": "other",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "RMM",
    "ScreenConnect",
    "MSP",
    "цепочка поставок",
    "кража cookie"
  ],
  "sectors": [
    "ИТ-услуги (MSP)",
    "Кросс-отраслевой"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Microsoft разобрала SCKit — набор инструментов и червь, который через консоль ScreenConnect у поставщиков управляемых услуг (MSP) ставит на клиентские устройства подменный клиент удалённого доступа, а затем пытается заразить рабочую станцию техника при подключении к сессии. Кампания стартовала 11 ноября 2026 г.",
  "summary": "По данным ConnectWise, подтверждённым Microsoft, атакующие через консоль ScreenConnect MSP отдавали клиентам команды cmd.exe/curl.exe на загрузку MSI и тихую установку второго, неавторизованного клиента. Расширение RMM+ версий 1.0.31–1.0.32 при отсутствии ключа доступа принимало пустой ключ, хотя точный вектор первичного доступа ещё расследуется. Компонент RelayTrap компилируется на месте из библиотек каждого клиента ScreenConnect и передаёт полезную нагрузку на машину техника, когда тот подключается. На заражённых машинах SCKit ищет в Chrome, Edge и Opera cookie .ASPXAUTH консоли управления (в том числе читая память сетевого процесса браузера), а затем с украденной сессией перечисляет сеансы и распространяется через Shared Toolbox. Закрепление — ключ Run, планировщик задач, исключения Microsoft Defender. Исправление CVE-2026-84869 выпущено 8 сентября 2026 г.; клиент 26.6.5 и новее блокирует технику переноса на рабочую станцию техника.",
  "key_findings": [
    "Цель — не только конечные устройства клиентов MSP, но и рабочие станции техников: их сессия в консоли определяет, до каких устройств доберётся атакующий.",
    "SCKit крадёт cookie .ASPXAUTH из Chromium-браузеров, в том числе через теневые копии томов и чтение памяти сетевого процесса браузера.",
    "Набор шифрует компоненты ключом, производным от MachineGuid (PBKDF2-HMAC-SHA256, 4096 итераций, AES-256-CBC), а сторож проверяет наличие клиентов ScreenConnect каждые 10 секунд.",
    "Встроенный сценарий «очистки» снова запускает дроппер, если не указан параметр -NoReArm, — им нельзя пользоваться для восстановления.",
    "Опубликованы индикаторы: 5 доменов, 2 IP-адреса, 13 SHA-256 и 3 SHA-1."
  ],
  "stats": [
    {
      "value": "11.11.2026",
      "label": "начало кампании (по ConnectWise)"
    },
    {
      "value": "26.6.5",
      "label": "версия клиента, блокирующая технику"
    },
    {
      "value": "10 с",
      "label": "интервал опроса сторожевого процесса"
    },
    {
      "value": "23",
      "label": "опубликованных индикатора компрометации"
    }
  ],
  "actors": [],
  "malware": [
    "SCKit",
    "RelayTrap"
  ],
  "cves": [
    "CVE-2026-84869"
  ],
  "ttps": [
    {
      "id": "T1219",
      "name": "Remote Access Software"
    },
    {
      "id": "T1199",
      "name": "Trusted Relationship"
    },
    {
      "id": "T1539",
      "name": "Steal Web Session Cookie"
    },
    {
      "id": "T1547.001",
      "name": "Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder"
    },
    {
      "id": "T1053.005",
      "name": "Scheduled Task/Job: Scheduled Task"
    },
    {
      "id": "T1562.001",
      "name": "Impair Defenses: Disable or Modify Tools"
    }
  ],
  "recommendations": [
    "Отключить расширения Labtech Plus, RMM Plus/RMM+ и их варианты, проверить их конфигурацию и историю администрирования.",
    "Обновить клиенты техников до ScreenConnect 26.6.5 и новее, проверяя версии отдельно от облачной консоли.",
    "Расследовать по внеполосному каналу, а не через ScreenConnect; включать в периметр рабочие станции техников и отзывать веб-сессии с чистого устройства.",
    "Вести реестр разрешённых средств удалённого управления и применять контроль приложений."
  ],
  "why_it_matters": "Средства удалённого управления MSP дают доступ сразу ко многим клиентам; атака на сессии техников превращает поставщика услуг в канал массового заражения.",
  "source_note": "Выжимка по первоисточнику — публикации Microsoft Security Research от 13.11.2026; дата начала кампании и сведения о RMM+ приведены Microsoft со ссылкой на ConnectWise. Атакующий не назван.",
  "en": {
    "tldr": "Microsoft analysed SCKit — a toolkit and worm that uses the ScreenConnect console at managed service providers (MSPs) to install a rogue remote access client on customer devices and then tries to infect the technician's workstation when they join a session. The campaign started on 11 November 2026.",
    "summary": "According to ConnectWise, as confirmed by Microsoft, attackers used MSPs' ScreenConnect consoles to send customers cmd.exe/curl.exe commands to download an MSI and silently install a second, unauthorised client. The RMM+ extension versions 1.0.31–1.0.32 accepted an empty key when no access key was set, though the exact initial access vector is still under investigation. The RelayTrap component is compiled on site from each ScreenConnect client's libraries and passes the payload to the technician's machine when they connect. On infected machines SCKit searches Chrome, Edge and Opera for the management console's .ASPXAUTH cookie (including by reading the browser network process's memory), then uses the stolen session to enumerate sessions and spread via the Shared Toolbox. Persistence: Run key, Task Scheduler, Microsoft Defender exclusions. The fix for CVE-2026-84869 was released on 8 September 2026; client 26.6.5 and later blocks the technique of moving to the technician's workstation.",
    "key_findings": [
      "The target is not just MSP customers' endpoints but technicians' workstations: their console session determines which devices the attacker can reach.",
      "SCKit steals .ASPXAUTH cookies from Chromium browsers, including via volume shadow copies and reading the browser network process's memory.",
      "The kit encrypts components with a key derived from MachineGuid (PBKDF2-HMAC-SHA256, 4,096 iterations, AES-256-CBC), and a watchdog checks for ScreenConnect clients every 10 seconds.",
      "The built-in 'cleanup' script relaunches the dropper unless the -NoReArm parameter is given — it must not be used for remediation.",
      "Indicators published: 5 domains, 2 IP addresses, 13 SHA-256 and 3 SHA-1 hashes."
    ],
    "stats": [
      {
        "value": "11 Nov 2026",
        "label": "campaign start (per ConnectWise)"
      },
      {
        "value": "26.6.5",
        "label": "client version blocking the technique"
      },
      {
        "value": "10 s",
        "label": "watchdog polling interval"
      },
      {
        "value": "23",
        "label": "published indicators of compromise"
      }
    ],
    "recommendations": [
      "Disable the Labtech Plus, RMM Plus/RMM+ extensions and their variants; review their configuration and administration history.",
      "Update technicians' clients to ScreenConnect 26.6.5 or later, checking versions separately from the cloud console.",
      "Investigate via an out-of-band channel, not ScreenConnect; include technicians' workstations in scope and revoke web sessions from a clean device.",
      "Keep a registry of approved remote management tools and apply application control."
    ],
    "why_it_matters": "MSP remote management tools give access to many customers at once; attacking technicians' sessions turns the service provider into a mass infection channel.",
    "source_note": "Summary based on the primary source — Microsoft Security Research post of 13 Nov 2026; the campaign start date and RMM+ details are given by Microsoft citing ConnectWise. The attacker is not named."
  }
});
