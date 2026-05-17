const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const leadForm = document.querySelector(".lead-form");
const formNote = document.querySelector("#form-note");

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

if (leadForm && formNote) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent =
      "Заявка принята в демо-режиме. Подключите форму к реальному каналу получения заявок.";
    formNote.classList.add("is-success");
    leadForm.reset();
  });
}
