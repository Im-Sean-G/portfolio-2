// Open Modal 



// Email Contact

// template_2w0sbig
// service_p1kq892
// OSsOV_yTW8hBeFR22

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"

  emailjs
    sendForm(
      'service_p1kq892'
      'service_p1kq892'
      event.target,
      'OSsOV_yTW8hBeFR22'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += " modal__overlay--visible"
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is temporarily unavailable. Please contact me directly at seanrgallagher88@gmail.com"
      )
    })
}
