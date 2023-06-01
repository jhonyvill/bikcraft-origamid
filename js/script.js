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

//Image gallery
const gallery = document.querySelectorAll('.bicycle-image img')

function handleGalleryClick(event){
  const image = event.currentTarget;
  const container = document.querySelector('.bicycle-image')

  let firstImageWidth = gallery[0].width; 
  for(let index = 0; index < gallery.length; index++){
    if(gallery[index].width !== firstImageWidth){
      container.prepend(image)
      break;
    }
  }
  // Solução apresentada no curso:
  // const largeMedia = window.matchMedia("(min-width: 1000px)").matches;
  // if(largeMedia){
  //   container.prepend(image)
  // }

}

gallery.forEach((item) => {
  item.addEventListener('click', handleGalleryClick)
})