// template_jufh7ea
// service_9vw78po
// 75UrrpSpV9NrLA34k

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_9vw78po",
      "template_jufh7ea",
      event.target,
      "75UrrpSpV9NrLA34k",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("Email service is temporarily unavailable. Please reach out to me directly at 'email@email.com'");
    });
}
