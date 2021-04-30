const timerForm = document.getElementById("timerForm")
const resetBtn = document.getElementById("resetBtn")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const inputFields = document.querySelectorAll('input')
const timeUnits = ['hour', 'minute', 'second']

inputFields.forEach((field) => {
    field.addEventListener("input", (e) => {
        let length = field.value.length
        if (field.value < 10 && length == 1){
            field.value = '0' + field.value
        }
        else if (length > 2){
            console.log(field.value)
            field.value = field.value.slice(length - 2, length)
        }
        if (field.value > field.max){
            field.value = field.max
        }
        if (field.value < 0){
            field.value = 0
        }
    })
    console.log(field.value)
    field.addEventListener("onkeyup", (e) => {
        e.preventDefault()
        field.value++
    })
})

timerForm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const timeDisplay = document.getElementById("time-display")
    let timeObjectFromInputFields = {}

    timeUnits.forEach( (unit) => {
        const input = document.querySelector(`[name='${unit}']`)
        timeObjectFromInputFields[unit] = input.value
    })

    showTime(timeObjectFromInputFields)

    timeUnits.forEach((unit) => {
        const input = document.querySelector(`[name='${unit}']`)
        input.value = ""
    })
})

startBtn.addEventListener("click", (e) => {
    
    let newSetTime = document.getElementById("time-display").textContent.split(":")
    let timeObjectFromDiv = {};

    for (let i = 0; i < newSetTime.length; i++) {
        timeObjectFromDiv[timeUnits[i]] = newSetTime[i]
    }

    var countdown = setInterval(() => {
        if (timeObjectFromDiv.second == 0){
            if (timeObjectFromDiv.minute == 0){
                if (timeObjectFromDiv.hour == 0){
                    alert("Time's UP!")
                    clearInterval(countdown)
                }
                else{
                    timeObjectFromDiv.hour = String(timeObjectFromDiv.hour - 1)
                    timeObjectFromDiv.minute = String(59)
                    timeObjectFromDiv.second = String(59)
                }
            }
            else {
                timeObjectFromDiv.minute = String(timeObjectFromDiv.minute - 1)
                timeObjectFromDiv.second = String(59)
            }
        }
        else {
            timeObjectFromDiv.second = String(timeObjectFromDiv.second - 1)
        }
        showTime(timeObjectFromDiv)
    }, 1000)

    pauseBtn.addEventListener("click", () => {
        clearInterval(countdown)
    })

    timerForm.addEventListener("submit", () => {
        clearInterval(countdown)
    })
})


function showTime(timeObject){

    let finalTimeArray = []

    for (let i = 0; i < timeUnits.length; i++) {
        let time = timeObject[timeUnits[i]]
        if (time < 10 && time.length < 2){
            time = time.length ? '0' + time : '00' + time
        }
        finalTimeArray.push(time)
    }

    document.getElementById('time-display').textContent = finalTimeArray.join(":")
}

