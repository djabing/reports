RDB.add({
  "id": "2026-11-pt-vector-2027",
  "vendor": "pt",
  "title": "PT Vector 2027",
  "title_ru": "PT Vector 2027: число успешных атак на российские организации выросло на 40%, кибершпионаж — главный мотив",
  "url": "https://www.securitylab.ru/news/580189.php",
  "pdf_url": "",
  "published": "2026-11-16",
  "date_precision": "day",
  "added": "2026-11-19",
  "type": "landscape",
  "lang": "ru",
  "importance": 2,
  "tier": "key",
  "tags": [
    "годовой",
    "прогноз",
    "кибершпионаж",
    "хактивизм",
    "RAT"
  ],
  "sectors": [
    "Промышленность",
    "Госсектор",
    "Телеком"
  ],
  "regions": [
    "Россия"
  ],
  "tldr": "Positive Technologies в исследовании PT Vector 2027 насчитала 605 успешных атак на российские организации с октября 2025 по сентябрь 2026 г. — на 40% больше, чем годом ранее (433). Главный мотив — кибершпионаж (29%), доля RAT среди атак с ВПО выросла до 62%, а шифровальщиков — снизилась до 24%. На 2027 г. PT прогнозирует ещё +30–40%.",
  "summary": "В отчёт вошли только успешные атаки — инциденты с негативными последствиями, поэтому цифры отражают нижнюю границу и динамику. Мотивы распределились почти поровну: кибершпионаж 29%, идеологически мотивированные группировки 28%, финансовая выгода 26%. Хактивисты всё чаще остаются в инфраструктуре: доля их атак с ВПО без шифровальщиков и вайперов выросла с 7% до 41%, с RAT — с 36% до 53%, доля DDoS среди их атак — с 19% до 34%. Чаще всего атакам подвергались промышленность, госучреждения и телеком; число успешных атак на телеком выросло на 86%, и отрасль поднялась с пятого на третье место. Последствия: утечка конфиденциальной информации (55%), нарушение основной деятельности (36%), потеря доступа к инфраструктуре или данным (18%). Атаки через скомпрометированных подрядчиков и партнёров выросли втрое — до 4% всех атак. В 2027 г. главными угрозами PT называет эксплуатацию уязвимостей отечественного ПО и компрометацию централизованных систем управления ПО.",
  "key_findings": [
    "605 успешных атак за год против 433 годом ранее (+40%).",
    "Кибершпионаж (29%) стал главным мотивом, опередив идеологические (28%) и финансовые (26%) атаки.",
    "Доля RAT среди атак с ВПО выросла с 52% до 62%, шифровальщиков — снизилась с 35% до 24%; большинство атак с RAT начинались с фишинга.",
    "Число успешных атак на телеком выросло на 86% — отрасль поднялась на третье место.",
    "Атаки через подрядчиков и партнёров выросли втрое, до 4% всех атак."
  ],
  "stats": [
    {
      "value": "605",
      "label": "успешных атак на российские организации (окт. 2025 – сент. 2026)"
    },
    {
      "value": "+40%",
      "label": "рост к предыдущему периоду"
    },
    {
      "value": "62%",
      "label": "доля RAT среди атак с ВПО (было 52%)"
    },
    {
      "value": "55%",
      "label": "инцидентов привели к утечке конфиденциальных данных"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1566",
      "name": "Phishing"
    },
    {
      "id": "T1219",
      "name": "Remote Access Software"
    },
    {
      "id": "T1199",
      "name": "Trusted Relationship"
    },
    {
      "id": "T1498",
      "name": "Network Denial of Service"
    }
  ],
  "recommendations": [
    "Не считать обнаружение RAT конечной целью расследования: скрытый доступ и последующее уничтожение данных могут быть этапами одной операции.",
    "Усилить контроль доступа подрядчиков и партнёров к инфраструктуре.",
    "Своевременно закрывать уязвимости отечественного ПО и защищать централизованные системы управления ПО."
  ],
  "why_it_matters": "Годовой обзор крупнейшего российского вендора показывает смещение от разрушительных атак к долговременному скрытому присутствию и шпионажу в российских организациях.",
  "source_note": "Выжимка по публикации SecurityLab.ru от 16.11.2026 (со ссылкой на материал РБК) с перекрёстной сверкой по tproger.ru; сайт Positive Technologies в момент сбора был недоступен (503), поэтому первоисточник не прочитан. Явных рекомендаций в публикациях нет — они сформулированы по выводам отчёта. Это оценки одного вендора по собственной базе инцидентов.",
  "en": {
    "title": "PT Vector 2027: successful attacks on Russian organisations up 40%, cyber espionage the main motive",
    "tldr": "In its PT Vector 2027 study Positive Technologies counted 605 successful attacks on Russian organisations from October 2025 to September 2026 — 40% more than a year earlier (433). The main motive is cyber espionage (29%), the share of RATs among malware attacks rose to 62% and that of ransomware fell to 24%. PT forecasts another 30–40% rise in 2027.",
    "summary": "The report counts only successful attacks — incidents with negative consequences — so the figures reflect a lower bound and the trend. Motives were split almost evenly: cyber espionage 29%, ideologically motivated groups 28%, financial gain 26%. Hacktivists increasingly stay inside infrastructure: the share of their malware attacks without encryptors or wipers rose from 7% to 41%, those with RATs from 36% to 53%, and DDoS among their attacks from 19% to 34%. Industry, government institutions and telecom were attacked most often; successful attacks on telecom rose 86%, moving the sector from fifth to third place. Consequences: leaks of confidential information (55%), disruption of core operations (36%), loss of access to infrastructure or data (18%). Attacks via compromised contractors and partners tripled to 4% of all attacks. For 2027 PT names exploitation of vulnerabilities in domestic software and compromise of centralised software management systems as the main threats.",
    "key_findings": [
      "605 successful attacks in a year versus 433 a year earlier (+40%).",
      "Cyber espionage (29%) became the main motive, ahead of ideological (28%) and financial (26%) attacks.",
      "The share of RATs among malware attacks rose from 52% to 62% and ransomware fell from 35% to 24%; most RAT attacks started with phishing.",
      "Successful attacks on telecom rose 86%, moving the sector up to third place.",
      "Attacks via contractors and partners tripled to 4% of all attacks."
    ],
    "stats": [
      {
        "value": "605",
        "label": "successful attacks on Russian organisations (Oct 2025 – Sep 2026)"
      },
      {
        "value": "+40%",
        "label": "growth on the previous period"
      },
      {
        "value": "62%",
        "label": "share of RATs among malware attacks (was 52%)"
      },
      {
        "value": "55%",
        "label": "of incidents led to leaks of confidential data"
      }
    ],
    "recommendations": [
      "Do not treat a RAT detection as the end of an investigation: hidden access and later data destruction may be stages of one operation.",
      "Tighten control over contractor and partner access to infrastructure.",
      "Promptly fix vulnerabilities in domestic software and protect centralised software management systems."
    ],
    "why_it_matters": "The annual review by Russia's largest security vendor shows a shift from destructive attacks to long-term covert presence and espionage in Russian organisations.",
    "source_note": "Summary based on a SecurityLab.ru article of 16 Nov 2026 (citing RBC) cross-checked with tproger.ru; the Positive Technologies website was unavailable (503) at collection time, so the primary source was not read. The articles give no explicit recommendations — they are derived from the report's conclusions. These are one vendor's estimates based on its own incident database."
  }
});
