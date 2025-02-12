const backVideo = document.querySelector('.back_video')
const winImg = document.querySelectorAll('.win__img')
backVideo.onclick = closeVideo

function openVideo() {
    backVideo.style.display = 'flex'
    document.body.style.overflow = ''
}

function closeVideo() {
    backVideo.style.display = 'none'
    document.body.style.overflow = ''
    const yt = document.querySelector('iframe')
    yt.src = yt.src
}

async function mainFunc() {
    try {
        const response = await fetch('../data/tropheis.json');
        const data = await response.json();
        const videoFunc = (index = 0) => {
            openVideo();
            backVideo.innerHTML = `
                <div class="close_video">&#10006;</div>
                <iframe width="80%" height="80%" src="${data[index].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            `
            backVideo.onclick = closeVideo
            document.querySelector('.close_video').onclick = closeVideo
        }
            winImg.forEach((item, index) => {
                item.onclick = () => videoFunc(index)
            });
    } catch (error) {
        console.log(error);
    }
}
mainFunc()


