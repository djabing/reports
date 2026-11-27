RDB.add({
  "id": "2026-11-arxiv-agent-skills-supply-chain",
  "vendor": "arxiv",
  "title": "Carried-Over and Agent-Native Threats in the Supply Chain of LLM Agent Skills",
  "title_ru": "Унаследованные и агентные угрозы в цепочке поставок навыков LLM-агентов",
  "url": "https://arxiv.org/abs/2611.30932",
  "pdf_url": "https://arxiv.org/pdf/2611.30932",
  "published": "2026-11-23",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Kaixuan Li, Wenbo Guo, Yang Liu (Nanyang Technological University), Sen Chen (Nankai University)",
  "confidence": "medium-high",
  "tags": [
    "ИИ-агенты",
    "цепочка поставок",
    "агентные навыки",
    "уязвимости",
    "промпт-инъекции"
  ],
  "sectors": [
    "ИТ и разработка ПО"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Исследование всех 48 682 навыков (skills) реестра ClawHub на непреднамеренные уязвимости. Половина навыков с разрешимыми зависимостями тянет версию с известной CVE, но агент достигает уязвимой функции лишь в 3% случаев. Главный реальный риск — собственный код навыков и то, что агент передаёт аргументы через shell.",
  "summary": "Навык — пакет со скриптами, зависимостями и инструкциями SKILL.md; агент заполняет его аргументы из запроса пользователя и недоверенного контента, поэтому ошибка добросовестного автора может превратить косвенную промпт-инъекцию в выполнение кода. Авторы просканировали реестр статическим анализом (SCA, SAST, проверка инструкций установки и вывода секретов в stdout), вручную разобрали все 3428 срабатываний основных детекторов и проверили достижимость в песочнице и с живым LLM-агентом под косвенной инъекцией. Статическая распространённость уязвимостей плохо отражает то, что агент реально может эксплуатировать.",
  "key_findings": [
    "1555 навыков (49,6% из тех, чьи зависимости разрешаются до конкретных версий) зависят от версии с известной CVE, причём 78,3% «рождаются уязвимыми»: CVE была публичной уже при публикации навыка (в медиане за 676 дней), а исправленная версия существовала в 98,6% случаев.",
    "Через полгода 88,7% пар «навык — уязвимость» оставались в манифестах и лишь в 1,7% случаев автор обновил или удалил уязвимую зависимость, хотя 55% этих навыков выпустили новые версии.",
    "Ручная проверка подтвердила 315 навыков с эксплуатируемым путём от входа агента к выполнению команд или кода; в песочнице эксплуатированы 21 из 22 таких дефектов и ни одна из 14 CVE в зависимостях. В целом уязвимая функция зависимости достижима лишь в 47 из 1555 навыков (3,0%).",
    "Живой агент выполнил внедрённую нагрузку в 97 из 200 навыков (48,5%), но в 95 из 97 случаев подстановку $(...) раскрыл shell самого агента ещё до запуска навыка. До уязвимости в коде навыка нагрузка дошла лишь в 5,0%.",
    "Запуск команды навыка как вектора аргументов (execve) вместо shell снизил долю срабатываний среди 97 эксплуатированных навыков с 94,8% до 10,3% без изменения навыков.",
    "Рискованных инструкций установки (curl | bash и т. п.) в SKILL.md, который LLM читает при каждом вызове, в 6,6–22,8 раза больше, чем в install.sh; утечек секретов в stdout подтверждено 22."
  ],
  "stats": [
    {
      "value": "48 682",
      "label": "навыка ClawHub проанализированы"
    },
    {
      "value": "49,6%",
      "label": "навыков с разрешимыми зависимостями тянут версию с CVE"
    },
    {
      "value": "3,0%",
      "label": "из них — с достижимой уязвимой функцией"
    },
    {
      "value": "48,5%",
      "label": "проверенных навыков: агент выполнил внедрённую нагрузку"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Операторам реестров: ставить уязвимости в собственном коде навыков выше алертов по зависимостям, проверять закреплённые версии по OSV при публикации, требовать lock-файл и автоматически проверять SKILL.md на рискованные команды установки.",
    "Разработчикам агентных сред: запускать команды навыков через вызов с вектором аргументов, а не через shell; очищать stdout и stderr от секретов до возврата в контекст; запускать навыки с минимальными правами.",
    "Авторам навыков: проверять входные данные агента на входе в навык, объявлять прямые зависимости вместо дампа pip freeze и не документировать команды, передающие внешний контент в shell.",
    "При оценке риска навыков моделировать путь выбора и вызова агентом, а не ограничиваться списком CVE."
  ],
  "why_it_matters": "Навыки агентов становятся новой экосистемой пакетов без привычных защит (lock-файлы, боты обновлений, CI). Работа показывает, на что тратить ресурсы проверки и какая настройка среды агента снимает большую часть риска.",
  "limits": "Один реестр (ClawHub) и один снимок (март 2026). SAST покрывает только Python и JavaScript, поэтому подтверждённые числа — нижние границы. Ручная разметка кодовых уязвимостей согласована умеренно (κ = 0,62–0,65). Живой агент работал на моделях GPT (gpt-4o-mini, gpt-4o в пилоте) по три запуска, поэтому точные доли эксплуатации зависят от стенда. Препринт не рецензирован.",
  "source_note": "Препринт, версия 1. Выжимка по полному тексту на arXiv; числа сверены с разделами 3–5 статьи.",
  "en": {
    "tldr": "A study of all 48,682 skills in the ClawHub registry for unintentional vulnerabilities. Half of the skills with resolvable dependencies pull in a version with a known CVE, yet the agent reaches the vulnerable function in only 3% of them. The main real risk is the skills' own code and agents passing arguments through a shell.",
    "summary": "A skill is a package of scripts, dependencies and SKILL.md instructions; the agent fills its arguments from the user request and untrusted content, so a benign author's flaw can escalate an indirect prompt injection to code execution. The authors screened the registry with static analysis (SCA, SAST, install-instruction and stdout-credential checks), manually reviewed all 3,428 cases flagged by the main detectors, and tested reachability in a sandbox and with a live LLM agent under indirect prompt injection. Static vulnerability prevalence poorly reflects what an agent can actually exploit.",
    "key_findings": [
      "1,555 skills (49.6% of those whose dependencies resolve to concrete versions) depend on a version with a known CVE, and 78.3% are 'born vulnerable': the CVE was already public when the skill was published (a median of 676 days earlier), and a fixed release existed in 98.6% of cases.",
      "Six months later, 88.7% of the (skill, advisory) pairs were still in the manifests and the author had upgraded or removed the vulnerable dependency in only 1.7% of cases, although 55% of these skills had released new versions.",
      "Manual review confirmed 315 skills with an exploitable path from agent input to a command- or code-execution sink; in the sandbox, 21 of 22 such flaws were exploited and none of 14 dependency CVEs. Overall, the vulnerable dependency function is reachable in only 47 of 1,555 skills (3.0%).",
      "A live agent executed the injected payload in 97 of 200 skills (48.5%), but in 95 of the 97 the agent's own shell expanded the $(...) substitution before the skill ran. The payload reached a flaw in the skill's own code in only 5.0%.",
      "Running the skill command as an argument vector (execve) instead of through a shell cut the share of the 97 exploited skills in which the payload executes from 94.8% to 10.3% without changing any skill.",
      "SKILL.md, which the LLM reads on every invocation, contains 6.6 to 22.8 times as many risky install instructions (curl | bash and similar) as install.sh; 22 credential leaks to stdout were confirmed."
    ],
    "stats": [
      {
        "value": "48,682",
        "label": "ClawHub skills analysed"
      },
      {
        "value": "49.6%",
        "label": "of skills with resolvable dependencies pull in a CVE version"
      },
      {
        "value": "3.0%",
        "label": "of those have a reachable vulnerable function"
      },
      {
        "value": "48.5%",
        "label": "of tested skills: the agent executed the injected payload"
      }
    ],
    "recommendations": [
      "Registry operators: rank first-party code flaws above dependency alerts, check pinned versions against OSV at publication, require a lock file and automatically check SKILL.md for risky install commands.",
      "Agent runtime designers: run skill commands through an argument-vector call rather than a shell; redact secrets from stdout and stderr before they re-enter the context; run skills with least privilege.",
      "Skill authors: validate agent input at the skill's entry point, declare direct dependencies instead of committing a pip freeze dump, and do not document commands that pass external content into a shell.",
      "When assessing skill risk, model the agent's selection and invocation path rather than relying on a CVE list."
    ],
    "why_it_matters": "Agent skills are becoming a new package ecosystem without the usual safeguards (lock files, update bots, CI). The study shows where to spend review effort and which runtime setting removes most of the risk.",
    "limits": "One registry (ClawHub) and one snapshot (March 2026). SAST covers only Python and JavaScript, so confirmed counts are lower bounds. Manual labelling of code vulnerabilities had moderate agreement (kappa 0.62-0.65). The live agent used GPT models (gpt-4o-mini, gpt-4o in the pilot) with three runs, so exact exploitation rates depend on the test harness. The preprint is not peer-reviewed.",
    "source_note": "Version 1 of a preprint. Summary based on the full text on arXiv; figures checked against sections 3-5 of the paper."
  }
});
