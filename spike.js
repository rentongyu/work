var spikeText = document.querySelector('#spikeTime')

var minute = 40
var seconds = 60

var cssList = ['one', 'two', 'three', 'four', 'five']

function spike() {
    setInterval(function () {
        seconds--
        if (seconds == 0) {
            minute--
            seconds = 60
        }
        spikeText.innerText = `00:${minute}:${seconds}`
    }, 1000)
}

spike()

document.onclick = function (e) {
    var timer = null
    var showTime = 2000
    var top = 1
    var random = Math.floor(Math.random() * 5)
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id', cssList[random])
    newDiv.setAttribute('style', `top:${e.pageY - 16}px;left:${e.pageX - 10}px`)
    document.body.appendChild(newDiv)
    timer = setInterval(function () {
        showTime -= 100
        var offset = document.querySelector(`#${cssList[random]}`)
        if (showTime == 0) {
            var parent = document.getElementsByTagName('body')[0]
            parent.removeChild(offset)
            clearInterval(timer)
        }
        top++
        offset.style.top = (e.pageY - 16) - top + 'px'
    }, 20)
}

