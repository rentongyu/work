
var wrapper = document.querySelector(".ppt-container")
var imgBox = document.querySelector(".show-img")
var next = document.querySelector(".arrow_right")
var prev = document.querySelector(".arrow_left")

next.onclick = function () {
  nextPic()
}

prev.onclick = function () {
  prevPic()
}

function nextPic() {
  var newLeft
  if (wrapper.style.left === "-3330px") {
    newLeft = -1110
  } else {
    newLeft = parseInt(wrapper.style.left) - 555
  }
  wrapper.style.left = newLeft + 'px'
}

function prevPic() {
  var newLeft
  if (wrapper.style.left === "0px") {
    newLeft = -2220
  } else {
    newLeft = parseInt(wrapper.style.left) + 555
  }
  wrapper.style.left = newLeft + 'px'
}

var timer = null
function autoPlay() {
  timer = setInterval(function () {
    nextPic()
  }, 2000)
}

autoPlay()

imgBox.onmouseenter = function () {
  clearInterval(timer)
}

imgBox.onmouseleave = function () {
  autoPlay()
}