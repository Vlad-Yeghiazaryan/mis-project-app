// Make a table from json
function makeTable (jsonData, tableDiv) {
  // Making the headers
  const table = document.createElement('table')
  table.setAttribute('class', 'table table-bordered table-striped')
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
  tableDiv.appendChild(table)
}
