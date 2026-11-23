RDB.add({
  "id": "2026-11-dragos-industrial-ransomware-q3",
  "vendor": "dragos",
  "title": "Industrial Ransomware Analysis: Q3 2026",
  "title_ru": "Вымогатели в промышленности: анализ III квартала 2026",
  "url": "https://www.dragos.com/blog/dragos-industrial-ransomware-analysis-q3-2026",
  "pdf_url": "",
  "published": "2026-11-16",
  "date_precision": "day",
  "added": "2026-11-24",
  "type": "ics",
  "lang": "en",
  "importance": 3,
  "tier": "analytics",
  "tags": [
    "вымогатели",
    "RaaS",
    "АСУ ТП",
    "квартальный",
    "статистика"
  ],
  "sectors": [
    "Промышленность",
    "Транспорт",
    "Логистика",
    "Энергетика"
  ],
  "regions": [
    "Глобально",
    "Северная Америка",
    "Европа",
    "Азия"
  ],
  "tldr": "Атаки вымогателей на промышленные организации выросли на 11%: 1 266 инцидентов в Q3 2026. Производство — 69% жертв, Qilin и The Gentlemen собирают 29%. Ни в одном случае атакующие не дошли до прямого воздействия на системы управления — ущерб идёт через корпоративную ИТ-инфраструктуру, от которой зависит OT.",
  "summary": "Ежеквартальный анализ Dragos по данным сайтов утечек и публичным раскрытиям инцидентов у промышленных организаций. Объём растёт третий квартал подряд (1 020 → 1 140 → 1 266), число вымогательских брендов с промышленными жертвами выросло с 70 до 99. Основные векторы неизменны: эксплуатация пограничных устройств и корпоративных приложений в первые дни после раскрытия уязвимостей (JetBrains TeamCity, VMware vCenter, SonicWall SMA 1000), украденные учётные данные VPN (кампания FortiBleed — 86 644 устройства FortiGate) и обход EDR. Cl0p вернулась с массовой эксплуатацией PTC Windchill/FlexPLM, похищая инженерные данные без шифрования. Dragos с высокой уверенностью оценивает, что вымогательство останется главной угрозой промышленным организациям.",
  "key_findings": [
    "1 266 инцидентов в Q3 против 1 140 в Q2 и 1 020 в Q1 — рост примерно по 120 случаев в квартал.",
    "Производство — 876 инцидентов (69%, доля растёт третий квартал подряд), экосистема АСУ ТП (интеграторы, производители оборудования) — 116, транспорт и логистика — 105.",
    "США — 473 инцидента (37% мирового объёма), Германия — 66, Индия показала максимальный рост в Азии (15 → 38).",
    "Qilin — 195 жертв (+39% к Q2), The Gentlemen — 167 (третий квартал роста подряд); вместе 29% всех инцидентов. Akira впервые за год выбыла из топ-3 (129 → 52).",
    "Уязвимости переходят от раскрытия к эксплуатации вымогателями за дни: CVE-2026-63077 (TeamCity) и CVE-2026-59310 (vCenter) — менее чем за две недели, обе в каталоге CISA KEV.",
    "Cl0p вернулась с 35 жертвами: массовая эксплуатация CVE-2026-12569 в PTC Windchill и FlexPLM, кража конструкторской документации и вымогательство без шифрования.",
    "Кампания FortiBleed собрала рабочие учётные данные 86 644 устройств FortiGate в 194 странах; ФБР связывает её с INC Ransom и Lynx и предупреждает, что кампания активна.",
    "Зафиксированы вторжения с ИИ-ассистентом: группа TAT26-60 использовала Claude Code для выполнения команд и разведки в сетях жертв; ошибочная команда ИИ вывела из строя межсетевой экран газораспределительной компании."
  ],
  "stats": [
    {
      "value": "1 266",
      "label": "инцидентов в Q3 (+11%)"
    },
    {
      "value": "69%",
      "label": "жертв — производство"
    },
    {
      "value": "99",
      "label": "брендов с промышленными жертвами (было 70)"
    },
    {
      "value": "86 644",
      "label": "устройств FortiGate в кампании FortiBleed"
    }
  ],
  "actors": [
    "Qilin",
    "The Gentlemen",
    "Akira",
    "Cl0p",
    "INC Ransom",
    "Lynx",
    "Gunra",
    "TAT26-60"
  ],
  "malware": [
    "GentleKiller",
    "FortigateSniffer"
  ],
  "cves": [
    "CVE-2026-12569",
    "CVE-2026-63077",
    "CVE-2026-59310",
    "CVE-2026-15409",
    "CVE-2026-0257"
  ],
  "ttps": [
    {
      "id": "T1190",
      "name": "Exploit Public-Facing Application"
    },
    {
      "id": "T1078",
      "name": "Valid Accounts"
    },
    {
      "id": "T1486",
      "name": "Data Encrypted for Impact"
    },
    {
      "id": "T1567",
      "name": "Exfiltration Over Web Service"
    },
    {
      "id": "T1562.001",
      "name": "Impair Defenses: Disable or Modify Tools"
    }
  ],
  "recommendations": [
    "Считать все интернет-доступные активы обнаружимыми: непрерывное управление внешней поверхностью атаки и ускоренное патчирование пограничных устройств (VPN, межсетевые экраны, vCenter, TeamCity).",
    "Сбросить учётные данные администраторов и VPN на устройствах FortiGate, включить MFA и проверить наличие чужих учётных записей — последствия FortiBleed будут всплывать ещё долго.",
    "Строить защиту OT через зависимости: резервирование и планы восстановления ERP, виртуализации и служб идентификации, без которых останавливается производство.",
    "Проверить поставщиков инженерных услуг и PLM-системы (Windchill/FlexPLM): украденная конструкторская документация раскрывает состав оборудования и поставщиков ниже по цепочке."
  ],
  "why_it_matters": "Риск для промышленности идёт не от «АСУ ТП-шифровальщиков», а от ударов по корпоративной ИТ, от которой зависит производство: остановка ERP или виртуализации останавливает завод без единой команды в контроллер. Окно между раскрытием уязвимости и её использованием вымогателями сократилось до нескольких дней.",
  "source_note": "Выжимка по блогу Dragos от 16.11.2026 (полный текст открыт).",
  "en": {
    "tldr": "Ransomware attacks on industrial organisations rose 11%: 1,266 incidents in Q3 2026. Manufacturing accounts for 69% of victims; Qilin and The Gentlemen claim 29%. In no case did attackers reach direct control-system manipulation — the damage comes through the enterprise IT that OT depends on.",
    "summary": "Dragos' quarterly analysis based on data leak sites and public disclosures affecting industrial organisations. Volume grew for the third consecutive quarter (1,020 → 1,140 → 1,266), and the number of ransomware brands claiming industrial victims rose from 70 to 99. The main vectors are unchanged: exploitation of edge devices and enterprise applications within days of disclosure (JetBrains TeamCity, VMware vCenter, SonicWall SMA 1000), stolen VPN credentials (the FortiBleed campaign — 86,644 FortiGate devices) and EDR evasion. Cl0p returned with mass exploitation of PTC Windchill/FlexPLM, stealing engineering data without encryption. Dragos assesses with high confidence that ransomware will remain the top threat to industrial organisations.",
    "key_findings": [
      "1,266 incidents in Q3 versus 1,140 in Q2 and 1,020 in Q1 — growth of roughly 120 cases per quarter.",
      "Manufacturing — 876 incidents (69%, its share rising for a third straight quarter); the ICS ecosystem (integrators, equipment makers) — 116; transportation and logistics — 105.",
      "The U.S. — 473 incidents (37% of the global total), Germany — 66; India posted Asia's largest increase (15 → 38).",
      "Qilin — 195 victims (+39% vs Q2), The Gentlemen — 167 (third consecutive quarterly rise); together 29% of all incidents. Akira fell out of the top three for the first time in a year (129 → 52).",
      "Vulnerabilities moved from disclosure to ransomware exploitation within days: CVE-2026-63077 (TeamCity) and CVE-2026-59310 (vCenter) in under two weeks; both are in CISA's KEV catalog.",
      "Cl0p returned with 35 victims: mass exploitation of CVE-2026-12569 in PTC Windchill and FlexPLM, stealing engineering documentation with extortion but no encryption.",
      "The FortiBleed campaign harvested working credentials for 86,644 FortiGate devices in 194 countries; the FBI links it to INC Ransom and Lynx and warns it remains active.",
      "AI-assisted intrusions observed: the TAT26-60 group used Claude Code to execute commands and enumerate victim networks; an erroneous AI command knocked out a gas utility's perimeter firewall."
    ],
    "stats": [
      {
        "value": "1,266",
        "label": "incidents in Q3 (+11%)"
      },
      {
        "value": "69%",
        "label": "of victims in manufacturing"
      },
      {
        "value": "99",
        "label": "brands with industrial victims (was 70)"
      },
      {
        "value": "86,644",
        "label": "FortiGate devices in the FortiBleed campaign"
      }
    ],
    "recommendations": [
      "Assume every internet-facing asset is discoverable: continuous external attack surface management and accelerated patching of edge devices (VPN, firewalls, vCenter, TeamCity).",
      "Rotate administrator and VPN credentials on FortiGate devices, enforce MFA, and audit for rogue accounts — FortiBleed's fallout will surface for a long time.",
      "Defend OT through its dependencies: back up and rehearse recovery of the ERP, virtualisation, and identity services that production cannot run without.",
      "Review engineering service providers and PLM systems (Windchill/FlexPLM): stolen design documentation exposes equipment and suppliers downstream."
    ],
    "why_it_matters": "The risk to industry comes not from 'ICS ransomware' but from hits on the enterprise IT that production depends on: stopping ERP or virtualisation stops the plant without a single command to a controller. The window between vulnerability disclosure and ransomware exploitation has shrunk to days.",
    "source_note": "Summary based on the Dragos blog post of 16 Nov 2026 (full text publicly available)."
  }
});
