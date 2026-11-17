RDB.add({
  "id": "2026-11-microsoft-gsocket-linux-c2",
  "vendor": "microsoft",
  "title": "The global socket: how threat actors are weaponizing GSocket for stealthy C2",
  "title_ru": "GSocket: как злоумышленники используют открытый инструмент для скрытого управления Linux-серверами",
  "url": "https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/",
  "pdf_url": "",
  "published": "2026-11-11",
  "date_precision": "day",
  "added": "2026-11-17",
  "type": "other",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "tags": [
    "Linux",
    "веб-приложения",
    "C2",
    "двойное назначение",
    "хостинг"
  ],
  "sectors": [
    "Образование и наука",
    "ИТ и телеком",
    "Хостинг"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Microsoft фиксирует, что несколько не связанных между собой групп используют открытый инструмент GSocket для скрытого удалённого доступа к взломанным Linux-серверам. С марта по август 2026 г. число устройств с детектированием GSocket выросло на 356%; почти девять из десяти инцидентов связаны с веб-приложениями и хостингом.",
  "summary": "Типовая цепочка: эксплуатация уязвимости веб-приложения (чаще PHP и cPanel), загрузка через curl установочного скрипта, который выбирает сборку под архитектуру, размещает бинарник в /dev/shm/.gs-0 и генерирует общий секрет; оператор получает его через консоль, временный файл или уведомление в мессенджер или вебхук. И заражённый сервер, и оператор подключаются исходящими соединениями к публичной ретрансляционной сети GSocket, поэтому у атакующего нет собственных IP и доменов, а на сервере — входящих портов. Процессы маскируются под потоки ядра и службы systemd, закрепление многослойное (cron, systemd, профили оболочки, сторожевые процессы). В отдельных случаях атакующие пытались повысить привилегии через уязвимость ядра CVE-2026-43284 (Dirty Frag). Чаще всего страдают образование и наука (30,7% организаций) — из-за децентрализованных и плохо обновляемых веб-ресурсов.",
  "key_findings": [
    "Число устройств с детектированием GSocket выросло на 356,2% с марта по август 2026 г.",
    "87,1% атрибутируемых инцидентов связаны с веб-приложениями и хостингом; 63,9% — с PHP-приложениями и cPanel, 24,3% — с Apache.",
    "Среди пострадавших организаций 30,7% — образование и наука, 22,9% — технологии и телеком.",
    "C2 через публичную ретрансляционную сеть не требует инфраструктуры атакующего: любой, у кого есть секрет, может переподключиться с любого клиента.",
    "Закрепление многослойное — простая остановка процесса доступ не убирает; в нескольких случаях пытались эксплуатировать CVE-2026-43284."
  ],
  "stats": [
    {
      "value": "+356%",
      "label": "рост числа устройств с GSocket (март–август 2026)"
    },
    {
      "value": "87,1%",
      "label": "инцидентов — веб-приложения и хостинг"
    },
    {
      "value": "63,9%",
      "label": "инцидентов — PHP и cPanel"
    },
    {
      "value": "30,7%",
      "label": "пострадавших — образование и наука"
    }
  ],
  "actors": [],
  "malware": [
    "GSocket (gs-netcat)"
  ],
  "cves": [
    "CVE-2026-43284"
  ],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1059.004",
      "name": "Command and Scripting Interpreter: Unix Shell"
    },
    {
      "id": "T1053.003",
      "name": "Scheduled Task/Job: Cron"
    },
    {
      "id": "T1543.002",
      "name": "Create or Modify System Process: Systemd Service"
    },
    {
      "id": "T1036",
      "name": "Masquerading"
    },
    {
      "id": "T1090.002",
      "name": "Proxy: External Proxy"
    }
  ],
  "recommendations": [
    "Обновлять и укреплять публичные веб-приложения, CMS и плагины, ограничивать пути загрузки и администрирования.",
    "Ограничить исходящий трафик серверов по принципу «запрещено всё, что не разрешено» и отслеживать соединения с ретрансляционной инфраструктурой GSocket.",
    "Монтировать временные и memory-backed каталоги с noexec, предупреждать о запуске из скрытых и общедоступных для записи путей.",
    "Проверять cron, unit-файлы systemd с правдоподобными именами и файлы запуска оболочки; в приоритете — патчи повышения привилегий ядра."
  ],
  "why_it_matters": "Легитимные инструменты двойного назначения с ретрансляцией через публичную сеть лишают защитников привычных индикаторов (IP и домены атакующего), поэтому важны контроль исходящего трафика и поведенческое детектирование на Linux-серверах.",
  "source_note": "Выжимка по первоисточнику — публикации Microsoft Security Research от 11.11.2026. Конкретные группировки в отчёте не названы.",
  "en": {
    "tldr": "Microsoft observes several unrelated groups using the open-source GSocket tool for covert remote access to compromised Linux servers. From March to August 2026 the number of devices with GSocket detections rose 356%; almost nine in ten incidents involve web applications and hosting.",
    "summary": "Typical chain: exploitation of a web application vulnerability (mostly PHP and cPanel), download via curl of an installation script that picks a build for the architecture, places the binary in /dev/shm/.gs-0 and generates a shared secret; the operator receives it via the console, a temporary file or a messenger/webhook notification. Both the infected server and the operator make outbound connections to GSocket's public relay network, so the attacker has no IPs or domains of their own and the server has no inbound ports. Processes masquerade as kernel threads and systemd services, and persistence is multi-layered (cron, systemd, shell profiles, watchdog processes). In some cases attackers tried to escalate privileges via the kernel vulnerability CVE-2026-43284 (Dirty Frag). Education and research are hit most (30.7% of organisations) because of decentralised, poorly updated web resources.",
    "key_findings": [
      "Devices with GSocket detections rose 356.2% from March to August 2026.",
      "87.1% of attributable incidents involve web applications and hosting; 63.9% PHP applications and cPanel, 24.3% Apache.",
      "Among affected organisations, 30.7% are education and research, 22.9% technology and telecom.",
      "C2 via a public relay network needs no attacker infrastructure: anyone with the secret can reconnect from any client.",
      "Persistence is multi-layered — simply killing the process does not remove access; in several cases CVE-2026-43284 exploitation was attempted."
    ],
    "stats": [
      {
        "value": "+356%",
        "label": "growth in devices with GSocket (Mar–Aug 2026)"
      },
      {
        "value": "87.1%",
        "label": "of incidents — web apps and hosting"
      },
      {
        "value": "63.9%",
        "label": "of incidents — PHP and cPanel"
      },
      {
        "value": "30.7%",
        "label": "of victims — education and research"
      }
    ],
    "recommendations": [
      "Update and harden public web applications, CMSs and plugins; restrict upload and administration paths.",
      "Restrict server egress on a default-deny basis and monitor connections to GSocket relay infrastructure.",
      "Mount temporary and memory-backed directories with noexec; alert on execution from hidden and world-writable paths.",
      "Check cron, plausibly named systemd unit files and shell startup files; prioritise kernel privilege-escalation patches."
    ],
    "why_it_matters": "Legitimate dual-use tools relaying via a public network deprive defenders of familiar indicators (attacker IPs and domains), so egress control and behavioural detection on Linux servers become essential.",
    "source_note": "Summary based on the primary source — Microsoft Security Research post of 11 Nov 2026. The report does not name specific groups."
  }
});
