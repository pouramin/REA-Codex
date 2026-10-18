"use strict";
(function () {
  const fa = {
  "Hands-on guide & reusable prompts": "راهنمای عملی و پرامپت‌های آماده",
  "Getting started": "شروع",
  "ASAR finder": "پیدا کردن ASAR",
  "Prompts": "پرامپت‌ها",
  "Troubleshooting": "رفع خطا",
  "A companion guide to the TunnelLab video": "راهنمای همراه ویدیوی TunnelLab",
  "From reverse engineering": "از مهندسی معکوس",
  "to": "تا",
  "building a real app": "ساخت یک برنامهٔ واقعی",
  "A practical REA + Codex workflow: locate an Electron": "راهنمای گام‌به‌گام REA و Codex: از پیدا کردن فایل",
  "package, connect the MCP tools, investigate the application with evidence, and build and test an independent desktop app.": "یک برنامهٔ Electron و اتصال ابزارهای MCP تا تحلیل مستند و ساخت و آزمایش یک برنامهٔ مستقل.",
  "Start the guide →": "شروع راهنما ←",
  "Browse the prompts": "مشاهدهٔ پرامپت‌ها",
  "Free resource · No account required · Your paths stay in your browser": "رایگان · بدون نیاز به حساب کاربری · مسیرها فقط در مرورگر خودت می‌مونن",
  "Copy-ready prompts": "پرامپت‌های قابل‌کپی",
  "ASAR file finder": "پیدا کردن فایل ASAR",
  "Real-world validation": "آزمایش واقعی",
  "GUIDE CONTENTS": "مراحل راهنما",
  "Installation & setup": "آماده‌سازی و نصب",
  "Locate an ASAR file": "پیدا کردن فایل ASAR",
  "Customize file paths": "شخصی‌سازی مسیرها",
  "Codex prompts": "پرامپت‌های Codex",
  "Fix MCP errors": "رفع خطاهای MCP",
  "FAQs": "پرسش‌های رایج",
  "This educational case study covers permitted analysis and independent implementation—not full recovery of an application's original source.": "این پروژه نمونه‌ای آموزشی از تحلیل مجاز و ساخت برنامهٔ مستقل است؛ نه بازیابی کامل سورس‌کد نرم‌افزار اصلی.",
  "STEP 01": "مرحلهٔ 01",
  "STEP 02": "مرحلهٔ 02",
  "STEP 03": "مرحلهٔ 03",
  "STEP 04": "مرحلهٔ 04",
  "STEP 05": "مرحلهٔ 05",
  "Start with Node.js and a local Codex environment on Windows. Then configure REA for Codex.": "ابتدا Node.js و نسخهٔ محلی Codex رو روی ویندوز آماده کن. بعد REA رو به Codex متصل کن.",
  "Run REA with npx": "اجرای REA با npx",
  "Local coding agent with project access": "ایجنت برنامه‌نویسی با دسترسی به پروژهٔ محلی",
  "Reverse engineering tools via MCP": "ابزارهای مهندسی معکوس از طریق MCP",
  "Check prerequisites": "بررسی پیش‌نیازها",
  "Copy command": "کپی دستور",
  "Register REA with Codex": "اتصال REA به Codex",
  "Fully quit and relaunch Codex after setup. A": "بعد از نصب، Codex رو کاملاً ببند و دوباره باز کن. نتیجهٔ",
  "result confirms a valid registration, but": "ثبت صحیح تنظیمات رو تأیید می‌کنه؛ اما",
  "you must also verify a live REA MCP tool call inside Codex.": "باید داخل خود Codex یک فراخوانی واقعی از ابزار REA رو هم آزمایش کنی.",
  "Codex Desktop does not require the": "برای استفاده از Codex Desktop لازم نیست دستور",
  "command to be available on your PowerShell PATH. Optional native binary-analysis engines such as Ghidra are generally not necessary for examining Electron JavaScript.": "در مسیر اجرایی پاورشل نصب باشه. برای بررسی کد جاوااسکریپت Electron هم معمولاً ابزارهای اختیاری تحلیل باینری مثل Ghidra لازم نیست.",
  "Find an": "پیدا کردن فایل",
  "file": "",
  "Many Electron applications bundle their resources into": "خیلی از برنامه‌های Electron منابعشون رو داخل فایل‌های",
  "archives. Not every application uses Electron or this file format.": "بسته‌بندی می‌کنن، اما همهٔ نرم‌افزارها از Electron یا این قالب استفاده نمی‌کنن.",
  "Option 1 — Search with PowerShell": "روش اول — جست‌وجو با پاورشل",
  "First check the common Xmind installation locations:": "اول مسیرهای رایج نصب Xmind رو بررسی کن:",
  "Check common Xmind paths": "بررسی مسیرهای رایج Xmind",
  "To find": "برای پیدا کردن فایل‌های",
  "files in common installation folders for other applications, use this command. The recursive scan may take a few minutes:": "در پوشه‌های نصب رایج سایر برنامه‌ها، از این دستور استفاده کن. جست‌وجو ممکنه چند دقیقه طول بکشه:",
  "Search common app directories for ASAR files": "پیدا کردن فایل‌های ASAR در مسیرهای نصب رایج",
  "Alternative — Ask Codex to find the package": "روش جایگزین — پیدا کردن فایل با Codex",
  "Copy prompt": "کپی پرامپت",
  "This prompt asks Codex to locate the target package and stop before any reverse engineering begins.": "این پرامپت از Codex می‌خواد فقط مسیر فایل رو پیدا کنه و قبل از تحلیل متوقف بشه.",
  "Only inspect": "فقط زمانی فایل",
  "or any installed software when authorized. Do not redistribute proprietary source code or assets without permission.": "یا هر نرم‌افزار نصب‌شدهٔ دیگه‌ای رو بررسی کن که مجاز باشی. کد و دارایی‌های اختصاصی رو بدون اجازه منتشر نکن.",
  "Option 2 — Use your browser's folder picker": "روش دوم — انتخاب پوشه در مرورگر",
  "On supported Chrome and Edge versions, you can explicitly choose an application folder. The browser can see matching filenames and relative paths, but cannot expose the absolute Windows drive path to this page.": "در نسخه‌های پشتیبانی‌شدهٔ Chrome و Edge می‌تونی پوشهٔ نصب برنامه رو انتخاب کنی. صفحه فقط اسم فایل‌ها و مسیر نسبی اون‌ها رو می‌بینه، نه آدرس کامل درایو ویندوز.",
  "Select a folder & find ASAR files": "انتخاب پوشه و پیدا کردن فایل‌های ASAR",
  "Runs locally · Nothing is uploaded": "بررسی محلی · بدون آپلود فایل",
  "Customize your project paths": "مسیرهای پروژه رو شخصی‌سازی کن",
  "Enter your workspace and target ASAR path. They will be automatically inserted into the copy-ready prompts below.": "مسیر پروژه و فایل ASAR رو وارد کن تا به‌صورت خودکار داخل پرامپت‌های پایین قرار بگیرن.",
  "Project workspace directory": "مسیر پوشهٔ پروژه",
  "Target ASAR file path": "مسیر فایل ASAR",
  "Paths are not uploaded or stored. Editing either field instantly updates the prompts displayed below.": "مسیرها آپلود یا ذخیره نمی‌شن. تغییر هر فیلد، متن پرامپت‌ها رو بلافاصله به‌روز می‌کنه.",
  "All Codex prompts": "همهٔ پرامپت‌های Codex",
  "Send these prompts in sequence. Open any card to inspect its full text, or use the copy button to paste it into Codex.": "پرامپت‌ها رو به ترتیب بفرست. برای دیدن متن کامل هرکدوم رو باز کن یا با دکمهٔ کپی به Codex منتقلش کن.",
  "Workspace setup & live REA connection test": "تنظیم پروژه و تست واقعی اتصال REA",
  "Confirm the environment without starting expensive analysis.": "بررسی محیط و اتصال، بدون شروع تحلیل سنگین.",
  "Show full prompt": "نمایش متن کامل",
  "Expected: valid paths and": "انتظار: تأیید مسیرها و موفقیت در",
  "at least one successful real REA tool invocation.": "حداقل یک فراخوانی واقعی از ابزار REA.",
  "Targeted investigation & evidence collection": "تحلیل هدفمند و ثبت شواهد",
  "Identify relevant entry points instead of analyzing thousands of files at once.": "پیدا کردن بخش‌های مرتبط به‌جای تحلیل یکجای هزاران فایل.",
  "Expected: architecture, feature evidence, implementation plan, limitations, and coverage summary.": "انتظار: گزارش معماری، شواهد قابلیت‌ها، برنامهٔ ساخت، محدودیت‌ها و پوشش تحلیل.",
  "Build an independent Windows desktop app": "ساخت یک برنامهٔ مستقل ویندوز",
  "Turn verified behavioral findings into original, maintainable software.": "تبدیل یافته‌های تأییدشده به یک نرم‌افزار مستقل و قابل‌نگهداری.",
  "Expected: Electron project, functional features, automated tests, and packaged executable.": "انتظار: پروژهٔ Electron، قابلیت‌های کاربردی، تست خودکار و فایل اجرایی.",
  "Functionality tests & comparison": "تست عملکرد و مقایسه",
  "Separate evidence-based findings from independently developed behavior.": "جداکردن یافته‌های مستند از قابلیت‌هایی که مستقلاً ساخته شدن.",
  "Tests that were not performed must be reported as": "تست‌هایی که واقعاً اجرا نشدن باید با وضعیت",
  ", not PASS.": "ثبت بشن، نه PASS.",
  "Final video-ready report": "گزارش نهایی مناسب ویدیو",
  "Explain exactly what REA and Codex achieved without overstating the results.": "توضیح دقیق نتیجهٔ REA و Codex، بدون اغراق در توانایی‌ها.",
  "Fix MCP connection problems": "رفع مشکلات اتصال MCP",
  "A healthy MCP registration does not always mean the server can start and complete its handshake.": "سالم‌بودن ثبت اتصال MCP همیشه به معنی راه‌اندازی موفق سرور نیست.",
  "Find the underlying error": "علت اصلی خطا رو پیدا کن",
  "Check REA's Codex registration": "بررسی ثبت اتصال REA در Codex",
  "If REA tools are unavailable, first fully quit and restart Codex. If the problem persists, give Codex this diagnostic prompt:": "اگه ابزارهای REA در دسترس نیستن، اول Codex رو کامل ببند و دوباره باز کن. اگر مشکل باقی موند، این پرامپت عیب‌یابی رو بفرست:",
  "Diagnostic prompt": "پرامپت عیب‌یابی",
  "In our own case study, an incomplete REA copy in the npm cache caused": "در آزمایش ما، یک نسخهٔ ناقص REA داخل کش npm با خطای",
  "during MCP startup. We verified a healthy installation and configured its exact launcher. Npm cache paths vary by machine—never copy a guessed path.": "موقع اجرای MCP باعث بسته‌شدن سرور شد. بعد از شناسایی نسخهٔ سالم، مسیر اجرای دقیقش تنظیم شد. مسیر کش هر سیستم فرق می‌کنه؛ اون رو حدسی کپی نکن.",
  "Things worth knowing": "نکته‌های مهم",
  "Can this page scan my entire PC for ASAR files?": "آیا این سایت می‌تونه کل کامپیوتر رو برای فایل ASAR جست‌وجو کنه؟",
  "No. Websites cannot access local files without permission. The picker only scans a folder you explicitly choose. PowerShell can search common installation locations.": "نه. سایت بدون اجازه به فایل‌های سیستم دسترسی نداره. انتخابگر فقط پوشه‌ای رو بررسی می‌کنه که خودت انتخاب کنی. برای جست‌وجوی مسیرهای نصب از پاورشل استفاده کن.",
  "Why does my app have no ASAR file?": "چرا برنامهٔ من فایل ASAR نداره؟",
  "ASAR is common in Electron apps, but not universal. Native Windows applications and differently packaged Electron apps may not use it.": "ASAR در برنامه‌های Electron رایجه، اما همهٔ برنامه‌ها از اون استفاده نمی‌کنن. برنامه‌های بومی ویندوز و بسته‌بندی‌های دیگه ممکنه ASAR نداشته باشن.",
  "Does REA recover all original source code?": "آیا REA تمام سورس‌کد اصلی رو بازیابی می‌کنه؟",
  "No. Inventorying files, analyzing selected modules, and understanding behavior are not equivalent to recovering an entire application's original source code.": "نه. فهرست‌برداری از فایل‌ها و تحلیل بخش‌های منتخب با بازیابی کامل سورس‌کد اصلی فرق داره.",
  "Is a Codex-built app the same as the original?": "آیا برنامه‌ای که Codex می‌سازه با نسخهٔ اصلی یکسانه؟",
  "No. The goal is an independent implementation of selected features and an honest functional comparison—not a direct copy of the original program.": "نه. هدف ساخت مستقل تعدادی از قابلیت‌های مشابه و مقایسهٔ واقعی اون‌هاست، نه کپی مستقیم برنامهٔ اصلی.",
  "Created for the TunnelLab tutorial. Independent educational resource, not affiliated with the tool vendors.": "راهنمای همراه ویدیوی TunnelLab؛ یک منبع آموزشی مستقل و بدون وابستگی به سازندگان ابزارها.",
  "GitHub repository": "مخزن گیت‌هاب"
};
  const dynamic = {
  "Copied ✓": "کپی شد ✓",
  "Copy failed. Select the text and copy it manually.": "کپی انجام نشد؛ متن رو دستی انتخاب کن.",
  "Your browser does not support folder selection. Try an updated Chrome/Edge browser or the PowerShell commands above.": "مرورگر شما انتخاب پوشه رو پشتیبانی نمی‌کنه. از Chrome یا Edge به‌روز یا دستور پاورشل بالا استفاده کن.",
  "Scanning folder…": "در حال بررسی پوشه…",
  "Please wait. The scan runs locally in your browser.": "لطفاً صبر کن. بررسی فایل‌ها فقط داخل مرورگر انجام می‌شه.",
  "Selected folder: ": "پوشهٔ انتخاب‌شده: ",
  "ASAR files found (relative paths):": "فایل‌های ASAR پیدا‌شده (مسیرهای نسبی):",
  "For an absolute path, use File Explorer or the PowerShell command.": "برای دیدن آدرس کامل از File Explorer یا دستور پاورشل استفاده کن.",
  "No ASAR files found in the selected folder.": "در پوشهٔ انتخاب‌شده فایل ASAR پیدا نشد.",
  "Scan limit reached (30,000 entries or 12 folder levels). Choose a smaller folder.": "جست‌وجو به سقف 30,000 مورد یا عمق 12 پوشه رسید. یک پوشهٔ کوچک‌تر انتخاب کن.",
  "Folder selection cancelled.": "انتخاب پوشه لغو شد.",
  "Could not read folder: ": "امکان خواندن پوشه وجود نداشت: ",
  "Access denied": "دسترسی رد شد",
  "Select a folder & find ASAR files": "انتخاب پوشه و پیدا کردن فایل‌های ASAR"
};
  const langButton = document.getElementById("language-switch");
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const langMeta = {
    en: {
      title: "REA + Codex | Practical Reverse Engineering Guide",
      description: "An English REA + Codex tutorial with ASAR discovery, MCP setup, copy-ready prompts, independent app development, and testing.",
      ogTitle: "REA + Codex | From Reverse Engineering to a Working App",
      ogDescription: "Step-by-step prompts, ASAR file discovery, MCP troubleshooting, and a real reverse engineering case study."
    },
    fa: {
      title: "REA + Codex | راهنمای عملی مهندسی معکوس",
      description: "راهنمای فارسی REA و Codex: پیدا کردن فایل ASAR، اتصال MCP، پرامپت‌های قابل‌کپی، ساخت و تست یک برنامهٔ مستقل.",
      ogTitle: "REA + Codex | از مهندسی معکوس تا ساخت برنامه",
      ogDescription: "پرامپت‌های آماده، ابزار پیدا کردن ASAR و مراحل کامل یک آزمایش مهندسی معکوس با REA و Codex."
    }
  };
  const attributeTranslations = {
    "Back to top":"بازگشت به ابتدای صفحه",
    "Main navigation":"منوی اصلی",
    "Sample mind map":"نمونهٔ نقشهٔ ذهنی",
    "Mind map showing investigation, evidence, implementation and testing stages":"نقشهٔ ذهنی مراحل بررسی، شواهد، ساخت و تست",
    "Guide sections":"بخش‌های راهنما"
  };
  const savedNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("pre,code,template,script,style,svg")) return NodeFilter.FILTER_REJECT;
      return Object.prototype.hasOwnProperty.call(fa, node.textContent.trim())
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  let node;
  while ((node = walker.nextNode())) {
    const original = node.textContent;
    const key = original.trim();
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    savedNodes.push({node, original, translated: leading + fa[key] + trailing});
  }
  const attrs = [];
  for (const element of document.querySelectorAll("[aria-label]")) {
    const original = element.getAttribute("aria-label");
    if (Object.prototype.hasOwnProperty.call(attributeTranslations, original)) {
      attrs.push({element, original, translated: attributeTranslations[original]});
    }
  }
  let language = "en";
  const t = english => {
    if (language !== "fa") return english;
    if (Object.prototype.hasOwnProperty.call(dynamic, english)) return dynamic[english];
    if (Object.prototype.hasOwnProperty.call(fa, english)) return fa[english];
    // Finder results include variable filenames. Translate the fixed message segments only.
    let translated = english;
    for (const [original, localText] of Object.entries(dynamic)) {
      if (original && translated.includes(original)) translated = translated.split(original).join(localText);
    }
    return translated;
  };
  window.siteTranslate = t;
  function switchLanguage(nextLanguage) {
    language = nextLanguage === "fa" ? "fa" : "en";
    const isFa = language === "fa";
    document.documentElement.lang = language;
    document.documentElement.dir = isFa ? "rtl" : "ltr";
    for (const item of savedNodes) item.node.textContent = isFa ? item.translated : item.original;
    for (const item of attrs) item.element.setAttribute("aria-label", isFa ? item.translated : item.original);
    document.title = langMeta[language].title;
    metaDescription.content = langMeta[language].description;
    ogTitle.content = langMeta[language].ogTitle;
    ogDescription.content = langMeta[language].ogDescription;
    langButton.textContent = isFa ? "English" : "فارسی";
    langButton.lang = isFa ? "en" : "fa";
    langButton.dir = isFa ? "ltr" : "rtl";
    langButton.setAttribute("aria-label", isFa ? "Switch to English" : "تغییر زبان به فارسی");
    langButton.setAttribute("aria-pressed", String(isFa));
    langButton.title = isFa ? "Switch to English" : "تغییر زبان به فارسی";
    // URL-controlled language keeps English as the default and makes Persian shareable.
    const url = new URL(window.location.href);
    if (isFa) url.searchParams.set("lang", "fa");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    if (typeof window.siteRefreshDynamic === "function") window.siteRefreshDynamic();
  }
  langButton.addEventListener("click", () => switchLanguage(language === "en" ? "fa" : "en"));
  switchLanguage(new URLSearchParams(window.location.search).get("lang") === "fa" ? "fa" : "en");
})();
