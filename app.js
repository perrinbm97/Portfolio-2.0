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

const scaleFactor = 1 / 20;
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for(let i=0; i<shapes.length; i++) {
    const isOdd = i % 2 !==0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

let contrastToggle = false;
function toggleContrast() {
  if(contrastToggle) {
    contrastToggle = false;
    return document.body.classList.remove("dark-mode");
  }
  contrastToggle = true;
  document.body.classList += " dark-mode";
}

let isModalOpen = false;
function toggleModal () {
  if(isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}