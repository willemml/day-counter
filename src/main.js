const {
  app
} = require('electron').remote;
const {
  dialog
} = require('electron').remote;
var fs = require('fs')
var path = app.getPath('appData')
var filepath = path + "/day-counter-data.json"
var list = [];
var names = []
var dates = []
var counts = []
var numbers = []

var i
var u

function saveList() {
  var listJSON = Object.assign({}, list)
  var listJSONstring = JSON.stringify(listJSON)

  fs.writeFile(filepath, listJSONstring, (err) => {
    if (err) {
      console.log("An error ocurred creating the JSON file " + err.message)
    } else {
      console.log("The JSON file has been succesfully saved")
    }
  })
}

try {
  var listArray = require(filepath)
} catch (e) {
  if (e.code == 'MODULE_NOT_FOUND') {
    saveList()
  }
}

var listArray = require(filepath)
for (var i in listArray) {
  if (listArray.hasOwnProperty(i) && !isNaN(+i)) {
    list[+i] = listArray[i];
  }
}

function daysSince(firstday) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(firstday[0], firstday[1] - 1, firstday[2])
  var secondDate = new Date()
  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)))
  return diffDays - 1
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
  createArrayLists()
  createList()
}

function deleteCounter() {
  var dcnum = document.getElementById('dcnum').value
  dcnum = dcnum - 1
  list.splice(dcnum, 1)
  names.splice(dcnum, 1)
  dates.splice(dcnum, 1)
  counts.splice(dcnum, 1)
  numbers.splice(dcnum, 1)
  createArrayLists()
  createList()
  saveList()
}

function finishCounter() {
  for (i = 0; i < list.length; i++) {
    list[i][1] = makeTwoDig(JSON.stringify(+list[i][0][0])) + "-" + makeTwoDig(JSON.stringify(+list[i][0][1])) + "-" + makeTwoDig(JSON.stringify(+list[i][0][2]))
    list[i][2] = daysSince(list[i][0])
  }
}

function createArrayLists() {
  for (i = 0; i < list.length; i++) {
    names[i] = (list[i][3])
    dates[i] = (list[i][1])
    counts[i] = (list[i][2])
    numbers[i] = +i + 1
  }
}

function createList() {
  var btn0 = []
  var btn1 = []
  var btn2 = []
  var btn3 = []
  document.getElementById('names').innerHTML = ''
  document.getElementById('dates').innerHTML = ''
  document.getElementById('counts').innerHTML = ''
  document.getElementById('numbers').innerHTML = ''
  for (i = 0; i < names.length; i++) {
    btn0[i] = document.createElement("p")
    btn0[i].innerHTML = names[i]
    document.getElementById('names').appendChild(btn0[i]);
    btn1[i] = document.createElement("p")
    btn1[i].innerHTML = dates[i]
    document.getElementById('dates').appendChild(btn1[i]);
    btn2[i] = document.createElement("p")
    btn2[i].innerHTML = counts[i]
    document.getElementById('counts').appendChild(btn2[i]);
    btn3[i] = document.createElement("p")
    btn3[i].innerHTML = numbers[i]
    document.getElementById('numbers').appendChild(btn3[i]);
  }
}
finishCounter()
createArrayLists()
createList()
