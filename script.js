// Variables
let fahr = document.getElementById('temp')
let tempConvt = document.getElementById('convert')
let display = document.getElementById('converted')


// Convert Function
function tempConvert() {
    let input = document.getElementById('temp').value
    let fahrInput = (parseInt(input) - 32) * (5 / 9) 
    document.getElementById('converted').textContent = fahrInput + " C"
    if (tempConvert >= 30) {
        display.style.color = "red"
    }
    else if (tempConvt <= 0) {
        display.style.color = "lightblue"
    }
    else {
        display.style.color = "black"
    }
}


tempConvt.addEventListener("click", tempConvert)
