import type { Lang } from './index';

/**
 * Every user-facing string, per locale.
 *
 * `en` is the source of truth: `ar` is typed as `typeof en`, so `astro check`
 * fails on a missing or misspelled Arabic key. Values ending in `Html` are
 * authored markup rendered with `set:html` — they are static content from this
 * file, never user input. `%medium%` is substituted at render time.
 */
const en = {
  common: {
    skipToContent: 'Skip to content',
    toggleTheme: 'Toggle dark mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    switchLanguage: 'اقرأ بالعربية',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
  },
  footer: {
    tagline: 'Technical lead · Fintech & scalable systems',
    builtWith: 'Built with Astro + Tailwind.',
  },
  social: {
    email: 'Email',
    rss: 'RSS feed',
  },
  companies: {
    heading: 'Proud to collaborate with',
    carouselLabel: 'Companies and clients carousel',
    prev: 'Show previous companies',
    next: 'Show next companies',
  },
  testimonials: {
    carouselLabel: 'Recommendations carousel',
    prev: 'Show previous recommendations',
    next: 'Show next recommendations',
    /** `%name%` is replaced with the recommender's name. */
    linkedinLabel: "View %name%'s recommendation on LinkedIn",
  },
  home: {
    eyebrow: 'Problem solver · Experienced developer · AI for teams & products',
    headline: 'I solve hard problems across domains — then help teams ship smarter with AI',
    introHtml:
      '10+ years across fintech, mobility, e-commerce, government, and education: untangling complexity, building systems that scale, and leading delivery from <strong>Lynk</strong> to <strong>Carefer</strong>. Today I focus on empowering teams and products with AI-augmented engineering — and I write about that on %medium%.',
    ctaProjects: 'View projects',
    ctaBlog: 'Blog',
    ctaContact: 'Get in touch',
    portraitAlt: 'Mohamed Naser',
    selectedProjects: 'Selected projects',
    selectedProjectsIntro: 'Stack, achievements, and write-ups for each product I ship or govern.',
    allProjects: 'View all projects →',
    testimonialsHeading: 'What collaborators say',
    /** `%count%` is replaced with the number of testimonials. */
    allTestimonials: 'Read all %count% testimonials →',
  },
  about: {
    title: 'About',
    metaDescription:
      'Technical Lead with 10+ years — fintech at Lynk, Carefer, Tazhub, and AI-augmented engineering.',
    introHtml:
      'I am an experienced developer and problem solver with 10+ years across fintech, mobility, e-commerce, government, and education — currently leading architecture at Lynk. I am especially interested in empowering teams and products with AI, and I share what I learn on %medium%.',
    portraitAlt: 'Mohamed Naser',
    bodyHtml: [
      'My journey spans finance, e-commerce, mobility, education, and government — from network signal analysis and government archiving in Egypt to financial reporting for Johnson &amp; Johnson, notification systems for TOTAL, and the Tazhub public-transport ticketing platform.',
      'At <strong>Carefer</strong> I led a platform processing 50K+ monthly car-maintenance orders across five applications and scaled the team from 3 to 20+ engineers. At <strong>Lynk</strong> I architect multi-ledger fintech with ZATCA compliance and commodity exchange integrations.',
      'Microverse sharpened remote collaboration and full-stack fundamentals. Today I bridge business objectives and technical implementation — plus <strong>AI-augmented SDLC</strong>: hooks that enforce tickets before code, automated review, and explicit merge approval.',
    ],
    browseProjects: 'Browse all projects →',
    topSkills: 'Top skills',
    experience: 'Experience',
    education: 'Education',
    certifications: 'Certifications & languages',
    /** `%list%` is replaced with the comma-separated language list. */
    languagesLine: 'Languages: %list%',
    testimonials: 'Testimonials',
    downloadCv: 'Download CV (PDF)',
  },
  contact: {
    title: 'Contact',
    metaDescription:
      'Get in touch with Mohamed Naser — email, LinkedIn, GitHub, Stack Overflow, X, Medium, and HackerRank.',
    lead: 'Hiring, consulting, or collaboration — the fastest route is email.',
    mailSubject: 'Hello from mnaser.me',
    /** `%email%` is replaced with the address. */
    emailCta: 'Email %email%',
    connect: 'Connect',
  },
  projects: {
    title: 'Projects',
    metaDescription:
      'Products and repositories — stack, achievements, and write-ups for Blog Generator and more.',
    intro:
      'Everything I build or govern — each project has a detail page with stack, achievements, and links.',
    viewProject: 'View project →',
    deliveredAt: 'Delivered while at',
    /** `%status%` is replaced with a translated status label. */
    statusLine: 'Status: %status%',
    stack: 'Stack',
    achievements: 'Achievements',
    backToAll: '← All projects',
    status: {
      active: 'Active',
      paused: 'Paused',
      archived: 'Archived',
    },
  },
  blog: {
    title: 'Blog',
    metaDescription:
      'Articles on AI agents, LLM evaluation, engineering leadership, and shipping reliable software — with links to read on Medium and LinkedIn.',
    keywords: [
      'AI agents',
      'LLM testing',
      'technical leadership',
      'software engineering',
      'Mohamed Naser',
    ],
    intro:
      'Writing on AI-augmented engineering, agent quality, and technical leadership. Summaries and SEO live here; full articles on Medium.',
    rss: 'RSS feed',
    empty: 'No posts yet.',
    /** Shown to Arabic readers only; empty in English, where it says nothing. */
    languageNote: '',
  },
  notFound: {
    title: 'Page not found',
    metaDescription: 'The page you requested does not exist.',
    body: 'That URL may be from the old static site. Try the homepage or blog.',
    home: 'Home',
    blog: 'Blog',
  },
} as const;

const ar: DeepReadonlyLike<typeof en> = {
  common: {
    skipToContent: 'تخطَّ إلى المحتوى',
    toggleTheme: 'تبديل الوضع الداكن',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    mainNav: 'الرئيسية',
    mobileNav: 'قائمة الجوال',
    switchLanguage: 'Read in English',
  },
  nav: {
    home: 'الرئيسية',
    about: 'نبذة عني',
    projects: 'المشاريع',
    blog: 'المدوّنة',
    contact: 'تواصل معي',
  },
  footer: {
    tagline: 'قائد تقني · التقنية المالية والأنظمة القابلة للتوسّع',
    builtWith: 'مبنيّ بـ Astro و Tailwind.',
  },
  social: {
    email: 'البريد الإلكتروني',
    rss: 'خلاصة RSS',
  },
  companies: {
    heading: 'فخور بالتعاون مع',
    carouselLabel: 'عرض متحرّك للشركات والعملاء',
    prev: 'عرض الشركات السابقة',
    next: 'عرض الشركات التالية',
  },
  testimonials: {
    carouselLabel: 'عرض متحرّك للتوصيات',
    prev: 'عرض التوصيات السابقة',
    next: 'عرض التوصيات التالية',
    linkedinLabel: 'اطّلع على توصية %name% على لينكدإن',
  },
  home: {
    eyebrow: 'حلّال مشكلات · مطوّر خبير · الذكاء الاصطناعي للفرق والمنتجات',
    headline:
      'أحلّ المشكلات الصعبة في مجالات متعدّدة — ثم أساعد الفرق على البناء بذكاء أكبر بالذكاء الاصطناعي',
    introHtml:
      'أكثر من ١٠ سنوات في التقنية المالية والتنقّل والتجارة الإلكترونية والقطاع الحكومي والتعليم: أفكّ تعقيد الأنظمة، وأبني حلولًا قابلة للتوسّع، وأقود التسليم من <strong>Lynk</strong> إلى <strong>Carefer</strong>. أركّز اليوم على تمكين الفرق والمنتجات بهندسة برمجيات معزَّزة بالذكاء الاصطناعي — وأكتب عن ذلك على %medium%.',
    ctaProjects: 'استعرض المشاريع',
    ctaBlog: 'المدوّنة',
    ctaContact: 'تواصل معي',
    portraitAlt: 'محمد ناصر',
    selectedProjects: 'مشاريع مختارة',
    selectedProjectsIntro: 'التقنيات والإنجازات والمقالات لكل منتج أبنيه أو أشرف عليه.',
    allProjects: 'استعرض كل المشاريع ←',
    testimonialsHeading: 'ماذا يقول من عملوا معي',
    allTestimonials: 'اقرأ التوصيات الـ%count% كاملةً ←',
  },
  about: {
    title: 'نبذة عني',
    metaDescription:
      'قائد تقني بخبرة تتجاوز ١٠ سنوات — التقنية المالية في Lynk وCarefer وTazhub، والهندسة المعزَّزة بالذكاء الاصطناعي.',
    introHtml:
      'أنا مطوّر خبير وحلّال مشكلات بخبرة تتجاوز ١٠ سنوات في التقنية المالية والتنقّل والتجارة الإلكترونية والقطاع الحكومي والتعليم — وأقود حاليًا البنية التقنية في Lynk. يستهويني بشكل خاص تمكين الفرق والمنتجات بالذكاء الاصطناعي، وأشارك ما أتعلّمه على %medium%.',
    portraitAlt: 'محمد ناصر',
    bodyHtml: [
      'امتدت رحلتي عبر التمويل والتجارة الإلكترونية والتنقّل والتعليم والقطاع الحكومي — من تحليل جودة إشارات الشبكات وأرشفة الوثائق الحكومية في مصر، إلى أنظمة التقارير المالية لشركة Johnson &amp; Johnson، وأنظمة الإشعارات لشركة TOTAL، ومنصّة Tazhub لتذاكر النقل العام.',
      'في <strong>Carefer</strong> قدت منصّة تعالج أكثر من ٥٠ ألف طلب صيانة سيارات شهريًا عبر خمسة تطبيقات، ونمَّيت الفريق من ٣ مهندسين إلى أكثر من ٢٠. وفي <strong>Lynk</strong> أصمّم بنية تقنية مالية متعدّدة السجلّات المحاسبية، متوافقة مع هيئة الزكاة والضريبة والجمارك (ZATCA) ومتكاملة مع بورصات السلع.',
      'صقلت تجربتي في Microverse مهارات العمل عن بُعد وأساسيات التطوير المتكامل. واليوم أصل بين أهداف العمل والتنفيذ التقني — إضافة إلى <strong>دورة تطوير برمجيات معزَّزة بالذكاء الاصطناعي</strong>: أدوات تفرض ربط العمل بتذكرة قبل كتابة الكود، ومراجعة آلية، وموافقة صريحة قبل الدمج.',
    ],
    browseProjects: 'استعرض كل المشاريع ←',
    topSkills: 'أبرز المهارات',
    experience: 'الخبرات العملية',
    education: 'التعليم',
    certifications: 'الشهادات واللغات',
    languagesLine: 'اللغات: %list%',
    testimonials: 'التوصيات',
    downloadCv: 'حمّل السيرة الذاتية (PDF)',
  },
  contact: {
    title: 'تواصل معي',
    metaDescription:
      'تواصل مع محمد ناصر — البريد الإلكتروني، لينكدإن، جيت هَب، Stack Overflow، إكس، Medium، وHackerRank.',
    lead: 'للتوظيف أو الاستشارات أو التعاون — أسرع طريق هو البريد الإلكتروني.',
    mailSubject: 'مرحبًا من mnaser.me',
    emailCta: 'راسلني على %email%',
    connect: 'تواصل عبر',
  },
  projects: {
    title: 'المشاريع',
    metaDescription:
      'منتجات ومستودعات — التقنيات والإنجازات والمقالات لكل مشروع، من Lynk وCarefer إلى Blog Generator.',
    intro: 'كل ما أبنيه أو أشرف عليه — لكل مشروع صفحة تفصيلية بالتقنيات والإنجازات والروابط.',
    viewProject: 'عرض المشروع ←',
    deliveredAt: 'أُنجِز أثناء العمل في',
    statusLine: 'الحالة: %status%',
    stack: 'التقنيات المستخدمة',
    achievements: 'الإنجازات',
    backToAll: '→ كل المشاريع',
    status: {
      active: 'نشط',
      paused: 'متوقّف مؤقتًا',
      archived: 'مؤرشف',
    },
  },
  blog: {
    title: 'المدوّنة',
    metaDescription:
      'مقالات عن وكلاء الذكاء الاصطناعي، وتقييم نماذج اللغة، وقيادة فرق الهندسة، وبناء برمجيات موثوقة — مع روابط للقراءة على Medium ولينكدإن.',
    keywords: [
      'وكلاء الذكاء الاصطناعي',
      'اختبار نماذج اللغة',
      'القيادة التقنية',
      'هندسة البرمجيات',
      'محمد ناصر',
    ],
    intro:
      'كتاباتي عن الهندسة المعزَّزة بالذكاء الاصطناعي، وجودة الوكلاء، والقيادة التقنية. الملخّصات هنا، والمقالات كاملةً على Medium.',
    rss: 'خلاصة RSS',
    empty: 'لا توجد مقالات بعد.',
    languageNote: 'المقالات منشورة باللغة الإنجليزية.',
  },
  notFound: {
    title: 'الصفحة غير موجودة',
    metaDescription: 'الصفحة المطلوبة غير موجودة.',
    body: 'ربما كان هذا الرابط من النسخة القديمة للموقع. جرّب الصفحة الرئيسية أو المدوّنة.',
    home: 'الصفحة الرئيسية',
    blog: 'المدوّنة',
  },
};

/** Same shape as the English dictionary, but every string is writable/free-form. */
type DeepReadonlyLike<T> = {
  [K in keyof T]: T[K] extends readonly string[]
    ? string[]
    : T[K] extends string
      ? string
      : DeepReadonlyLike<T[K]>;
};

export const ui = { en, ar } as const;

export type Ui = DeepReadonlyLike<typeof en>;

export function useTranslations(lang: Lang): Ui {
  return ui[lang] as Ui;
}

/** Replace `%token%` placeholders in a dictionary string. */
export function fill(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce(
    (out, [key, value]) => out.replaceAll(`%${key}%`, String(value)),
    template,
  );
}
