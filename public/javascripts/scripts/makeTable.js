// Make a table from json
const table = document.querySelector('#student_table')

function makeTable (jsonData) {
  // Making the headers
  const tr = document.createElement('tr')
  Object.keys(jsonData[0]).forEach(key => {
    const th = document.createElement('th')
    th.innerHTML = key
    tr.appendChild(th)
  })
  table.appendChild(tr)
  jsonData.forEach(record => {
    // Getting object keys
    const keys = Object.keys(record)
    const tr = document.createElement('tr')
    // Adding feilds
    for (let index = 0; index < keys.length; index++) {
      const td = document.createElement('td')
      td.innerText = record[keys[index]]
      tr.appendChild(td)
    }
    // making the record
    table.appendChild(tr)
  })
}
