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

//  POST DATA

const form = document.querySelector('form')
const token = '7656689030:AAGsLNbfICHUl-mMIk2c6rdAJm0t12IduRM'
const chat_id = '@Acers_group_bot'
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

form.onsubmit = (event) => {
    event.preventDefault()

    const {name, phone} = (Object.fromEntries(new FormData(form).entries()))

    const text = `Имя: ${name}\nНомер: ${phone}`

    fetch(URL_API, {
        method: 'POST',
        headers: {"Content-type": "application/json()"},
        body: JSON.stringify({
            chat_id: chat_id,
            text: text,
        })
    })
}