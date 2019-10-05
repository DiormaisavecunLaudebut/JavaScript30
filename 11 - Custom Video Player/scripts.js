const durationButtons = document.querySelectorAll('button[data-skip]')
const sliders = document.querySelectorAll('input[name]')
const playerButton = document.querySelector('.player__button')
const video = document.querySelector('video')
const progressBar = document.querySelector('.progress__filled')
let playing = false

const changeDuration = () => {
  durationButtons.forEach(btn => {
    btn.addEventListener('click', event => {
      if (event.currentTarget.dataset["skip"] == "-10") {
        video.currentTime -= 10
      } else {
        video.currentTime += 25
      }
    })
  })
}

const updateProgressBar = () => {
  video.addEventListener('timeupdate', e => {
    let percentage = video.currentTime / video.duration * 100
    progressBar.style.flexBasis = `${percentage}%`
  })
}

const updateTimeByClicking = () => {
  progressBar.parentElement.addEventListener('click', e => {
    let margin = progressBar.parentElement.offsetParent.offsetParent.offsetLeft
    let total = progressBar.parentElement.offsetWidth
    console.log((e.screenX - margin) / total)
    video.currentTime = ((e.screenX - margin) / total) * video.duration
  })
}

const playPause = () => {
  playerButton.addEventListener('click', e => {
    playing = !playing
    playing ? e.currentTarget.innerHTML = '❚ ❚' : e.currentTarget.innerHTML = '►'
    playing ? video.play() : video.pause()
  })
}
const changeSliders = () => {
  sliders.forEach(slider => {
    slider.addEventListener('change', event => {
      if (event.currentTarget["name"] == "volume") {
        video.volume = event.currentTarget.value
      } else {
        video.playbackRate = event.currentTarget.value
      }
    })
  })
}
updateTimeByClicking()
updateProgressBar()
playPause()
changeSliders()
changeDuration()
