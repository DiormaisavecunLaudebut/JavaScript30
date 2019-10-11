const textUnderlined = document.querySelectorAll('.general-underline')
const mobileCM = document.getElementById('mobile-community-management')
const mobileCMheight = mobileCM.querySelector('img').height

const alignMobileCMheight = () => {
  textUnderlined.forEach(element => {
    element.style.height = `${mobileCMheight + 20}px`
  })
}

alignMobileCMheight()
