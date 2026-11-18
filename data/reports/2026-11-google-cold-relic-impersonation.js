RDB.add({
  "id": "2026-11-google-cold-relic-impersonation",
  "vendor": "google",
  "title": "COLD RELIC: A Case Study in Impersonation and Compromise",
  "title_ru": "COLD RELIC: как данные из одного взлома облачного тенанта используются для убедительного фишинга следующей жертвы",
  "url": "https://cloud.google.com/blog/topics/threat-intelligence/cold-relic-a-case-study-in-impersonation-and-compromise",
  "pdf_url": "",
  "published": "2026-11-17",
  "date_precision": "day",
  "added": "2026-11-18",
  "type": "apt",
  "lang": "en",
  "importance": 2,
  "tier": "case",
  "tags": [
    "APT",
    "фишинг",
    "MFA",
    "Google Workspace",
    "Entra ID",
    "облачные сервисы"
  ],
  "sectors": [
    "Госсектор",
    "ОПК",
    "НКО и гражданское общество"
  ],
  "regions": [
    "США",
    "Европа",
    "Северная Америка"
  ],
  "tldr": "GTIG и Mandiant разобрали два взлома американских организаций группировкой COLD RELIC (ранее COLDRIVER/UNC4057, она же Star Blizzard, Callisto): после компрометации тенанта Google Workspace атакующие выгрузили данные, а затем использовали украденную переписку и контакты, чтобы от имени сотрудника первой жертвы фишить вторую организацию через мессенджер.",
  "summary": "GTIG относит COLD RELIC к российским государственным кибершпионским группам и отслеживает её фишинговые кампании с 2015 г.; цели — госслужащие, оборонные подрядчики и НКО Европы и Северной Америки. В первом случае (конец 2025 г.) атакующие вошли под учётной записью суперадминистратора через резидентный прокси рядом с жертвой, добились подтверждения push-уведомлением (MFA fatigue), закрепились через новый passkey, резервные коды и собственные MFA-устройства, массово расшарили файлы на свой адрес, выполнили Customer Takeout всего домена и удаляли уведомления Alert Center. Во втором случае (2026 г.) жертву, использующую Entra ID как SSO для Google Workspace, атаковали через защищённый мессенджер от имени сотрудника первой организации; ссылки собирали учётные данные и токены, затем показывали документ-приманку. Фишинговые ссылки начинаются на взломанных сайтах-редиректорах с параметром, содержащим имя предыдущей жертвы или тему приманки. ВПО не использовалось — только фишинг, прокси и легитимные функции облака. В ноябре 2026 г. GTIG наблюдала новые операции группы.",
  "key_findings": [
    "Добавленные атакующим passkey пережили сброс пароля и сессий — сбросов пароля недостаточно для выдворения.",
    "Похищенные письма, контакты, списки сотрудников и расписания мероприятий используются как материал для правдоподобных приманок против партнёров жертвы.",
    "Группа применяла антифорензику: запрашивала журналы аудита и удаляла уведомления Alert Center.",
    "Атаки обходились без ВПО: MFA fatigue, резидентные прокси, OAuth-синхронизация почты, Customer Takeout и массовый внешний доступ к файлам.",
    "Отчёт сопровождается таблицей детектирований по событиям Google Workspace и 13 техниками MITRE ATT&CK."
  ],
  "stats": [
    {
      "value": "2",
      "label": "разобранных взлома организаций в США"
    },
    {
      "value": "с 2015",
      "label": "GTIG отслеживает фишинг группы"
    },
    {
      "value": "13",
      "label": "техник MITRE ATT&CK в отчёте"
    }
  ],
  "actors": [
    "COLD RELIC",
    "COLDRIVER",
    "Star Blizzard"
  ],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1621",
      "name": "Multi-Factor Authentication Request Generation"
    },
    {
      "id": "T1098.005",
      "name": "Account Manipulation: Device Registration"
    },
    {
      "id": "T1078.004",
      "name": "Valid Accounts: Cloud Accounts"
    },
    {
      "id": "T1114.002",
      "name": "Email Collection: Remote Email Collection"
    },
    {
      "id": "T1530",
      "name": "Data from Cloud Storage"
    },
    {
      "id": "T1562.008",
      "name": "Impair Defenses: Disable or Modify Cloud Logs"
    },
    {
      "id": "T1567.002",
      "name": "Exfiltration Over Web Service: Exfiltration to Cloud Storage"
    }
  ],
  "recommendations": [
    "Перейти на фишингоустойчивую MFA (FIDO2/WebAuthn) и отказаться от SMS, звонков и push.",
    "Требовать подтверждения администратора или внеполосной проверки для новых MFA-устройств и passkey, отслеживать их регистрацию у привилегированных учётных записей.",
    "При реагировании отзывать все сессии, refresh-токены и OAuth-разрешения и удалять чужие passkey, резервные коды и устройства — и в Google Workspace, и в Entra ID.",
    "Обогащать журналы входа данными о резидентных прокси и VPN, настроить DLP на массовый внешний доступ и поиск паролей и .pst."
  ],
  "why_it_matters": "Кейс показывает, как взлом одной организации превращается в источник доверенных приманок для следующих целей; защита облачных тенантов требует контроля регистраций MFA-устройств, а не только паролей.",
  "source_note": "Выжимка по первоисточнику — публикации Google Threat Intelligence Group/Mandiant от 17.11.2026. Атрибуция и характеристика группы приведены по оценке GTIG и Минюста США; количественных данных о числе жертв нет.",
  "en": {
    "tldr": "GTIG and Mandiant analysed two intrusions into US organisations by COLD RELIC (formerly COLDRIVER/UNC4057, also Star Blizzard, Callisto): after compromising a Google Workspace tenant the attackers exfiltrated data, then used stolen correspondence and contacts to phish a second organisation via a messaging app while posing as an employee of the first victim.",
    "summary": "GTIG classifies COLD RELIC as a Russian state-sponsored espionage group and has tracked its phishing since 2015; targets are government officials, defence contractors and NGOs in Europe and North America. In the first case (late 2025) the attackers logged in as a Super Admin via a residential proxy near the victim, obtained a push approval through MFA fatigue, persisted with a new passkey, backup codes and their own MFA devices, mass-shared files to their address, ran a domain-wide Customer Takeout and deleted Alert Center notifications. In the second case (2026) a victim using Entra ID as SSO for Google Workspace was approached via a secure messaging app by someone posing as an employee of the first organisation; the links harvested credentials and tokens, then showed a document lure. Phishing links start on compromised redirector sites with a parameter naming a previous victim or lure topic. No malware was used — only phishing, proxies and legitimate cloud features. GTIG observed new operations by the group in November 2026.",
    "key_findings": [
      "Attacker-enrolled passkeys survived password and session resets — password resets alone are not enough for eviction.",
      "Stolen emails, contacts, staff lists and event schedules are used to build credible lures against the victim's partners.",
      "The group used anti-forensics: querying audit logs and deleting Alert Center notifications.",
      "The intrusions needed no malware: MFA fatigue, residential proxies, OAuth mail sync, Customer Takeout and mass external file sharing.",
      "The report includes a detection table based on Google Workspace events and 13 MITRE ATT&CK techniques."
    ],
    "stats": [
      {
        "value": "2",
        "label": "intrusions into US organisations analysed"
      },
      {
        "value": "since 2015",
        "label": "GTIG tracking the group's phishing"
      },
      {
        "value": "13",
        "label": "MITRE ATT&CK techniques in the report"
      }
    ],
    "recommendations": [
      "Move to phishing-resistant MFA (FIDO2/WebAuthn) and drop SMS, voice and push.",
      "Require admin or out-of-band approval for new MFA devices and passkeys; monitor their enrolment for privileged accounts.",
      "During response revoke all sessions, refresh tokens and OAuth grants and remove rogue passkeys, backup codes and devices — in both Google Workspace and Entra ID.",
      "Enrich sign-in logs with residential proxy and VPN reputation, and set DLP rules on mass external sharing and searches for passwords and .pst files."
    ],
    "why_it_matters": "The case shows how compromising one organisation becomes a source of trusted lures for the next targets; protecting cloud tenants requires control over MFA device enrolment, not just passwords.",
    "source_note": "Summary based on the primary source — Google Threat Intelligence Group/Mandiant post of 17 Nov 2026. Attribution and characterisation of the group are per GTIG and the US DOJ; no figures on the number of victims are given."
  }
});
