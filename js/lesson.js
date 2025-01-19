// PHONE BLOCK

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResuls = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResuls.innerHTML = ('OK')
        phoneResuls.style.color = ('green')
    } else {
        phoneResuls.innerHTML = ('Invalid phone number')
        phoneResuls.style.color = 'red'
    }
}

//  TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()
let ares
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

const autoTabs = (index = 0) => {
    setInterval(() => {
        index++
        if (index > tabs.length -1) index = 0
        hideTabContent()
        showTabContent(index)
    }, 1000)
}

autoTabs()

// CONVERTOR

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/convertor.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            if (element.id === 'som') {
                targetElement1.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value / data.eur).toFixed(2);
            } if (element.id === 'usd') {
                targetElement1.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = ((element.value * data.usd) / data.eur).toFixed(2);
            } if (element.id === 'eur') {
                targetElement1.value = (element.value * data.eur).toFixed(2);
                targetElement2.value = ((element.value * data.eur) / data.usd).toFixed(2);
            } if (element.value === '') {
                targetElement1.value = '';
                targetElement2.value = '';
            }
        };
    }; 
}
converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)

// DRY -don't repeat yourself (не повторять самого себя)
// KISS  - keep it super simple

// CARD SWITCHER

const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let cardId = 1
let dataFun = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)   
        .then(response => response.json())
        .then(data => {
            const {title, completed, id} = data
            cardBlock.innerHTML = `
                <p>${title}</p>
                <p>${completed}</p>
                <p>${id}</p>
            `
        })
}
dataFun()
btnNext.onclick = () => {
    cardId++
    if (cardId > 200) cardId = 1
    dataFun()
}
btnPrev.onclick = () => {
    cardId--
    if (cardId < 1) cardId = 200
    dataFun()
}