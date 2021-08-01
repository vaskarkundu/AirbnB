const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.menu')


loginBtn.addEventListener('click', openModal)

window.addEventListener('click', outsideClick)

function openModal(){
  modal.style.display = 'block'
}
function outsideClick(e){
    if (e.target == modal){
      modal.style.display = 'none'
    }
    
  
  }
