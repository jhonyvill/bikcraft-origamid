//Activate menu link when pressed
const links = document.querySelectorAll(".header-menu a");

function activateLink(link) {
  const url = window.location.href;
  if (url.includes(link.href)) {
    link.classList.add("active");
  }
}

links.forEach(activateLink);


// Activate product to budget
const params = new URLSearchParams(window.location.search)
function handleParams(param){
  const element = document.getElementById(param)
  if(param){
    element.checked = true;
  }
}

params.forEach(handleParams)

// Activate faq questions
const questions = document.querySelectorAll('.faq button')

function handleActivateQuestion(event){
  const question = event.currentTarget;
  const controls = question.getAttribute('aria-controls')
  const response = document.getElementById(controls)

  response.classList.toggle('active')
  const isActiveResponse = response.classList.contains('active')
  question.setAttribute('aria-expanded', isActiveResponse)
}

questions.forEach((item) => {
  item.addEventListener('click', handleActivateQuestion)
})