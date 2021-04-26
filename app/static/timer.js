const timerForm = document.getElementById("timerForm")
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")

timerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const hourInput = document.querySelector("[name='hour']")
    const minuteInput = document.querySelector("[name='minute']")
    const secondInput = document.querySelector("[name='second']")

    const timeDisplay = document.getElementById("time-display")
    timeDisplay.textContent = hourInput.value + ":" + minuteInput.value + ":" + secondInput.value

    hourInput.value = ""
    minuteInput.value = ""
    secondInput.value = ""
})

