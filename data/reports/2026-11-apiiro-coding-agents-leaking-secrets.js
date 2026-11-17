RDB.add({
  "id": "2026-11-apiiro-coding-agents-leaking-secrets",
  "vendor": "apiiro",
  "title": "Coding Agents Are Leaking Your Secrets to GitHub",
  "title_ru": "ИИ-агенты для программирования сливают секреты на GitHub",
  "url": "https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again/",
  "pdf_url": "",
  "published": "2026-11-05",
  "date_precision": "day",
  "added": "2026-11-16",
  "type": "ai",
  "lang": "en",
  "importance": 3,
  "tier": "case",
  "tags": [
    "ИИ",
    "секреты",
    "GitHub",
    "AppSec",
    "цепочка поставок"
  ],
  "sectors": [
    "ИТ и разработка"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Apiiro нашла 2539 секретов в 1994 публичных репозиториях. Причина — кнопка «Yes, and don't ask again» в Claude Code сохраняет одобренную команду вместе с секретами в .claude/settings.local.json; около 19% таких секретов не находят Gitleaks и TruffleHog.",
  "summary": "Исследователи изучили 104 185 публичных копий файла .claude/settings.local.json и нашли реальные секреты в 1122 из них (~1,1%). С учётом истории git, других файлов и сохранённых транскриптов — 2539 секретов в 1994 репозиториях. Из 16 сравнённых агентов только Claude Code по умолчанию сохраняет полную одобренную команду в файле проекта. Работоспособность ключей не проверялась, фактов злоупотребления не сообщалось. Anthropic заявила, что изучает меры по предотвращению.",
  "key_findings": [
    "Проверено 104 185 файлов .claude/settings.local.json; секреты в 1122 (~1,1%).",
    "Всего 2539 секретов в 1994 репозиториях с учётом истории и транскриптов.",
    "Из 16 агентов только Claude Code сохраняет полную команду в файле проекта по умолчанию.",
    "~19% секретов не обнаруживают Gitleaks и TruffleHog.",
    "Работоспособность ключей не проверялась; Anthropic изучает исправление."
  ],
  "stats": [
    {
      "value": "2539",
      "label": "секретов"
    },
    {
      "value": "1994",
      "label": "репозитория"
    },
    {
      "value": "~19%",
      "label": "пропускают сканеры секретов"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [
    {
      "id": "T1552.001",
      "name": "Credentials In Files"
    }
  ],
  "recommendations": [
    "Добавить .claude/settings.local.json и аналогичные файлы агентов в .gitignore.",
    "Не передавать секреты в командах, которые одобряются агенту «навсегда»; использовать переменные окружения и хранилища секретов.",
    "Проверить историю репозиториев на утёкшие ключи и отозвать их.",
    "Дополнить сканеры секретов правилами для конфигураций ИИ-агентов."
  ],
  "why_it_matters": "Конкретный, легко проверяемый риск ИИ-разработки: удобство агентов превращается в утечку ключей в публичный доступ.",
  "source_note": "Выжимка по блогу Apiiro и обзорам (Dark Reading, DevOps.com, Cybernews).",
  "en": {
    "tldr": "Apiiro found 2,539 secrets in 1,994 public repositories. The cause: the 'Yes, and don't ask again' button in Claude Code saves the approved command, secrets included, to .claude/settings.local.json; about 19% of these secrets are missed by Gitleaks and TruffleHog.",
    "summary": "Researchers examined 104,185 public copies of .claude/settings.local.json and found real secrets in 1,122 of them (~1.1%). Including git history, other files and saved transcripts — 2,539 secrets in 1,994 repositories. Of the 16 agents compared, only Claude Code saves the full approved command to a project file by default. Key validity was not checked and no abuse was reported. Anthropic said it is looking into preventive measures.",
    "key_findings": [
      "104,185 .claude/settings.local.json files checked; secrets in 1,122 (~1.1%).",
      "2,539 secrets in total across 1,994 repositories, including history and transcripts.",
      "Of 16 agents, only Claude Code saves the full command to a project file by default.",
      "~19% of secrets are not detected by Gitleaks and TruffleHog.",
      "Key validity was not checked; Anthropic is looking into a fix."
    ],
    "stats": [
      {
        "value": "2,539",
        "label": "secrets"
      },
      {
        "value": "1,994",
        "label": "repositories"
      },
      {
        "value": "~19%",
        "label": "missed by secret scanners"
      }
    ],
    "recommendations": [
      "Add .claude/settings.local.json and similar agent files to .gitignore.",
      "Do not pass secrets in commands approved for an agent 'forever'; use environment variables and secret stores.",
      "Check repository history for leaked keys and revoke them.",
      "Extend secret scanners with rules for AI agent configurations."
    ],
    "why_it_matters": "A concrete, easily verifiable AI development risk: agent convenience turns into public key leaks.",
    "source_note": "Summary based on the Apiiro blog and coverage (Dark Reading, DevOps.com, Cybernews)."
  }
});
