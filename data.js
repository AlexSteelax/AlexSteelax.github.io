"use strict";

module.exports = {
  ru: {
      profile: {
        name: "Александр Стальнов",
        tags: ["C#", ".NET", "High-load", "Streaming", "Distributed Systems", "Lock-free", "Zero-alloc", "Roslyn"],
        meta: [],
        contacts: [
          { icon: "📞", href: "tel:+79211181005", label: "+7 (921) 118-10-05" },
          { icon: "✉️", href: "mailto:animus.saa@gmail.com", label: "animus.saa@gmail.com" },
          { icon: "💬", href: "https://t.me/alex_steelax", label: "@alex_steelax" },
          { icon: "🐙", href: "https://github.com/AlexSteelax", label: "github.com/AlexSteelax" }
        ]
      },
      aboutTitle: "Обо мне",
      about: [
        "Backend-инженер. Глубоко погружаюсь в предметную область задачи, не ограничиваясь общими представлениями. Проектирую архитектуры с контролируемой асинхронностью, где приоритет — предсказуемая латентность, контроль аллокаций и минимизация конкуренции за ресурсы.",
        "Работаю на всех уровнях: от проектирования до оптимизаций в hot-path и ниже — до unsafe. Опираюсь на модель нагрузки (CPU/IO/Memory); предпочитаю эволюционную модернизацию вместо переписывания с нуля.",
        "Пробую и развиваю интересные концепции, превращая их в open-source проекты.",
        "Активно делюсь опытом и знаниями — через менторство, ревью и разбор архитектурных решений."
      ],
      experience: {
        header: "Мои {N} опыта и домены, в которые погружался",
        since: "2010-05-01",
        groups: [
          {
            title: "Обработка телеметрии / SCADA",
            items: [
              { role: "Ведущий разработчик", company: "ООО «СТРОЙПЛАТФОРМА»" },
              { role: "Ведущий разработчик", company: "ООО «Матрикс»" },
              { role: "Ведущий эксперт по разработке ПО", company: "ООО «Тета Дата Солюшнс»" }
            ]
          },
          {
            title: "Финтех",
            items: [
              { role: "Ведущий инженер-программист", company: "Банк ПСБ" }
            ]
          },
          {
            title: "Автоматизация ЛПУ и аптечных сетей",
            items: [
              { role: "Инженер внедрения → Разработчик → Техлид", company: "Спарго Технологии" }
            ]
          }
        ]
      },
      education: {
        title: "Образование",
        degree: "Высшее, 2010 — Псковский государственный политехнический институт",
        field: "Электропривод и автоматика промышленных установок и технологических комплексов"
      },
      skillsTitle: "Навыки",
      languagesTitle: "Языки",
      languages: "Русский — родной · Английский — B1 (средний)",
      techTitle: "Технологии и практики",
      tags: [
        "gRPC", "Микросервисы", "Асинхронное программирование",
        "Оптимизация запросов", "PostgreSQL", "Elasticsearch", "REST API",
        "Apache Kafka", "MongoDB", "Автотесты", "Entity Framework", "CI/CD",
        "BenchmarkDotNet"
      ],
      projects: {
        title: "Проекты на GitHub",
        desc: "Последние активные проекты из репозитория, отсортированные по обновлениям."
      },
      projectsLoading: "Загрузка проектов…",
      projectsError: "Не удалось загрузить проекты с GitHub.",
      footer: "© 2026 Стальнов Александр · C#/.NET Developer"
    },

    en: {
      profile: {
        name: "Alexander Stalnov",
        tags: ["C#", ".NET", "High-load", "Streaming", "Distributed Systems", "Lock-free", "Zero-alloc", "Roslyn"],
        meta: [],
        contacts: [
          { icon: "📞", href: "tel:+79211181005", label: "+7 (921) 118-10-05" },
          { icon: "✉️", href: "mailto:animus.saa@gmail.com", label: "animus.saa@gmail.com" },
          { icon: "💬", href: "https://t.me/alex_steelax", label: "@alex_steelax" },
          { icon: "🐙", href: "https://github.com/AlexSteelax", label: "github.com/AlexSteelax" }
        ]
      },
      aboutTitle: "About me",
      about: [
        "Backend engineer. I dive deep into the domain of the task, not limited by surface-level understanding. I design architectures with controlled asynchrony, prioritizing predictable latency, allocation control, and minimal resource contention.",
        "I work across all levels: from design down to hot-path optimizations — and beyond, down to unsafe code. I rely on a workload model (CPU/IO/Memory) and prefer evolutionary modernization over rewriting from scratch.",
        "I explore and develop interesting concepts, turning them into open-source projects.",
        "I actively share experience and knowledge — through mentoring, reviews, and discussing architectural decisions."
      ],
      experience: {
        header: "My {N} of experience and the domains I've worked in",
        since: "2010-05-01",
        groups: [
          {
            title: "Telemetry processing / SCADA",
            items: [
              { role: "Lead Developer", company: "STROYPLATFORMA LLC" },
              { role: "Lead Developer", company: "Matrix LLC" },
              { role: "Leading Software Expert", company: "Theta Data Solutions LLC" }
            ]
          },
          {
            title: "Finance sector",
            items: [
              { role: "Lead Software Engineer", company: "PSB Bank" }
            ]
          },
          {
            title: "Healthcare & pharmacy automation",
            items: [
              { role: "Support Engineer → Developer → Development Team Lead", company: "Spargo Technologies" }
            ]
          }
        ]
      },
      education: {
        title: "Education",
        degree: "Higher education, 2010 — Pskov State Polytechnic Institute",
        field: "Electric Drive and Automation of Industrial Plants and Technological Complexes"
      },
      skillsTitle: "Skills",
      languagesTitle: "Languages",
      languages: "Russian — native · English — B1 (intermediate)",
      techTitle: "Technologies & practices",
      tags: [
        "gRPC", "Microservices", "Async programming",
        "Query optimization", "PostgreSQL", "Elasticsearch", "REST API",
        "Apache Kafka", "MongoDB", "Automated testing", "Entity Framework",
        "CI/CD", "BenchmarkDotNet"
      ],
      projects: {
        title: "GitHub projects",
        desc: "Recently active projects from my repositories, sorted by last update."
      },
      projectsLoading: "Loading projects…",
      projectsError: "Failed to load projects from GitHub.",
      footer: "© 2026 Alexander Stalnov · C#/.NET Developer"
    }
};
