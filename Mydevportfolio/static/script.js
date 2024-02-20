function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const contactsButton = document.querySelector("#contacts-button");
contactsButton.addEventListener("click", goContacts);

function goContacts() {
  const contacts = document.querySelector("#contacts");
  contacts.scrollIntoView({ behavior: "smooth" });
}
