const winOpenButtons = document.getElementsByClassName('win_')
const winModals = document.getElementsByClassName('win_modal')
const winClosesButtons = document.getElementsByClassName('win_modal_close')

const OpenWinModals = () => {
    console.log('hello');
    
    // winModals.style.display = 'block'
}

//     <iframe width="8px" height="4px" src="https://www.youtube-nocookie.com/embed/bGsnsBys6DA?si=7R3AAo0zINH1RW85&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

const ClosesWinModal = () => {
    winModals.style.display = 'none'
}

winOpenButtons.onclick = OpenWinModals
winClosesButtons.onclick = ClosesWinModal