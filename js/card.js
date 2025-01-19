const playersBlockCoach = document.querySelector('.header_coach')
const playersBlockSt = document.querySelector('.players_st')
const playersBlockMid = document.querySelector('.players_mid')
const playersBlockDef = document.querySelector('.players_def')
const playersBlockGlkpr = document.querySelector('.players_glkpr')


const anyRequest = new XMLHttpRequest()
anyRequest.open('GET', '../data/any.json')
anyRequest.setRequestHeader('Content-type', 'application/json')
anyRequest.send()
anyRequest.onload = () => {
    const data = JSON.parse(anyRequest.response)
    console.log(data);
    
}
console.log(seks);



const request = new XMLHttpRequest()
request.open('GET', '../data/players.json', true)
request.setRequestHeader('Content-type', 'application/json')
request.send()

request.onload = () => {
    const data = JSON.parse(request.response)

    data[0].forEach(coach => {
        const card_coach = document.createElement('div')
        card_coach.classList.add('coach')

        card_coach.innerHTML = `
            <img class="coach_img" src="${coach.avatar}" alt="${coach.coach_name}">
        `
        playersBlockCoach.append(card_coach)
    })

    data[1].forEach(character => {
        const card_st = document.createElement('div')
        card_st.classList.add('card')

        card_st.innerHTML = `
            <div class="tittle">
                    <div class="title_date">
                        <span class="rating">${character.rating}</span>
                        <span class="position">${character.position}</span>
                        <img class="country" src="${character.country}" alt="country">
                        <img class="club" alt="club" src="${character.club}">
                    </div>
                    <div class="avatar">
                        <img alt="${character.player_name}" src="${character.avatar}"/>
                    </div>
                </div> 
                <div class="player_name">${character.player_name}</div>
                <div class="dates">
                    <div class="left_dates">
                        <div class="dates_number">
                            <span class="pac">${character.pac}</span>
                            <span class="sho">${character.sho}</span>
                            <span class="pas">${character.pas}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">PAC</div>
                            <div class="dates_font">SHO</div>
                            <div class="dates_font">PAS</div>
                        </div>
                        
                    </div>
                    <div class="right_dates">
                        <div class="dates_number">
                            <span class="dri">${character.dri}</span>
                            <span class="def">${character.def}</span>
                            <span class="phy">${character.phy}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">DRI</div>
                        <div class="dates_font">DEF</div>
                        <div class="dates_font">PHY</div>
                        </div>
                    </div>
                </div>
        `
        playersBlockSt.append(card_st)
    });

    data[2].forEach(character => {
        const card_mid = document.createElement('div')
        card_mid.classList.add('card')

        card_mid.innerHTML = `
            <div class="tittle">
                    <div class="title_date">
                        <span class="rating">${character.rating}</span>
                        <span class="position">${character.position}</span>
                        <img class="country" src="${character.country}" alt="country">
                        <img class="club" alt="club" src="${character.club}">
                    </div>
                    <div class="avatar">
                        <img alt="${character.player_name}" src="${character.avatar}"/>
                    </div>
                </div> 
                <div class="player_name">${character.player_name}</div>
                <div class="dates">
                    <div class="left_dates">
                        <div class="dates_number">
                            <span class="pac">${character.pac}</span>
                            <span class="sho">${character.sho}</span>
                            <span class="pas">${character.pas}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">PAC</div>
                            <div class="dates_font">SHO</div>
                            <div class="dates_font">PAS</div>
                        </div>
                        
                    </div>
                    <div class="right_dates">
                        <div class="dates_number">
                            <span class="dri">${character.dri}</span>
                            <span class="def">${character.def}</span>
                            <span class="phy">${character.phy}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">DRI</div>
                        <div class="dates_font">DEF</div>
                        <div class="dates_font">PHY</div>
                        </div>
                    </div>
                </div>
        `
        playersBlockMid.append(card_mid)
    });

    data[3].forEach(character => {
        const card_def = document.createElement('div')
        card_def.classList.add('card')

        card_def.innerHTML = `
            <div class="tittle">
                    <div class="title_date">
                        <span class="rating">${character.rating}</span>
                        <span class="position">${character.position}</span>
                        <img class="country" src="${character.country}" alt="country">
                        <img class="club" alt="club" src="${character.club}">
                    </div>
                    <div class="avatar">
                        <img alt="${character.player_name}" src="${character.avatar}"/>
                    </div>
                </div> 
                <div class="player_name">${character.player_name}</div>
                <div class="dates">
                    <div class="left_dates">
                        <div class="dates_number">
                            <span class="pac">${character.pac}</span>
                            <span class="sho">${character.sho}</span>
                            <span class="pas">${character.pas}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">PAC</div>
                            <div class="dates_font">SHO</div>
                            <div class="dates_font">PAS</div>
                        </div>
                        
                    </div>
                    <div class="right_dates">
                        <div class="dates_number">
                            <span class="dri">${character.dri}</span>
                            <span class="def">${character.def}</span>
                            <span class="phy">${character.phy}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">DRI</div>
                        <div class="dates_font">DEF</div>
                        <div class="dates_font">PHY</div>
                        </div>
                    </div>
                </div>
        `
        playersBlockDef.append(card_def)
    })

    data[4].forEach(character => {
        const card_glkpr = document.createElement('div')
        card_glkpr.classList.add('card')
    
    card_glkpr.innerHTML = `
            <div class="tittle">
                    <div class="title_date">
                        <span class="rating">${character.rating}</span>
                        <span class="position">${character.position}</span>
                        <img class="country" src="${character.country}" alt="country">
                        <img class="club" alt="club" src="${character.club}">
                    </div>
                    <div class="avatar">
                        <img alt="${character.player_name}" src="${character.avatar}"/>
                    </div>
                </div> 
                <div class="player_name">${character.player_name}</div>
                <div class="dates">
                    <div class="left_dates">
                        <div class="dates_number">
                            <span class="pac">${character.div}</span>
                            <span class="sho">${character.han}</span>
                            <span class="pas">${character.kic}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">DIV</div>
                            <div class="dates_font">HAN</div>
                            <div class="dates_font">KIC</div>
                        </div>
                        
                    </div>
                    <div class="right_dates">
                        <div class="dates_number">
                            <span class="dri">${character.ref}</span>
                            <span class="def">${character.spe}</span>
                            <span class="phy">${character.pos}</span>
                        </div>
                        <div class="dates_text">
                            <div class="dates_font">REF</div>
                            <div class="dates_font">SPE</div>
                            <div class="dates_font">POS</div>
                        </div>
                    </div>
                </div>
        `
        playersBlockGlkpr.append(card_glkpr)
    })
}
