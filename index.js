
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-measurements")
const volumeEl = document.getElementById("volume-measurements")
const massEl = document.getElementById("mass-measurements")
const convertBtn = document.getElementById("convert-btn")

function convert() {
    lengthEl.innerText = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`

    volumeEl.innerText = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`

    massEl.innerText = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`   
}

convertBtn.addEventListener("click", convert)

