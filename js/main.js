/* 
   Abdulrahman Ali Aldoais - Enterprise Portfolio JavaScript Engine
   Features: Full i18n Translation Engine (AR/EN), Clean Code Showcase, Direct WhatsApp Opener, Dynamic CV Viewer Modal, Dark/Light Theme
*/

document.addEventListener('DOMContentLoaded', () => {
    // Dictionary Data
    const i18nData = {
        ar: {
            nav: { about: "نبذة عني", achievements: "الإنجازات التقنية", architecture: "معمارية النظام", code: "الكود النظيف", skills: "المهارات", experience: "الخبرات", testimonials: "التوصيات", contactBtn: "تواصل معي", cvBtn: "السيرة الذاتية" },
            hero: {
                badge: "Enterprise Backend & SaaS Architect",
                statusBadge: "متاح للعمل بالسعودية والخليج وعن بُعد",
                greeting: "أهلاً بك، أنا",
                name: "عبدالرحمن علي الدعيس",
                rolePrefix: "متخصص في:",
                desc: "مهندس أنظمة برمجية متخصص في تحليل ومعمارية وتطوير الأنظمة المؤسسية المعقدة (HRMS, Payroll, Multi-Tenant SaaS, Workflows) باستخدام ASP.NET Core 8 و Microservices مع خبرة في السوق السعودي والخليجي.",
                btnExplore: "استكشف الإنجازات المعمارية",
                btnCV: "استعراض السيرة الذاتية (CV)",
                stat1: "مستخدم في السوق السعودي",
                stat2: "توافق زمن UTC العالمي",
                stat3: "مسارات موافقات مبرمجة ثابته",
                badge1Sub: "Multi-Tenant SaaS",
                badge1Title: "Tenant Isolation & UTC",
                badge2Sub: "Dynamic Workflow",
                badge2Title: "Runtime Rule Engine"
            },
            cvModal: {
                title: "السيرة الذاتية الرسمية — عبدالرحمن علي الدعيس",
                download: "تحميل ملف PDF",
                openNew: "فتح في نافذة مستقلة"
            },
            codeShowcase: {
                tag: "معايير الجودة البرمجية",
                title: "عينات الكود النظيف والمعمارية (Clean Code Showcase)",
                desc: "نماذج حقيقية من الخوارزميات والمعماريات البرمجية المكتوبة بلغة C# للأنظمة المؤسسية",
                tab1: "EF Core UTC Converter",
                tab2: "Workflow Rule Evaluator",
                tab3: "Overnight Shift Mapper",
                copyBtn: "نسخ الكود",
                copied": "تم النسخ!"
            },
            certifications: {
                tag: "الاعتمادات الاحترافية",
                title: "الشهادات والاعتمادات المعمارية",
                cert1: "ASP.NET Core 8 & Microservices Architecture",
                cert1Org: "Enterprise Backend Engineering",
                cert2: "Multi-Tenant SaaS & Decoupled Timezone Standard",
                cert2Org: "Saudi Enterprise Compliance",
                cert3: "Keycloak Identity (SSO & Fine-Grained RBAC)",
                cert3Org: "Security & IAM Protocol",
                cert4: "High-Performance EF Core & SQL Server Pipeline",
                cert4Org: "Data Architecture Standard"
            },
            testimonials: {
                tag: "آراء القيادات والشراكات",
                title: "توصيات وتقييم الأداء المهني",
                desc: "شهادات من القيادات التقنية ومدراء المشاريع في المنصات التي قمت بتبني معمارياتها",
                t1Text: "عبدالرحمن مهندس متمكن للغاية من تحليل وتصميم المعماريات المعقدة، قاد مرحلة أتمتة محرك سير العمل والرواتب في منصة FALAK HR بدقة واحترافية عالية متخطياً كافة التحديات الزمانية والهيكلية.",
                t1Author: "قيادة هندسة البرمجيات",
                t1Company: "شركة الفلك لتقنية المعلومات (Al-Falak Soft)",
                t2Text: "يمتلك عبدالرحمن قدرة استثنائية على بناء خدمات Microservices عالية الأداء باستخدام gRPC و EF Core لحل الفارق الزمني وحماية بيانات المستأجرين وفق المعايير المعتمدة بالسوق السعودي.",
                t2Author: "إدارة حلول الـ Backend والـ SaaS",
                t2Company: "شركة داتا ترانس (لصالح العبيكان للحلول الرقمية - KSA)"
            },
            achieve: { tag: "الإنجازات والأنظمة", title: "سلسلة الإنجازات المعمارية في FALAK HR", desc: "أنظمة وموديولات محورية تم تصميمها وتطويرها لحل أعقد التحديات في المنصات المؤسسية" },
            tabs: { all: "الكل", saas: "Multi-Tenant & UTC", workflow: "Workflow Engine", payroll: "Payroll & Finance", attendance: "Attendance & Shift" },
            cards: {
                btnDetails: "معاينة الصور والتفاصيل المعمارية",
                card1: { title: "Multi-Tenant SaaS & Decoupled Timezone Architecture", desc: "معمارية متكاملة تضمن الفصل التام لبيانات المستأجرين وحل مشاكل الفارق الزمني العالمي عبر معالجة UTC موحدة وتعيين توقيت المستأجر آلياً." },
                card2: { title: "Dynamic Enterprise Workflow & Approval Engine", desc: "محرك موافقات ديناميكي يعالج الشروط المعقدة في الـ Runtime، مع دعم التفويض، السحب وإعادة الإرسال، الاعتماد الذاتي، الشات المباشر، والـ SLA Auto-Escalation." },
                card3: { title: "Advanced Hybrid Penalty & Disciplinary Engine", desc: "نظام أتمتة التدرج التلقائي للمخالفات الإدارية والمالية وفق لائحة العمل المعتمدة، مع الربط المباشر بمحرك الحضور ومسار الاعتراضات." },
                card4: { title: "Attendance Processing & Overnight Shift Engine", desc: "محرك معالجة حركات البصمة الحيوية والربط الديناميكي مع الورديات الليلية المتداخلة عبر منتصف الليل (Overnight Shifts) وتنقيتها من التكرار." },
                card5: { title: "Contract Versioning & End of Service (EOSB) Engine", desc: "نظام تتبع إصدارات العقود غير القابلة للتعديل العكسي، مع الأتمتة الكاملة لحسابات مكافأة نهاية الخدمة والتسويات المالية." },
                card6: { title: "Financial Payroll Engine & Bulk Processing Architecture", desc: "محرك الرواتب والعمليات المالية الجماعية، يتيح معالجة الأجور، البدلات، الاستقطاعات المباشرة، وتجميد المسيرات تاريخياً لآلاف الموظفين وتصدير ملفات البنوك." }
            },
            modals: {
                prevBtn: "◀ الصورة السابقة",
                nextBtn: "الصورة التالية ▶",
                closeBtn: "✕ إغلاق",
                counterPrefix: "صورة",
                counterOf: "من",
                modal1: {
                    title: "معمارية المنصات المشتركة وتوحيد التوقيع الزمني (SaaS Multi-Tenant & UTC Timezone)",
                    content: "<p>في المنصات المؤسسية المعقدة، يُعد عزل بيانات العملاء وحل الفارق الزمني من أثر التحديات. تم تصميم هذه المعمارية لمنع تداخل المناطق الزمنية بين خادم الاستضافة والشركات العاملة في مناطق مختلفة.</p><br><h4>الركائز المعمارية الرئيسية:</h4><ul><li><b>UTC Standard:</b> تخزين كافة التواريخ بـ UTC بنمط ISO 8601 متبوع بالحرف 'Z'.</li><li><b>Tenant Timezone Provider:</b> تحويل التوقيع الزمني المحلي للمستأجر قبل مقارنات ورديات الحضور.</li><li><b>EF Core Converters:</b> محولات قيم مخصصة تُبقي التواريخ بنوع DateTimeKind.Utc عند القراءة والكتابة.</li></ul>"
                },
                modal2: {
                    title: "محرك سير العمل والموافقات الديناميكية (Dynamic Enterprise Workflow Engine)",
                    content: "<p>محرك موافقات مرن يعالج شروط الموافقات المعقدة في الـ Runtime دون الحاجة لتعديل أو كتابة أي كود برمجي ثابت (Zero Hardcoded Flow).</p><br><h4>المميزات التقنية:</h4><ul><li><b>Runtime Rules Processor:</b> تقييم الشروط (القيم المالية، الأيام، المودويل) ديناميكياً.</li><li><b>Task Inbox Lifecycle:</b> إدارة سورة حياة الطلب (موافقة، رفض، طلب بيانات، تفويض، تصعيد).</li><li><b>Realtime WebSockets:</b> إشعارات لحظية للموافقين وشات مباشر داخل كل طلب عبر SignalR.</li></ul>"
                },
                modal3: {
                    title: "محرك أتمتة الجزاءات ولائحة الانضباط (Hybrid Penalty & Disciplinary Engine)",
                    content: "<p>أتمتة تطبيق لائحة العقوبات والجزاءات الإدارية والمالية وفق نظام العمل السعودي دون أي تدخل بشري لمنع التحيز الأخطاء الحسابية.</p><br><h4>المميزات التقنية:</h4><ul><li><b>Automated Escalation:</b> التدرج التلقائي للمخالفة بناءً على السجل السلوكي للموظف.</li><li><b>Attendance Linkage:</b> ربط التأخيرات والغياب غير المبرر بإنشاء مخالفات مسودة آلياً.</li><li><b>Appeals Path:</b> مسار اعتراض رسمي يمر بمحرك الموافقات قبل النفاذ المالي.</li></ul>"
                },
                modal4: {
                    title: "محرك معالجة البصمة والورديات الليلية (Biometrics & Overnight Shift Engine)",
                    content: "<p>معالجة ملايين حركات أجهزة البصمة وتنقيتها من التكرار مع دعم كامل للورديات الليلية التي تمتد عبر منتصف الليل (Overnight Shifts).</p><br><h4>المميزات التقنية:</h4><ul><li><b>Overnight Mapping:</b> خوارزمية ربط الانصراف المبكر أو المتأخر في اليوم التالي بالوردية الصحيحة.</li><li><b>Log Deduplication:</b> خوارزمية تصفية الحركات المكررة خلال فترة زمنية محددة.</li><li><b>Overtime Calculator:</b> احتساب الساعات الإضافية والتأخيرات وتصدير النتائج لمحرك الرواتب.</li></ul>"
                },
                modal5: {
                    title: "نظام إصدارات العقود ومكافأة نهاية الخدمة (Contract Versioning & EOSB Engine)",
                    content: "<p>تتبع التاريخ المالي للعقود بشكل غير قابل للتعديل العكسي مع أتمتة حسابات مكافأة نهاية الخدمة والتسويات المالية وفق نظام العمل.</p><br><h4>المميزات التقنية:</h4><ul><li><b>Immutable Versioning:</b> إنشاء إصدار جديد للعقد عند كل تعديل مالي دون حذف النسخ السابقة.</li><li><b>EOSB Settlement Engine:</b> حساب الاستحقاق آلياً حسب سنوات الخدمة وسبب إنهاء العلاقة التعاقدية.</li></ul>"
                },
                modal6: {
                    title: "محرك الرواتب والعمليات المالية الجماعية (Financial Payroll & Bulk Processing Architecture)",
                    content: "<p>محرك المعالجة الجماعية للرواتب، البدلات، والأقساط لآلاف الموظفين في ثوانٍ معدودة مع دعم القفل التاريخي للمسيرات والتصدير البنكي المعتمد.</p><br><h4>المميزات التقنية:</h4><ul><li><b>Bulk Assignment Pipeline:</b> تخصيص البدلات والاستقطاعات لآلاف الموظفين دفعة واحدة.</li><li><b>Automated Deduction Linkage:</b> سحب السلف والمخالفات المعتمدة آلياً وإدراجها بالمسيرة.</li><li><b>Payroll Locking & SIF Export:</b> قفل الحسابات تاريخياً وتصدير ملفات البنوك بنظام SIF.</li></ul>"
                }
            },
            arch: { tag: "مخططات الأنظمة المباشرة", title: "استعراض دياجرام المعمارية والتصميم الهيكلي", desc: "اختر النظام من القائمة الجانبية وتصفح الصور والدياجرامات المعمارية الخاصة به بالأزرار التالية", selectModule: "اختر النظام المعماري:", item1: "Workflow Execution Engine", item2: "Payroll & Bulk Pipeline", item3: "Biometrics & Overnight Shift", item4: "SaaS Microservices Core" },
            skills: { tag: "المهارات التقنية", title: "مصفوفة الخبرات والمعمارية التقنية", cat1: "Backend & Frameworks", cat2: "Database & Architecture", cat3: "Domain & Enterprise" },
            exp: {
                tag: "المسيرة المهنية", title: "الخبرات والمشاريع القيادية",
                job1Role: "مهندس أنظمة وحلول برمجية (Backend Specialist)",
                job1Company: "شركة الفلك لتقنية المعلومات (Al-Falak Soft) | صنعاء، اليمن",
                job1Date: "مارس 2025 – الحاضر",
                job1b1: "قيادة مرحلة التحليل الهندسي وبناء الأنظمة لمنصة HRMS متعددة المستأجرين من الصفر.",
                job1b2: "تصميم وبناء محرك سير العمل الديناميكي (Dynamic Workflow Engine) وإدارة المهام والتصعيد التلقائي.",
                job1b3: "تهيئة Keycloak لإدارة الهويات والوصول الموحد (SSO) وتوزيع الصلاحيات (RBAC) عبر موديولات النظام.",
                job2Role: "مطور خلفية أنظمة (Backend Specialist)",
                job2Company: "شركة داتا ترانس (تعاقد لصالح شركة العبيكان للحلول الرقمية - السعودية)",
                job2Date: "مارس 2024 – مارس 2025",
                job2b1: "تطوير خدمات الـ Backend والموديولات الأساسية لمنصة HRMS المعتمدة في السوق السعودي.",
                job2b2: "تصميم معماريات الـ Microservices ونظام الاتصال المتبادل عالي الأداء باستخدام gRPC.",
                job2b3: "تطوير وبناء RESTful APIs متقدمة وتكامل البيانات باستخدام SQL Server و Entity Framework Core.",
                job3Role: "مطور ويب متطوع (Volunteer Full-Stack Developer)",
                job3Company: "منظمة ملتقى مزارعي اليمن (RYCAAD Organization)",
                job3Date: "يناير 2022 – يناير 2024",
                job3b1: "التطوع لبناء المنصة الرقمية الخيرية لملتقى المزارعين في اليمن باستخدام ASP.NET Core MVC و HTML/CSS.",
                job3b2: "تطوير خدمات إدارة المحتوى، العضوية، الحجوزات الفورية للمنعقدات، ونظام التنبيهات الآلية."
            },
            contact: {
                title: "تواصل معي لبناء وتطوير الأنظمة",
                desc: "أنا متاح للفرص الوظيفية في السوق الخليجي (السعودية والإمارات)، والعمل عن بُعد (Remote)، والاستشارات المعمارية.",
                emailLabel: "البريد الإلكتروني",
                phoneLabel: "الهاتف / الواتساب (انقر للمحادثات المباشرة)",
                locationLabel: "الموقع الحالي",
                locationValue: "صنعاء، اليمن (متاح للانتقال والعمل عن بُعد)",
                waBtn: "مراسلة عبر الواتساب مباشرة"
            },
            form: {
                name: "الاسم الكريم",
                namePlaceholder: "أدخل اسمك هنا...",
                email: "البريد الإلكتروني",
                emailPlaceholder: "name@company.com",
                message: "رسالتك / تفاصيل الفرصة",
                msgPlaceholder: "اكتب رسالتك هنا...",
                btnSend: "إرسال الرسالة"
            },
            footer: "© 2026 جميع الحقوق محفوظة لـ عبدالرحمن علي الدعيس. تم التطوير بمعمارية الأنظمة النظيفة Clean Architecture."
        },
        en: {
            nav: { about: "About Me", achievements: "Achievements", architecture: "Architecture", code: "Clean Code", skills: "Skills", experience: "Experience", testimonials: "Testimonials", contactBtn: "Contact Me", cvBtn: "Resume" },
            hero: {
                badge: "Enterprise Backend & SaaS Architect",
                statusBadge: "Available for KSA Relocation & Remote Opportunities",
                greeting: "Hello, I'm",
                name: "Abdulrahman Ali Aldoais",
                rolePrefix: "Specialized in:",
                desc: "Enterprise Systems Engineer specializing in architecture, analysis, and backend development for complex platforms (HRMS, Payroll, Multi-Tenant SaaS, Workflows) using ASP.NET Core 8 & Microservices.",
                btnExplore: "Explore Architecture",
                btnCV: "View Resume (CV)",
                stat1: "Active Users in KSA",
                stat2: "UTC Timezone Compliance",
                stat3: "Hardcoded Workflow Routes",
                badge1Sub: "Multi-Tenant SaaS",
                badge1Title: "Tenant Isolation & UTC",
                badge2Sub: "Dynamic Workflow",
                badge2Title: "Runtime Rule Engine"
            },
            cvModal: {
                title: "Official Resume — Abdulrahman Ali Aldoais",
                download: "Download PDF",
                openNew: "Open in New Tab"
            },
            codeShowcase: {
                tag: "CODE QUALITY STANDARDS",
                title: "Clean Code & Architectural Snippets",
                desc: "Production-grade C# code patterns and domain algorithms engineered for scalable enterprise systems",
                tab1: "EF Core UTC Converter",
                tab2: "Workflow Rule Evaluator",
                tab3: "Overnight Shift Mapper",
                copyBtn: "Copy Snippet",
                copied: "Copied!"
            },
            certifications: {
                tag: "PROFESSIONAL CREDENTIALS",
                title: "Architectural Certifications & Badges",
                cert1: "ASP.NET Core 8 & Microservices Architecture",
                cert1Org: "Enterprise Backend Engineering",
                cert2: "Multi-Tenant SaaS & Decoupled Timezone Standard",
                cert2Org: "Saudi Enterprise Compliance",
                cert3: "Keycloak Identity (SSO & Fine-Grained RBAC)",
                cert3Org: "Security & IAM Protocol",
                cert4: "High-Performance EF Core & SQL Server Pipeline",
                cert4Org: "Data Architecture Standard"
            },
            testimonials: {
                tag: "LEADERSHIP ENDORSEMENTS",
                title: "Executive Testimonials & Social Proof",
                desc: "Endorsements from engineering directors and project leads across deployed platforms",
                t1Text: "Abdulrahman is an exceptionally skilled engineer in system analysis and architectural design. He spearheaded the workflow and payroll engine automation in FALAK HR with precision and technical mastery.",
                t1Author: "Software Engineering Leadership",
                t1Company: "Al-Falak Soft",
                t2Text: "Abdulrahman possesses outstanding capability in building high-performance microservices with gRPC and EF Core, decoupling server timezones and isolating tenant data to meet Saudi enterprise standards.",
                t2Author: "Backend & SaaS Architecture Management",
                t2Company: "Data Trans (For Obeikan Digital Solutions, KSA)"
            },
            achieve: { tag: "SYSTEMS & ACHIEVEMENTS", title: "Architectural Achievements in FALAK HR", desc: "Core modules and subsystems engineered to solve complex enterprise challenges" },
            tabs: { all: "All", saas: "Multi-Tenant & UTC", workflow: "Workflow Engine", payroll: "Payroll & Finance", attendance: "Attendance & Shift" },
            cards: {
                btnDetails: "Technical Deep Dive & Gallery",
                card1: { title: "Multi-Tenant SaaS & Decoupled Timezone Architecture", desc: "End-to-end architecture ensuring tenant data isolation and solving global timezone mismatches via unified UTC handling and dynamic tenant offset resolution." },
                card2: { title: "Dynamic Enterprise Workflow & Approval Engine", desc: "Flexible approval engine processing complex business rules at runtime, supporting delegation, recall, auto-approval, direct chat, and SLA escalation." },
                card3: { title: "Advanced Hybrid Penalty & Disciplinary Engine", desc: "Automated disciplinary matrix escalating violations according to labor law standards, directly linked to attendance logs and formal appeal workflows." },
                card4: { title: "Attendance Processing & Overnight Shift Engine", desc: "Biometric logs processing pipeline handling millions of punches, deduplication, and dynamic mapping for overnight cross-midnight shifts." },
                card5: { title: "Contract Versioning & End of Service (EOSB) Engine", desc: "Immutable contract versioning framework tracking financial clauses, coupled with an automated End of Service Benefits settlement engine." },
                card6: { title: "Financial Payroll Engine & Bulk Processing Architecture", desc: "High-throughput financial payroll engine processing salaries, allowances, deductions, historical payroll locks, and banking SIF file exports." }
            },
            modals: {
                prevBtn: "◀ Previous Image",
                nextBtn: "Next Image ▶",
                closeBtn: "✕ Close",
                counterPrefix: "Image",
                counterOf: "of",
                modal1: {
                    title: "Multi-Tenant SaaS & Decoupled Timezone Architecture",
                    content: "<p>In complex enterprise platforms serving tenants globally, tenant isolation and server timezone drift present major risks. This architecture decouples hosting server clock from tenant local business logic.</p><br><h4>Core Architectural Pillars:</h4><ul><li><b>UTC Standard:</b> All timestamps stored in UTC formatted with ISO 8601 'Z' suffix.</li><li><b>Tenant Timezone Provider:</b> Dynamic tenant local timezone resolution before evaluating shifts or logs.</li><li><b>EF Core Converters:</b> Custom value converters preserving DateTimeKind.Utc on read and write.</li></ul>"
                },
                modal2: {
                    title: "Dynamic Enterprise Workflow & Approval Engine",
                    content: "<p>A flexible runtime workflow engine eliminating hardcoded approval routes across all enterprise modules (Zero Hardcoded Flows).</p><br><h4>Technical Highlights:</h4><ul><li><b>Runtime Rules Processor:</b> Evaluates complex business conditions (amounts, days, department) at runtime.</li><li><b>Task Inbox Lifecycle:</b> Manages full task lifecycle (Approve, Reject, Request Info, Delegate, Escalate).</li><li><b>Realtime WebSockets:</b> Instant notifications and contextual chat powered by SignalR.</li></ul>"
                },
                modal3: {
                    title: "Advanced Hybrid Penalty & Disciplinary Engine",
                    content: "<p>Automates labor law disciplinary policies without manual bias or calculation errors.</p><br><h4>Technical Highlights:</h4><ul><li><b>Automated Escalation:</b> Escalates penalty degrees (1st, 2nd, 3rd occurrence) based on employee history.</li><li><b>Attendance Linkage:</b> Converts unauthorized tardiness/absence into draft disciplinary actions automatically.</li><li><b>Appeals Path:</b> Formal objection route evaluated via approval engine before payroll deduction.</li></ul>"
                },
                modal4: {
                    title: "Attendance Processing & Overnight Shift Engine",
                    content: "<p>Processes millions of raw biometric log punches and solves overnight shift overlaps across midnight.</p><br><h4>Technical Highlights:</h4><ul><li><b>Overnight Mapping:</b> Intelligently maps next-day morning check-outs to previous night shift schedules.</li><li><b>Log Deduplication:</b> Deduplicates rapid multi-device punches within configurable thresholds.</li><li><b>Overtime Calculator:</b> Calculates late arrivals, early departures, and overtime for payroll export.</li></ul>"
                },
                modal5: {
                    title: "Contract Versioning & End of Service (EOSB) Engine",
                    content: "<p>Tracks contract financial revisions immutably while automating End of Service Benefit settlements.</p><br><h4>Technical Highlights:</h4><ul><li><b>Immutable Versioning:</b> Spawns new contract version on financial edits while freezing historical records.</li><li><b>EOSB Settlement Engine:</b> Computes final settlements based on tenure, contract type, and termination reason.</li></ul>"
                },
                modal6: {
                    title: "Financial Payroll Engine & Bulk Processing Architecture",
                    content: "<p>Bulk financial pipeline processing salaries, allowances, and loans for thousands of employees with historical locks and SIF bank exports.</p><br><h4>Technical Highlights:</h4><ul><li><b>Bulk Assignment Pipeline:</b> Assigns financial components to thousands of employees in seconds.</li><li><b>Automated Deduction Linkage:</b> Pulls approved loans and penalty deductions automatically into payroll runs.</li><li><b>Payroll Locking & SIF Export:</b> Freezes historical runs and exports bank-compliant SIF files.</li></ul>"
                }
            },
            arch: { tag: "LIVE ARCHITECTURE DIAGRAMS", title: "System Design & Data Flow Preview", desc: "Select a module from the sidebar and browse its visual diagrams using the control bar below", selectModule: "Select Architecture System:", item1: "Workflow Execution Engine", item2: "Payroll & Bulk Pipeline", item3: "Biometrics & Overnight Shift", item4: "SaaS Microservices Core" },
            skills: { tag: "TECHNICAL MATRIX", title: "Engineering & Architectural Competencies", cat1: "Backend & Frameworks", cat2: "Database & Architecture", cat3: "Domain & Enterprise" },
            exp: {
                tag: "CAREER TIMELINE", title: "Engineering Leadership & Experience",
                job1Role: "Software Engineer — System Analysis & Backend Focus",
                job1Company: "Al-Falak Soft (Saudi Arabia) | Sana'a, Yemen",
                job1Date: "March 2025 – Present",
                job1b1: "Lead system analysis and architectural design for a multi-tenant HRMS platform built from scratch.",
                job1b2: "Engineered the dynamic workflow execution engine, task delegation, and SLA auto-escalation.",
                job1b3: "Configured Keycloak for SSO, identity management, and fine-grained RBAC authorization.",
                job2Role: "Software Engineer — Backend Specialist",
                job2Company: "Data Trans Company (Contracted for Obeikan Digital Solutions, KSA)",
                job2Date: "March 2024 – March 2025",
                job2b1: "Developed core backend microservices for enterprise HRMS platform deployed in KSA market.",
                job2b2: "Architected high-performance inter-service gRPC communication protocols.",
                job2b3: "Built RESTful Web APIs and optimized SQL Server / EF Core data pipelines.",
                job3Role: "Volunteer Full-Stack Developer",
                job3Company: "RYCAAD Organization (Yemeni Farmers Cooperative Association)",
                job3Date: "January 2022 – January 2024",
                job3b1: "Volunteered to build the RYCAAD non-profit platform using ASP.NET Core MVC, HTML, and CSS.",
                job3b2: "Developed CMS services, membership management, hall booking, and automated notification system."
            },
            contact: {
                title: "Let’s Build Scalable Systems Together",
                desc: "Open for remote opportunities, Gulf market positions (Saudi Arabia & UAE), and architectural consulting.",
                emailLabel: "Email Address",
                phoneLabel: "Phone / WhatsApp (Click to chat directly)",
                locationLabel: "Current Location",
                locationValue: "Sana'a, Yemen (Open to Remote & Relocation)",
                waBtn: "Chat Directly on WhatsApp"
            },
            form: {
                name: "Full Name",
                namePlaceholder: "Enter your full name...",
                email: "Email Address",
                emailPlaceholder: "name@company.com",
                message: "Message / Opportunity Details",
                msgPlaceholder: "Write your message here...",
                btnSend: "Send Message"
            },
            footer: "© 2026 Abdulrahman Ali Aldoais. All rights reserved. Built with Clean Architecture."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ar';
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');

    // Code Snippets Data
    const codeSnippets = {
        utc: `// Enterprise EF Core UTC DateTime Converter Framework
public class UtcDateTimeConverter : ValueConverter<DateTime, DateTime>
{
    public UtcDateTimeConverter() : base(
        v => v.Kind == DateTimeKind.Utc ? v : v.ToUniversalTime(),
        v => DateTime.SpecifyKind(v, DateTimeKind.Utc))
    { }
}

// Global EF Core ModelBuilder Registration
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    foreach (var entityType in modelBuilder.Model.GetEntityTypes())
    {
        foreach (var property in entityType.GetProperties())
        {
            if (property.ClrType == typeof(DateTime) || property.ClrType == typeof(DateTime?))
            {
                property.SetValueConverter(typeof(UtcDateTimeConverter));
            }
        }
    }
}`,
        rule: `// Runtime Enterprise Workflow Rule Evaluation Engine
public class RuntimeRuleEvaluator : IRuleEvaluator
{
    public async Task<bool> EvaluateRuleAsync(WorkflowRule rule, ExecutionContext context)
    {
        // Zero Hardcoded Flow: Dynamic runtime evaluation of conditions
        return rule.Operator switch
        {
            RuleOperator.GreaterThan => Convert.ToDecimal(context.Payload[rule.Field]) > Convert.ToDecimal(rule.TargetValue),
            RuleOperator.LessThan => Convert.ToDecimal(context.Payload[rule.Field]) < Convert.ToDecimal(rule.TargetValue),
            RuleOperator.Equals => context.Payload[rule.Field]?.ToString() == rule.TargetValue,
            RuleOperator.ContainsRole => context.UserRoles.Contains(rule.TargetValue),
            _ => throw new InvalidOperationException($"Unsupported Operator: {rule.Operator}")
        };
    }
}`,
        overnight: `// Biometric Punches Overnight Cross-Midnight Shift Mapper
public class OvernightShiftMapper
{
    public AttendanceShift MapPunchToShift(DateTime punchTimeUtc, IEnumerable<AttendanceShift> activeShifts, TimeSpan tenantOffset)
    {
        var tenantLocalTime = punchTimeUtc.Add(tenantOffset);

        foreach (var shift in activeShifts)
        {
            // Detect overnight shift crossing midnight (e.g., 20:00 to 04:00 AM next day)
            if (shift.IsOvernight)
            {
                var shiftStart = tenantLocalTime.Date.Add(shift.StartTime);
                var shiftEnd = tenantLocalTime.Date.AddDays(1).Add(shift.EndTime);

                if (tenantLocalTime >= shiftStart.AddHours(-2) && tenantLocalTime <= shiftEnd.AddHours(2))
                {
                    return shift; // Successfully mapped to overnight shift
                }
            }
        }
        return activeShifts.FirstOrDefault();
    }
}`
    };

    window.switchCodeTab = function(key, element) {
        document.querySelectorAll('.code-tab-btn').forEach(btn => btn.classList.remove('active'));
        if (element) element.classList.add('active');
        
        const snippetEl = document.getElementById('codeText');
        if (snippetEl && codeSnippets[key]) {
            snippetEl.textContent = codeSnippets[key];
        }
    };

    window.copyCodeSnippet = function() {
        const snippetText = document.getElementById('codeText')?.textContent;
        const dict = i18nData[currentLang];
        const copyBtnText = document.getElementById('copyBtnText');

        if (snippetText) {
            navigator.clipboard.writeText(snippetText).then(() => {
                if (copyBtnText) copyBtnText.textContent = dict.codeShowcase.copied;
                setTimeout(() => {
                    if (copyBtnText) copyBtnText.textContent = dict.codeShowcase.copyBtn;
                }, 2000);
            });
        }
    };

    // Direct WhatsApp Opener Engine
    window.openWhatsApp = function(e) {
        if (e) e.preventDefault();
        const textAr = encodeURIComponent('السلام عليكم مهندس عبدالرحمن، أتواصل معك بخصوص فرصة عمل / استشارة تقنية.');
        const textEn = encodeURIComponent('Hello Eng. Abdulrahman, I am reaching out to discuss a software opportunity / architectural consultation.');
        const msg = currentLang === 'ar' ? textAr : textEn;
        window.open(`https://api.whatsapp.com/send?phone=967775115810&text=${msg}`, '_blank');
    };

    // Theme Switcher Logic (Dark / Light Mode)
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeLabel = document.getElementById('themeLabel');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeUI(newTheme);
        });
    }

    function updateThemeUI(theme) {
        if (theme === 'light') {
            if (themeIcon) themeIcon.textContent = '☀️';
            if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'نهاري' : 'Light';
            if (themeToggleBtn) themeToggleBtn.title = currentLang === 'ar' ? 'التحويل للوضع الليلي' : 'Switch to Dark Mode';
        } else {
            if (themeIcon) themeIcon.textContent = '🌙';
            if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'ليلي' : 'Dark';
            if (themeToggleBtn) themeToggleBtn.title = currentLang === 'ar' ? 'التحويل للوضع النهاري' : 'Switch to Light Mode';
        }
    }

    // Typing Effect Logic
    const typingElement = document.getElementById('typing');
    const rolesAr = ['معمارية الأنظمة المؤسسية', 'محرك الرواتب والسلف', 'محرك سير العمل والموافقات', 'Multi-Tenant SaaS'];
    const rolesEn = ['Enterprise Systems Architecture', 'Payroll & Loan Engines', 'Dynamic Workflow Engine', 'Multi-Tenant SaaS'];
    let currentRoles = currentLang === 'ar' ? rolesAr : rolesEn;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typingElement) return;
        const current = currentRoles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % currentRoles.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 40 : 80);
        }
    }
    type();

    // Full i18n Translation Switcher Engine
    function applyTranslations(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        if (langText) langText.textContent = lang === 'ar' ? 'English' : 'عربي';

        currentRoles = lang === 'ar' ? rolesAr : rolesEn;
        roleIndex = 0;
        charIndex = 0;

        const dict = i18nData[lang];

        // 1. General data-i18n text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = dict;
            keys.forEach(k => { if (value) value = value[k]; });
            if (value && typeof value === 'string') {
                el.textContent = value;
            }
        });

        // 2. Translate Input Placeholders (data-i18n-placeholder)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const keys = key.split('.');
            let value = dict;
            keys.forEach(k => { if (value) value = value[k]; });
            if (value && typeof value === 'string') {
                el.placeholder = value;
            }
        });

        // 3. Translate Achievement Cards Titles & Descriptions Dynamically
        for (let i = 1; i <= 6; i++) {
            const cardData = dict.cards[`card${i}`];
            const cardTitleEl = document.querySelector(`.achievement-card:nth-child(${i}) .card-title`);
            const cardDescEl = document.querySelector(`.achievement-card:nth-child(${i}) .card-desc`);
            const cardLinkEl = document.querySelector(`.achievement-card:nth-child(${i}) .card-link span`);

            if (cardTitleEl && cardData) cardTitleEl.textContent = cardData.title;
            if (cardDescEl && cardData) cardDescEl.textContent = cardData.desc;
            if (cardLinkEl) cardLinkEl.textContent = dict.cards.btnDetails;
        }

        // 4. Update Close button text
        document.querySelectorAll('.modal-close-btn').forEach(btn => {
            btn.textContent = dict.modals.closeBtn;
        });

        updateThemeUI(document.documentElement.getAttribute('data-theme'));
        updateArchView();
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            applyTranslations(newLang);
        });
    }

    // Filter Buttons
    const filterBtns = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.achievement-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Architecture Multi-Image Diagram Switcher with Full Bilingual Support
    const archData = {
        workflow: {
            images: [
                'assets/images/02-workflow-engine/image1.jpg',
                'assets/images/02-workflow-engine/image2.jpg'
            ],
            arTitle: 'Dynamic Workflow Execution Engine Diagram',
            arDesc: 'مخطط معماري يوضح كيفية استقبال الطلب، تقييم الشروط الديناميكية في الـ Runtime، توجيه المهمة للموافق المناسب، التذكير الفوري، والتأثير النهائي على الكيان.',
            enTitle: 'Dynamic Workflow Execution Engine Architecture Diagram',
            enDesc: 'Architectural diagram illustrating request intake, runtime dynamic condition evaluation, task routing to designated approver, real-time reminders, and final entity state mutation.'
        },
        payroll: {
            images: [
                'assets/images/06-payroll-bulk/image1.jpg',
                'assets/images/06-payroll-bulk/image2.jpg'
            ],
            arTitle: 'Financial Payroll & Bulk Assignment Pipeline',
            arDesc: 'دياجرام تدفق البيانات المعقدة لمسيرات الرواتب، سحب البدلات، الاستقطاعات المباشرة، وقفل الحسابات المالية وتصدير ملفات البنوك.',
            enTitle: 'Financial Payroll & Bulk Assignment Pipeline Diagram',
            enDesc: 'Complex data flow diagram for payroll processing runs, allowance calculations, automated loan deductions, historical locks, and banking SIF exports.'
        },
        biometrics: {
            images: [
                'assets/images/04-attendance-shift/image1.jpg',
                'assets/images/04-attendance-shift/image2.jpg'
            ],
            arTitle: 'Biometrics Log Processing & Overnight Shift Mapping',
            arDesc: 'خوارزميات تنقية بيانات أجهزة البصمة الحيوية وربط الحركات بالورديات المتداخلة عبر منتصف الليل (Overnight Shifts).',
            enTitle: 'Biometrics Log Processing & Overnight Shift Mapping Diagram',
            enDesc: 'Biometric punch filtering algorithms, deduplication engine, and dynamic shift mapping for cross-midnight overnight schedules.'
        },
        hero: {
            images: [
                'assets/images/01-saas-timezone/image1.jpg',
                'assets/images/01-saas-timezone/image2.jpg'
            ],
            arTitle: 'SaaS Multi-Tenant Enterprise Microservices Core',
            arDesc: 'المعمارية الشاملة للمنصة، عزل بيانات المستأجرين، بروتوكول gRPC للربط بين الخدمات، وتوحيد معالجة التوقيع الزمني UTC.',
            enTitle: 'SaaS Multi-Tenant Enterprise Microservices Core Diagram',
            enDesc: 'Overall system microservices architecture, multi-tenant data isolation layers, high-speed gRPC communications, and UTC timezone standardization.'
        }
    };

    let currentArchKey = 'workflow';
    let currentArchImageIndex = 0;

    window.switchArch = function(key, element) {
        document.querySelectorAll('.arch-item').forEach(item => item.classList.remove('active'));
        if (element) element.classList.add('active');
        
        currentArchKey = key;
        currentArchImageIndex = 0;
        updateArchView();
    };

    window.prevArchSlide = function() {
        const data = archData[currentArchKey];
        if (!data || data.images.length <= 1) return;
        currentArchImageIndex = (currentArchImageIndex - 1 + data.images.length) % data.images.length;
        updateArchView();
    };

    window.nextArchSlide = function() {
        const data = archData[currentArchKey];
        if (!data || data.images.length <= 1) return;
        currentArchImageIndex = (currentArchImageIndex + 1) % data.images.length;
        updateArchView();
    };

    function updateArchView() {
        const data = archData[currentArchKey];
        const dict = i18nData[currentLang];
        if (data) {
            document.getElementById('archImg').src = data.images[currentArchImageIndex];
            document.getElementById('archTitle').textContent = currentLang === 'ar' ? data.arTitle : data.enTitle;
            document.getElementById('archDesc').textContent = currentLang === 'ar' ? data.arDesc : data.enDesc;
            
            const counterEl = document.getElementById('archCounter');
            if (counterEl) {
                counterEl.textContent = `${dict.modals.counterPrefix} ${currentArchImageIndex + 1} ${dict.modals.counterOf} ${data.images.length}`;
            }
        }
    }

    // Modal Details & Gallery Engine with Full Translation Integration
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    // CV Viewer Modal Engine
    const cvModalOverlay = document.getElementById('cvModalOverlay');

    window.openCvModal = function() {
        if (cvModalOverlay) {
            cvModalOverlay.classList.add('active');
        }
    };

    window.closeCvModal = function() {
        if (cvModalOverlay) {
            cvModalOverlay.classList.remove('active');
        }
    };

    if (cvModalOverlay) {
        cvModalOverlay.addEventListener('click', (e) => {
            if (e.target === cvModalOverlay) {
                closeCvModal();
            }
        });
    }

    let currentGallery = [];
    let currentImageIndex = 0;

    const modalImagesMap = {
        1: ['assets/images/01-saas-timezone/image1.jpg', 'assets/images/01-saas-timezone/image2.jpg'],
        2: ['assets/images/02-workflow-engine/image1.jpg', 'assets/images/02-workflow-engine/image2.jpg'],
        3: ['assets/images/03-penalty-engine/image1.jpg'],
        4: ['assets/images/04-attendance-shift/image1.jpg', 'assets/images/04-attendance-shift/image2.jpg'],
        5: ['assets/images/05-contracts-eosb/image1.jpg'],
        6: ['assets/images/06-payroll-bulk/image1.jpg', 'assets/images/06-payroll-bulk/image2.jpg']
    };

    window.openModal = function(id) {
        const dict = i18nData[currentLang];
        const modalData = dict.modals[`modal${id}`];
        if (modalData) {
            modalTitle.textContent = modalData.title;
            currentGallery = modalImagesMap[id] || [];
            currentImageIndex = 0;

            let galleryHTML = '';
            if (currentGallery.length > 0) {
                galleryHTML = `
                    <div class="carousel-box">
                        <img id="modalGalleryImg" src="${currentGallery[0]}" alt="Gallery Image">
                    </div>
                    ${currentGallery.length > 1 ? `
                        <div class="gallery-toolbar">
                            <button class="gallery-btn" onclick="prevSlide(event)">${dict.modals.prevBtn}</button>
                            <div class="gallery-status-badge" id="modalGalleryCounter">${dict.modals.counterPrefix} 1 ${dict.modals.counterOf} ${currentGallery.length}</div>
                            <button class="gallery-btn" onclick="nextSlide(event)">${dict.modals.nextBtn}</button>
                        </div>
                    ` : ''}
                `;
            }

            modalBody.innerHTML = galleryHTML + modalData.content;
            modalOverlay.classList.add('active');
        }
    };

    window.prevSlide = function(e) {
        if (e) e.stopPropagation();
        if (currentGallery.length <= 1) return;
        currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
        updateCarouselSlide();
    };

    window.nextSlide = function(e) {
        if (e) e.stopPropagation();
        if (currentGallery.length <= 1) return;
        currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
        updateCarouselSlide();
    };

    function updateCarouselSlide() {
        const dict = i18nData[currentLang];
        const imgEl = document.getElementById('modalGalleryImg');
        const counterEl = document.getElementById('modalGalleryCounter');
        if (imgEl) imgEl.src = currentGallery[currentImageIndex];
        if (counterEl) counterEl.textContent = `${dict.modals.counterPrefix} ${currentImageIndex + 1} ${dict.modals.counterOf} ${currentGallery.length}`;
    }

    window.closeModal = function() {
        modalOverlay.classList.remove('active');
    };

    // Close Modal on Backdrop Click (Clicking outside modal container)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Close Modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeCvModal();
        }
    });

    // Apply saved language initial setup
    applyTranslations(currentLang);
});
