const timerForm = document.getElementById("timerForm")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const inputFields = document.querySelectorAll('input')
const timeUnits = ['hour', 'minute', 'second']

inputFields.forEach((field) => {
    field.addEventListener("input", (e) => {
        e.preventDefault()
        if (field.value > field.max){
            field.value = field.max
        }
        if (field.value < 0){
            field.value = 0
        }
    })

    field.addEventListener("onkeyup", (e) => {
        e.preventDefault()
        field.value++
    })
})

timerForm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const timeDisplay = document.getElementById("time-display")
    let timeObject = {}

    timeUnits.forEach( (unit) => {
        const input = document.querySelector(`[name='${unit}']`)
        timeObject[unit] = input.value
    })

    showTime(timeObject)

    timeUnits.forEach((unit) => {
        const input = document.querySelector(`[name='${unit}']`)
        input.value = ""
    })
})

startBtn.addEventListener("click", (e) => {
    
    let newSetTime = document.getElementById("time-display").textContent.split(":")
    let timeObject = {};

    for (let i = 0; i < newSetTime.length; i++) {
        timeObject[timeUnits[i]] = newSetTime[i]
    }

    var countdown = setInterval(() => {
        if (timeObject.second == 0){

            if (timeObject.minute == 0){

                if (timeObject.hour == 0){
                    alert("Time's UP!")
                }
                else{
                    timeObject.hour = String(timeObject.hour - 1)
                    timeObject.minute = String(59)
                }

            }
            else {
                timeObject.minute = String(timeObject.minute - 1)
                timeObject.second = String(59)
            }

        }
        else {
            timeObject.second = String(timeObject.second - 1)
        }
        showTime(timeObject)
    }, 1000)

    pauseBtn.addEventListener("click", () => {
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

