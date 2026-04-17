import type { ProjectData } from "../types/projectData";

const projectData: ProjectData = {
  details: {
    title: "Portfolio 2025",
    subtitle: "Design trifft Code - mit Fokus auf Nutzer & Klarheit.",
    src: "/img/projects/p1/header_image.jpg",
    backgroundImageSrc: "/img/background/particel-waves_mono_1920x1280.jpg",
    mainColorRGB: "248, 141, 127",
    projectInformations: [
      {
        id: 1,
        icon: "calendar",
        description: "Mai – Juli 2025",
      },
      {
        id: 2,
        icon: "brain",
        description:
          "Konzeption, UX Research, UI Design, Content, Front- & Backend, Barrierefreiheit",
      },
      {
        id: 3,
        icon: "toolbox",
        description:
          "Figma, VS Code, Next.js, CSS Modules, TypeScript, Sanity CMS, Prisma Studio, GitHub, Vercel",
      },
      {
        id: 4,
        icon: "link",
        description: "Live Demo",
        href: "https://test.de",
      },
      {
        id: 5,
        icon: "github",
        description: "GitHub",
        href: "https://test.de",
      },
    ],
  },
  goals: {
    initial:
      "Vor Projektbeginn verfügte ich über kein Portfolio, das meine Kenntnisse in UI Design, UX-Prozessen und Next.js anhand eines praxisnahen Referenzprojekts greifbar machte.",
    reason:
      "Ziel war es, ein Portfolio zu entwickeln, das nicht nur meine Projekte auflistet, sondern auch meine Herangehensweise in Design, UX und Entwicklung nachvollziehbar macht. Die Motivation bestand darin, ein Referenzprojekt zu schaffen, das für potenzielle Arbeitgeber oder Auftraggeber sowohl gestalterisch als auch technisch überzeugend ist. Um den Praxisbezug zu stärken, habe ich bewusst mit den Tools und Methoden gearbeitet, die ich während der Weiterbildung erlernt habe – darunter Next.js, REST und barrierefreie Gestaltung. Das Projekt wurde unter realistischen Rahmenbedingungen umgesetzt: begrenzter Zeitrahmen, eigenständig geplant und vollständig selbst entwickelt.",
  },
  implementation: {
    process: [
      {
        title: "Idee & Zielsetzung",
        description:
          "consectetur. Posuere amet sagittis massa vitae faucibus nibh neque. sagittis massa vitae faucibus nibh neque.",
      },
      {
        title: "Recherche & Card Sorting",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus integer eget nisi quam vestibulum lorem magna.",
      },
      {
        title: "Scribbles & Wireframes",
        description:
          "dolor sit amet consectetur. Eu fermentum tristique eu nec netus tristique.",
      },
      {
        title: "UI-Design & Stilentwicklung",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sit hendrerit auctor elit lectus ultrices morbi.",
      },
      {
        title: "Technische Umsetzung",
        description:
          "Lorem ipsum dolor sit amet consectetur. Placerat ut porttitor velit ultrices rutrum sed sed vulputate vulputate.",
      },
      {
        title: "SEO",
        description:
          "Lorem ipsum dolor sit amet consectetur. Quam sit facilisis.",
      },
      {
        title: "Barrierefreiheit & Testing",
        description:
          "Lorem ipsum dolor sit amet consectetur. Quam sit facilisis.",
      },
      {
        title: "Deployment",
        description:
          "Lorem ipsum dolor sit amet consectetur. Quam sit facilisis.",
      },
    ],
    techstack: [
      {
        title: "Frontend",
        icon: "frontend",
        items: [
          "HTML, CSS, JavaScript (ES6+)",
          "React / Next.js",
          "CSS Modules / SCSS / NanoCSS",
          "TypeScript",
          "UI Libraries (Framer Motion)",
        ],
      },
      {
        title: "Backend",
        icon: "backend",
        items: [
          "Node.js, ExpressMongoDB, Firebase, SupabaseREST API / GraphQLAuth (z. B. NextAuth.js)",
        ],
      },
      {
        title: "Tools",
        icon: "tools",
        items: [
          "Git / GitHub",
          "Vercel, Netlify",
          "NPM / PNPM",
          "Figma (für UI-Design)",
          "Postman (für API-Tests)",
        ],
      },
    ],
    challenge: {
      problem: [
        "Technisch?",
        "UX/UI-bezogen?",
        "Projektmanagement?",
        "Kommunikation",
      ],
      approach: [
        "Recherche?",
        "Ausprobieren?",
        "Feedbackschleifen?",
        "Refactoring?",
      ],
      learnings: [
        "Lösung erfolgreich?",
        "Neue Tools/Skills gelernt?",
        "Etwas fürs nächste Mal mitgenommen?",
      ],
    },
  },
  visuals: [
    { id: 1, src: "/img/projects/p1/visuals/test1.jpg", alt: "Mockup" },
    { id: 2, src: "/img/projects/p1/visuals/test1.jpg", alt: "Screenshot" },
    { id: 3, src: "/img/projects/p1/visuals/test1.jpg", alt: "MockUp 2" },
  ],
  learnings: {
    learnings: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim lectus malesuada, pretium metus nec, maximus lacus. In.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam a fermentum feugiat. Quisque pellentesque fermentum felis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquet tortor. Sed vel elit et metus condimentum.",
    ],
    improvements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tortor facilisis, faucibus odio et, vulputate urna. Nullam.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie lectus a sem auctor, vel iaculis nisl iaculis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac egestas erat.",
    ],
    feedback: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in blandit nunc. Aliquam dignissim venenatis erat, a bibendum mauris porta id. Vestibulum ipsum nisl, placerat ac nunc ac, placerat molestie dolor. Sed efficitur volutpat justo. Phasellus suscipit nunc nisl, eget convallis libero porttitor sed. Quisque vitae dignissim metus. Morbi ut tortor ac lorem lobortis porta eget in sapien.",
    ],
  },
};

export default projectData;
