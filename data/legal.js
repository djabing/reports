// Реестр ограничений по законодательству РФ для портала Cyber Outlook.
// Используется интерфейсом (автоматические пометки), проверкой tools/check.js и ежедневным сборщиком (COLLECTOR.md).
// ВАЖНО: реестры Минюста и Генпрокуратуры постоянно пополняются. Перед добавлением нового источника
// или упоминанием новой организации сборщик обязан проверить её текущий статус и при необходимости дополнить этот файл.
// Это не юридическая консультация: спорные случаи согласуются с юристом.
window.RDB_LEGAL = {
  checked: "2026-11-28",

  // Источники, материалы которых НЕ публикуются на портале (нежелательные, экстремистские, террористические организации).
  // Совпадение проверяется по vendor-id и по домену ссылки отчёта.
  blocked_sources: [
    { id: "recordedfuture", name: "Recorded Future", domains: ["recordedfuture.com"],
      status: "нежелательная организация", basis: "решение Генпрокуратуры РФ от 18.12.2024" },
    { id: "meta", name: "Meta Platforms", domains: ["meta.com", "about.fb.com", "facebook.com", "instagram.com"],
      status: "экстремистская организация, деятельность запрещена", basis: "решение Тверского районного суда Москвы от 21.03.2022" },
    // Университеты США в реестре нежелательных организаций (проверено 28.11.2026 по Коммерсанту, Интерфаксу, Хабру).
    // Не публикуем их собственные материалы; препринты с соавторами из этих вузов в раздел «Научные исследования» не берём.
    { id: "stanford", name: "Stanford University", domains: ["stanford.edu"],
      status: "нежелательная организация", basis: "решение Генпрокуратуры РФ от 26.03.2026, реестр Минюста — апрель 2026" },
    { id: "berkeley", name: "University of California, Berkeley", domains: ["berkeley.edu"],
      status: "нежелательная организация", basis: "решение Генпрокуратуры РФ, февраль 2026" },
    { id: "tufts", name: "Tufts University / The Fletcher School", domains: ["tufts.edu"],
      status: "нежелательная организация", basis: "решение Генпрокуратуры РФ от 31.03.2026" },
    { id: "yale", name: "Yale University", domains: ["yale.edu"],
      status: "нежелательная организация", basis: "реестр Минюста РФ, июль 2025" }
  ],

  // СМИ и ресурсы, на которые портал не ссылается как на источник (иноагенты, нежелательные, заблокированные).
  // Для пересказа используем первоисточник или другие издания.
  avoid_media: ["meduza.io", "zona.media", "currenttime.tv", "svoboda.org", "novayagazeta.eu", "theins.ru", "bellingcat.com"],

  // Упоминания, которые требуют пометки. pattern — регулярное выражение (без учёта регистра), note — текст сноски, note_en — он же для английского интерфейса.
  marked_mentions: [
    { pattern: "\\b(Meta Platforms|Facebook|Instagram)\\b",
      note: "Meta Platforms Inc. (Facebook, Instagram) признана экстремистской организацией, её деятельность запрещена в РФ.",
      note_en: "Meta Platforms Inc. (Facebook, Instagram) is designated an extremist organisation and its activities are banned in Russia." },
    { pattern: "Recorded Future",
      note: "Деятельность Recorded Future признана нежелательной на территории РФ.",
      note_en: "Recorded Future's activities are designated undesirable in Russia." },
    { pattern: "\\b(Stanford|UC Berkeley|University of California,? Berkeley|Tufts|Yale University)\\b|Стэнфорд|Беркли|Тафтс|Йельск",
      note: "Организация (Стэнфордский университет, Калифорнийский университет в Беркли, Университет Тафтса, Йельский университет) внесена в реестр нежелательных организаций в РФ.",
      note_en: "The organisation (Stanford University, UC Berkeley, Tufts University, Yale University) is on Russia's register of undesirable organisations." }
  ]
};
