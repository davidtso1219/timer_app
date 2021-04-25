var input = document.getElementById("name-input")

input.onkeyup = (e) => {
    let name = input.value
    if (e.keyCode === 13 && name.trim() && /\w+/.test(name)){
        location.href = `/timer/${name}`
    }
}