const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close') 

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}


const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = openModal
modalCloseButton.onclick = () => {
    closeModal()
    window.removeEventListener('scroll', addScroll)
}   

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
        window.removeEventListener('scroll', addScroll)
    }
}

const addScroll = () => {
    const scl = window.scrollY + window.innerHeight + 1
    if (scl >= document.documentElement.scrollHeight) {
        modal.style.display = 'block'
    }   
}
window.addEventListener('scroll', addScroll)
// addEventListener('scroll')
// removeEventListener('scroll')