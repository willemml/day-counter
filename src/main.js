const {
  app
} = require('electron').remote;
const {
  dialog
} = require('electron').remote;
var fs = require('fs')
var path = app.getPath('appData')
var filepath = path + "/day-counter-data.json"
var listArray = require(filepath)
var list = [];

var i
var u

for (var i in listArray) {
  if (listArray.hasOwnProperty(i) && !isNaN(+i)) {
    list[+i] = listArray[i];
  }
}

function saveList() {
  var listJSON = Object.assign({}, list)
  var listJSONstring = JSON.stringify(listJSON)

  fs.writeFile(filepath, listJSONstring, (err) => {
    if (err) {
      console.log("An error ocurred creating the JSON file " + err.message)
    }

    console.log("The JSON file has been succesfully saved")
  })
}

function daysSince(firstday) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(firstday[0], firstday[1] - 1, firstday[2])
  var secondDate = new Date()
  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)))
  return diffDays -1
}

function makeTwoDig(number) {
  if (number < 10) {
    return "0" + number
  } else {
    return number
  }
}

function createCounter() {
  var date = document.getElementById("date").value;
  date = date.split("-");
  var dateArray = new Array();
  for (var i = 0; i < date.length; i++) {
    dateArray.push(date[i]);
  }
  var name = document.getElementById("name").value
  var newCounterArray = [date, 'date', 'days_since', name]
  newCounterArray[0][1] = newCounterArray[0][1]
  list.push(newCounterArray)
  finishCounter()
  saveList()
  createList()
}

function deleteCounter() {
  var dcnum = document.getElementById('dcnum').value
  dcnum = dcnum - 1
  list.splice(dcnum, 1)
  createList()
  saveList()
}

function finishCounter() {
  for (i = 0; i < list.length; i++) {
    list[i][1] = makeTwoDig(JSON.stringify(+list[i][0][0])) + "-" + makeTwoDig(JSON.stringify(+list[i][0][1])) + "-" + makeTwoDig(JSON.stringify(+list[i][0][2]))
    list[i][2] = daysSince(list[i][0])
  }
}
finishCounter()

function createList() {
  document.getElementById('listloc').innerHTML = ''
  for (i = 0; i < list.length; i++) {
    var btn = []
    btn[i] = document.createElement("li")
    for (u = 1; u < 4; u++) {
      btn[i].innerHTML += " " + list[i][u];
    }
      btn[i].innerHTML += ' ' + (i + 1)
    document.getElementById('listloc').appendChild(btn[i]);
  }
}
createList()
