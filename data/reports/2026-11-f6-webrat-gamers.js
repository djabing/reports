RDB.add({
  "id": "2026-11-f6-webrat-gamers",
  "vendor": "f6",
  "title": "Запретный плод: под видом VPN для Discord и чита для Roblox геймерам предлагают установить троян WebRAT",
  "title_ru": "WebRAT (Salat Stealer) атакует российских геймеров через поддельные утилиты для Discord и читы для Roblox",
  "url": "https://www.f6.ru/media-center/press-releases/webrat/",
  "pdf_url": "",
  "published": "2026-11-12",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "other",
  "lang": "ru",
  "importance": 1,
  "tier": "case",
  "tags": [
    "стилер",
    "RAT",
    "MaaS",
    "игроки"
  ],
  "sectors": [
    "Игры",
    "Частные пользователи"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Специалисты F6 Digital Risk Protection обнаружили новую схему распространения WebRAT (Salat Stealer) — стилера с функциями удалённого доступа, продаваемого по модели MaaS: его маскируют под «бесплатное» приложение Discord Zapret и чит Xeno Executor для Roblox. Сайт-приманка создан в октябре 2026 г. и заблокирован по запросу CERT F6.",
  "summary": "Жертвам предлагали скачать установщик и игнорировать предупреждения антивируса под предлогом того, что программа работает с сетевыми фильтрами; запуск нескольких исполняемых файлов устанавливал ВПО. Версия для Roblox распространялась как чит Xeno для запуска пользовательских скриптов. WebRAT крадёт логины, пароли, cookie, токены и сессии Telegram, Steam и Discord, следит за буфером обмена (включая данные криптокошельков), ведёт кейлоггинг, делает снимки экрана, показывает рабочий стол в реальном времени и транслирует видео с веб-камеры и звук с микрофона. Как жертв приводили на сайты, F6 подтвердить не смогла; аналитики проводят параллели с кампанией WeedHack (моды для Minecraft через ролики в TikTok). По словам аналитика CERT F6 Алексея Литвинова, аккаунты игроков ценны, потому что скины и внутриигровую валюту можно обналичить.",
  "key_findings": [
    "WebRAT совмещает стилер и RAT и продаётся как услуга (MaaS).",
    "Приманки — «бесплатная» утилита для Discord и чит для Roblox; жертву просят игнорировать предупреждения антивируса.",
    "ВПО крадёт сессии Telegram, Steam и Discord, данные криптокошельков из буфера обмена и транслирует веб-камеру и микрофон.",
    "F6 связывает схему с серией похожих кампаний 2026 г.: WeedHack, ZloyRAT, RedWing Stealer."
  ],
  "stats": [
    {
      "value": "10.2026",
      "label": "создан сайт-приманка"
    },
    {
      "value": "2",
      "label": "приманки: утилита для Discord и чит для Roblox"
    }
  ],
  "actors": [],
  "malware": [
    "WebRAT",
    "Salat Stealer"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1204.002",
      "name": "User Execution: Malicious File"
    },
    {
      "id": "T1539",
      "name": "Steal Web Session Cookie"
    },
    {
      "id": "T1115",
      "name": "Clipboard Data"
    },
    {
      "id": "T1056.001",
      "name": "Input Capture: Keylogging"
    },
    {
      "id": "T1125",
      "name": "Video Capture"
    },
    {
      "id": "T1123",
      "name": "Audio Capture"
    }
  ],
  "recommendations": [
    "Устанавливать ПО только из проверенных источников и с сайтов разработчиков, не игнорировать предупреждения антивируса.",
    "Проверять загруженные файлы антивирусом или сервисом анализа.",
    "Включить многофакторную аутентификацию в игровых и мессенджер-аккаунтах.",
    "При подозрении на заражение отключить устройство от сети, проверить его, завершить сессии и сменить пароли с чистого устройства."
  ],
  "why_it_matters": "Игроки сами отключают защиту ради читов и сторонних утилит, что делает их удобной аудиторией для MaaS-стилеров с функциями слежки.",
  "source_note": "Выжимка по пресс-релизу F6 от 12.11.2026. Число жертв и загрузок не приводится.",
  "en": {
    "title": "Forbidden fruit: gamers offered the WebRAT trojan disguised as a Discord VPN and a Roblox cheat",
    "tldr": "F6 Digital Risk Protection found a new distribution scheme for WebRAT (Salat Stealer) — a stealer with remote access features sold as MaaS: it is disguised as the 'free' Discord Zapret app and the Xeno Executor cheat for Roblox. The lure site was created in October 2026 and blocked at CERT F6's request.",
    "summary": "Victims were told to download an installer and ignore antivirus warnings on the pretext that the program works with network filters; running several executables installed the malware. The Roblox version was spread as the Xeno cheat for running custom scripts. WebRAT steals logins, passwords, cookies, tokens and sessions for Telegram, Steam and Discord, monitors the clipboard (including crypto wallet data), logs keystrokes, takes screenshots, shows the desktop in real time and streams webcam video and microphone audio. F6 could not confirm how victims were led to the sites; analysts draw parallels with the WeedHack campaign (Minecraft mods via TikTok videos). According to CERT F6 analyst Alexey Litvinov, gamer accounts are valuable because skins and in-game currency can be cashed out.",
    "key_findings": [
      "WebRAT combines a stealer and a RAT and is sold as a service (MaaS).",
      "The lures are a 'free' Discord utility and a Roblox cheat; victims are asked to ignore antivirus warnings.",
      "The malware steals Telegram, Steam and Discord sessions and crypto wallet data from the clipboard, and streams the webcam and microphone.",
      "F6 links the scheme to a series of similar 2026 campaigns: WeedHack, ZloyRAT, RedWing Stealer."
    ],
    "stats": [
      {
        "value": "Oct 2026",
        "label": "lure site created"
      },
      {
        "value": "2",
        "label": "lures: a Discord utility and a Roblox cheat"
      }
    ],
    "recommendations": [
      "Install software only from trusted sources and developers' sites; do not ignore antivirus warnings.",
      "Scan downloaded files with antivirus or an analysis service.",
      "Enable multi-factor authentication on gaming and messenger accounts.",
      "If infection is suspected, disconnect the device, scan it, end sessions and change passwords from a clean device."
    ],
    "why_it_matters": "Gamers disable protection themselves for cheats and third-party utilities, making them a convenient audience for MaaS stealers with spying features.",
    "source_note": "Summary based on F6's press release of 12 Nov 2026. No victim or download counts are given."
  }
});
