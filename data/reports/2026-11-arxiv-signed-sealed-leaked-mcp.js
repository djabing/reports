RDB.add({
  "id": "2026-11-arxiv-signed-sealed-leaked-mcp",
  "vendor": "arxiv",
  "title": "Signed, Sealed, Leaked: Trust Beyond Signature for MCP Toolchains",
  "title_ru": "Подписан, запечатан, утёк: подпись MCP-инструмента не гарантирует конфиденциальности",
  "url": "https://arxiv.org/abs/2611.06585",
  "pdf_url": "https://arxiv.org/pdf/2611.06585",
  "published": "2026-11-04",
  "date_precision": "day",
  "added": "2026-11-20",
  "type": "ai",
  "lang": "en",
  "importance": 1,
  "tier": "case",
  "pub_status": "preprint",
  "venue": "arXiv",
  "authors": "Yichiet Aun, Mohammed A. Alhartomi, Jing Jie Tan и др.",
  "confidence": "medium",
  "tags": [
    "ИИ-агенты",
    "MCP",
    "цепочка поставок",
    "утечки данных"
  ],
  "sectors": [
    "Все отрасли"
  ],
  "regions": [
    "Глобально"
  ],
  "tldr": "Корректно подписанный MCP-инструмент выполняет заявленную функцию, но вкладывает секреты в разрешённый сетевой запрос — и современная защита Meta MCPGuard-Dynamic этого не замечает. Предложенная изоляция germline execution в 153 атакующих запусках не допустила ни одной утечки.",
  "summary": "Подпись подтверждает, кто выпустил инструмент, но не то, какие данные он вправе передавать. Germline execution запускает каждый вызов инструмента в одноразовой копии процесса, ответвлённой от процесса без данных; каждая копия получает только информацию, разрешённую для конкретного получателя. Даже если вредоносный код выполнится, он может раскрыть лишь данные своей копии. Для ряда условий авторы доказывают формальное свойство невмешательства.",
  "key_findings": [
    "Подписанный инструмент с утечкой через разрешённый адрес обходит MCPGuard-Dynamic во всех попытках, хотя прямую выгрузку тот блокирует.",
    "В 153 атакующих запусках с germline execution утечек не обнаружено против 5,9–74,5% запусков с утечкой у сравниваемых защит.",
    "Вызов в одной копии занимает 10–49 мс — в 2–28 раз быстрее перезапуска инструмента для очистки состояния.",
    "Ограничение раскрытия не требует доверять реализации инструмента или анализировать её."
  ],
  "stats": [
    {
      "value": "0 из 153",
      "label": "запусков с утечкой"
    },
    {
      "value": "5,9–74,5%",
      "label": "утечек у других защит"
    },
    {
      "value": "10–49 мс",
      "label": "на вызов"
    }
  ],
  "actors": [],
  "malware": [],
  "cves": [],
  "ttps": [],
  "recommendations": [
    "Разделять происхождение кода и допустимость его поведения: подпись не заменяет контроль потоков данных.",
    "Изолировать вызовы инструментов и передавать каждому только данные, разрешённые для его получателя.",
    "Пропускать исходящие соединения инструментов через посредника с политиками."
  ],
  "why_it_matters": "Показывает предел доверия к подписанному ПО в агентных системах и предлагает практичный механизм ограничения утечек.",
  "limits": "Набор вредоносных инструментов создан авторами; прототип только для локальных Python MCP-серверов; удалённые инструменты так не изолировать; временные каналы исключены из гарантии; вредоносные действия без утечки требуют отдельного контроля; артефакты обещаны только с конференционной версией.",
  "source_note": "Выжимка по аннотации и тексту препринта на arXiv.",
  "en": {
    "title": "Signed, Sealed, Leaked: Trust Beyond Signature for MCP Toolchains",
    "tldr": "A properly signed MCP tool performs its advertised function but embeds secrets in a policy-allowed network request — and Meta's state-of-the-art MCPGuard-Dynamic misses it. The proposed germline execution isolation allowed no leaks in 153 attack runs.",
    "summary": "A signature confirms who published a tool, not what data it may send. Germline execution runs each tool invocation in an ephemeral process copy forked from a data-free process; each copy receives only information authorised for its destination. Even if malicious code runs, it can disclose only its copy's data. Under stated assumptions the authors prove a formal non-interference property.",
    "key_findings": [
      "A signed tool leaking via an allowed destination bypasses MCPGuard-Dynamic in every trial, although it blocks direct exfiltration.",
      "In 153 attack runs with germline execution no leaks were detected, vs 5.9–74.5% of runs leaking under compared defences.",
      "A call served by one copy takes 10–49 ms — 2–28× faster than restarting the tool to clear state.",
      "Limiting disclosure requires neither trusting nor inspecting the tool's implementation."
    ],
    "stats": [
      {
        "value": "0 of 153",
        "label": "runs with leaks"
      },
      {
        "value": "5.9–74.5%",
        "label": "leaks under other defences"
      },
      {
        "value": "10–49 ms",
        "label": "per call"
      }
    ],
    "recommendations": [
      "Separate code provenance from acceptable behaviour: a signature does not replace data-flow control.",
      "Isolate tool calls and pass each only the data authorised for its recipient.",
      "Route tools' outbound connections through a policy-enforcing intermediary."
    ],
    "why_it_matters": "Shows the limits of trusting signed software in agent systems and offers a practical leak-limiting mechanism.",
    "limits": "The malicious tool set was built by the authors; the prototype covers only local Python MCP servers; remote tools cannot be isolated this way; timing channels are excluded from the guarantee; malicious actions without leaks need separate controls; artefacts are promised only with the conference version.",
    "source_note": "Summary based on the abstract and text of the arXiv preprint."
  }
});
