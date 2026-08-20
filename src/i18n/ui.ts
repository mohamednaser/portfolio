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
    copyCode: 'Copy code',
    copied: 'Copied',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
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
    headline:
      "I architect systems that don't blink under pressure—and lead the teams that build them",
    introHtml:
      'Over the last decade, I’ve built everything from high-frequency public transport ticketing to Sharia-compliant fintech engines processing millions. Today, as Technical Lead at <strong>Lynk</strong>, I untangle deep architectural complexity and empower engineering teams to ship faster using AI-augmented workflows — and I write about that on %medium%.',
    ctaProjects: 'View projects',
    ctaBlog: 'Blog',
    ctaContact: 'Get in touch',
    portraitAlt: 'Mohamed Naser',
    /** Labels the proof band under the hero for screen readers. */
    statsLabel: 'Career in numbers',
    howIHelp: 'How I help',
    howIHelpIntro:
      'Four kinds of problem I get called for — and the engagements built around them.',
    howIHelpCta: 'Ways to work together →',
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
      'I build the engines that businesses run on. Technical Lead with 10+ years scaling fintech, mobility, and engineering teams.',
    introHtml:
      "I don't just write code; I build the engines that businesses run on. With over 10 years of experience across fintech, mobility, and e-commerce, my focus is on strict reliability and scaling engineering cultures. I share what I learn along the way on %medium%.",
    portraitAlt: 'Mohamed Naser',
    bodyHtml: [
      'My journey started with network signal analysis and government archiving, evolving into building critical financial reporting systems for Johnson &amp; Johnson and notification pipelines for TOTAL.',
      'When I took the technical helm at <strong>Carefer</strong>, I led a platform processing 50K+ monthly car-maintenance orders across five apps, scaling the engineering team from 3 to 20+ developers. Today at <strong>Lynk</strong>, I design strictly regulated, ZATCA-compliant fintech architectures that seamlessly integrate with commodity exchanges.',
      "My leadership philosophy was forged through years of remote collaboration. I bridge the gap between business objectives and technical reality by enforcing rigorous, <strong>AI-augmented SDLC processes</strong>—because shipping fast shouldn't mean breaking production.",
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
  services: {
    title: 'Work with me',
    metaDescription:
      'Architecture reviews, fractional technical leadership, and mentoring — from a technical lead who has scaled fintech platforms under real load.',
    lead: 'Three ways I work with teams. Each one starts with the same conversation: what is actually breaking, and what does it cost you.',
    /** Column headings inside every offering card. */
    audienceLabel: 'Good fit if',
    outcomeLabel: 'You get',
    testimonials: 'What people say',
    ctaHeading: 'Start with a conversation',
    ctaBody:
      'Tell me what you are building and where it hurts. If I am not the right person, I will say so and point you at someone who is.',
    ctaBooking: 'Book a session',
  },
  projects: {
    title: 'Projects',
    metaDescription:
      "A deep dive into the platforms I've architected and the teams I've led. Real metrics, actual tech stacks, and the engineering stories behind them.",
    intro:
      "A deep dive into the platforms I've architected and the teams I've led. Real metrics, actual tech stacks, and the engineering stories behind them.",
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
      'Long-form engineering writing on scaling fintech platforms, databases under load, and AI-augmented delivery — with the failed attempts left in.',
    rss: 'RSS feed',
    empty: 'No posts yet.',
    /** Points at `/series/scaling-murabaha`, which nothing else on the index links to. */
    seriesEyebrow: 'Start here',
    seriesBlurb:
      'Three of the posts below are one story: taking a Sharia-compliant Murabaha platform from ten orders to five thousand.',
    seriesCta: 'Read the series →',
    /** Shown to Arabic readers only; empty in English, where it says nothing. */
    languageNote: '',
  },
  post: {
    /** BCP-47 tag for `toLocaleDateString`. Arabic keeps Latin digits (`nu-latn`). */
    dateLocale: 'en-GB',
    by: 'By',
    authorRole: 'Technical Lead, Lynk',
    keywords: 'Keywords',
    topics: 'Topics',
    readArticle: 'Read article',
    viewSummary: 'View summary',
    mediumLink: 'Medium ↗',
    linkedinLink: 'LinkedIn profile ↗',
    /** `%medium%` is substituted with a link to the Medium original. */
    externalHtml:
      'The full article is on %medium%. Use the button above for the complete piece, comments, and sharing.',
    authorBio:
      'Technical Lead at Lynk, building Sharia-compliant commodity Murabaha infrastructure in Saudi Arabia. Writes about scaling fintech platforms, databases under load, and the unglamorous parts of production.',
    authorLinkedin: 'LinkedIn',
    authorContact: 'Get in touch',
    back: '← Blog',
    /** Jump list built from the article's own `h2` headings. */
    onThisPage: 'On this page',
    /** Companion-article footer. The two articles are not numbered episodes. */
    seriesPartOf: 'Read together · %series%',
    /** Compact form for the kicker above the title. */
    seriesPartShort: 'All three parts',
    seriesAllParts: 'All three parts',
    seriesPrevious: '← Read first',
    seriesNext: 'Read next →',
    /** Shown above translated articles only; empty in the source language. */
    translationNote: '',
    readOriginal: '',
  },
  series: {
    eyebrow: 'Three articles',
    title: 'Scaling a Commodity Murabaha Platform',
    metaDescription:
      'Three articles on a Sharia-compliant commodity Murabaha platform: the state machine, the database battles, and the queue worker fleet that took it to 5,200 orders at 99.94%.',
    intro:
      'The story of a Sharia-compliant Murabaha platform, from a prototype that choked on ten orders to a powerhouse running 5,000 a day. Part 1 explains the unbreakable legal state machine at the core of the trades. Parts 2 and 3 expose the gritty engineering battles that made it fast—slaying MySQL deadlocks, curing silent queue latency, and commanding a 122-worker fleet.',
    keywords: [
      'commodity murabaha',
      'scaling fintech',
      'database performance',
      'queue workers',
      'islamic finance technology',
    ],
    back: '← Blog',
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
    mainNav: 'التنقّل الرئيسي',
    mobileNav: 'قائمة الجوال',
    switchLanguage: 'Read in English',
    copyCode: 'انسخ الكود',
    copied: 'تم النسخ',
  },
  nav: {
    home: 'الرئيسية',
    about: 'نبذة عني',
    services: 'الخدمات',
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
    headline: 'أصمم أنظمة لا تنهار تحت الضغط — وأقود الفرق التي تبنيها',
    introHtml:
      'على مدار العقد الماضي، بنيت كل شيء؛ من أنظمة تذاكر النقل العام عالية الكثافة، إلى محركات التقنية المالية الإسلامية التي تدير الملايين. واليوم، كقائد تقني في <strong>Lynk</strong>، أعمل على تفكيك التعقيدات الهندسية وتمكين فرق البرمجيات من الإنجاز بذكاء وسرعة باستخدام الذكاء الاصطناعي — وأكتب عن ذلك على %medium%.',
    ctaProjects: 'استعرض المشاريع',
    ctaBlog: 'المدوّنة',
    ctaContact: 'تواصل معي',
    portraitAlt: 'محمد ناصر',
    statsLabel: 'المسيرة بالأرقام',
    howIHelp: 'كيف أساعد',
    howIHelpIntro: 'أربعة أنواع من المشكلات أُستدعى لها — والخدمات المبنيّة حولها.',
    howIHelpCta: 'طرق العمل معًا ←',
    selectedProjects: 'مشاريع مختارة',
    selectedProjectsIntro: 'التقنيات والإنجازات والمقالات لكل منتج أبنيه أو أشرف عليه.',
    allProjects: 'استعرض كل المشاريع ←',
    testimonialsHeading: 'ماذا يقول من عملوا معي',
    allTestimonials: 'اقرأ التوصيات الـ%count% كاملةً ←',
  },
  about: {
    title: 'نبذة عني',
    metaDescription:
      'أبني المحركات التي تعتمد عليها الشركات. قائد تقني بخبرة تزيد عن ١٠ سنوات في قيادة وتوسيع الأنظمة المالية وفرق البرمجيات.',
    introHtml:
      'أنا لا أكتب الكود البرمجي فحسب؛ بل أبني المحركات التي تعتمد عليها الشركات. بخبرة تزيد عن ١٠ سنوات في التقنية المالية والتنقل والتجارة الإلكترونية، ينصب تركيزي على الموثوقية الصارمة وتوسيع قدرات الفرق الهندسية. وأشارك ما أتعلمه خلال هذه الرحلة على %medium%.',
    portraitAlt: 'محمد ناصر',
    bodyHtml: [
      'بدأت رحلتي بتحليل إشارات الشبكات وأرشفة الوثائق الحكومية، وتطورت لتشمل بناء أنظمة تقارير مالية حساسة لشركة Johnson &amp; Johnson وأنظمة إشعارات لشركة TOTAL.',
      'عندما توليت القيادة التقنية في <strong>Carefer</strong>، قدت منصة تعالج أكثر من ٥٠ ألف طلب صيانة سيارات شهريًا عبر خمسة تطبيقات، ونمَّيت فريق الهندسة من ٣ إلى أكثر من ٢٠ مطورًا. واليوم في <strong>Lynk</strong>، أصمم بنية تقنية مالية صارمة التنظيم، متوافقة مع هيئة الزكاة (ZATCA)، وتتكامل بسلاسة مع بورصات السلع.',
      'طريقتي في القيادة تشكلت عبر سنوات من العمل عن بُعد. أنا أربط بين أهداف العمل والواقع التقني من خلال فرض <strong>دورة تطوير برمجيات صارمة ومعزَّزة بالذكاء الاصطناعي</strong> — لأن سرعة الإنجاز لا يجب أبداً أن تعني انهيار النظام.',
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
  services: {
    title: 'اعمل معي',
    metaDescription:
      'مراجعات معمارية، وقيادة تقنية بدوام جزئي، وإرشاد فردي — من قائد تقني وسّع منصّات مالية تحت حِمل حقيقي.',
    lead: 'ثلاث طرق أعمل بها مع الفرق. وكلّها تبدأ بالحديث نفسه: ما الذي يتعطّل فعلًا، وكم يكلّفك.',
    audienceLabel: 'مناسب لك إذا',
    outcomeLabel: 'ما تحصل عليه',
    testimonials: 'ماذا يقول من عملوا معي',
    ctaHeading: 'لنبدأ بحديث',
    ctaBody:
      'أخبرني بما تبنيه وأين يؤلمك. وإن لم أكن الشخص المناسب، سأقولها لك وأدلّك على من يناسبك.',
    ctaBooking: 'احجز جلسة',
  },
  projects: {
    title: 'المشاريع',
    metaDescription:
      'نظرة عميقة على المنصات التي صممتها والفرق التي قدتها. أرقام حقيقية، تقنيات فعلية، والقصص الهندسية وراء كل إنجاز.',
    intro:
      'نظرة عميقة على المنصات التي صممتها والفرق التي قدتها. أرقام حقيقية، تقنيات فعلية، والقصص الهندسية وراء كل إنجاز.',
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
      'كتابات هندسية مطوّلة عن توسيع منصّات التقنية المالية، وقواعد البيانات تحت الحِمل، والتسليم المعزَّز بالذكاء الاصطناعي — بما في ذلك المحاولات الفاشلة.',
    rss: 'خلاصة RSS',
    empty: 'لا توجد مقالات بعد.',
    seriesEyebrow: 'ابدأ من هنا',
    seriesBlurb:
      'ثلاثة من المقالات أدناه تروي قصة واحدة: نقل منصّة مرابحة متوافقة مع الشريعة من عشرة طلبات إلى خمسة آلاف.',
    seriesCta: 'اقرأ السلسلة ←',
    languageNote: 'المقالات متاحة بالعربية والإنجليزية؛ بدّل اللغة من أعلى الصفحة.',
  },
  post: {
    dateLocale: 'ar-EG-u-nu-latn',
    by: 'بقلم',
    authorRole: 'قائد تقني في Lynk',
    keywords: 'الكلمات المفتاحية',
    topics: 'الموضوعات',
    readArticle: 'اقرأ المقال',
    viewSummary: 'اطّلع على الملخّص',
    mediumLink: 'Medium ↗',
    linkedinLink: 'ملفّ لينكدإن ↗',
    externalHtml:
      'المقال كاملًا منشور على %medium%. استخدم الزرّ أعلاه للنصّ الكامل والتعليقات والمشاركة.',
    authorBio:
      'قائد تقني في Lynk، أبني بنية تحتية للمرابحة السلعية المتوافقة مع الشريعة في السعودية. أكتب عن توسيع منصّات التقنية المالية، وقواعد البيانات تحت الحِمل، والجوانب غير البرّاقة من بيئة الإنتاج.',
    authorLinkedin: 'لينكدإن',
    authorContact: 'تواصل معي',
    back: '→ المدوّنة',
    onThisPage: 'محتويات المقال',
    seriesPartOf: 'تُقرأ معًا · %series%',
    seriesPartShort: 'الأجزاء الثلاثة',
    seriesAllParts: 'الأجزاء الثلاثة',
    seriesPrevious: 'اقرأ هذا أولًا →',
    seriesNext: '← اقرأ بعده',
    translationNote: 'هذا المقال مترجم عن نسخته الإنجليزية الأصلية.',
    readOriginal: 'اقرأ النسخة الإنجليزية →',
  },
  series: {
    eyebrow: 'ثلاثة مقالات',
    title: 'توسيع منصّة مرابحة سلعية',
    metaDescription:
      'ثلاثة مقالات عن منصّة مرابحة سلعية متوافقة مع الشريعة: آلة الحالات، معارك قاعدة البيانات، وأسطول عمّال الطوابير الذي أوصلها إلى 5,200 طلب بنسبة 99.94%.',
    intro:
      'قصة منصة مرابحة متوافقة مع الشريعة، من نموذج أولي تعثر في عشرة طلبات، إلى قوة ضاربة تعالج 5,000 طلب يوميًا. المقال الأول يشرح آلة الحالات القانونية الصارمة التي تحكم الصفقات. والمقالان الثاني والثالث يكشفان عن المعارك الهندسية الطاحنة التي جعلتها سريعة: من سحق اختناقات قاعدة البيانات، وعلاج أوقات الانتظار الصامتة، إلى قيادة أسطول من 122 عامل طابور.',
    keywords: [
      'المرابحة السلعية',
      'توسيع التقنية المالية',
      'أداء قواعد البيانات',
      'عمّال الطوابير',
      'تقنيات التمويل الإسلامي',
    ],
    back: '→ المدوّنة',
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
