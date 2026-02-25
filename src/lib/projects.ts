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
    mainImage: "../../public/villa-alwaha/main.png",
    gallery: [
      { src: "../../public/villa-alwaha/main.png", alt: "1" },
      { src: "../../public/villa-alwaha/1.png", alt: "2" },
      { src: "../../public/villa-alwaha/2.png", alt: "3" },
      { src: "../../public/villa-alwaha/3.png", alt: "4" },
      { src: "../../public/villa-alwaha/4.png", alt: "5" },
      { src: "../../public/villa-alwaha/5.png", alt: "6" },
      { src: "../../public/villa-alwaha/6.png", alt: "7" },
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
  id: "private-al-lusayb-resort",
  title: "منتجع اللسيب الخاص",
  titleEn: "Private Al-Lusayb Resort",
  category: "سكني",
  categoryEn: "Residential",
  location: "المملكة العربية السعودية – بريدة",
  locationEn: "Saudi Arabia – Buraydah",
  area: "4,300 م²",
  year: "2026",
  client: "مستثمر خاص",
  duration: "24 شهرًا",
  status: "منفذ",
  description:
    "ينطلق مفهوم منتجع اللسيب الخاص من استثمار الإطلالة المرتفعة والمميزة على مزارع النخيل المحيطة، باعتبارها العنصر البصري والقيمي الأهم في تشكيل الهوية المعمارية للمشروع. تم توجيه الكتل المعمارية والفراغات الداخلية بعناية لتعظيم الاستفادة من هذه الإطلالة، مع صياغة مشهد طبيعي متكامل من خلال تصميم اللاندسكيب والنباتات بما يعزز تجربة سكنية هادئة ومتناغمة مع البيئة. ينقسم المشروع إلى مكونين رئيسيين: فيلا العائلة وديوانية الضيافة، بما يحقق توازنًا بين الخصوصية العائلية ومتطلبات الاستقبال والضيافة.",
  descriptionEn:
    "Private Al-Lusayb Resort is designed around its elevated and distinctive panoramic view overlooking surrounding palm farms, which serves as the primary visual and architectural identity driver of the project. The architectural masses and interior spaces were carefully oriented to maximize these views while integrating a cohesive landscape design that enhances a calm and harmonious residential experience. The project consists of two main components: the Family Villa and the Guest Diwaniya, achieving a balance between privacy and hospitality.",
  challenge:
    "تمثل التحدي في تحقيق خصوصية عالية للمشروع مع الحفاظ على الإطلالة المميزة على مزارع النخيل، إضافة إلى توجيه المباني بدقة لضمان أفضل استفادة بصرية دون التأثير على اللاندسكيب العام أو انكشاف الفراغات الداخلية.",
  solution:
    "تم اعتماد توجيه مدروس للكتل المعمارية نحو الإطلالات الطبيعية ونقاط القوة في الموقع، مع معالجة الفراغات وعناصر اللاندسكيب لتحقيق توازن واضح بين الخصوصية والانفتاح، وخلق بيئة منسجمة بين العمارة والطبيعة.",
  mainImage: "../../public/private-al-lusayb-resort/1.png",
  gallery: [
    { src: "../../public/private-al-lusayb-resort/1.png", alt: "1" },
    { src: "../../public/private-al-lusayb-resort/2.png", alt: "2" },
    { src: "../../public/private-al-lusayb-resort/3.png", alt: "3" },
    { src: "../../public/private-al-lusayb-resort/4.png", alt: "4" },
  ],
  features: [
    "إطلالة مباشرة ومميزة على مزارع النخيل المحيطة",
    "استثمار مسطح الأرض في توزيع لاندسكيب طبيعي يعزز الهوية المحلية",
    "تكامل بصري ووظيفي بين العمارة والطبيعة",
  ],
  scope: [
    "التصميم المعماري",
    "الإشراف الهندسي",
    "إدارة المشروع"
  ],
  },
  {
  id: "zaytouna-halls",
  title: "صالات الزيتونة",
  titleEn: "Al-Zaytouna Halls",
  category: "تجاري",
  categoryEn: "Commercial",
  location: "المملكة العربية السعودية – بريدة",
  locationEn: "Saudi Arabia – Buraydah",
  area: "1,400 م²",
  year: "2025",
  client: "مستثمر خاص",
  duration: "18 شهر",
  status: "قيد الإنشاء",
  description:
    "يمثل مشروع صالات الزيتونة رؤية تجارية معاصرة تسعى إلى خلق نموذج عمراني مترابط بهوية تصميمية واضحة ومنطق معماري متماسك. يرتكز المشروع على صياغة تجربة مكانية متكاملة تجمع بين الجمال والبساطة، وتؤسس لحضور بصري مميز يعزز من قيمة النشاط التجاري ويمنحه طابعًا خاصًا ومستدامًا ضمن سياقه العمراني.",
  descriptionEn:
    "Al-Zaytouna Halls represents a contemporary commercial vision that aims to create a cohesive urban model with a clear design identity and a consistent architectural logic. The project is based on crafting an integrated spatial experience that balances elegance and simplicity, establishing a distinctive visual presence that enhances the commercial value while maintaining a sustainable and context-driven architectural character.",
  challenge:
    "يتمثل التحدي الرئيسي في ابتكار واجهة معمارية تتسم بالبساطة والهدوء البصري، مع الحفاظ على حضور أنيق يعكس جودة المشروع وقيمته. كان المطلوب تحقيق توازن دقيق بين التجريد الشكلي والهوية الجمالية، دون الوقوع في التعقيد أو المبالغة التصميمية، مع مراعاة الاعتبارات الاقتصادية والتنفيذية.",
  solution:
    "تم تطوير لغة معمارية متناسقة تستند إلى منطق تصميمي واضح وتفاصيل مدروسة بعناية، مما أتاح خلق واجهة متوازنة تجمع بين الفخامة الهادئة والوضوح البصري. اعتمد التصميم على تكوينات بسيطة وخطوط نظيفة تبرز الكتلة المعمارية، مع معالجة مواد تعزز الإحساس بالجودة والاستدامة، وتحقق قيمة جمالية عالية بتكلفة تنفيذ مدروسة.",
  mainImage: "../../public/zaytouna-halls/1.png",
  gallery: [
    { src: "../../public/zaytouna-halls/1.png", alt: "1" },
    { src: "../../public/zaytouna-halls/2.png", alt: "2" },
    { src: "../../public/zaytouna-halls/3.png", alt: "3" },
  ],
  features: [
    "هوية معمارية مستلهمة من البيئة والسياق المحلي",
    "وضوح بصري ومنطق تصميمي متكامل",
    "تكلفة تنفيذ منخفضة مقارنة بالقيمة الجمالية المتحققة"
  ],
  scope: [
    "التصميم المعماري",
    "الإشراف على التنفيذ",
    "إدارة المشروع"
  ],
  },
  {
  id: "private-administrative-offices",
  title: "مكاتب إدارية خاصة",
  titleEn: "Private Administrative Offices",
  category: "تجاري",
  categoryEn: "Commercial",
  location: "المملكة العربية السعودية – بريدة",
  locationEn: "Saudi Arabia – Buraydah",
  area: "1,000 م²",
  year: "2024",
  client: "مستثمر خاص",
  duration: "12 شهر",
  status: "منفذ",
  description:
    "يهدف المشروع إلى تطوير بيئة عمل احترافية تعكس هوية الشركة المؤسسية وتُجسّد قيمها في الفراغ المعماري. تم التركيز على خلق أجواء متوازنة تجمع بين الرسمية والراحة، بما يعزز إنتاجية الموظفين ويوفر تجربة مكانية مريحة للمستفيدين والزوار، من خلال تصميم داخلي مدروس يعكس الطابع الخاص بالمالك ويمنح المشروع شخصية واضحة ومتماسكة.",
  descriptionEn:
    "The project aims to develop a professional work environment that reflects the corporate identity and translates its values into architectural space. The design focuses on creating a balanced atmosphere that combines formality and comfort, enhancing employee productivity while providing a welcoming spatial experience for visitors. A carefully crafted interior language expresses the owner’s vision and establishes a cohesive and distinctive identity throughout the space.",
  challenge:
    "تمثّل التحدي الرئيسي في تصميم بيئة عمل تستوعب فصل الأقسام الرجالية والنسائية بمرونة وكفاءة تشغيلية، مع إضافة دور مستقل لقسم الإدارة التشغيلية يضمن الخصوصية وسلاسة الحركة في الوقت ذاته. كما كان من الضروري صياغة هوية داخلية متكاملة تتماشى مع توجهات المالك وتعزز حضور العلامة داخل الفراغ، دون الإخلال بالجوانب الوظيفية ومتطلبات التشغيل اليومية.",
  solution:
    "جاء الحل المعماري عبر إعادة تنظيم التوزيع الداخلي بما يضمن وضوح الحركة وفصل الأقسام بشكل مدروس يحقق الخصوصية والتكامل في آنٍ واحد. تم اعتماد لغة تصميمية موحّدة تعبّر عن هوية المشروع من خلال اختيار المواد، الألوان، والإضاءة بعناية، ما أسهم في خلق بيئة عمل احترافية متوازنة تجمع بين الكفاءة التشغيلية والتميز البصري.",
  mainImage: "../../public/private-administrative-offices/1.png",
  gallery: [
    { src: "../../public/private-administrative-offices/1.png", alt: "1" },
    { src: "../../public/private-administrative-offices/2.png", alt: "2" },
    { src: "../../public/private-administrative-offices/3.png", alt: "3" },
    { src: "../../public/private-administrative-offices/4.png", alt: "4" },
    { src: "../../public/private-administrative-offices/5.png", alt: "5" },
    { src: "../../public/private-administrative-offices/6.png", alt: "6" },
    { src: "../../public/private-administrative-offices/7.png", alt: "7" },
    { src: "../../public/private-administrative-offices/8.png", alt: "8" },
    { src: "../../public/private-administrative-offices/9.png", alt: "9" },
  ],
  features: [
    "استحداث قسمين مستقلين (رجالي ونسائي) بالإضافة إلى قسم الإدارة التشغيلية",
    "صياغة هوية جمالية متكاملة ومتناسقة مع هوية المالك",
    "تحقيق أعلى درجات الكفاءة الوظيفية والتنظيم التشغيلي للمساحات"
  ],
  scope: [
    "التصميم الداخلي",
    "إعداد التوزيع المعماري",
    "الإشراف على التنفيذ"
  ],
  },
  {
  id: "private-palace",
  title: "قصر خاص",
  titleEn: "Private Palace",
  category: "سكني",
  categoryEn: "Residential",
  location: "المملكة العربية السعودية – الرياض",
  locationEn: "Saudi Arabia – Riyadh",
  area: "800 م²",
  year: "2025",
  client: "خاص",
  duration: "15 شهرًا",
  status: "منفّذ",
  description:
    "قصر سكني خاص يعكس مفهوم الفخامة المعاصرة، حيث يرتكز التصميم على تحقيق أعلى درجات الرفاهية والخصوصية ضمن بيئة سكنية متكاملة. تم تطوير المشروع ليجسد تجربة سكنية راقية تجمع بين الاستقلالية والهيبة المعمارية، مع عناية دقيقة بالتفاصيل المعمارية والداخلية لضمان مستوى متقدم من الجودة والتكامل البصري.",
  descriptionEn:
    "A private residential palace embodying contemporary luxury, designed to achieve the highest standards of comfort and privacy within a fully integrated living environment. The project presents an elevated residential experience that balances independence with architectural grandeur, supported by meticulous attention to architectural and interior details to ensure superior quality and visual harmony.",
  challenge:
    "تمثّل التحدي الرئيسي في إيجاد توازن معماري ووظيفي بين مساحة ضيافة قادرة على استقبال أعداد كبيرة من الضيوف بكفاءة ومرونة، وبين جناح سكني خاص يعكس أقصى درجات الخصوصية والاستقلالية. كان المطلوب الفصل الواضح بين الاستخدامين دون الإخلال بوحدة الهوية المعمارية أو الإحساس العام بالفخامة.",
  solution:
    "اعتمد المشروع على صياغة هوية تصميمية متكاملة تقوم على نسق معماري مستمر يعزز الترابط بين مختلف الفراغات، مع تحقيق فصل مدروس للحركة والمسارات. تم توظيف عناصر تصميمية راقية وخامات عالية الجودة لخلق لغة بصرية موحّدة، تضمن الانسيابية بين الضيافة والجناح الخاص مع الحفاظ على الاستقلالية الكاملة لكل منهما.",
  mainImage: "../../public/private-palace/1.png",
  gallery: [
    { src: "../../public/private-palace/1.png", alt: "1" },
    { src: "../../public/private-palace/2.png", alt: "2" },
    { src: "../../public/private-palace/3.png", alt: "3" },
    { src: "../../public/private-palace/4.png", alt: "4" },
    { src: "../../public/private-palace/5.png", alt: "5" },
    { src: "../../public/private-palace/6.png", alt: "6" },
    { src: "../../public/private-palace/7.png", alt: "7" },
    { src: "../../public/private-palace/8.png", alt: "8" },
    { src: "../../public/private-palace/9.png", alt: "9" },
    { src: "../../public/private-palace/10.png", alt: "10" },
  ],
  features: [
    "مستوى عالٍ من الفخامة والتناسق البصري",
    "تكامل تام بين التصميم المعماري والداخلي",
    "خصوصية واستقلالية مدروسة لكل فراغ",
    "معالجة دقيقة للمسارات والحركة بما يعزز تجربة الاستخدام"
  ],
  scope: [
    "التصميم المعماري",
    "التصميم الداخلي"
  ],
  },
  {
  id: "private-villa-al-badai",
  title: "فيلا خاصة",
  titleEn: "Private Villa",
  category: "سكني",
  categoryEn: "Residential",
  location: "المملكة العربية السعودية – البدائع",
  locationEn: "Saudi Arabia – Al-Badai",
  area: "600 م²",
  year: "2026",
  client: "خاص",
  duration: "15 شهر",
  status: "قيد الإنشاء",
  description:
    "فيلا خاصة صُممت بعناية لتجسيد مفهوم السكن العصري المتوازن، حيث تتكامل الأفكار التصميمية لخلق بيئة تحتضن العائلة وتعزز الترابط فيما بينها. يرتكز المشروع على تناغم بصري وحيوي يربط بين الكتل المعمارية والفراغات الداخلية، مع عناية دقيقة بالتفاصيل لتحقيق تجربة سكنية راقية ومستدامة.",
  descriptionEn:
    "A private villa carefully designed to embody a balanced contemporary living concept, where architectural ideas integrate to create a family-oriented environment that enhances connection and comfort. The project is based on visual harmony between architectural masses and interior spaces, with meticulous attention to detail to deliver a refined and sustainable residential experience.",
  challenge:
    "تمثل التحدي في استيعاب الاحتياجات المتعددة للعميل ضمن برنامج معماري متكامل دون الإخلال بالهيكلة التصميمية المستهدفة. كان من الضروري تحقيق توازن دقيق بين المتطلبات الوظيفية، ومرونة الحركة، والحفاظ على نقاء الفكرة المعمارية والهوية البصرية للمشروع.",
  solution:
    "تم تطوير توزيع معماري مدروس ينسجم مع الهيكلة الأساسية للمشروع، مع إعادة تنظيم العلاقات بين الفراغات لضمان كفاءة الاستخدام وسلاسة الحركة. أسهم هذا النهج في تحقيق تكوين متناسق يجمع بين الأداء الوظيفي العالي والجمالية المعمارية المتقنة، دون المساس بروح التصميم الأصلية.",
  mainImage: "../../public/private-villa-al-badai/1.png",
  gallery: [
    { src: "../../public/private-villa-al-badai/1.png", alt: "1" },
    { src: "../../public/private-villa-al-badai/2.png", alt: "2" },
    { src: "../../public/private-villa-al-badai/3.png", alt: "3" },
    { src: "../../public/private-villa-al-badai/4.png", alt: "4" },
    { src: "../../public/private-villa-al-badai/5.png", alt: "5" },
  ],
  features: [
    "تكامل التفاصيل المعمارية ضمن رؤية موحدة",
    "صياغة هوية تصميمية متفردة تعكس شخصية المشروع",
    "اعتماد معالجة واجهات معمارية مميزة تعزز الحضور البصري للمبنى"
  ],
  scope: [
    "التصميم المعماري",
    "التصميم الداخلي",
    "الإشراف على التنفيذ",
    "إدارة المشروع"
  ],
  },
  
 
  
];

export function getProjectById(id: string): ProjectDetail | undefined {
  return projects.find((p) => p.id === id);
}
