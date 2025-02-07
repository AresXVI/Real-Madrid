// Exercises 1.1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

// const regGmail1 = /^[a-zA-Z0-9._-]+@(mail|inbox|bk|list|internet|xmail|yandex|gmail|yahoo|hotmail|outlook)\.(ru|com)$/
const regGmail2 = /^[a-zA-Z0-9._-]+@(mail.ru|inbox.ru|bk.ru|list.ru|internet.ru|xmail.ru|yandex.ru|gmail.com|yahoo.com|hotmai.com|outlook.com)$/
// Думаю второй вариант будет лучше проверяться т.к. Например: "gmail.ru" быть не может.

gmailButton.onclick = () => {
    if (regGmail2.test(gmailInput.value)) gmailResult.innerHTML = 'Valid email', gmailResult.style.color = 'green'
    else gmailResult.innerHTML = 'Invalid email', gmailResult.style.color = 'red'
}

// Exercises 1.2
const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let positionX = 290, positionY = 180

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight
let deltaX = 1;
let deltaY = 1;
const moveWithBounce = () => {
    if (positionX + deltaX > maxWidth || positionX + deltaX < 0) deltaX = -deltaX
    if (positionY + deltaY > maxHeight || positionY + deltaY < 0) deltaY= -deltaY
    positionX += deltaX
    positionY += deltaY
    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(moveWithBounce);
};
moveWithBounce();

// Exercises 2

const start = document.querySelector('#start')
const stopp = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const seconds = document.querySelector('#seconds')

let num = 0
let interval = null

start.onclick = () => {
    if (interval !== null) return
    interval = setInterval(() => {
        num++
        seconds.innerHTML = num
    }, 1000)
    setTimeout(() => { 
        clearInterval(interval)
    }, 4000)
}
stopp.onclick = () => {
    if (interval !== null) {
        clearInterval(interval)
        interval = null
    }
}
reset.onclick = () => {
        num = 0; seconds.innerHTML = num
        clearInterval(interval)
        interval = null
}