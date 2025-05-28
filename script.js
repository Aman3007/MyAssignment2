// to select the shape
const shape = document.getElementById("shape")

var starttime = new Date().getTime();

// will generate us the different color for our shape
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// give us the new position for our shape
function newposition() {
  var left;
  var top;
  var wh;
  left = (Math.random() * 1100)
  top = (Math.random() * 300)
  wh = ((Math.random() * 200) + 50)
  shape.style.left = `${left}px`;
  shape.style.top = `${top}px`;
  shape.style.width = `${wh}px`;
  shape.style.background = getRandomColor();
  shape.style.display = "block";
  starttime = new Date().getTime();
}

// give us the reaction time to click the box
shape.onclick = function () {
  // alert("i am working")
  shape.style.display = "none";
  var endtime = new Date().getTime();
  var timetaken = (endtime - starttime) / 1000;
  alert(`the time take is : ${timetaken} seconds`)
  newposition()
}

// place our shape in random position in start
newposition()