RDB.add({
  "id": "2026-11-elastic-cyberstrikeai-aws-intrusion",
  "vendor": "elastic",
  "title": "56 AWS API calls in 141 milliseconds: Inside an AI-run intrusion",
  "title_ru": "56 вызовов AWS API за 141 мс: разбор вторжения в облако с сервера CyberStrikeAI",
  "url": "https://www.elastic.co/security-labs/threat-command/cyberstrikeai-aws-cloudtrail-intrusion",
  "pdf_url": "",
  "published": "2026-11-13",
  "date_precision": "day",
  "added": "2026-11-19",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "агентные атаки",
    "облако",
    "секреты",
    "обнаружение"
  ],
  "sectors": [
    "Облачные сервисы"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Elastic Security Labs разобрала вторжение в AWS с сервера, на котором работала открытая ИИ-платформа для атак CyberStrikeAI: с 30 сентября по 16 октября 2026 г. атакующий использовал учётные данные восьми идентичностей в четырёх аккаунтах и, например, сделал 56 запросов userData за 141 мс. Авторы называют атаку ИИ-ассистированной, но не могут доказать, что решения принимала LLM.",
  "summary": "С внешнего IP-адреса (хостинг SonderCloud, Гонконг), на котором по данным сканирования интернета работал веб-интерфейс CyberStrikeAI, использовались пять IAM-пользователей и три роли экземпляров EC2; имена сессий совпадали с ID экземпляров, то есть учётные данные, вероятно, были украдены с самих экземпляров (через SSRF или компрометацию хоста). Атака прошла четыре фазы: проверка учётных данных (GetCallerIdentity, GetSessionToken) в нескольких аккаунтах за 51 минуту; сбор секретов из Secrets Manager и 56 вызовов DescribeInstanceAttribute (userData) за 141 мс; повторная проверка, чтение секретов из непродуктивной среды, расшифровка параметра SSM SecureString и SSM SendCommand через 29 секунд; возвращение спустя 14 дней. Всего сработало 78 алертов среднего и низкого уровня по шести правилам, связанных лишь общим IP-адресом. Elastic добавила два правила высокой критичности (массовое чтение userData и массовая проверка аккаунтов) и показала прототип автоматической изоляции скомпрометированного IAM-пользователя.",
  "key_findings": [
    "Машинный темп (запросы с интервалом около 2,5 мс) сочетался с паузами от часов до 14 дней — короткие фиксированные окна корреляции разбили бы атаку на несвязанные алерты.",
    "Все 78 алертов были среднего или низкого уровня; 74% из них — чтение userData экземпляров EC2.",
    "Секреты в userData EC2 и пересечение непродуктивных и продуктивных секретов расширили доступ атакующего.",
    "Связь с CyberStrikeAI установлена по инфраструктуре; способ первоначального получения учётных данных неизвестен."
  ],
  "stats": [
    {
      "value": "56 за 141 мс",
      "label": "вызовов DescribeInstanceAttribute (userData)"
    },
    {
      "value": "8 / 4",
      "label": "идентичностей AWS / аккаунтов задействовано"
    },
    {
      "value": "78",
      "label": "алертов, все среднего или низкого уровня"
    },
    {
      "value": "14 дней",
      "label": "пауза перед повторным возвращением атакующего"
    }
  ],
  "actors": [],
  "malware": [
    "CyberStrikeAI"
  ],
  "cves": [],
  "ttps": [
    {
      "id": "T1078.004",
      "name": "Valid Accounts: Cloud Accounts"
    },
    {
      "id": "T1087.004",
      "name": "Account Discovery: Cloud Account"
    },
    {
      "id": "T1552.005",
      "name": "Unsecured Credentials: Cloud Instance Metadata API"
    },
    {
      "id": "T1555.006",
      "name": "Credentials from Password Stores: Cloud Secrets Management Stores"
    },
    {
      "id": "T1651",
      "name": "Cloud Administration Command"
    }
  ],
  "recommendations": [
    "Сменить учётные данные и отозвать сессии всех идентичностей, обращавшихся с подозрительного IP; пересоздать профили экземпляров.",
    "Считать секреты в userData EC2 скомпрометированными и перенести их в Secrets Manager или Parameter Store; ограничить ec2:DescribeInstanceAttribute.",
    "Коррелировать события по идентичности и источнику в гибких, в том числе длинных, окнах и добавить правила на массовое перечисление.",
    "Заранее определить, какие детектирования высокой достоверности запускают автоматическую изоляцию."
  ],
  "why_it_matters": "Один из первых подробных разборов облачного вторжения с инфраструктуры ИИ-фреймворка для атак показывает, что машинный темп и разрывы во времени ломают привычные правила корреляции.",
  "source_note": "Выжимка по первоисточнику — публикации Elastic Security Labs от 13.11.2026. Авторы прямо оговаривают, что участие LLM в принятии решений не доказано.",
  "en": {
    "tldr": "Elastic Security Labs analysed an AWS intrusion from a server running CyberStrikeAI, an open-source AI offensive platform: from 30 September to 16 October 2026 the attacker used credentials of eight identities across four accounts and, for example, made 56 userData requests in 141 ms. The authors call it AI-assisted but cannot prove that an LLM made the decisions.",
    "summary": "From an external IP address (hosted by SonderCloud, Hong Kong) that internet scan data showed serving a CyberStrikeAI web interface, five IAM users and three EC2 instance roles were used; session names matched instance IDs, so the credentials were likely stolen from the instances themselves (via SSRF or host compromise). The attack went through four phases: credential validation (GetCallerIdentity, GetSessionToken) across accounts within 51 minutes; secret harvesting from Secrets Manager and 56 DescribeInstanceAttribute (userData) calls in 141 ms; revalidation, reading non-production secrets, decrypting an SSM SecureString parameter and an SSM SendCommand 29 seconds later; and a return after 14 days. In total 78 medium- and low-severity alerts fired across six rules, linked only by the shared IP address. Elastic added two high-severity rules (bulk userData reads and bulk account validation) and showed a prototype of automated isolation of a compromised IAM user.",
    "key_findings": [
      "Machine tempo (requests about 2.5 ms apart) combined with gaps of hours to 14 days — short fixed correlation windows would have split the attack into unrelated alerts.",
      "All 78 alerts were medium or low severity; 74% of them were EC2 instance userData reads.",
      "Secrets in EC2 userData and overlap between non-production and production secrets widened the attacker's access.",
      "The link to CyberStrikeAI is based on infrastructure; how the credentials were originally obtained is unknown."
    ],
    "stats": [
      {
        "value": "56 in 141 ms",
        "label": "DescribeInstanceAttribute (userData) calls"
      },
      {
        "value": "8 / 4",
        "label": "AWS identities / accounts involved"
      },
      {
        "value": "78",
        "label": "alerts, all medium or low severity"
      },
      {
        "value": "14 days",
        "label": "gap before the attacker returned"
      }
    ],
    "recommendations": [
      "Rotate credentials and revoke sessions for every identity that touched the suspicious IP; replace instance profiles.",
      "Treat secrets in EC2 userData as exposed and move them to Secrets Manager or Parameter Store; restrict ec2:DescribeInstanceAttribute.",
      "Correlate events by identity and source over flexible, including long, windows and add bulk enumeration rules.",
      "Decide in advance which high-confidence detections trigger automated containment."
    ],
    "why_it_matters": "One of the first detailed analyses of a cloud intrusion from AI offensive framework infrastructure shows that machine tempo and time gaps break familiar correlation rules.",
    "source_note": "Summary based on the primary source — Elastic Security Labs post of 13 Nov 2026. The authors explicitly note that LLM decision-making is not proven."
  }
});
