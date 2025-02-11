document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector("#nav-toggle"); 
  const navList = document.querySelector(".nav-list"); 
  const body = document.querySelector("body");

  if (menuToggle && navList) {
    menuToggle.setAttribute("aria-expanded", "false"); // Imposta il valore iniziale

    menuToggle.addEventListener("click", function () {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

      navList.classList.toggle("active");
      menuToggle.classList.toggle("active");
      body.classList.toggle("no-scroll");
      menuToggle.setAttribute("aria-expanded", !isExpanded);
    });

    document.addEventListener("click", function (event) {
      if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove("active");
        menuToggle.classList.remove("active");
        body.classList.remove("no-scroll");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});

emailjs.init("THYFfBkVR6R4Fasn5");
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("nome").value;
  const userEmail = document.getElementById("email").value;
  const message = document.getElementById("messaggio").value;
  emailjs.send("service_9v849i1", "template_lwdu88c", { from_name: name, from_email: userEmail, message: message })
    .then(() => alert("Messaggio inviato con successo!"))
    .catch(() => alert("Errore nell'invio del messaggio. Per favore riprova."));
  this.reset();
});