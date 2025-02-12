async function consoleOutput() {
    const response = await fetch('../data/any.json')
    const data = await response.json()
    console.log(data);
} 
consoleOutput();

// CARD CREAT

const playersBlockCoach = document.querySelector('.header_coach');
const playersBlockSt = document.querySelector('.players_st');
const playersBlockMid = document.querySelector('.players_mid');
const playersBlockDef = document.querySelector('.players_def');
const playersBlockGlkpr = document.querySelector('.players_glkpr');
async function cardFun() {
    const response = await fetch("../data/players.json")
    const data = await response.json()
    data[0].forEach(coach => {
        const roster_coach = document.createElement('div');
        roster_coach.classList.add('coach');

        roster_coach.innerHTML = `
            <img class="coach_img" src="${coach.avatar}" alt="${coach.coach_name}">
        `
        playersBlockCoach.append(roster_coach);
    });

    data[1].forEach(character => {
        const roster_st = document.createElement('div');
        roster_st.classList.add('card');
        roster_st.innerHTML = `
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
            </div>
        `
        playersBlockSt.append(roster_st);
    });

    data[2].forEach(character => {
        const roster_mid = document.createElement('div');
        roster_mid.classList.add('card');
        roster_mid.innerHTML = `
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
            </div>
        `
        playersBlockMid.append(roster_mid);
    });

    data[3].forEach(character => {
        const roster_def = document.createElement('div');
        roster_def.classList.add('card');
        roster_def.innerHTML = `
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
            </div>
        `
        playersBlockDef.append(roster_def);
    });

    data[4].forEach(character => {
        const roster_glkpr = document.createElement('div');
        roster_glkpr.classList.add('card');
        roster_glkpr.innerHTML = `
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
            </div>
        `
        playersBlockGlkpr.append(roster_glkpr);
    });
}
cardFun();

// CARD SLIDER
const detailedModal = document.querySelector('.detailed_modal');

function openFun() {detailedModal.style.display = 'flex'; setTimeout(() =>detailedModal.classList.add("show"), 10);}
function closeFun() {detailedModal.classList.remove("show"); setTimeout(() => detailedModal.style.display = "none", 300);}

async function mainDetModal() {
    const response = await fetch("../data/detailed.json");
    const data = await response.json();
    function detModalFun(index = 0) {
        openFun();
        detailedModal.innerHTML = `
            <div class="prev">&lt;</div>
            <div class="container_det_modal">
                <div class="left_container">
                    <div class="header_container">
                        <p class="number-sn_player">${data[index].number}</p>
                        <p class="name_player">${data[index].name}</p>
                        <p class="number-sn_player">${data[index].surname}</p>
                        
                    </div>
                    <div class="side_container">
                        <div class="side_left">                        
                            <img title="${data[index].name} ${data[index].surname}" class="side_left-img" src="${data[index].player_photo}" alt="name">
                            <div class="statistics_container">
                                <div class="statistics_header">
                                    <img class=" " src="../img/Real Madrid LOGO.jpg" alt="Real Madrid">
                                    <p>Статистика выступлений</p>
                                </div>
                                <div class="statistics_side">
                                    <p class="statistic_title">Турнир</p>
                                    <div class="statistic_container-img">
                                        <img class="statistic_img" title="Игры"  src="${data[index].match_img}" alt="">
                                    </div>
                                    <div class="statistic_container-img">
                                        <img class="statistic_img" title="Голы"  src="${data[index].gol_img}" alt="">
                                    </div>
                                    <div class="statistic_container-img">
                                        <img class="statistic_img" title="Ассист"  src="${data[index].assist_img}" alt="">
                                    </div>
                                    <div class="statistic_container-img">
                                        <img class="statistic_img" title="Минут гол"  src="${data[index].minut_img}" alt="">
                                        <img class="statistic_img" title="Минут гол"  src="${data[index].gol_img}" alt="">
                                    </div>
                                    <div class="statistic_container-img">
                                        <img class="statistic_img" title="Игровые минуты"  src="${data[index].minut_img}" alt="">
                                    </div>
                                </div>
                                <div class="statistics_data">
                                    <p class="statistic_title">Во всех турнирах</p>
                                    <p class="statistic_quan">${data[index].match_quan} </p>
                                    <p class="statistic_quan">${data[index].gol_quan} </p>
                                    <p class="statistic_quan">${data[index].assist_quan} </p>
                                    <p class="statistic_quan">${data[index].minut_gol_quan} </p>
                                    <p class="statistic_quan">${data[index].minut_quan} </p>
                                </div>
                            </div>
                        </div>
                        <div class="side_right">
                            <div class="trophies_container">
                                <div class="trophei">
                                    <img title="${data[index].tropheis[0].trophei_name}" class="trophei_img" src="${data[index].tropheis[0].trophei}" alt="">
                                    <div class="trophei_quan">${data[index].tropheis[0].trophei_quan}</div>
                                </div>
                                <div class="trophei">
                                    <img title="${data[index].tropheis[1].trophei_name}" class="trophei_img" src="${data[index].tropheis[1].trophei}" alt="">
                                    <div class="trophei_quan">${data[index].tropheis[1].trophei_quan}</div>
                                </div>
                                <div class="trophei">
                                    <img title="${data[index].tropheis[2].trophei_name}" class="trophei_img" src="${data[index].tropheis[2].trophei}" alt="">
                                    <div class="trophei_quan">${data[index].tropheis[2].trophei_quan}</div>
                                </div>
                                <div class="trophei">
                                    <img title="${data[index].tropheis[3].trophei_name}" class="trophei_img" src="${data[index].tropheis[3].trophei}" alt="">
                                    <div class="trophei_quan">${data[index].tropheis[3].trophei_quan}</div>
                                </div>
                                <div class="trophei">
                                    <img title="${data[index].tropheis[4].trophei_name}" class="trophei_img" src="${data[index].tropheis[4].trophei}" alt="">
                                    <div class="trophei_quan">${data[index].tropheis[4].trophei_quan}</div>
                                </div>
                                <div class="trophei">
                                    <a title="Все титиулы и победы" class="trophei_link" href="${data[index].tropheis[5].full_trophei}" target="_blank">&gt;</a>
                                </div>
                            </div>
                            <div class="info_box">
                                <ul class="info_box-content">
                                    <li class="info_box-label">Род.возраст: <span class="info_box-content">${data[index].years_old}</span></li>
                                    <li class="info_box-label">Место рождения: <span class="info_box-content"><img class="flag" src="${data[index].wasb_flag}" alt=""> ${data[index].wasb_city}</span></li>
                                    <li class="info_box-label">Национальность: <span class="info_box-content"><img class="flag" src="${data[index].country_flag}" alt=""> ${data[index].country}</span></li>
                                </ul>
                                <ul class="info_box-items">
                                    <li class="info_box-label">Рост: <span class="info_box-content"> ${data[index].height}</span></li>
                                    <li class="info_box-label">Амплуа: <span class="info_box-content"> ${data[index].amplua}</span></li>
                                </ul>
                                <ul class="info_box-items">
                                    <li class="info_box-label">Игрок сборной: <span class="info_box-content"><img class="flag" src="${data[index].play_flag}" alt=""> ${data[index].play_country}</span></li>
                                    <li class="info_box-label">Матчи за сборную/голы: <span class="info_box-content"> ${data[index].match_gol}</span></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="right_container">
                    <div class="close_detailed-modal">&times;</div>
                    <div class="club_inf-container">
                        <img class="club_logo" src="../img/Real Madrid LOGO.jpg" alt="Real Madrid">
                        <ul class="club_info">
                            <li class="club_name">Реал Мадрид</li>
                            <li class="club_liga"><img src="https://tmssl.akamaized.net//images/logo/verytiny/es1.png?lm=1725974302" alt=""> Ла Лига</li>
                            <li class="info_box-label">Место в лиге: <span class="info_box-content"><img class="flag" src="https://tmssl.akamaized.net//images/flagge/tiny/157.png?lm=1520611569" alt=""> Первая лига</span></li>
                            <li class="info_box-label">В команде с: <span class="info_box-content"> ${data[index].on_the_team}</span></li>
                            <li class="info_box-label">Контракт до: <span class="info_box-content"> ${data[index].contract_until}</span></li>
                        </ul>
                    </div>
                    <div class="player_price"> ${data[index].player_price}<span class="valuta">млн €</span></div>
                </div>
            </div>
            <div class="next">&gt;</div>
        `
        document.querySelector('.close_detailed-modal').onclick = closeFun;
        document.querySelector('.prev').onclick = () => {
            detailedModal.classList.add("fade-in");
            setTimeout(() => {
                index--
                if (index < 0) index = data.length - 1;
                detModalFun(index);
                detailedModal.classList.remove("fade-in");
            }, 300);
        };

        document.querySelector('.next').onclick = () => {
            detailedModal.classList.add("fade-out"); 
            setTimeout(() => {
                index++
                if (index > data.length - 1) index = 0;
                detModalFun(index);
                detailedModal.classList.remove("fade-out");
            }, 300);
        };
    }
    document.querySelectorAll('.card').forEach((item, index) => {
        item.onclick = () => detModalFun(index);
    })
}
mainDetModal();