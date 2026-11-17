RDB.add({
  "id": "2026-10-bizone-insolent-werewolf",
  "vendor": "bizone",
  "title": "Кибершпионаж вместо хактивизма: мы уточнили мотивацию Insolent Werewolf",
  "title_ru": "Insolent Werewolf: кибершпионаж вместо хактивизма",
  "url": "https://bi.zone/news/kibershpionazh-vmesto-khaktivizma-my-utochnili-motivatsiyu-insolent-werewolf/",
  "pdf_url": "",
  "published": "2026-10-15",
  "date_precision": "day",
  "added": "2026-10-16",
  "type": "apt",
  "lang": "ru",
  "importance": 2,
  "tier": "case",
  "tags": [
    "APT",
    "кибершпионаж",
    "ОПК",
    "ClickFix",
    "RAT"
  ],
  "sectors": [
    "Госсектор",
    "Промышленность",
    "Наука",
    "ОПК"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "BI.ZONE переквалифицировала кластер Insolent Werewolf из хактивистов в кибершпионов: группа не шифрует и не публикует, а тихо удерживает доступ. В арсенале — новый RAT NightStrike, загрузчик Octowave Loader, AdaptixC2 и впервые Havoc.",
  "summary": "Ранее активность Insolent Werewolf связывали с идеологическими атаками ради огласки. Длительное наблюдение показало обратное: нет вайперов, шифровальщиков и заявлений об атаках, зато есть сбор данных и долговременное удержание доступа. Цели — госорганы, промышленность и НИИ, связанные с ОПК. Группа может получать доступ к жертвам от других шпионских кластеров.",
  "key_findings": [
    "Мотивация — кибершпионаж, а не хактивизм: нет деструктивного ВПО и публичных заявлений.",
    "Цели: госорганизации, промышленные предприятия и научно-исследовательские институты, связанные с ОПК.",
    "Первичный доступ: целевой фишинг, включая технику ClickFix; возможна передача доступа от других кластеров.",
    "Новый RAT NightStrike обнаружен в августе 2026, использовался как минимум с июня: удалённое управление, кража данных браузеров и приложений, скриншоты.",
    "Загрузчик Octowave Loader доставлял AdaptixC2 и Havoc; Havoc ранее у группы не встречался."
  ],
  "stats": [
    {
      "value": "с июня",
      "label": "NightStrike в атаках"
    },
    {
      "value": "4",
      "label": "новых/обновлённых инструмента"
    }
  ],
  "actors": [
    "Insolent Werewolf"
  ],
  "malware": [
    "NightStrike",
    "Octowave Loader",
    "AdaptixC2",
    "Havoc"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1566",
      "name": "Phishing"
    },
    {
      "id": "T1204.004",
      "name": "Malicious Copy and Paste"
    },
    {
      "id": "T1113",
      "name": "Screen Capture"
    },
    {
      "id": "T1555.003",
      "name": "Credentials from Web Browsers"
    }
  ],
  "recommendations": [
    "Добавить детекты на AdaptixC2 и Havoc (сетевые и хостовые).",
    "Обучить сотрудников ОПК-сектора распознавать ClickFix-приманки.",
    "Проводить compromise assessment при подозрении на передачу доступа между группировками."
  ],
  "why_it_matters": "Важная переоценка для моделей угроз российских предприятий ОПК: «хактивист» может оказаться долгоживущим шпионом.",
  "source_note": "Выжимка по полному тексту публикации BI.ZONE.",
  "en": {
    "title": "Insolent Werewolf: cyber espionage instead of hacktivism",
    "tldr": "BI.ZONE reclassified the Insolent Werewolf cluster from hacktivists to cyber spies: the group does not encrypt or leak, but quietly maintains access. Its arsenal includes the new NightStrike RAT, Octowave Loader, AdaptixC2 and, for the first time, Havoc.",
    "summary": "Insolent Werewolf activity was previously linked to ideological attacks for publicity. Long-term observation showed the opposite: no wipers, ransomware or attack claims, but data collection and long-term access retention. Targets are government bodies, manufacturing and research institutes linked to the defence industry. The group may receive access to victims from other espionage clusters.",
    "key_findings": [
      "Motivation is cyber espionage, not hacktivism: no destructive malware or public claims.",
      "Targets: government organisations, industrial enterprises and research institutes linked to the defence industry.",
      "Initial access: spear-phishing, including the ClickFix technique; access may be handed over by other clusters.",
      "The new NightStrike RAT was discovered in August 2026 and used since at least June: remote control, theft of browser and application data, screenshots.",
      "Octowave Loader delivered AdaptixC2 and Havoc; Havoc had not been seen with the group before."
    ],
    "stats": [
      {
        "value": "since June",
        "label": "NightStrike in attacks"
      },
      {
        "value": "4",
        "label": "new/updated tools"
      }
    ],
    "recommendations": [
      "Add detections for AdaptixC2 and Havoc (network and host).",
      "Train defence-sector employees to recognise ClickFix lures.",
      "Run a compromise assessment if access handover between groups is suspected."
    ],
    "why_it_matters": "An important reassessment for threat models of Russian defence enterprises: a 'hacktivist' may turn out to be a long-lived spy.",
    "source_note": "Summary based on the full text of the BI.ZONE publication."
  }
});
