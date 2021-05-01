var input = document.getElementById("name-input")

input.onkeyup = (e) => {
    let name = input.value
    if (e.keyCode === 13 && name.trim() && /\w+/.test(name)){
        if (name.length > 10){
            location.href = `/timer/${name.slice(0, 10)}`
        } else {
            location.href = `/timer/${name}`
        }  
    }
}