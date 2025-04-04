const inputEl = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");

const lengthDiv = document.getElementById("length");
const volumeDiv = document.getElementById("volume");
const massDiv = document.getElementById("mass");

inputEl.value = 20;
render(inputEl.value);

function convertMeterFeet(value){
    return (value * 3.281).toFixed(3);
}

function convertFeetMeter(value){
    return (value / 3.281).toFixed(3);
}

function convertLiterGallon(value){
    return (value * 0.264).toFixed(3);
}

function convertGallonLiter(value){
    return (value / 0.264).toFixed(3);
}

function convertKilogramPound(value){
    return (value * 2.204).toFixed(3);
}

function convertPoundKilogram(value){
    return (value / 2.204).toFixed(3);
}

function render(value){
    lengthDiv.lastElementChild.textContent = `${value} meters = ${convertMeterFeet(value)} feet | ${value} feet = ${convertFeetMeter(value)} meters`;

    volumeDiv.lastElementChild.textContent = `${value} liters = ${convertLiterGallon(value)} gallons | ${value} gallons = ${convertGallonLiter(value)} liters`;

    massDiv.lastElementChild.textContent = `${value} kilos = ${convertKilogramPound(value)} pounds | ${value} pounds = ${convertKilogramPound(value)} kilos`;
}