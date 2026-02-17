// AQ Architects - Projects Data
// Shared between ProjectsSection and ProjectDetail page

import { IMAGES } from "./images";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  location: string;
  locationEn: string;
  area: string;
  year: string;
  client: string;
  duration: string;
  status: string;
  description: string;
  descriptionEn: string;
  challenge: string;
  solution: string;
  mainImage: string;
  gallery: ProjectImage[];
  features: string[];
  scope: string[];
}

export const projects: ProjectDetail[] = [
  {
    id: "villa-alwaha",
    title: "الازدهار",
    titleEn: "Al-Azduhar",
    category: "تجاري",
    categoryEn: "Commercial",
    location: "بريدة – حي سلطانة، المملكة العربية السعودية",
    locationEn: "Buraydah - Sultanah District, Saudi Arabia",
    area: "2,000 م²",
    year: "2025",
    client: "جمعية تحفيظ القرآن الكريم ببريدة",
    duration: "14 شهر",
    status: "تحت الإنشاء",
    description:
      "مشروع الازدهار هو مشروع تجاري يضم صالات متعددة، يهدف إلى خلق بيئة تفاعلية تبدأ من الخارج وتمتد إلى الداخل من خلال الحدائق والممرات الداخلية التي تمنح المكان طابعًا مختلفًا ومميزًا. الفكرة لم تكن مجرد إنشاء صالات مغلقة، بل تصميم تجربة مكانية متكاملة تعزز الحركة، والانفتاح، والارتباط بالطبيعة، لتقديم وجهة تجارية ذات حضور بصري قوي وهوية معمارية واضحة.",
    descriptionEn:
      "Al-Azduhar is an educational building designed to create an interactive environment that flows from exterior to interior through gardens and internal corridors, offering a unique and distinctive character for users.",
    challenge:
      "تمثّل التحدي في محدودية عمق الأرض وإحاطتها بممرين، ما فرض ضرورة معالجة توزيع الكتل والفراغات بعناية لضمان تنوع الاستخدامات داخل الصالات دون الإحساس بضيق المساحة، مع الحفاظ على سهولة الحركة والوضوح البصري.",
    solution:
      "تم تنظيم المخطط بطريقة تخلق تسلسلًا حركيًا مرنًا بين الصالات والممرات، مع إدخال حدائق وفراغات داخلية تعزز الإحساس بالاتساع وتمنح المشروع عمقًا بصريًا أكبر من مساحته الفعلية. كما تم توجيه الفراغات للاستفادة من الإضاءة الطبيعية وخلق إطلالات داخلية مدروسة ترفع من جودة التجربة للزوار والمستخدمين.",
    mainImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/XDInnZTQJKMCZAsb.png",
    gallery: [
      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/XDInnZTQJKMCZAsb.png", alt: "الواجهة الخارجية لمشروع الازدهار" },
      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/FLxmOHjdMECCXEBG.png", alt: "الممرات والحدائق الداخلية" },
      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/heoKiTecoUqVQpXT.png", alt: "مراحل البناء والتنفيذ" },
      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/DRixtUywuBHhSaZm.png", alt: "التفاصيل المعمارية" },
      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/xBOZytaUTdfFYIqt.png", alt: "الإضاءة والتصميم الداخلي" },
      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/oEdNVApZgiBQJvVK.png", alt: "المخطط المعماري" },
      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056579686/kGqrnTpwlZbUNndk.png", alt: "التصميم الخارجي" },
    ],
    features: [
      "انفتاح بصري ووظيفي بين الداخل والخارج",
      "ممرات وحدائق داخلية تعزز التجربة الحركية",
      "توزيع مرن للصالات يتيح تنوع الاستخدام",
      "هوية معمارية واضحة تعزز القيمة التجارية للمشروع",
    ],
    scope: [
      "التصميم المعماري",
      "الإشراف",
      "إدارة المشروع",
    ],
  },
  {
    id: "nakheel-compound",
    title: "مجمع النخيل السكني",
    titleEn: "Al-Nakheel Residential Compound",
    category: "سكني",
    categoryEn: "Residential",
    location: "القصيم، المملكة العربية السعودية",
    locationEn: "Qassim, Saudi Arabia",
    area: "٣,٢٠٠ م²",
    year: "٢٠٢٣",
    client: "شركة تطوير عقاري",
    duration: "٢٤ شهر",
    status: "مكتمل",
    description:
      "مجمع سكني متكامل يضم مجموعة من الفلل الحديثة بأسطح مسطحة وجدران بيضاء نظيفة مع إطارات نوافذ داكنة. يتميز بتنسيق حدائق صحراوية مستدامة وممرات مشاة متعرجة تربط بين الوحدات السكنية، مع مرافق مشتركة تشمل مناطق ترفيهية ومساحات خضراء.",
    descriptionEn:
      "An integrated residential compound featuring a collection of modern villas with flat roofs and clean white walls with dark window frames, complemented by sustainable desert landscaping.",
    challenge:
      "تصميم مجمع سكني يحافظ على خصوصية كل وحدة مع خلق إحساس بالمجتمع المتكامل، وتحقيق الاستدامة في بيئة صحراوية قاسية مع الحفاظ على جمالية التصميم المودرن.",
    solution:
      "صممنا الفلل بتوجيهات مدروسة تضمن الخصوصية مع إطلالات على المساحات الخضراء المشتركة. استخدمنا نباتات صحراوية محلية قليلة استهلاك المياه، وأنشأنا ممرات مظللة تربط بين المرافق المشتركة.",
    mainImage: IMAGES.residential,
    gallery: [
      { src: IMAGES.residential, alt: "منظر جوي للمجمع السكني" },
      { src: IMAGES.hero, alt: "نموذج الفيلا من الخارج" },
      { src: IMAGES.interior, alt: "التصميم الداخلي لإحدى الفلل" },
    ],
    features: [
      "تصميم مودرن بأسطح مسطحة وخطوط نظيفة",
      "تنسيق حدائق صحراوية مستدامة",
      "ممرات مشاة مظللة ومنسقة",
      "مرافق مشتركة ومناطق ترفيهية",
      "إنارة خارجية ذكية موفرة للطاقة",
      "نظام أمني متكامل",
    ],
    scope: [
      "التخطيط العمراني الشامل",
      "التصميم المعماري للوحدات",
      "تصميم البنية التحتية",
      "تنسيق المواقع والحدائق",
      "إدارة المشروع والإشراف",
    ],
  },
  {
    id: "business-tower",
    title: "برج الأعمال التجاري",
    titleEn: "Business Tower",
    category: "تجاري",
    categoryEn: "Commercial",
    location: "الرياض، المملكة العربية السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    area: "١٢,٠٠٠ م²",
    year: "٢٠٢٤",
    client: "مجموعة استثمارية",
    duration: "٣٦ شهر",
    status: "قيد التنفيذ",
    description:
      "برج تجاري بارز بواجهة زجاجية بارامترية ذات تصميم هندسي مبتكر يعكس الطموح المعماري السعودي. يتميز بساحة أرضية حديثة مع تنسيق حدائق معاصر ومساحات عمل مرنة تلبي احتياجات الشركات العالمية.",
    descriptionEn:
      "A prominent commercial tower with a parametric glass facade featuring an innovative geometric design that reflects Saudi architectural ambition.",
    challenge:
      "تصميم واجهة بارامترية معقدة تحقق الجمالية المعمارية المطلوبة مع الالتزام بمعايير كفاءة الطاقة والاستدامة في مناخ الرياض الحار، وتوفير مساحات مكتبية مرنة تناسب مختلف أنواع الشركات.",
    solution:
      "طورنا نظام واجهة بارامترية ذكية تتفاعل مع زاوية الشمس لتقليل الحرارة مع تعظيم الإضاءة الطبيعية. صممنا الطوابق بنظام مفتوح قابل للتقسيم حسب احتياجات المستأجرين، مع ساحة أرضية خضراء توفر بيئة عمل محفزة.",
    mainImage: IMAGES.commercial,
    gallery: [
      { src: IMAGES.commercial, alt: "الواجهة الزجاجية البارامترية للبرج" },
      { src: IMAGES.construction, alt: "مراحل البناء والهيكل الإنشائي" },
      { src: IMAGES.interior, alt: "تصميم اللوبي الرئيسي" },
    ],
    features: [
      "واجهة زجاجية بارامترية ذكية",
      "ساحة أرضية بتنسيق حدائق معاصر",
      "مساحات عمل مرنة وقابلة للتخصيص",
      "أنظمة مباني ذكية متكاملة",
      "شهادة استدامة LEED",
      "مواقف سيارات متعددة الطوابق",
    ],
    scope: [
      "التصميم المعماري الشامل",
      "التصميم الإنشائي",
      "تصميم الأنظمة الميكانيكية والكهربائية",
      "تصميم الواجهات البارامترية",
      "إدارة المشروع",
    ],
  },
];

export function getProjectById(id: string): ProjectDetail | undefined {
  return projects.find((p) => p.id === id);
}
