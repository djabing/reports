RDB.add({
  "id": "2026-11-microsoft-m365-outage-phishing",
  "vendor": "microsoft",
  "title": "High-volume phishing campaign uses Microsoft 365 outage lures to target multiple industry sectors",
  "title_ru": "Массовая фишинговая кампания маскируется под уведомления о сбое Microsoft 365",
  "url": "https://www.microsoft.com/en-us/security/blog/2026/11/16/high-volume-phishing-campaign-uses-microsoft-365-outage-lures-target-multiple-industry-sectors-2/",
  "pdf_url": "",
  "published": "2026-11-16",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "phishing",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "tags": [
    "фишинг",
    "Microsoft 365",
    "социальная инженерия"
  ],
  "sectors": [
    "Кросс-отраслевой"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Microsoft Threat Intelligence 13 ноября 2026 г. зафиксировала скоординированную массовую фишинговую кампанию против организаций разных отраслей по всему миру: письма имитировали уведомления о состоянии сервиса Microsoft 365 и обещали «восстановить» задержанные после сбоя сообщения.",
  "summary": "Письма с темами вида «Outage – <случайный токен>» и отправителями «… Outage Notification» / «… Service Health» сообщали о якобы произошедшем 12 ноября инциденте Exchange Online, о четырёх «задержанных» письмах и угрожали удалить их через 24 часа. Кнопки «RESTORE MESSAGES» / «TAKE ACTION» через трекинговые ссылки (в том числе SendGrid) вели на reallifeaccounting.com, иногда — на outagefixed.sbs и outagerestored.sbs. В тело письма встраивалась скрытая фиктивная переписка для обхода фильтров. Microsoft оценивает активность как вероятный сбор учётных данных, но финальную страницу, ввод данных и последующую компрометацию не наблюдала; вложений и ВПО не было. Атрибуция не приводится; Defender for Office 365 блокирует письма.",
  "key_findings": [
    "Приманка эксплуатирует доверие к служебным уведомлениям Microsoft 365 и создаёт срочность 24-часовым сроком удаления писем.",
    "Скрытая фиктивная переписка в теле письма применяется для обхода фильтров.",
    "Используются три домена-отправителя, инфраструктура SendGrid и персональные трекинговые ссылки для каждого получателя.",
    "Вложений, QR-кодов и ВПО не обнаружено — только ссылка на вероятную страницу сбора учётных данных."
  ],
  "stats": [
    {
      "value": "13.11.2026",
      "label": "обнаружение кампании"
    },
    {
      "value": "24 ч",
      "label": "«срок» до удаления писем в приманке"
    },
    {
      "value": "3",
      "label": "домена-отправителя"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.002",
      "name": "Phishing: Spearphishing Link"
    },
    {
      "id": "T1036",
      "name": "Masquerading"
    },
    {
      "id": "T1204.001",
      "name": "User Execution: Malicious Link"
    }
  ],
  "recommendations": [
    "Найти в почтовой телеметрии письма по опубликованным индикаторам и определить пользователей, перешедших по ссылкам.",
    "Сбросить учётные данные и отозвать сессии у тех, кто мог ввести пароль.",
    "Заблокировать или контролировать reallifeaccounting.com, не блокируя общую почтовую инфраструктуру целиком.",
    "Внедрить фишингоустойчивую MFA, Safe Links, Safe Attachments и ZAP, обучать пользователей."
  ],
  "why_it_matters": "Поддельные служебные уведомления облачных сервисов остаются одним из самых эффективных способов кражи корпоративных учётных записей.",
  "source_note": "Выжимка по первоисточнику — публикации Microsoft Threat Intelligence от 16.11.2026. Объём рассылки, число целей и страны в публикации не приводятся.",
  "en": {
    "tldr": "On 13 November 2026 Microsoft Threat Intelligence observed a coordinated high-volume phishing campaign against organisations across sectors worldwide: emails imitated Microsoft 365 service health notifications and offered to 'restore' messages held after an outage.",
    "summary": "Emails with subjects like 'Outage – <random token>' and senders such as '... Outage Notification' / '... Service Health' described a purported Exchange Online incident on 12 November, four 'held' messages and a threat to delete them within 24 hours. 'RESTORE MESSAGES' / 'TAKE ACTION' buttons led via tracking links (including SendGrid) to reallifeaccounting.com, sometimes to outagefixed.sbs and outagerestored.sbs. A hidden fake email thread was embedded in the body to evade filters. Microsoft assesses the activity as likely credential phishing but did not observe the final page, credential entry or follow-on compromise; there were no attachments or malware. No attribution is given; Defender for Office 365 blocks the messages.",
    "key_findings": [
      "The lure exploits trust in Microsoft 365 service notifications and creates urgency with a 24-hour deletion deadline.",
      "A hidden fake conversation in the email body is used for filter evasion.",
      "Three sender domains, SendGrid infrastructure and per-recipient tracking links are used.",
      "No attachments, QR codes or malware were found — only a link to a likely credential harvesting page."
    ],
    "stats": [
      {
        "value": "13 Nov 2026",
        "label": "campaign observed"
      },
      {
        "value": "24 h",
        "label": "'deadline' for message deletion in the lure"
      },
      {
        "value": "3",
        "label": "sender domains"
      }
    ],
    "recommendations": [
      "Search mail telemetry for the published indicators and identify users who clicked.",
      "Reset credentials and revoke sessions for anyone who may have entered a password.",
      "Block or monitor reallifeaccounting.com without broadly blocking shared email-delivery infrastructure.",
      "Deploy phishing-resistant MFA, Safe Links, Safe Attachments and ZAP, and train users."
    ],
    "why_it_matters": "Fake cloud service notifications remain one of the most effective ways to steal corporate accounts.",
    "source_note": "Summary based on the primary source — Microsoft Threat Intelligence post of 16 Nov 2026. Campaign volume, number of targets and countries are not given."
  }
});
