export type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "comparison" | "screenshot" | "content-sample";
};

export type CtaLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  keywords: string[];
};

export type AbilityItem = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

export type HighlightCard = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProjectBlockType =
  | "intro"
  | "text"
  | "image"
  | "gallery"
  | "highlight-cards"
  | "outcomes"
  | "comparison-placeholder"
  | "quote"
  | "insight"
  | "content-sample"
  | "process"
  | "section-heading";

export type ProjectBlock = {
  id: string;
  type: ProjectBlockType;
  title?: string;
  eyebrow?: string;
  body?: string;
  caption?: string;
  image?: ImageAsset;
  images?: ImageAsset[];
  cards?: HighlightCard[];
  items?: string[];
  steps?: ProcessStep[];
  quote?: string;
  author?: string;
  insight?: string;
};

export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  tags: string[];
  role: string;
  period: string;
  overview: string;
  background: string;
  goal: string;
  responsibilities: string[];
  outcomes: string[];
  coverImage: ImageAsset;
  gallery: ImageAsset[];
  blocks: ProjectBlock[];
  subProjects?: ProjectSubItem[];
};

export type ProjectSubItem = {
  id: string;
  label: string;
  title: string;
  summary: string;
  images: ImageAsset[];
  highlights: HighlightCard[];
  blocks: ProjectBlock[];
};

export type ContactEntry = {
  label: string;
  value: string;
  href?: string;
};

export type ContactAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type ExpressionCard = {
  id: string;
  kicker?: string;
  title: string;
  description: string;
  tags: string[];
};

export type SiteData = {
  meta: {
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
  openingScene: {
    name: string;
    role: string;
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    scrollHint: string;
    visual: ImageAsset;
  };
  profile: {
    name: string;
    role: string;
    headline: string;
    subheadline: string;
    description: string;
    location: string;
    visual: ImageAsset;
    infoCardEyebrow: string;
    infoCardDescription: string;
    ctas: CtaLink[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
    visual: ImageAsset;
  };
  abilityModel: {
    eyebrow: string;
    title: string;
    description: string;
    items: AbilityItem[];
  };
  experiences: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  featuredProjects: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  beyondWork: {
    eyebrow: string;
    title: string;
    description: string;
    intro: string;
    note: string;
    cards: ExpressionCard[];
  };
  closingSignature: {
    eyebrow: string;
    title: string;
    signature: string;
    description: string;
    aside: string;
    ctaLabel: string;
    ctaHref: string;
    visual: ImageAsset;
    notes: string[];
  };
  thankYou: {
    eyebrow: string;
    title: string;
    signature: string;
    description: string;
    name: string;
    contactLine: string;
    visual: ImageAsset;
  };
  contacts: {
    eyebrow: string;
    title: string;
    description: string;
    wechat: ContactEntry;
    email: ContactEntry;
    resume: ContactEntry;
    actions: ContactAction[];
  };
};

export const siteData: SiteData = {
  meta: {
    title: "黄瀚晖｜个人品牌主页",
    description:
      "黄瀚晖的职业导向个人品牌主页与轻作品集，用于展示审美表达、内容组织、项目完整度，以及对 AI 与数字化工具的持续探索。",
  },
  navigation: [
    { label: "Home", href: "#opening-scene" },
    { label: "About", href: "#about-section" },
    { label: "Experience", href: "#experience-timeline" },
    { label: "Projects", href: "#featured-projects" },
    { label: "More", href: "#beyond-work" },
    { label: "Contact", href: "#contact-cta" },
    { label: "Resume", href: "#contact-cta" },
  ],
  openingScene: {
    name: "黄瀚晖",
    role: "Content, image, and project thinking",
    eyebrow: "Opening Scene",
    title: "把表达、图像和项目感受慢慢展开。",
    description: "审美表达为主，技术理解为辅。",
    ctaLabel: "进入个人信息页",
    ctaHref: "#about-section",
    scrollHint: "向下继续看",
    visual: {
      src: "/images/placeholders/首页图.jpg",
      alt: "首页封面主视觉占位图",
      caption: "后续可直接替换为真实封面图，不需要改布局。",
      type: "image",
    },
  },
  profile: {
    name: "黄瀚晖",
    role: "职业导向的个人品牌主页",
    headline: "我关注审美表达、内容组织与项目完整度，也持续把 AI 与数字化工具放进真实工作里理解和使用。",
    subheadline:
      "广告学背景让我从内容与传播进入职业路径，而内容运营、账号孵化、AI 影像模板设计与效果优化的经历，又让我逐渐形成了更稳定的工作方法：先判断表达是否准确，再判断结果是否成立，最后把协作和落地补完整。",
    description:
      "这里不是简历的网页复制版，而是我用来承接投递场景、补充项目判断与工作方式的第一版个人主页。",
    location: "厦门大学嘉庚学院｜广告学｜2026 应届",
    visual: {
      src: "/images/placeholders/hero-profile.svg",
      alt: "个人主页首页主视觉图",
    },
    infoCardEyebrow: "快速了解",
    infoCardDescription:
      "当前版本优先服务投递场景，先让对方在较短时间内看清我的背景、能力结构与代表性项目。",
    ctas: [
      { label: "联系我进一步了解", href: "#contact-cta", variant: "primary" },
      { label: "查看精选项目", href: "#featured-projects", variant: "secondary" },
    ],
  },
  about: {
    eyebrow: "About Me",
    title: "我更在意一件事是否被清楚地表达、被准确地感知，并最终形成完整的结果。",
    body:
      "我是黄瀚晖，2026 届应届生，厦门大学嘉庚学院广告学专业。过去几段经历让我从内容运营、IP 打造、自媒体运营一路走到 AI 影像与效果设计，也让我更明确自己关注的事情并不局限于某一个岗位名称，而是视觉表达是否准确，内容呈现是否清楚，项目推进是否有完整度。技术不是我对外叙事的主轴，但我会持续理解 AI 与数字化工具，并尝试把它们真正放进工作流程里，帮助自己做出更合适的判断与协作。",
    note:
      "这一段不是岗位概述，而是我目前更稳定的工作关注点：表达是否成立，感知是否准确，结果是否完整。",
    visual: {
      src: "/images/placeholders/照片1.jpg",
      alt: "About 页面人物照片占位图",
      caption: "后续可替换为 3:4 竖版人物照片，不需要改布局。",
      type: "image",
    },
  },
  abilityModel: {
    eyebrow: "Ability Model",
    title: "综合能力模型",
    description:
      "相比列出软件或工具，我更希望通过能力结构来解释自己如何观察问题、推进项目，以及保持持续迭代。",
    items: [
      {
        id: "ability-expression",
        title: "表达力",
        summary: "我会同时关注视觉感受和信息结构，让内容既有气质，也能被快速理解。",
        points: ["视觉表达", "内容呈现", "信息组织"],
      },
      {
        id: "ability-execution",
        title: "执行力",
        summary: "我希望项目不只停留在想法层面，而是能被推进、协作并最终落到结果上。",
        points: ["项目推进", "跨角色协作", "完整度意识"],
      },
      {
        id: "ability-growth",
        title: "成长力",
        summary: "我会持续学习和试错，也会把新工具放进真实任务里判断它是否真正有用。",
        points: ["学习能力", "新工具尝试", "AI 应用意识"],
      },
    ],
  },
  experiences: {
    eyebrow: "Experiences",
    title: "实习经历",
    description:
      "从内容运营到账号孵化，再到 AI 影像与效果设计，我更明确了自己对表达、用户感知和项目完整度的关注。",
    items: [
      {
        id: "exp-01",
        company: "厦门鲸起万物影视传媒有限公司",
        role: "内容运营",
        period: "2023.07 - 2023.09",
        summary: "从内容策划与账号运营切入，建立了对传播节奏、选题表达和内容执行的基础认知。",
        keywords: ["内容运营", "策划表达"],
      },
      {
        id: "exp-02",
        company: "刑事律师账号",
        role: "IP 打造与自媒体运营",
        period: "2024.04 - 2025.07",
        summary: "围绕账号定位、内容选题和增长链路推进孵化，逐步强化了表达结构和结果意识。",
        keywords: ["账号孵化", "用户洞察"],
      },
      {
        id: "exp-03",
        company: "美图公司",
        role: "效果设计师（美颜相机 / 美图云修）",
        period: "2025.07 - 2026.04",
        summary: "参与 AI 影像模板设计与效果优化，进一步补足了对用户感知、评估逻辑和协作方式的理解。",
        keywords: ["效果设计", "AI 影像"],
      },
    ],
  },
  featuredProjects: {
    eyebrow: "Featured Projects",
    title: "精选项目",
    description:
      "这一版先以首页卡片方式承接四个代表性项目，帮助你快速了解我关注的问题、参与的工作与能力侧重点。",
    items: [
      {
        id: "project-01",
        slug: "legal-account-growth",
        title: "法律垂类账号 0-1 孵化与增长",
        category: "内容运营 / 账号孵化",
        description:
          "围绕账号定位、选题结构与内容承接推进 0-1 孵化，持续优化表达方向和增长链路。",
        highlight: "账号定位、内容策略、转化承接",
        tags: ["内容策略", "用户洞察", "增长推进"],
        role: "IP 打造与自媒体运营",
        period: "2024.04 - 2025.07",
        overview:
          "这是一个围绕法律垂类账号展开的 0-1 孵化项目。我主要参与定位梳理、选题规划、内容表达优化和增长节奏推进，帮助账号逐步形成更清晰的表达方向与内容承接方式。",
        background:
          "项目围绕刑事律师账号展开。账号一方面需要保持专业可信度，另一方面也需要降低理解门槛，让用户愿意停留、继续看，并形成更稳定的互动与咨询承接。",
        goal:
          "让账号从相对零散的内容输出，逐步转向更稳定的表达体系，在定位、选题、内容表现和用户沟通之间形成更持续的增长路径。",
        responsibilities: [
          "参与账号定位与内容方向梳理，明确更适合目标用户理解的表达口径。",
          "围绕热点、咨询场景与高关注问题规划选题，帮助内容更聚焦也更有持续性。",
          "在内容发布后持续观察用户反馈，并据此调整表达方式与后续承接。",
        ],
        outcomes: [
          "账号内容方向逐步从分散输出转向更聚焦的垂类表达。",
          "对用户兴趣点、内容表现方式与转化承接之间的关系形成了更系统的理解。",
          "积累了从内容规划到反馈优化的持续迭代经验。",
        ],
        coverImage: {
          src: "/images/projects/legal-account-growth/cover.svg",
          alt: "法律垂类账号孵化与增长项目封面",
          caption: "项目封面占位，用于承接账号定位、内容策略与转化链路相关素材。",
          type: "image",
        },
        gallery: [
          {
            src: "/images/projects/legal-account-growth/strategy-board.svg",
            alt: "账号定位与内容策略版面占位",
            caption: "用于替换为定位梳理、选题规划或内容结构示意。",
            type: "screenshot",
          },
          {
            src: "/images/projects/legal-account-growth/content-sample.svg",
            alt: "内容样例占位图",
            caption: "用于替换为封面样式、内容卡片或表达优化前后的案例图。",
            type: "content-sample",
          },
          {
            src: "/images/projects/legal-account-growth/conversion-flow.svg",
            alt: "转化链路说明占位图",
            caption: "用于替换为用户沟通、私信承接或转化路径示意。",
            type: "comparison",
          },
        ],
        blocks: [
          {
            id: "legal-intro",
            type: "intro",
            title: "项目概览",
            body:
              "这个项目的重点不只是做内容，而是围绕账号定位、表达方式和用户承接，把一套更能持续运转的内容逻辑搭起来。",
          },
          {
            id: "legal-strategy-heading",
            type: "section-heading",
            title: "定位与内容策略",
            body: "重点不在于持续输出更多内容，而在于先明确账号为什么值得被关注，以及内容要以什么方式被理解。",
          },
          {
            id: "legal-strategy-text",
            type: "text",
            title: "如何建立账号表达方向",
            body:
              "前期工作主要围绕账号定位、用户关心的问题和表达语气展开。与其堆叠专业信息，更重要的是把复杂内容翻译成更容易被理解、也更愿意继续看的表达方式。",
          },
          {
            id: "legal-highlights",
            type: "highlight-cards",
            title: "关键观察",
            cards: [
              {
                title: "定位更清楚",
                description: "从相对泛化的法律内容，逐步转向更有识别度的垂类表达。",
              },
              {
                title: "内容更聚焦",
                description: "选题开始围绕真实咨询场景和高关注问题展开。",
              },
              {
                title: "承接更完整",
                description: "不只关注内容本身，也开始关注互动、沟通和转化承接。",
              },
            ],
          },
          {
            id: "legal-content-sample",
            type: "content-sample",
            title: "内容样例预留",
            body:
              "这里适合替换为封面图、标题写法、短内容结构或留言互动样例，用来更直观看到表达方式如何被优化。",
            image: {
              src: "/images/projects/legal-account-growth/content-sample.svg",
              alt: "法律账号内容样例占位",
              caption: "后续可替换为真实封面样例、内容结构图或互动截图。",
              type: "content-sample",
            },
          },
          {
            id: "legal-outcomes",
            type: "outcomes",
            title: "阶段性成果与收获",
            items: [
              "账号表达开始形成更清晰的风格和内容边界。",
              "对用户需求、内容节奏和转化承接之间的关系有了更完整的理解。",
              "积累了从内容生产到反馈优化的持续迭代经验。",
            ],
          },
          {
            id: "legal-insight",
            type: "insight",
            title: "项目洞察",
            insight:
              "内容增长不只是选题问题，也和表达方式、信任感建立以及后续承接是否完整直接相关。",
          },
        ],
      },
      {
        id: "project-02",
        slug: "ai-portrait-template-design",
        title: "AI 写真与影像模板设计",
        category: "效果设计 / AI 影像",
        description:
          "参与 AI 写真、AI 一键出片与胶片模式方向的模板设计与效果调整，关注风格判断和用户使用场景。",
        highlight: "风格判断、模板设计、效果调优",
        tags: ["审美判断", "模板设计", "AI 影像"],
        role: "效果设计师",
        period: "2025.07 - 2026.04",
        overview:
          "项目围绕 AI 写真、AI 一键出片与胶片模式等方向展开。我主要参与模板风格设计和效果调优，关注当下影像趋势与 C 端用户对结果呈现的感受。",
        background:
          "AI 影像产品面向 C 端用户时，模板效果并不只是技术生成结果，还需要兼顾审美趋势、使用场景与最终体验的稳定性。项目需要在风格表达和用户接受度之间反复校准。",
        goal:
          "让模板效果既具备足够的视觉吸引力，也更贴近用户真实使用场景，在风格统一和产品可用性之间找到平衡。",
        responsibilities: [
          "参与不同影像模板的风格方向判断与视觉表达设计。",
          "结合用户使用场景，对模板效果进行细节调整与多轮验证。",
          "与相关同学协同推进上线前的效果确认，尽量保证输出稳定且符合产品语境。",
        ],
        outcomes: [
          "对 AI 影像模板设计中风格、场景和用户预期之间的关系有了更直接的理解。",
          "积累了在审美表达之外兼顾产品化落地的判断经验。",
          "逐步形成了对影像效果上线前评估维度的基础方法感。",
        ],
        coverImage: {
          src: "/images/projects/ai-portrait-template-design/cover.svg",
          alt: "AI 写真与影像模板设计项目封面",
          caption: "项目封面占位，用于替换为风格模板展示或上线效果图。",
          type: "image",
        },
        gallery: [
          {
            src: "/images/projects/ai-portrait-template-design/style-grid.svg",
            alt: "模板风格矩阵占位图",
            caption: "用于替换为不同风格模板对比、风格方向探索或 moodboard。",
            type: "image",
          },
          {
            src: "/images/projects/ai-portrait-template-design/user-scene.svg",
            alt: "用户场景占位图",
            caption: "用于替换为使用场景、入口流程或结果预览截图。",
            type: "screenshot",
          },
          {
            src: "/images/projects/ai-portrait-template-design/comparison.svg",
            alt: "效果对比占位图",
            caption: "用于替换为不同版本模板、风格强化或细节调整示意。",
            type: "comparison",
          },
        ],
        blocks: [
          {
            id: "ai-intro",
            type: "intro",
            title: "项目概览",
            body:
              "这个项目更依赖图像和案例来建立说服力。当前页面先用结构化素材承接风格展示、场景说明和效果预留，后续可以直接替换为真实样片与模板图。",
          },
          {
            id: "ai-gallery",
            type: "gallery",
            title: "风格与模板展示",
            images: [
              {
                src: "/images/projects/ai-portrait-template-design/style-grid.svg",
                alt: "模板风格矩阵占位图",
                caption: "后续可替换为多套模板风格或样片集合。",
                type: "image",
              },
              {
                src: "/images/projects/ai-portrait-template-design/user-scene.svg",
                alt: "用户场景占位图",
                caption: "后续可替换为用户场景、入口页或结果页截图。",
                type: "screenshot",
              },
            ],
          },
          {
            id: "ai-trend-text",
            type: "text",
            title: "审美趋势与用户场景",
            body:
              "模板设计不是只看是否好看，还要看用户为什么会选择它、会在什么情境里使用它，以及最终结果是否符合她对照片气质和完成度的预期。",
          },
          {
            id: "ai-image",
            type: "image",
            title: "模板效果预留",
            body:
              "这里适合展示某一套模板的主视觉、风格说明和关键细节，让详情页更像真实的效果案例，而不只是文字说明。",
            image: {
              src: "/images/projects/ai-portrait-template-design/style-grid.svg",
              alt: "模板效果展示占位图",
              caption: "后续可替换为主推模板的完整展示图。",
              type: "image",
            },
          },
          {
            id: "ai-quote",
            type: "quote",
            title: "项目观察",
            quote:
              "AI 影像模板的价值，不只是把效果做出来，而是让用户愿意使用并认为这个结果“像是为她准备的”。",
          },
          {
            id: "ai-comparison",
            type: "comparison-placeholder",
            title: "效果对比预留",
            body:
              "这里后续适合放版本对比、细节调优前后差异或同一风格不同强度的对照图。",
            image: {
              src: "/images/projects/ai-portrait-template-design/comparison.svg",
              alt: "效果对比占位图",
              caption: "后续可替换为不同版本模板的对比图。",
              type: "comparison",
            },
          },
          {
            id: "ai-insight",
            type: "insight",
            title: "项目洞察",
            insight:
              "好的影像模板不是单纯的视觉堆叠，而是审美趋势、用户场景和产品稳定性共同作用的结果。",
          },
        ],
        subProjects: [
          {
            id: "ai-portrait",
            label: "AI 写真",
            title: "AI 写真",
            summary:
              "偏重人物风格化表达的子项目，核心是让结果既有明显风格，又不过度失真，兼顾用户对“好看”和“像自己”的双重期待。",
            images: [
              {
                src: "/images/projects/ai-portrait-template-design/style-grid.svg",
                alt: "AI 写真风格展示占位图",
                caption: "后续可替换为 AI 写真模板样片、风格矩阵或主推效果图。",
                type: "image",
              },
              {
                src: "/images/projects/ai-portrait-template-design/comparison.svg",
                alt: "AI 写真效果对比占位图",
                caption: "后续可替换为不同强度或不同方案的风格对比图。",
                type: "comparison",
              },
            ],
            highlights: [
              {
                title: "风格更明确",
                description: "优先建立一眼可识别的视觉气质，而不是只做泛化美化。",
              },
              {
                title: "人像更稳定",
                description: "在风格化表达之外，尽量保留人物本身的自然感和辨识度。",
              },
              {
                title: "使用场景更清晰",
                description: "围绕用户分享、纪念和社交展示等场景判断模板是否成立。",
              },
            ],
            blocks: [
              {
                id: "sub-ai-portrait-intro",
                type: "intro",
                title: "子项目概览",
                body:
                  "AI 写真更强调人物气质与风格统一。这里更适合放主推模板展示图、不同风格样片，以及用户最容易感知的结果差异。",
              },
              {
                id: "sub-ai-portrait-gallery",
                type: "gallery",
                title: "风格展示预留",
                images: [
                  {
                    src: "/images/projects/ai-portrait-template-design/style-grid.svg",
                    alt: "AI 写真风格矩阵占位图",
                    caption: "后续可替换为不同写真风格样片或风格探索版面。",
                    type: "image",
                  },
                  {
                    src: "/images/projects/ai-portrait-template-design/user-scene.svg",
                    alt: "AI 写真使用场景占位图",
                    caption: "后续可替换为入口页、生成结果页或用户场景截图。",
                    type: "screenshot",
                  },
                ],
              },
              {
                id: "sub-ai-portrait-insight",
                type: "insight",
                title: "子项目观察",
                insight:
                  "AI 写真不是单纯把风格做重，而是要让用户觉得结果足够有气质，同时又不会失去“像自己”的安全感。",
              },
            ],
          },
          {
            id: "ai-one-tap",
            label: "AI 一键出片",
            title: "AI 一键出片",
            summary:
              "更偏产品效率和结果稳定性的子项目，重点在于用更低门槛的方式给用户足够完整、可直接使用的影像结果。",
            images: [
              {
                src: "/images/projects/ai-portrait-template-design/user-scene.svg",
                alt: "AI 一键出片场景占位图",
                caption: "后续可替换为用户入口、结果页或推荐模板的实际截图。",
                type: "screenshot",
              },
              {
                src: "/images/projects/ai-portrait-template-design/style-grid.svg",
                alt: "AI 一键出片结果展示占位图",
                caption: "后续可替换为不同模板结果和快速出片样例。",
                type: "image",
              },
            ],
            highlights: [
              {
                title: "门槛更低",
                description: "让用户在更少决策成本下，快速获得可分享的影像结果。",
              },
              {
                title: "结果更完整",
                description: "更关注一键路径下的成片完成度，而不是局部效果本身。",
              },
              {
                title: "产品感更强",
                description: "在视觉之外，更强调效率、稳定性与入口语境的统一。",
              },
            ],
            blocks: [
              {
                id: "sub-ai-onetap-text",
                type: "text",
                title: "低门槛与完成度",
                body:
                  "AI 一键出片的关键不只是快，而是让用户在快速生成后愿意直接保存、分享或继续使用。页面后续适合补真实出片样例和入口路径截图。",
              },
              {
                id: "sub-ai-onetap-highlight",
                type: "highlight-cards",
                title: "当前更适合展示的内容",
                cards: [
                  {
                    title: "入口更顺",
                    description: "更适合展示从进入到出片的整体路径感。",
                  },
                  {
                    title: "结果更完整",
                    description: "更适合展示一键情况下的最终成片效果。",
                  },
                  {
                    title: "判断更产品化",
                    description: "更适合说明视觉判断如何和实际使用效率结合。",
                  },
                ],
              },
            ],
          },
          {
            id: "film-mode",
            label: "胶片模式",
            title: "胶片模式",
            summary:
              "偏风格氛围和影像质感的子项目，重点在于让颜色、颗粒、调性和用户预期之间形成更统一的感受。",
            images: [
              {
                src: "/images/projects/ai-portrait-template-design/comparison.svg",
                alt: "胶片模式对比占位图",
                caption: "后续可替换为胶片感强弱、不同调性或前后版本对比图。",
                type: "comparison",
              },
              {
                src: "/images/projects/ai-portrait-template-design/style-grid.svg",
                alt: "胶片模式风格展示占位图",
                caption: "后续可替换为胶片风格样例、色彩参考或结果页样图。",
                type: "image",
              },
            ],
            highlights: [
              {
                title: "氛围更统一",
                description: "重点不只是参数变化，而是整体调性是否足够成立。",
              },
              {
                title: "质感更真实",
                description: "更关注色彩、颗粒和光感组合后的整体体验。",
              },
              {
                title: "记忆点更强",
                description: "更适合作为风格表达型功能来建立差异感。",
              },
            ],
            blocks: [
              {
                id: "sub-film-quote",
                type: "quote",
                title: "子项目观察",
                quote:
                  "胶片感最容易流于表面，真正成立的是颜色、颗粒、对比度和情绪氛围一起工作后的结果。",
              },
              {
                id: "sub-film-comparison",
                type: "comparison-placeholder",
                title: "风格对比预留",
                body:
                  "这里后续适合放不同调性胶片模式的对照图，或同一张图在不同颗粒与色彩策略下的版本对比。",
                image: {
                  src: "/images/projects/ai-portrait-template-design/comparison.svg",
                  alt: "胶片模式对比占位图",
                  caption: "后续可替换为胶片模式真实版本对比图。",
                  type: "comparison",
                },
              },
            ],
          },
        ],
      },
      {
        id: "project-03",
        slug: "meitu-cloud-retouch-optimization",
        title: "美图云修效果优化",
        category: "效果优化 / 协同迭代",
        description:
          "围绕去瑕疵、面部重塑与 AI 美颜效果做问题识别、评估与迭代优化，参与协同推进和效果判断。",
        highlight: "问题识别、评估逻辑、协同迭代",
        tags: ["问题拆解", "效果评估", "协同推进"],
        role: "效果设计师",
        period: "2025.07 - 2026.04",
        overview:
          "项目围绕去瑕疵、面部重塑和 AI 美颜等方向展开。我主要参与效果问题识别、评估逻辑梳理，以及与算法和产品同学的协同推进。",
        background:
          "修图和美颜类产品的效果优化往往不是单点问题，而是涉及用户感知、参数表现和使用场景的综合判断。项目需要在体验自然度和功能有效性之间持续寻找平衡。",
        goal:
          "让效果优化不只停留在感性判断上，而是逐步形成更清晰的问题识别、评估和沟通逻辑，支撑后续持续迭代。",
        responsibilities: [
          "从用户感知出发识别效果问题，并整理优先级更高的优化方向。",
          "参与建立更可沟通的评估口径，协助推进与算法、产品之间的对齐。",
          "跟进优化迭代结果，持续判断效果变化是否更符合目标体验。",
        ],
        outcomes: [
          "对效果评估从主观感受走向结构化判断有了更直接的实践经验。",
          "在多角色协作中积累了更清晰的表达和推进方式。",
          "逐步理解了影像效果优化中“自然”“有效”“稳定”之间的取舍关系。",
        ],
        coverImage: {
          src: "/images/projects/meitu-cloud-retouch-optimization/cover.svg",
          alt: "美图云修效果优化项目封面",
          caption: "项目封面占位，用于替换为功能界面或优化问题总览图。",
          type: "screenshot",
        },
        gallery: [
          {
            src: "/images/projects/meitu-cloud-retouch-optimization/problem-map.svg",
            alt: "问题识别占位图",
            caption: "用于替换为问题点标注、异常样例或案例归纳图。",
            type: "screenshot",
          },
          {
            src: "/images/projects/meitu-cloud-retouch-optimization/process-flow.svg",
            alt: "协作流程占位图",
            caption: "用于替换为评估流程、协作链路或迭代记录示意。",
            type: "image",
          },
          {
            src: "/images/projects/meitu-cloud-retouch-optimization/comparison.svg",
            alt: "前后对比占位图",
            caption: "用于替换为优化前后、不同策略或不同效果版本对比。",
            type: "comparison",
          },
        ],
        blocks: [
          {
            id: "cloud-intro",
            type: "intro",
            title: "项目概览",
            body:
              "这个项目更适合通过问题点、流程和前后对比来增强证据感。当前页面先用结构化内容把问题识别、协作推进和结果承接的骨架搭清楚。",
          },
          {
            id: "cloud-text",
            type: "text",
            title: "问题识别与评估逻辑",
            body:
              "在效果优化里，首先要明确问题到底来自哪里：是功能本身、参数策略、用户期待，还是展示情境带来的偏差。只有把问题讲清楚，后续迭代和协同才有共同依据。",
          },
          {
            id: "cloud-process",
            type: "process",
            title: "优化推进过程",
            steps: [
              {
                title: "识别问题",
                description: "先从样例里找出用户感知明显、优先级较高的问题类型。",
              },
              {
                title: "建立口径",
                description: "把感性判断整理成更可沟通的评估逻辑，便于协作推进。",
              },
              {
                title: "跟进迭代",
                description: "结合优化结果反复确认体验是否更接近目标预期。",
              },
            ],
          },
          {
            id: "cloud-comparison",
            type: "comparison-placeholder",
            title: "前后对比预留",
            body:
              "这里后续适合放去瑕疵、面部重塑或 AI 美颜的优化前后对照图，用于增强项目的证据感。",
            image: {
              src: "/images/projects/meitu-cloud-retouch-optimization/comparison.svg",
              alt: "效果前后对比占位图",
              caption: "后续可替换为真实优化前后对照图。",
              type: "comparison",
            },
          },
          {
            id: "cloud-highlights",
            type: "highlight-cards",
            title: "关键亮点",
            cards: [
              {
                title: "问题拆解",
                description: "把相对模糊的效果问题转成更可讨论的优化对象。",
              },
              {
                title: "评估逻辑",
                description: "逐步建立更结构化的效果判断和沟通方式。",
              },
              {
                title: "协同推进",
                description: "与算法、产品同学保持一致目标和清晰反馈。",
              },
            ],
          },
          {
            id: "cloud-outcomes",
            type: "outcomes",
            title: "阶段性成果与收获",
            items: [
              "对复杂效果问题的识别与表达更有条理。",
              "对协同推进中的信息对齐方式有了更具体的实践经验。",
              "为后续加入真实对比图和问题样例预留了清晰位置。",
            ],
          },
        ],
      },
      {
        id: "project-04",
        slug: "xiamen-gift-brand-campaign",
        title: "在厦有礼｜品牌推广与策划",
        category: "品牌推广 / 策划表达",
        description:
          "围绕品牌定位、传播主题与整体表达完成策划输出，尝试建立更清晰的品牌感与传播语气。",
        highlight: "品牌定位、传播主题、策划表达",
        tags: ["品牌表达", "策划结构", "内容延展"],
        role: "品牌推广与策划",
        period: "校园项目",
        overview:
          "项目围绕“在厦有礼”这一方向展开品牌推广与策划表达，尝试把城市慢生活、年轻化感知与礼赠场景放进统一的传播叙事里。",
        background:
          "项目希望从更具生活感和城市感的角度切入，塑造区别于常规文旅表达的品牌印象。重点不在于堆叠信息，而在于形成更容易被记住的主题和语气。",
        goal:
          "为品牌建立更清晰的定位和传播主题，让整体表达更贴近年轻用户，也保留足够的内容与活动延展空间。",
        responsibilities: [
          "参与品牌定位梳理和主题方向构思，整理更适合传播的表达方式。",
          "围绕城市慢生活概念延展内容与活动策划框架。",
          "在整体策划输出中兼顾品牌气质、信息结构与传播落点。",
        ],
        outcomes: [
          "形成了一套相对完整的品牌推广与策划表达思路。",
          "对年轻化表达和城市生活方式叙事之间的结合有了更具体的理解。",
          "进一步积累了从概念到结构化输出的策划经验。",
        ],
        coverImage: {
          src: "/images/projects/xiamen-gift-brand-campaign/cover.svg",
          alt: "在厦有礼品牌推广与策划项目封面",
          caption: "项目封面占位，用于替换为主题视觉、活动KV或策划展示封面。",
          type: "image",
        },
        gallery: [
          {
            src: "/images/projects/xiamen-gift-brand-campaign/theme-board.svg",
            alt: "品牌主题版面占位图",
            caption: "用于替换为品牌关键词、主题语或气质参考版面。",
            type: "image",
          },
          {
            src: "/images/projects/xiamen-gift-brand-campaign/campaign-sample.svg",
            alt: "传播内容样例占位图",
            caption: "用于替换为海报、活动页或内容传播样例。",
            type: "content-sample",
          },
          {
            src: "/images/projects/xiamen-gift-brand-campaign/gallery.svg",
            alt: "品牌视觉占位图",
            caption: "用于替换为策划页、视觉延展或活动物料展示。",
            type: "image",
          },
        ],
        blocks: [
          {
            id: "gift-intro",
            type: "intro",
            title: "项目概览",
            body:
              "这个项目更偏品牌感和策划表达，适合通过概念梳理、视觉延展和内容样例来建立页面节奏。当前结构已经为后续替换真实策划页和传播物料留好了位置。",
          },
          {
            id: "gift-text",
            type: "text",
            title: "品牌概念与传播主题",
            body:
              "项目尝试从城市慢生活与年轻化礼赠感知切入，让品牌表达不只是介绍“是什么”，而是先建立一种更容易被记住的情绪和生活想象。",
          },
          {
            id: "gift-gallery",
            type: "gallery",
            title: "视觉与品牌感预留",
            images: [
              {
                src: "/images/projects/xiamen-gift-brand-campaign/theme-board.svg",
                alt: "品牌主题版面占位图",
                caption: "后续可替换为品牌关键词、概念页或 moodboard。",
                type: "image",
              },
              {
                src: "/images/projects/xiamen-gift-brand-campaign/gallery.svg",
                alt: "品牌视觉占位图",
                caption: "后续可替换为视觉稿、活动视觉或传播图集。",
                type: "image",
              },
            ],
          },
          {
            id: "gift-highlights",
            type: "highlight-cards",
            title: "策划亮点",
            cards: [
              {
                title: "主题更清楚",
                description: "从城市感和生活方式切入，让整体表达更有记忆点。",
              },
              {
                title: "结构更完整",
                description: "从品牌定位延伸到传播主题和活动内容，有清晰承接。",
              },
              {
                title: "表达更年轻",
                description: "尝试让品牌语气更贴近年轻用户的日常感知。",
              },
            ],
          },
          {
            id: "gift-content-sample",
            type: "content-sample",
            title: "内容与活动样例预留",
            body:
              "这里后续适合放传播文案、活动主题页、社媒图卡或策划版面，以增强项目的真实感和可读性。",
            image: {
              src: "/images/projects/xiamen-gift-brand-campaign/campaign-sample.svg",
              alt: "内容与活动样例占位图",
              caption: "后续可替换为真实海报、活动概念页或内容排版样例。",
              type: "content-sample",
            },
          },
          {
            id: "gift-quote",
            type: "quote",
            title: "项目观察",
            quote:
              "好的品牌表达不是把信息说得更多，而是把气质和记忆点建立得更明确。",
          },
          {
            id: "gift-insight",
            type: "insight",
            title: "项目洞察",
            insight:
              "策划页最容易空泛，真正能支撑页面的往往是概念、结构和具体内容样例三者一起成立。",
          },
        ],
      },
    ],
  },
  beyondWork: {
    eyebrow: "Beyond Work",
    title: "工作之外，我也会留意图像、阅读感和那些很难被量化、但会影响表达成立的细节。",
    description:
      "这些内容并不独立于工作之外。它们会反过来影响我怎么看页面、怎么组织信息，也影响我为什么会在意一件事是否被准确地感知。",
    intro:
      "我不太把“个人风格”理解成额外装饰。更像是一套稳定的判断来源，来自我平时对图像、排版、生活感和新工具的持续留意。",
    note:
      "这一段不是为了增加篇幅，而是用更轻的方式说明：我的工作判断，很多时候也来自工作之外的观察习惯。",
    cards: [
      {
        id: "bw-01",
        kicker: "Visual Habit",
        title: "影像与照片感",
        description:
          "我会留意照片里的光线、颗粒、色彩和留白，这些细节让我更敏感于画面气质和视觉节奏。",
        tags: ["影像观察", "画面气质"],
      },
      {
        id: "bw-02",
        kicker: "Reading Rhythm",
        title: "内容排版与结构感",
        description:
          "我习惯关注一段信息是怎么被组织起来的，标题、顺序、层级和停顿，都会影响它是否被舒服地读完。",
        tags: ["信息组织", "阅读节奏"],
      },
      {
        id: "bw-03",
        kicker: "Daily Taste",
        title: "日常里的审美判断",
        description:
          "很多判断并不只发生在工作里。看到一张图、一段文案或一个页面，我会自然去想它为什么成立，或者哪里还差一点。",
        tags: ["日常审美", "表达判断"],
      },
      {
        id: "bw-04",
        kicker: "Tool Curiosity",
        title: "新工具与新尝试",
        description:
          "我愿意持续接触 AI 和数字化工具，但更在意它们是否真的能进入工作流，帮助我把表达和结果做得更完整。",
        tags: ["AI 工具", "持续尝试"],
      },
    ],
  },
  closingSignature: {
    eyebrow: "Signature",
    title: "我希望别人看完这个网站之后，记住的不只是我的经历，也记住我的判断方式和表达气质。",
    signature: "把内容说清楚，把感觉放准确，把事情做完整。",
    description:
      "这个网站先把我目前更稳定的部分放在这里：我怎么判断内容、怎么理解图像、怎么推进项目，以及为什么会持续对 AI 和数字化工具保持兴趣。如果你愿意继续了解，我很希望在下一次沟通里把这些部分讲得更具体。",
    aside:
      "它不需要把所有内容一次性说完，但至少应该让人看见：这是黄瀚晖，而不是一个通用模板里的候选人。",
    ctaLabel: "继续看联系方式",
    ctaHref: "#contact-cta",
    visual: {
      src: "/images/placeholders/hero-profile.svg",
      alt: "结尾 section 占位视觉图",
      caption: "后续可替换为更个人化的图像或带生活感的静态照片。",
      type: "image",
    },
    notes: ["审美表达", "内容组织", "项目完整度", "AI 与数字化工具"],
  },
  thankYou: {
    eyebrow: "Thank You",
    title: "感谢你看到这里。",
    signature: "如果这份主页让你感受到一点判断力、表达感和完成度，那它已经完成了它的工作。",
    description:
      "我希望这个网站像一页被认真整理过的内容页，而不是一份网页化简历。后续如果你愿意继续了解，我也很期待把网站里没有写满的部分，在下一次沟通里讲得更具体。",
    name: "黄瀚晖",
    contactLine: "3286223187@qq.com · 微信与简历链接待补充",
    visual: {
      src: "/images/placeholders/照片2.jpg",
      alt: "感谢页人物照片占位图",
      caption: "后续可替换为更合适的个人照片或收口页主视觉。",
      type: "image",
    },
  },
  contacts: {
    eyebrow: "Contacts",
    title: "欢迎联系我进一步了解项目与经历",
    description:
      "如果你希望进一步了解我的项目、经历或工作方式，可以通过下面的方式联系我。微信与简历链接字段已保留，后续只需要替换真实值即可直接用于投递。",
    wechat: { label: "微信", value: "yelo-hh" },
    email: {
      label: "邮箱",
      value: "3286223187@qq.com",
      href: "mailto:3286223187@qq.com",
    },
    resume: { label: "简历", value: "待补充简历 PDF 或在线链接" },
    actions: [
      {
        label: "联系我进一步了解项目",
        href: "mailto:3286223187@qq.com",
        variant: "primary",
      },
      { label: "简历链接待补充", href: "#", variant: "secondary" },
    ],
  },
};

export function getProjectBySlug(slug: string) {
  return siteData.featuredProjects.items.find((project) => project.slug === slug);
}
