let aBtn = document.querySelector('.clap')
let sBtn = document.querySelector('.drum')
let dBtn = document.querySelector('.kick')
let fBtn = document.querySelector('.boom')
let gBtn = document.querySelector('.ride')

let beat = new Audio('./audio/chicken_nugget_audio.m4a')

let audio_playing = false

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;


    if (name === 'a') {
        aBtn.classList.toggle('pressEvent')
        
        setTimeout(() => {aBtn.classList.toggle('pressEvent')}, 100)

        if (audio_playing === false) {
            beat.play()
            audio_playing = true
        }
        else {
            beat.pause()
            audio_playing = false
        }
    }

    if (name === 's') {
        sBtn.classList.toggle('pressEvent')
    }

    if (name === 'd') {
        dBtn.classList.toggle('pressEvent')
    }

    if (name === 'f') {
        fBtn.classList.toggle('pressEvent')
    }

    if (name === 'g') {
        gBtn.classList.toggle('pressEvent')
    }
}, false)

