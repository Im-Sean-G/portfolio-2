let isModalOpen = false;
let contrastToggle = false;

// Toggle Contrast

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if(contrastToggle) {
    document.body.classList += " dark-theme";
  }
  else {
    document.body.classList.remove("dark-theme")
  }
  
}


// Email Contact
// template_2w0sbig
// service_1eyogya
// OSsOV_yTW8hBeFR22

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_1eyogya',
      'template_2w0sbig',
      event.target,
      'OSsOV_yTW8hBeFR22'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";   
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please contact me directly at seanrgallagher88@gmail.com"
    );
  })
}

// Toggle Modal
function toggleModal() {
  document.body.classList.toggle("modal--open");
}
