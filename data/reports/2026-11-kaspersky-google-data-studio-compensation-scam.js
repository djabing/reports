RDB.add({
  "id": "2026-11-kaspersky-google-data-studio-compensation-scam",
  "vendor": "kaspersky",
  "title": "«Лаборатория Касперского» обнаружила мошенническую рассылку о компенсационных выплатах через сервис Google",
  "title_ru": "«Лаборатория Касперского» обнаружила мошенническую рассылку о компенсационных выплатах через сервис Google",
  "url": "https://www.kaspersky.ru/about/press-releases/laboratoriya-kasperskogo-obnaruzhila-moshennicheskuyu-rassylku-o-kompensacionnyh-vyplatah-cherez-servis-google",
  "pdf_url": "",
  "published": "2026-11-13",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "phishing",
  "lang": "ru",
  "importance": 2,
  "tier": "case",
  "tags": [
    "мошенничество",
    "спам",
    "Google",
    "компенсации",
    "легитимные сервисы"
  ],
  "sectors": [
    "Частные пользователи"
  ],
  "regions": [
    "Россия",
    "СНГ"
  ],
  "tldr": "Мошенники рассылают письма о «компенсационных выплатах» через функцию запланированной отправки отчётов в Google Data Studio: письма приходят с легитимного сервиса Google и ведут через Google Презентации и Формы на фишинговые страницы.",
  "summary": "Получателям обещают компенсацию расходов, дополнительные выплаты или уже одобренный перевод, ссылаясь на «изменения в законодательстве» и добавляя государственную символику. Злоумышленники создают документ в Google Data Studio и настраивают автоматическую рассылку на адреса жертв, поэтому письма содержат оформление сервиса и хуже блокируются защитными решениями. Характерный признак — письма приходят в начале или середине часа.",
  "key_findings": [
    "Рассылка через функцию запланированной отправки отчётов Google Data Studio.",
    "Приманка — компенсации, выплаты, «одобренные» переводы со ссылкой на изменения в законах.",
    "Ссылки ведут через Google Презентации и Google Формы на фишинговые страницы.",
    "Письма приходят преимущественно в начале или середине часа.",
    "Легитимная инфраструктура осложняет блокировку рассылки."
  ],
  "stats": [
    {
      "value": ":00 / :30",
      "label": "время прихода писем"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566.002",
      "name": "Spearphishing Link"
    },
    {
      "id": "T1102",
      "name": "Web Service"
    }
  ],
  "recommendations": [
    "Не переходить по ссылкам из неожиданных писем о выплатах, даже если они пришли через сервисы Google.",
    "Проверять информацию о выплатах только на официальных государственных ресурсах.",
    "Настроить фильтрацию автоматических отчётов Data Studio от неизвестных отправителей."
  ],
  "why_it_matters": "Показывает, как злоупотребление легитимными облачными сервисами помогает спаму обходить фильтры.",
  "source_note": "Выжимка по пресс-релизу «Лаборатории Касперского» от 13.11.2026 (Kaspersky CyberSecurity Weekend 2026, Ташкент).",
  "en": {
    "title": "Kaspersky detects a fraudulent 'compensation payment' mailing via a Google service",
    "tldr": "Scammers send emails about 'compensation payments' via Google Data Studio's scheduled report delivery: the emails come from a legitimate Google service and lead via Google Slides and Forms to phishing pages.",
    "summary": "Recipients are promised reimbursement of expenses, extra payments or an already approved transfer, citing 'changes in legislation' and adding state symbols. The attackers create a document in Google Data Studio and set up automatic delivery to victims' addresses, so the emails carry the service's branding and are harder for security solutions to block. A telltale sign is that emails arrive at the top or half of the hour.",
    "key_findings": [
      "Mailing via Google Data Studio's scheduled report delivery feature.",
      "Lure: compensation, payments, 'approved' transfers citing changes in the law.",
      "Links lead via Google Slides and Google Forms to phishing pages.",
      "Emails arrive mostly at the top or half of the hour.",
      "Legitimate infrastructure makes the mailing harder to block."
    ],
    "stats": [
      {
        "value": ":00 / :30",
        "label": "email arrival times"
      }
    ],
    "recommendations": [
      "Do not follow links in unexpected payment emails, even if they come via Google services.",
      "Verify payment information only on official government resources.",
      "Filter automatic Data Studio reports from unknown senders."
    ],
    "why_it_matters": "Shows how abuse of legitimate cloud services helps spam bypass filters.",
    "source_note": "Summary based on Kaspersky's press release of 13 Nov 2026 (Kaspersky CyberSecurity Weekend 2026, Tashkent)."
  }
});
