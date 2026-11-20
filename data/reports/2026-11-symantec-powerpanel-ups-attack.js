RDB.add({
  "id": "2026-11-symantec-powerpanel-ups-attack",
  "vendor": "symantec",
  "title": "CyberPower PowerPanel Exploited to Run Malicious Code on Domain Controller",
  "title_ru": "Symantec: ПО управления ИБП CyberPower использовали для запуска кода на контроллере домена",
  "url": "https://www.security.com/threat-intelligence/power-management-software-attack-vector",
  "pdf_url": "",
  "published": "2026-11-18",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "other",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "легитимное ПО",
    "контроллер домена",
    "Active Directory",
    "ИБП",
    "учётные данные"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Symantec описала атаку, в которой ПО CyberPower PowerPanel Business для управления ИБП превратили в канал удалённых команд: штатная функция запуска скрипта при сбое питания выполняет его с правами SYSTEM на контроллере домена — без эксплуатации уязвимостей.",
  "summary": "PowerPanel Business управляет ИБП и часто стоит на критичных серверах — гипервизорах, серверах БД и файловых серверах. Администратор может задать скрипт, запускаемый при проблеме с питанием; служба выполняет его с правами SYSTEM. Атакующий загрузил скрипты через веб-консоль, с их помощью развернул средство отключения антивируса и скопировал базу Active Directory, затем закрепился имплантом, загружаемым через DLL sideloading. Использовались в основном штатные инструменты Windows, скрипты сбора данных многократно переписывались — признак работы оператора вручную. Как атакующий получил доступ к сети и консоли, не установлено; возможные пути — украденные учётные данные администратора и известные слабости продукта (пароль по умолчанию, зашитые учётные данные, уязвимость загрузки файлов). Жертва не названа, связь с известными группами не установлена, кражи данных и шифрования не зафиксировано — мотив неясен.",
  "key_findings": [
    "Функция «скрипт при сбое питания» в PowerPanel Business выполняет любой загруженный скрипт с правами SYSTEM — уязвимость для этого не нужна.",
    "Через веб-консоль загружены скрипты, развернувшие средство отключения антивируса и скопировавшие базу Active Directory.",
    "Закрепление — имплант через DLL sideloading; в основном использовались штатные средства Windows.",
    "Скрипты сбора переписывались несколько раз — признак ручной работы оператора.",
    "Вероятные пути к консоли: украденные учётные данные, пароль по умолчанию, зашитые учётные данные, уязвимость загрузки файлов.",
    "Жертва и группа не установлены; кражи данных и шифрования не выявлено."
  ],
  "stats": [
    {
      "value": "SYSTEM",
      "label": "права выполнения скриптов PowerPanel"
    },
    {
      "value": "0",
      "label": "эксплуатируемых уязвимостей для запуска кода"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    "T1078",
    "T1059",
    "T1562.001",
    "T1003.003",
    "T1574.002"
  ],
  "recommendations": [
    "Относиться к ПО управления питанием как к средствам удалённого администрирования: ограничить доступ к консоли выделенными машинами администраторов и не публиковать её в интернет.",
    "Сменить пароль администратора по умолчанию и своевременно обновлять продукт.",
    "Проверить папки, из которых PowerPanel запускает скрипты; незнакомый скрипт считать вредоносным.",
    "При обнаружении индикаторов сбросить учётные данные Active Directory; защищать хосты управления питанием как критичные."
  ],
  "why_it_matters": "Вспомогательное инфраструктурное ПО на критичных серверах редко контролируется, но даёт атакующему штатный способ выполнить код с максимальными правами.",
  "source_note": "Сайт Symantec (security.com) недоступен из среды сбора; выжимка по публикации Infosecurity Magazine от 19.11.2026, пересказывающей исследование Symantec от 18.11.2026; название — заголовок Infosecurity Magazine, оригинальное название отчёта проверить не удалось.",
  "en": {
    "tldr": "Symantec described an attack in which CyberPower's PowerPanel Business UPS management software was turned into a remote command channel: the built-in run-a-script-on-power-event feature executes scripts as SYSTEM on a domain controller, with no vulnerability exploited.",
    "summary": "PowerPanel Business manages UPS units and often runs on critical servers such as hypervisors, database and file servers. Administrators can set a script to launch when a power problem is detected; the service runs it with SYSTEM privileges. The attacker uploaded scripts through the web console, used them to stage an antivirus killer and copy the Active Directory database, then persisted with an implant loaded via DLL sideloading. Mostly built-in Windows tools were used, and the data-collection scripts were rewritten several times, a sign of a live human operator. How the attacker reached the network and console is unknown; possible routes include stolen administrator credentials and known product weaknesses (default admin password, hard-coded credentials, a file upload flaw). The victim is not named, no known group is linked, and no data theft or ransomware was seen, so the motive is unclear.",
    "key_findings": [
      "PowerPanel Business's power-event script feature runs any uploaded script as SYSTEM; no vulnerability is needed.",
      "Scripts uploaded via the web console staged an antivirus killer and copied the Active Directory database.",
      "Persistence via an implant loaded through DLL sideloading; mostly built-in Windows tools were used.",
      "Collection scripts were rewritten several times, indicating a hands-on operator.",
      "Likely routes to the console: stolen credentials, default password, hard-coded credentials, a file upload flaw.",
      "Victim and group unknown; no data theft or encryption observed."
    ],
    "stats": [
      {
        "value": "SYSTEM",
        "label": "privileges for PowerPanel scripts"
      },
      {
        "value": "0",
        "label": "vulnerabilities exploited to run code"
      }
    ],
    "recommendations": [
      "Treat power management software like remote administration tools: limit console access to dedicated admin machines and keep it off the internet.",
      "Change the default admin password and keep the product patched.",
      "Check the folders PowerPanel runs scripts from; treat any unfamiliar script as malicious.",
      "Reset Active Directory credentials if indicators are found; protect power management hosts as high-value systems."
    ],
    "why_it_matters": "Auxiliary infrastructure software on critical servers is rarely monitored yet gives attackers a built-in way to run code with the highest privileges.",
    "source_note": "Symantec's site (security.com) was unreachable from the collection environment; summary based on Infosecurity Magazine's article of 19 Nov 2026 covering Symantec's research of 18 Nov 2026; the title is Infosecurity Magazine's headline, as the original report title could not be verified."
  }
});
