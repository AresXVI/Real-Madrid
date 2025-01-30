const cardContainer = document.querySelector('.card_container')
const cardTitle = document.querySelector('.card_text-title')
const cardBody = document.querySelector('.card_text-body')
cardFun = async () => {
    try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const data = await response.json()
            data.slice(0, 10).forEach(element => {
                const card = document.createElement('div')
                card.classList.add('card')
                card.innerHTML = `
                <div class="card_img"></div>
                <div class="card_text">
                    <div class="card_text-title">${element.title}</div>
                    <div class="card_text-body">${element.body}</div>
                </div>
            `
            cardContainer.append(card)
            });
    } catch (error) {
        console.log(error);
    }
}
cardFun()


