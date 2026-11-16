RDB.add({
  "id": "2026-09-kaspersky-payload-gpo-ransomware",
  "vendor": "kaspersky-gert",
  "title": "Group Policy hijacked: PAYLOAD ransomware weaponizes Active Directory GPO",
  "title_ru": "PAYLOAD: вымогатели парализуют домен через групповые политики AD без шифрования",
  "url": "https://www.kaspersky.com/about/press-releases/kaspersky-uncovers-new-payload-the-stealth-ransomware-that-hijacks-corporate-devices-without-encrypting-files",
  "pdf_url": "",
  "published": "2026-09-16",
  "date_precision": "day",
  "added": "2026-10-16",
  "type": "ransomware",
  "lang": "en",
  "importance": 3,
  "tags": ["ransomware", "Active Directory", "GPO", "VPN", "расследование"],
  "sectors": ["Промышленность"],
  "regions": ["Ближний Восток"],
  "tldr": "Kaspersky GERT расследовала атаку, где вымогатели не запускали шифровальщик: через вредоносную GPO «PAYLOAD» в корне домена они отключили локальных админов, развесили требования выкупа на все экраны и выключили брандмауэр, а украденные данные опубликовали в даркнете.",
  "summary": "Разбор реального инцидента в производственной компании на Ближнем Востоке (апрель 2026). Вход — через FortiGate SSL VPN по валидной, но скомпрометированной доменной учётке. Получив права, атакующие создали GPO с именем PAYLOAD и привязали её к корню домена, плюс вторую политику «win Firewall Off». Шифрование не понадобилось — бизнес был парализован самой инфраструктурой управления.",
  "key_findings": [
    "Первичный доступ: FortiGate SSL VPN с валидной скомпрометированной учётной записью.",
    "GPO «PAYLOAD» в корне домена: отключение локальных администраторов, записки о выкупе, подмена обоев и экрана блокировки на всех ПК.",
    "Вторая GPO «win Firewall Off» отключила Windows Firewall во всех профилях.",
    "Шифровальщик не использовался — только эксфильтрация данных и последующая публикация в даркнете.",
    "Атака обходит защиту, настроенную на детект шифрования."
  ],
  "stats": [
    { "value": "0", "label": "зашифрованных файлов" },
    { "value": "2", "label": "вредоносные GPO" }
  ],
  "actors": [],
  "malware": ["PAYLOAD"],
  "cves": [],
  "ttps": [
    { "id": "T1133", "name": "External Remote Services" },
    { "id": "T1078.002", "name": "Valid Accounts: Domain Accounts" },
    { "id": "T1484.001", "name": "Group Policy Modification" },
    { "id": "T1562.004", "name": "Disable or Modify System Firewall" },
    { "id": "T1531", "name": "Account Access Removal" }
  ],
  "recommendations": [
    "Мониторить создание и изменение GPO, особенно привязанных к корню домена; следить за изменениями в SYSVOL.",
    "Фишингоустойчивая MFA для VPN.",
    "Ограничить круг лиц, которые могут создавать и привязывать групповые политики.",
    "Централизованно собирать журналы аудита AD и защищать привилегированные учётные записи."
  ],
  "why_it_matters": "Показывает, что «нет шифровальщика» не значит «нет вымогательства»: AD сама становится оружием.",
  "source_note": "Выжимка по пресс-релизу Kaspersky и обзорам (CyberInsider, SC World, IT-Connect). Полный технический разбор — на Securelist."
});
