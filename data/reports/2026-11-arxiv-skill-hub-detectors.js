RDB.add({
  "id": "2026-11-arxiv-skill-hub-detectors",
  "vendor": "arxiv",
  "title": "Demystifying Detectors Guarding Agent Skill Hubs",
  "title_ru": "Насколько надёжны детекторы, охраняющие каталоги навыков ИИ-агентов",
  "url": "https://arxiv.org/abs/2611.30913",
  "pdf_url": "https://arxiv.org/pdf/2611.30913",
  "published": "2026-11-23",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Kang Yang, Guanhong Tao, Jun Xu (University of Utah), Kevin Ying (Skyline High School), Xiaojing Liao (University of Illinois Urbana-Champaign)",
  "confidence": "medium",
  "tags": [
    "ИИ-агенты",
    "агентные навыки",
    "цепочка поставок",
    "обнаружение"
  ],
  "sectors": [
    "ИТ и разработка ПО"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Первая систематическая проверка шести детекторов вредоносных навыков, которые применяют или предлагают для каталогов вроде ClawHub, на 1477 навыках из семи наборов данных. Лучший детектор по F1 пропускает 7% вредоносных навыков и блокирует 6,3% безобидных; LLM-детекторы чаще всего распознают угрозу, но не блокируют навык.",
  "summary": "Каталоги навыков (ClawHub, skills.sh и др.) полагаются на автоматические сканеры. По опубликованным отчётам ClawHub, skillspector (NVIDIA) находит проблемы уровня High и выше у 50,4% навыков и рекомендует не устанавливать 45,8%. Авторы сравнили четыре детектора каталогов (ClawHub-Mod, skillspector, AI-Infra-Guard от Tencent, skill-scanner от Cisco AI Defense) и два общественных (skillscan-security, skill-vetter) с тремя моделями (Qwen3.6, DeepSeek-V4, GPT-5.4), вручную разобрали ошибки и по итогам доработали промпт skill-vetter.",
  "key_findings": [
    "Лучший результат по F1 (0,943) у skill-vetter с Qwen3.6: пропущено 62 вредоносных навыка (7,0%), заблокировано 37 безобидных (6,3%). skill-scanner с Qwen3.6 ловит 95,1% вредоносных навыков, но блокирует 17,8% безобидных.",
    "Встроенный модератор ClawHub-Mod не дал ни одного ложного срабатывания, но поймал лишь 7,4% вредоносных навыков. F1 чисто статических режимов — 0,139–0,771, режимов с LLM — 0,793–0,943.",
    "Самая частая причина ложных срабатываний (36%) — обращение к учётным данным или локальному состоянию без учёта того, нужно ли это заявленной функции, например отправка API-ключа сервису, который его выдал.",
    "В режимах с LLM 64,3–90,4% пропусков — ошибки блокировки: угроза найдена, но получила слишком низкую оценку или была отброшена при проверке. skill-vetter, например, отклонил находки в 92 случаях, потому что в навыке не было исполняемого кода.",
    "Вердикты нестабильны: за три запуска skillspector и AI-Infra-Guard изменили вердикт для 57,4% и 64,3% навыков набора MalWild. Больший расход токенов не дал большей точности.",
    "Доработка промпта skill-vetter по итогам анализа повысила средний F1 в восьми из девяти настроек, максимум на 22,7 п. п."
  ],
  "stats": [
    {
      "value": "1477",
      "label": "навыков (886 вредоносных, 591 безобидный)"
    },
    {
      "value": "0,943",
      "label": "лучший F1 (skill-vetter + Qwen3.6)"
    },
    {
      "value": "7,4%",
      "label": "вредоносных навыков ловит модератор ClawHub-Mod"
    },
    {
      "value": "+22,7 п. п.",
      "label": "максимальный прирост F1 после доработки промпта"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Не считать вердикт сканера каталога достаточной проверкой: перед установкой навыка в корпоративного агента проводить собственный обзор, особенно инструкций в SKILL.md на естественном языке.",
    "При настройке LLM-детекторов оценивать, служит ли чувствительная операция заявленной функции навыка, и не отбрасывать найденные вредоносные инструкции только из-за отсутствия исполняемого кода.",
    "Проверять детекторы на нескольких моделях и запусках: выбор модели и случайность меняют вердикты сильнее, чем видно по средним метрикам."
  ],
  "why_it_matters": "Каталоги навыков уже атакуют (кампания ClawHavoc в феврале 2026 г.), а защита держится на сканерах, у которых и пропуски, и ложные блокировки исчисляются процентами.",
  "limits": "Синтетические наборы выборочно урезаны до 150 + 150 навыков, а метки «диких» наборов авторы переразмечали вручную. Закрытые облачные сканеры (Snyk, Socket, Gen) не оценивались. Результаты зависят от версий моделей и настроек детекторов. Препринт не рецензирован. В аннотации HTML-версии указано 1147 навыков, но таблица набора и аннотация на arXiv дают 1477.",
  "source_note": "Препринт, версия 1. Выжимка по полному тексту на arXiv; числа сверены с таблицами IV и VIII и разделами IV–VIII.",
  "en": {
    "tldr": "The first systematic test of six malicious-skill detectors used by or proposed for hubs such as ClawHub, on 1,477 skills from seven datasets. The best detector by F1 misses 7% of malicious skills and blocks 6.3% of benign ones; LLM-based detectors usually recognise the threat but fail to block the skill.",
    "summary": "Skill hubs (ClawHub, skills.sh and others) rely on automated scanners. According to ClawHub's published reports, skillspector (NVIDIA) reports High or worse findings for 50.4% of skills and recommends not installing 45.8%. The authors compared four hub detectors (ClawHub-Mod, skillspector, Tencent's AI-Infra-Guard, Cisco AI Defense's skill-scanner) and two community ones (skillscan-security, skill-vetter) with three models (Qwen3.6, DeepSeek-V4, GPT-5.4), manually analysed the errors and used the results to refine the skill-vetter prompt.",
    "key_findings": [
      "The best F1 (0.943) belongs to skill-vetter with Qwen3.6: 62 malicious skills missed (7.0%) and 37 benign ones blocked (6.3%). skill-scanner with Qwen3.6 catches 95.1% of malicious skills but blocks 17.8% of benign ones.",
      "ClawHub's built-in moderator ClawHub-Mod produced no false positives but caught only 7.4% of malicious skills. Purely static modes reach F1 of 0.139-0.771, LLM-based modes 0.793-0.943.",
      "The most common cause of false positives (36%) is credential or local-state access flagged without checking whether it serves the stated function, for example sending an API key to the service that issued it.",
      "In LLM-based modes, 64.3-90.4% of misses are blocking failures: the threat was found but graded too low or dismissed during review. skill-vetter, for example, dismissed findings in 92 cases because the skill contained no executable code.",
      "Verdicts are unstable: across three runs, skillspector and AI-Infra-Guard changed their verdict for 57.4% and 64.3% of MalWild skills. Spending more tokens did not buy higher accuracy.",
      "Refining the skill-vetter prompt based on the analysis raised mean F1 in eight of nine settings, by up to 22.7 percentage points."
    ],
    "stats": [
      {
        "value": "1,477",
        "label": "skills (886 malicious, 591 benign)"
      },
      {
        "value": "0.943",
        "label": "best F1 (skill-vetter + Qwen3.6)"
      },
      {
        "value": "7.4%",
        "label": "of malicious skills caught by the ClawHub-Mod moderator"
      },
      {
        "value": "+22.7 pp",
        "label": "maximum F1 gain after prompt refinement"
      }
    ],
    "recommendations": [
      "Do not treat a hub scanner's verdict as sufficient vetting: review a skill yourself before installing it in a corporate agent, especially the natural-language instructions in SKILL.md.",
      "When configuring LLM detectors, assess whether a sensitive operation serves the skill's stated function, and do not dismiss identified malicious instructions merely because there is no executable code.",
      "Test detectors across several models and runs: model choice and randomness change verdicts more than average metrics reveal."
    ],
    "why_it_matters": "Skill hubs are already under attack (the ClawHavoc campaign in February 2026), and their protection rests on scanners whose misses and false blocks both run to several percent.",
    "limits": "Synthetic datasets were sampled down to 150 + 150 skills, and the authors manually relabelled the wild datasets. Closed hosted scanners (Snyk, Socket, Gen) were not evaluated. Results depend on model versions and detector settings. The preprint is not peer-reviewed. The HTML abstract states 1,147 skills, but the dataset table and the arXiv abstract give 1,477.",
    "source_note": "Version 1 of a preprint. Summary based on the full text on arXiv; figures checked against Tables IV and VIII and sections IV-VIII."
  }
});
