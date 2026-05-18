const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const translations = {
  ru: {
    "meta.title": "SIS Motors LLC | Автодилер и автосервис в Cincinnati / Milford, Ohio",
    "meta.description":
      "SIS Motors LLC — семейный автодилер и автосервис для районов Cincinnati и Milford, Ohio. Продажа подержанных автомобилей, финансирование, диагностика, ремонт, гибриды, электрика, эвакуатор и проверка авто перед покупкой.",
    "meta.ogDescription":
      "Семейный dealership и full-service automotive shop: подержанные авто, financing, диагностика, ремонт, гибриды, электрика, towing и pre-purchase inspections.",
    "nav.ariaLabel": "Главная навигация",
    "nav.openMenu": "Открыть меню",
    "nav.services": "Услуги",
    "nav.locations": "Локации",
    "nav.inventory": "Авто",
    "nav.contact": "Контакты",
    "nav.call": "Позвонить",
    "hero.title": "Семейный автодилер и полный автосервис",
    "hero.text":
      "SIS Motors LLC обслуживает районы Milford и Cincinnati: продажа качественных подержанных автомобилей, варианты финансирования, диагностика, ремонт, гибриды, электрика, эвакуатор и проверка автомобиля перед покупкой.",
    "hero.salesCall": "Позвонить в Sales / Service",
    "hero.repairCall": "Позвонить в Milford Repair",
    "hero.dealerTitle": "Продажа авто + сервис",
    "hero.dealerText": "Подержанные автомобили, financing, ремонт и обслуживание.",
    "hero.locationsTitle": "2 рабочие локации",
    "hero.locationsText": "Cincinnati sales/service и Milford repair unit.",
    "hero.cardLabel": "Dealership + automotive shop",
    "hero.cardText": "Used cars, financing, diagnostics, repair, hybrid service, towing.",
    "proof.ariaLabel": "Ключевые направления",
    "proof.salesTitle": "Подержанные авто",
    "proof.salesText": "SUV, sedans, luxury models and other pre-owned vehicles.",
    "proof.financeTitle": "Financing",
    "proof.financeText": "Варианты финансирования для разных типов credit history.",
    "proof.repairTitle": "Full-service repair",
    "proof.repairText": "Двигатель, трансмиссия, подвеска, тормоза, maintenance.",
    "proof.specialTitle": "Specialized services",
    "proof.specialText": "Электрика, control units, keys, hybrids, towing.",
    "services.kicker": "Услуги",
    "services.title": "Что делает SIS Motors LLC",
    "services.call": "Позвонить в main location",
    "services.salesTitle": "Продажа подержанных авто",
    "services.salesText": "Качественные pre-owned vehicles: SUV, sedans, luxury models and other cars.",
    "services.financeTitle": "Финансирование",
    "services.financeText":
      "Financing options for different credit types. Free CARFAX reports are listed with vehicles.",
    "services.engineTitle": "Engine & transmission",
    "services.engineText": "Диагностика и ремонт двигателя, transmission repair and complex mechanical work.",
    "services.suspensionTitle": "Suspension & brakes",
    "services.suspensionText": "Подвеска, тормоза, regular maintenance and oil changes.",
    "services.electricTitle": "Electrical diagnostics",
    "services.electricText":
      "Электрика, diagnostics, adaptation of control units and related electronic systems.",
    "services.hybridTitle": "Hybrid car repair",
    "services.hybridText": "Специализированный ремонт гибридных автомобилей.",
    "services.keysTitle": "Car key services",
    "services.keysText": "Услуги по автомобильным ключам и связанным системам.",
    "services.roadTitle": "Towing & inspections",
    "services.roadText": "Эвакуатор, roadside assistance and pre-purchase vehicle inspections.",
    "locations.kicker": "Локации",
    "locations.title": "Две точки: Cincinnati и Milford",
    "locations.lead":
      "Основная sales/service location находится на Clough Pike в Cincinnati. Отдельный repair unit находится в Milford на Branch Hill-Guinea Pike, Unit D.",
    "locations.cincinnatiTitle": "Primary Sales & Service",
    "locations.milfordTitle": "Milford Repair Unit",
    "locations.hoursTitle": "Часы работы",
    "locations.hoursText": "Часы отличаются по источникам. Позвоните и подтвердите актуальный график перед визитом.",
    "locations.photoAlt": "Обслуживание автомобиля в SIS Motors LLC",
    "inventory.kicker": "Автомобили",
    "inventory.title": "Used car inventory and financing",
    "inventory.photoAlt": "Работы SIS Motors LLC с автомобилем",
    "inventory.heading": "Подержанные автомобили",
    "inventory.text":
      "SIS Motors LLC продаёт reliable pre-owned vehicles и предлагает financing options for different credit types. Inventory может меняться, поэтому наличие и цены нужно подтверждать напрямую.",
    "inventory.item1": "SUVs, sedans and luxury models",
    "inventory.item2": "Примеры из listings: Honda CR-V, Lexus RX 350, Subaru Forester, Nissan Sentra",
    "inventory.item3": "Free CARFAX reports are listed with vehicles",
    "inventory.call": "Позвонить по inventory",
    "contact.kicker": "Контакты",
    "contact.title": "Связаться с SIS Motors LLC",
    "contact.text":
      "Для покупки автомобиля, financing, диагностики, ремонта, эвакуатора или pre-purchase inspection — звоните в подходящую локацию.",
    "contact.mainPhone": "Sales / Service",
    "contact.altPhone": "Alternative Sales",
    "contact.repairPhone": "Milford Repair",
    "contact.cincinnatiAddress": "Cincinnati address",
    "contact.milfordAddress": "Milford repair unit",
    "footer.summary": "Семейный dealership и full-service automotive shop для Cincinnati и Milford.",
    "footer.contactTitle": "Связаться",
    "footer.noteTitle": "Важное",
    "footer.note1": "Inventory, prices and hours can change.",
    "footer.note2": "Call to confirm before visiting.",
    "footer.note3": "Milford unit is listed for repair service."
  },
  en: {
    "meta.title": "SIS Motors LLC | Dealership & Auto Repair in Cincinnati / Milford, Ohio",
    "meta.description":
      "SIS Motors LLC is a family-owned dealership and full-service automotive shop serving Cincinnati and Milford, Ohio. Used car sales, financing, diagnostics, repair, hybrids, electrical work, towing, and pre-purchase inspections.",
    "meta.ogDescription":
      "Family-owned dealership and full-service automotive shop: used cars, financing, diagnostics, repair, hybrids, electrical work, towing, and pre-purchase inspections.",
    "nav.ariaLabel": "Main navigation",
    "nav.openMenu": "Open menu",
    "nav.services": "Services",
    "nav.locations": "Locations",
    "nav.inventory": "Inventory",
    "nav.contact": "Contact",
    "nav.call": "Call now",
    "hero.title": "Family-owned dealership and full-service auto shop",
    "hero.text":
      "SIS Motors LLC serves the Milford and Cincinnati areas with quality pre-owned vehicles, financing options, diagnostics, repairs, hybrid service, electrical work, towing, and pre-purchase vehicle inspections.",
    "hero.salesCall": "Call Sales / Service",
    "hero.repairCall": "Call Milford Repair",
    "hero.dealerTitle": "Used cars + service",
    "hero.dealerText": "Pre-owned vehicles, financing, repair, and maintenance.",
    "hero.locationsTitle": "2 operating locations",
    "hero.locationsText": "Cincinnati sales/service and Milford repair unit.",
    "hero.cardLabel": "Dealership + automotive shop",
    "hero.cardText": "Used cars, financing, diagnostics, repair, hybrid service, towing.",
    "proof.ariaLabel": "Key service areas",
    "proof.salesTitle": "Pre-owned vehicles",
    "proof.salesText": "SUVs, sedans, luxury models and other pre-owned vehicles.",
    "proof.financeTitle": "Financing",
    "proof.financeText": "Financing options for different credit history types.",
    "proof.repairTitle": "Full-service repair",
    "proof.repairText": "Engine, transmission, suspension, brakes, and maintenance.",
    "proof.specialTitle": "Specialized services",
    "proof.specialText": "Electrical work, control units, keys, hybrids, and towing.",
    "services.kicker": "Services",
    "services.title": "What SIS Motors LLC offers",
    "services.call": "Call main location",
    "services.salesTitle": "Used car sales",
    "services.salesText": "Quality pre-owned vehicles: SUVs, sedans, luxury models, and other cars.",
    "services.financeTitle": "Financing",
    "services.financeText":
      "Financing options for different credit types. Free CARFAX reports are listed with vehicles.",
    "services.engineTitle": "Engine & transmission",
    "services.engineText": "Engine diagnostics and repair, transmission repair, and complex mechanical work.",
    "services.suspensionTitle": "Suspension & brakes",
    "services.suspensionText": "Suspension, brakes, regular maintenance, and oil changes.",
    "services.electricTitle": "Electrical diagnostics",
    "services.electricText": "Electrical diagnostics, control unit adaptation, and related electronic systems.",
    "services.hybridTitle": "Hybrid car repair",
    "services.hybridText": "Specialized hybrid vehicle repair.",
    "services.keysTitle": "Car key services",
    "services.keysText": "Automotive key services and related systems.",
    "services.roadTitle": "Towing & inspections",
    "services.roadText": "Towing, roadside assistance, and pre-purchase vehicle inspections.",
    "locations.kicker": "Locations",
    "locations.title": "Two locations: Cincinnati and Milford",
    "locations.lead":
      "The primary sales/service location is on Clough Pike in Cincinnati. The separate repair unit is in Milford on Branch Hill-Guinea Pike, Unit D.",
    "locations.cincinnatiTitle": "Primary Sales & Service",
    "locations.milfordTitle": "Milford Repair Unit",
    "locations.hoursTitle": "Hours",
    "locations.hoursText": "Hours vary by source. Call to confirm current hours before visiting.",
    "locations.photoAlt": "Vehicle service at SIS Motors LLC",
    "inventory.kicker": "Inventory",
    "inventory.title": "Used car inventory and financing",
    "inventory.photoAlt": "SIS Motors LLC automotive work",
    "inventory.heading": "Pre-owned vehicles",
    "inventory.text":
      "SIS Motors LLC sells reliable pre-owned vehicles and lists financing options for different credit types. Inventory can change, so current availability and prices should be confirmed directly.",
    "inventory.item1": "SUVs, sedans and luxury models",
    "inventory.item2": "Examples seen in listings: Honda CR-V, Lexus RX 350, Subaru Forester, Nissan Sentra",
    "inventory.item3": "Free CARFAX reports are listed with vehicles",
    "inventory.call": "Call about inventory",
    "contact.kicker": "Contact",
    "contact.title": "Contact SIS Motors LLC",
    "contact.text":
      "For vehicle purchases, financing, diagnostics, repair, towing, or a pre-purchase inspection, call the right location directly.",
    "contact.mainPhone": "Sales / Service",
    "contact.altPhone": "Alternative Sales",
    "contact.repairPhone": "Milford Repair",
    "contact.cincinnatiAddress": "Cincinnati address",
    "contact.milfordAddress": "Milford repair unit",
    "footer.summary": "Family-owned dealership and full-service automotive shop serving Cincinnati and Milford.",
    "footer.contactTitle": "Contact",
    "footer.noteTitle": "Important",
    "footer.note1": "Inventory, prices and hours can change.",
    "footer.note2": "Call to confirm before visiting.",
    "footer.note3": "Milford unit is listed for repair service."
  }
};

const languageButtons = document.querySelectorAll(".language-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableAttributes = document.querySelectorAll("[data-i18n-attr]");
const defaultLanguage = "ru";

function getInitialLanguage() {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");

  if (urlLanguage === "ru" || urlLanguage === "en") {
    return urlLanguage;
  }

  const savedLanguage = window.localStorage.getItem("site-language");

  if (savedLanguage === "ru" || savedLanguage === "en") {
    return savedLanguage;
  }

  return defaultLanguage;
}

function setLanguage(language) {
  const dictionary = translations[language] || translations[defaultLanguage];

  translatableNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");

    if (key && dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  translatableAttributes.forEach((node) => {
    const bindings = node.getAttribute("data-i18n-attr").split(",");

    bindings.forEach((binding) => {
      const [attribute, key] = binding.split(":").map((part) => part.trim());

      if (attribute && key && dictionary[key]) {
        node.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  document.documentElement.lang = language;
  document.title = dictionary["meta.title"];
  window.localStorage.setItem("site-language", language);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;

    if (language === "ru" || language === "en") {
      setLanguage(language);
    }
  });
});

setLanguage(getInitialLanguage());
