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
    "meta.title": "SIS Motors LLC | Автосервис в Milford, Ohio",
    "meta.description":
      "SIS Motors LLC — автосервис Сергея в Milford, Ohio. Диагностика, техническое обслуживание, ремонт ходовой, электрики, тормозной системы, двигателей и трансмиссий.",
    "meta.ogDescription":
      "Полный комплекс услуг по ремонту автомобилей: диагностика, обслуживание, электрика, ходовая, двигатели и трансмиссии.",
    "nav.ariaLabel": "Главная навигация",
    "nav.openMenu": "Открыть меню",
    "nav.services": "Услуги",
    "nav.about": "О сервисе",
    "nav.gallery": "Работы",
    "nav.contact": "Контакты",
    "nav.call": "Позвонить Сергею",
    "hero.title": "Полный комплекс услуг по ремонту автомобилей",
    "hero.text":
      "Сергей, мастерская SIS Motors LLC. Более 15 лет опыта в ремонте и обслуживании автомобилей: от диагностики и технического обслуживания до сложных работ по двигателю, трансмиссии и ходовой части.",
    "hero.email": "Написать на email",
    "hero.experienceTitle": "15+ лет опыта",
    "hero.experienceText": "Практический опыт ремонта и обслуживания автомобилей",
    "hero.cardLabel": "Сергей, мастерская",
    "hero.cardText": "Диагностика, ремонт, обслуживание, помощь в пути.",
    "proof.ariaLabel": "Ключевые факты",
    "proof.engineTitle": "Диагностика двигателя",
    "proof.engineText": "Поиск и устранение неисправностей двигателя.",
    "proof.suspensionTitle": "Ходовая и узлы",
    "proof.suspensionText": "Диагностика ходовой части и замена узлов.",
    "proof.roadTitle": "Помощь в пути",
    "proof.roadText": "Техническая помощь в пути или выезд к дому при необходимости.",
    "proof.inspectTitle": "Проверка перед покупкой",
    "proof.inspectText": "Техническая проверка автомобиля перед покупкой.",
    "services.kicker": "Услуги",
    "services.title": "Основные направления работы сервиса",
    "services.call": "Связаться по телефону",
    "services.engineTitle": "Диагностика двигателя",
    "services.engineText": "Диагностика двигателя и устранение выявленных неисправностей.",
    "services.suspensionTitle": "Ходовая часть",
    "services.suspensionText":
      "Диагностика ходовой части, замена узлов и восстановление стабильной работы автомобиля.",
    "services.electricTitle": "Электрика",
    "services.electricText":
      "Поиск и ремонт проблем в автомобильной электрике и электронных узлах.",
    "services.maintenanceTitle": "Техническое обслуживание",
    "services.maintenanceText": "Плановое обслуживание автомобиля и регламентные работы.",
    "services.oilTitle": "Замена масел",
    "services.oilText": "Замена масла в двигателе, коробке, раздатке и мосту.",
    "services.brakesTitle": "Тормозная система",
    "services.brakesText":
      "Замена тормозной системы и работы по восстановлению надежного торможения.",
    "services.powertrainTitle": "Двигатели и трансмиссии",
    "services.powertrainText": "Замена двигателей, трансмиссий и сложные механические работы.",
    "services.mobileTitle": "Выезд и осмотр",
    "services.mobileText":
      "Помощь в пути, выезд к дому и техническая проверка автомобиля перед покупкой.",
    "about.kicker": "О сервисе",
    "about.title": "Сервис, который показывает реальную работу",
    "about.lead":
      "В основе SIS Motors LLC не витринная подача, а реальный сервис, мастерская и практический опыт. Это видно по самим работам: диагностике, ремонту узлов, техническому обслуживанию и более сложным вмешательствам в двигатель и трансмиссию.",
    "about.realTitle": "Реальная мастерская",
    "about.realText":
      "В открытом объявлении опубликованы фотографии рабочей зоны, автомобилей и текущих ремонтов.",
    "about.directTitle": "Контакт напрямую с мастером",
    "about.directText": "Основной контакт — Сергей. Это усиливает доверие и делает коммуникацию короче.",
    "about.profileTitle": "Широкий профиль услуг",
    "about.profileText": "От профилактики и диагностики до двигателей, трансмиссий и выездной помощи.",
    "about.localTitle": "Локальная точка в Ohio",
    "about.localText":
      "Сервис расположен в Milford, что удобно для клиентов района Cincinnati и соседних городов.",
    "about.photoAlt": "Автомобиль в ремонте в SIS Motors LLC",
    "gallery.kicker": "Работы",
    "gallery.title": "Фотографии сервиса и ремонта",
    "gallery.photoAlt": "Деталь двигателя после обработки",
    "gallery.text":
      "На странице использованы реальные фотографии сервиса и работ из открытого объявления. Это делает подачу честной и сразу показывает, что за лендингом стоит не абстрактный бренд, а живая мастерская.",
    "gallery.item1": "Реальная мастерская и рабочая зона",
    "gallery.item2": "Фотографии узлов, двигателя и текущих ремонтов",
    "gallery.item3": "Контакты для прямой связи с Сергеем",
    "gallery.call": "Обсудить работы по телефону",
    "contact.kicker": "Контакты",
    "contact.title": "SIS Motors LLC в Milford, Ohio",
    "contact.text":
      "Если нужен осмотр, обслуживание, ремонт двигателя, ходовой, электрики или помощь в пути, связаться можно напрямую с Сергеем.",
    "contact.phone": "Телефон",
    "contact.address": "Адрес",
    "footer.summary": "Сергей, мастерская. SIS Motors LLC. Milford, Ohio.",
    "footer.contactTitle": "Связаться",
    "footer.proofTitle": "Что подтверждено",
    "footer.proof1": "Более 15 лет опыта",
    "footer.proof2": "Профиль услуг из публичного объявления",
    "footer.proof3": "Реальные фото сервиса и работ"
  },
  en: {
    "meta.title": "SIS Motors LLC | Auto Repair in Milford, Ohio",
    "meta.description":
      "SIS Motors LLC is Sergey’s auto repair shop in Milford, Ohio. Diagnostics, maintenance, suspension, electrical, brake, engine, and transmission work.",
    "meta.ogDescription":
      "Complete auto repair services: diagnostics, maintenance, electrical work, suspension, engines, and transmissions.",
    "nav.ariaLabel": "Main navigation",
    "nav.openMenu": "Open menu",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.gallery": "Work",
    "nav.contact": "Contact",
    "nav.call": "Call Sergey",
    "hero.title": "Complete auto repair services",
    "hero.text":
      "Sergey, SIS Motors LLC workshop. Over 15 years of hands-on experience in auto repair and maintenance: from diagnostics and routine service to complex engine, transmission, and suspension work.",
    "hero.email": "Send an email",
    "hero.experienceTitle": "15+ years of experience",
    "hero.experienceText": "Hands-on experience in vehicle repair and maintenance",
    "hero.cardLabel": "Sergey, workshop",
    "hero.cardText": "Diagnostics, repair, maintenance, roadside assistance.",
    "proof.ariaLabel": "Key facts",
    "proof.engineTitle": "Engine diagnostics",
    "proof.engineText": "Finding and fixing engine problems.",
    "proof.suspensionTitle": "Suspension and components",
    "proof.suspensionText": "Suspension diagnostics and component replacement.",
    "proof.roadTitle": "Roadside assistance",
    "proof.roadText": "Technical roadside help or home visit when needed.",
    "proof.inspectTitle": "Pre-purchase inspection",
    "proof.inspectText": "Technical vehicle inspection before purchase.",
    "services.kicker": "Services",
    "services.title": "Main service areas",
    "services.call": "Call now",
    "services.engineTitle": "Engine diagnostics",
    "services.engineText": "Engine diagnostics and repair of detected problems.",
    "services.suspensionTitle": "Suspension",
    "services.suspensionText":
      "Suspension diagnostics, component replacement, and restoring stable vehicle operation.",
    "services.electricTitle": "Electrical work",
    "services.electricText": "Troubleshooting and repair of automotive electrical and electronic systems.",
    "services.maintenanceTitle": "Maintenance",
    "services.maintenanceText": "Scheduled vehicle maintenance and routine service work.",
    "services.oilTitle": "Oil changes",
    "services.oilText": "Oil changes for the engine, transmission, transfer case, and differential.",
    "services.brakesTitle": "Brake system",
    "services.brakesText": "Brake system replacement and repair work for reliable stopping performance.",
    "services.powertrainTitle": "Engines and transmissions",
    "services.powertrainText": "Engine replacement, transmission replacement, and complex mechanical work.",
    "services.mobileTitle": "Mobile help and inspections",
    "services.mobileText":
      "Roadside help, home visits, and technical vehicle inspection before purchase.",
    "about.kicker": "About",
    "about.title": "A shop that shows real work",
    "about.lead":
      "SIS Motors LLC is built around real service, a real workshop, and hands-on experience — not a polished empty presentation. The work itself shows it: diagnostics, component repair, maintenance, and more complex engine and transmission jobs.",
    "about.realTitle": "Real workshop",
    "about.realText": "The public listing includes photos of the work area, vehicles, and active repairs.",
    "about.directTitle": "Direct contact with the mechanic",
    "about.directText": "The main contact is Sergey. That builds trust and keeps communication short.",
    "about.profileTitle": "Wide service profile",
    "about.profileText": "From prevention and diagnostics to engines, transmissions, and roadside help.",
    "about.localTitle": "Local point in Ohio",
    "about.localText":
      "The shop is located in Milford, convenient for clients around Cincinnati and nearby towns.",
    "about.photoAlt": "Vehicle being repaired at SIS Motors LLC",
    "gallery.kicker": "Work",
    "gallery.title": "Photos of the shop and repairs",
    "gallery.photoAlt": "Engine part after service work",
    "gallery.text":
      "The page uses real photos of the shop and repair work from the public listing. This makes the presentation honest and shows that behind the landing page there is not an abstract brand, but a real working shop.",
    "gallery.item1": "Real workshop and work area",
    "gallery.item2": "Photos of parts, engine work, and current repairs",
    "gallery.item3": "Direct contact with Sergey",
    "gallery.call": "Discuss the work by phone",
    "contact.kicker": "Contact",
    "contact.title": "SIS Motors LLC in Milford, Ohio",
    "contact.text":
      "For inspection, maintenance, engine repair, suspension work, electrical repair, or roadside help, contact Sergey directly.",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "footer.summary": "Sergey, workshop. SIS Motors LLC. Milford, Ohio.",
    "footer.contactTitle": "Contact",
    "footer.proofTitle": "Confirmed",
    "footer.proof1": "Over 15 years of experience",
    "footer.proof2": "Service profile from the public listing",
    "footer.proof3": "Real photos of the shop and work"
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
