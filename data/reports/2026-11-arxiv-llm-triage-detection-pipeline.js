RDB.add({
  "id": "2026-11-arxiv-llm-triage-detection-pipeline",
  "vendor": "arxiv",
  "title": "Dynamic Reasoning in Next-Gen Detection and Response: An Empirical Study of LLM Triage, Reinforcement Tuning, and Adversarial Evasion",
  "title_ru": "LLM-триаж в детектировании и реагировании нового поколения: эксперименты с дообучением и уклонением",
  "url": "https://arxiv.org/abs/2611.33470",
  "pdf_url": "https://arxiv.org/pdf/2611.33470",
  "published": "2026-11-24",
  "date_precision": "day",
  "added": "2026-11-27",
  "type": "ai",
  "lang": "en",
  "importance": 2,
  "tier": "analytics",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Jérémy Canale (независимый исследователь)",
  "confidence": "medium-low",
  "tags": [
    "SOC",
    "обнаружение",
    "агентная защита",
    "промпт-инъекции"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "56 экспериментов на симуляторе крупной инфраструктуры показывают: LLM-триаж убирает около 90% ложных алертов, но вместе с ними 31–44% обнаруженных атак. Дообучение GRPO сделало модель ещё опаснее, а безопасным решение стало, только когда детерминированная политика заранее ограничила, что модель может закрывать.",
  "summary": "Автор проверяет архитектуру детектирования «нового поколения»: статическая оценка новых бинарных файлов, слияние слабых сигналов на графе сущностей и LLM-триаж за детерминированной «обвязкой». Среда смоделирована по публичным описаниям инфраструктуры Google: 35 источников логов на пяти уровнях, 26 типов атак, правдоподобная легитимная активность. Есть проверки на публичных данных (LANL, CERT, DARPA TC, корпуса PE- и ELF-файлов). Качество измеряется долей атак, найденных при бюджете 10 ложных срабатываний в день.",
  "key_findings": [
    "Распространение риска по графу сущностей при тех же сигналах подняло полноту по атакам, затрагивающим несколько уровней, с 0,62 до 0,81, а слияние сигналов обошло настроенные правила SOC на 11–19 п. п. Рост парка в десять раз вдвое снижает полноту при том же бюджете аналитиков.",
    "LLM-триаж сократил ложные алерты с 32,7 до 2,7–3,3 в день, но 12–17 из 39 обнаруженных атак (31–44%) остались без алерта. Обвязка (закрытие только при уверенности от 0,9 и риске ниже 0,9) вернула около трети из них.",
    "Статичные строки вроде «ignore previous instructions» почти не работали, а адаптивный атакующий с правдоподобными «легендами» в подконтрольных полях (отладчик «одобрен SRE для хотфикса», номер тикета) добивался у flash-lite закрытия 56% дел, которые модель не закрыла сама, за восемь попыток (30% при обвязке).",
    "Дообучение 4B-модели через GRPO во всех шести запусках увеличило ошибочное закрытие алертов по незнакомым типам атак: 43–86% против 36% после SFT. Вторая эпоха SFT снизила этот показатель до 13%.",
    "Итоговый конвейер с Gemini 4 сохранил 61% атак при 5,8 ложного алерта в день: 80% обнаруженных атак доходят до аналитиков независимо от модели, и модель не стёрла ни одну из 25 атак, по которым решала. В новых мирах полнота составила 0,57, и модель стёрла четыре атаки; по типам атак, отложенным при настройке, — 0,17.",
    "На реальных логах аутентификации LANL активность красной команды в пределах бюджета была найдена лишь один раз."
  ],
  "stats": [
    {
      "value": "56",
      "label": "воспроизводимых экспериментов"
    },
    {
      "value": "31–44%",
      "label": "обнаруженных атак стирает LLM-триаж без ограничений"
    },
    {
      "value": "43–86%",
      "label": "ошибочно закрытых алертов по незнакомым атакам после GRPO"
    },
    {
      "value": "61%",
      "label": "атак сохраняет конвейер с политикой при 5,8 FP/день"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Не давать LLM автономно закрывать алерты: детерминированная политика должна до вызова модели отправлять высокорисковые алерты аналитикам и ограничивать, что модель вправе закрыть.",
    "Оценивать LLM-триаж по числу потерянных атак, а не по доле закрытых алертов, на отложенных типах атак и против адаптивного атакующего с бюджетом запросов.",
    "При дообучении модели триажа предпочитать SFT с длительностью, подобранной на валидации, исключать заявленную уверенность из обучающих целей и калибровать её вне текста модели.",
    "Считать разрешение сущностей и граф идентичностей ядром детектирования и измерять полноту цепочки идентичностей как отдельную метрику."
  ],
  "why_it_matters": "SOC всё чаще отдают ИИ закрытие алертов. Работа количественно показывает, сколько атак при этом теряется и почему ограничивающая политика важнее выбора модели.",
  "limits": "Основные результаты получены на симуляторе по публичным описаниям, а не на реальной телеметрии провайдера; на единственном реальном журнале (LANL) конвейеры почти не работают. В мирах гораздо больше атак, чем в реальном парке (около 35–49 дел в день на 200 человек). Адаптивный атакующий — небольшая модель с ограниченным бюджетом, против итогового конвейера у него было всего 7 доступных дел. GRPO обновлялся на малом числе групп. Один автор без институциональной аффилиации, препринт не рецензирован; код и данные опубликованы.",
  "source_note": "Препринт, версия 1. Выжимка по полному тексту на arXiv (разделы 1, 6–8); числа сверены с таблицами 1, 4 и 5. Аннотация на странице arXiv расходится с текстом статьи в перечне наборов данных и формулировках, использованы данные из текста.",
  "en": {
    "tldr": "56 experiments on a simulator of a large infrastructure show that LLM triage removes about 90% of false alerts but also 31-44% of the detected attacks. GRPO fine-tuning made the model more dangerous, and the setup became safe only once a deterministic policy limited in advance what the model may close.",
    "summary": "The author tests a 'next-generation' detection architecture: static scoring of new binaries, fusion of weak signals over an entity graph, and LLM triage behind a deterministic harness. The environment is modelled on public descriptions of Google's infrastructure: 35 log sources over five layers, 26 attack types and realistic benign activity. Results are cross-checked on public data (LANL, CERT, DARPA TC, PE and ELF corpora). Quality is measured as the share of attacks found within a budget of 10 false positives a day.",
    "key_findings": [
      "Propagating risk over the entity graph with the same signals raised recall on multi-layer attacks from 0.62 to 0.81, and signal fusion beat SOC-tuned rules by 11-19 points. Ten times the fleet halves recall at the same analyst budget.",
      "LLM triage cut false alerts from 32.7 to 2.7-3.3 a day, but 12-17 of 39 detected attack cases (31-44%) were left with no alert. A harness (close only at confidence 0.9 or more and risk below 0.9) recovered about a third of them.",
      "Static strings such as 'ignore previous instructions' rarely worked, but an adaptive attacker writing plausible cover stories into fields it controls (a debugger 'authorized by the SRE team for a production hotfix', a ticket number) got flash-lite to close 56% of the cases it had not closed on its own within eight attempts (30% with the harness).",
      "GRPO fine-tuning of a 4B model increased wrongful closures of alerts for unseen attack types in all six runs: 43-86% against 36% after SFT. A second SFT epoch brought this down to 13%.",
      "The final pipeline with Gemini 4 kept 61% of attacks at 5.8 false alerts a day: 80% of detected attacks reach analysts regardless of the model, and the model erased none of the 25 attacks it decided. On fresh worlds recall was 0.57 and the model erased four attacks; on attack types held out from tuning, 0.17.",
      "On real LANL authentication logs, red-team activity was found within budget only once."
    ],
    "stats": [
      {
        "value": "56",
        "label": "reproducible experiments"
      },
      {
        "value": "31-44%",
        "label": "of detected attacks erased by unconstrained LLM triage"
      },
      {
        "value": "43-86%",
        "label": "wrongful closures of unseen-type attack alerts after GRPO"
      },
      {
        "value": "61%",
        "label": "of attacks kept by the policy-gated pipeline at 5.8 FP/day"
      }
    ],
    "recommendations": [
      "Do not let an LLM close alerts autonomously: a deterministic policy should route high-risk alerts to analysts before any model call and limit what the model may close.",
      "Evaluate LLM triage by the attacks it loses rather than the share of alerts it closes, on held-out attack types and against an adaptive attacker with a query budget.",
      "When fine-tuning a triage model, prefer SFT with its length set on validation data, keep self-reported confidence out of the training targets and calibrate it outside the model's text.",
      "Treat entity resolution and the identity graph as the core of detection, and measure the completeness of the identity chain as a metric in its own right."
    ],
    "why_it_matters": "SOCs increasingly let AI close alerts. The study quantifies how many attacks are lost in the process and why a constraining policy matters more than the choice of model.",
    "limits": "The main results come from a simulator built on public descriptions, not on any provider's telemetry; on the only real log (LANL) the pipelines barely work. The worlds hold far more attacks than a real fleet (about 35-49 cases a day for 200 people). The adaptive attacker was a small model with a capped budget and had only 7 attackable cases against the final pipeline. GRPO updated on few prompt groups. Single author without institutional affiliation; the preprint is not peer-reviewed; code and data are released.",
    "source_note": "Version 1 of a preprint. Summary based on the full text on arXiv (sections 1 and 6-8); figures checked against Tables 1, 4 and 5. The abstract on the arXiv page differs from the paper text in the datasets listed and in wording; the figures from the text were used."
  }
});
