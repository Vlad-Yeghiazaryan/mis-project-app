const from = document.querySelector('#form')

const inputName = document.querySelector('#inputName')
const inputAge = document.querySelector('#inputAge')
const inputProgram = document.querySelector('#inputProgram')
const selectSeason = document.querySelector('#selectSeason')
const inputColor = document.querySelector('#inputColor')
const sendEmailAds = document.querySelector('#sendEmailAds')

// Sending Data to the server
from.addEventListener('submit', e => {
  e.preventDefault()
  const feilds = {
    name: inputName.value,
    age: inputAge.value,
    program: inputProgram.value,
    season: selectSeason.value,
    color: inputColor.value,
    sendAds: sendEmailAds.checked
  }
  send(feilds)
})
