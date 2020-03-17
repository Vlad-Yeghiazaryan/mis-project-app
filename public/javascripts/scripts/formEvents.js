const from = document.querySelector('#form')

const inputName = document.querySelector('#inputName')
const inputAge = document.querySelector('#inputAge')
const inputProgram = document.querySelector('#inputProgram')
const selectSeason = document.querySelector('#selectSeason')
const inputColor = document.querySelector('#inputColor')
const sendEmailAds = document.querySelector('#sendEmailAds')

const tableDiv = document.querySelector('#student_table')
const formRefresh = document.querySelector('#formRefresh')

// Sending Data to the server
from.addEventListener('submit', async e => {
  e.preventDefault()
  const feilds = {
    name: inputName.value,
    age: inputAge.value,
    program: inputProgram.value,
    season: selectSeason.value,
    color: inputColor.value,
    sendAds: sendEmailAds.checked
  }
  from.reset()
  send(feilds)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      tableDiv.removeChild(tableDiv.lastChild)
      makeTable(json, tableDiv)
    })
    .catch(e => console.log(e))
})
formRefresh.addEventListener('click', e => {
  e.preventDefault()
  refreshTable()
    .then(res => res.json())
    .then(json => {
      console.log(json)
      tableDiv.removeChild(tableDiv.lastChild)
      makeTable(json, tableDiv)
    })
    .catch(e => console.log(e))
})
