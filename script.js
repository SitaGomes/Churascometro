/*Carne - 400gr por pessoa >+ 6 horas - 650gr

Cerveja - 1200ml por pessoa >+ 6 horas - 2000ml

Refrigerante/água - 1000ml por pessoa >+ 6 horas 1500ml

Crianças valem por 0,5
*/
let adultRaw = document.querySelector('#adult')
let kidsRaw = document.querySelector('#kid')
let time = document.querySelector('#time')


let pCarne = document.querySelector('#pCarne')
let pCerveja = document.querySelector('#pCerveja')
let pRefri = document.querySelector('#pRefri')


//* Grabbing only the value of the inputs
let adult = adultRaw.value
let kids = kidsRaw.value

const foodB4 = {
    meat: 400,
    beer: 1200,
    refri: 1000
}

//* Cost after 6 hours
const foodAfter = {
    meat: 650,
    beer: 2000,
    refri: 1500
}

//* Final result variables
let carne, cerveja, refri

function show() {
    let hidden = document.querySelector('#ninja')

    if (hidden.style.display === 'none') {
        hidden.style.display = 'block'

        pCarne.textContent = `${kids}`

    } else {
        hidden.style.display = 'none'
    }

}




function makeCarne() {
    if (time.value >= 6) {
        carne = foodAfter.meat * adult + (foodAfter.meat / 2 * kids)
    } else {
        carne = foodB4.meat * adult + (foodB4.meat / 2 * kids)
    }
    return carne
}

function makeCerveja() {
    if (time.value >= 6) {
        return cerveja = foodAfter.beer * adult
    } else {
        cerveja = foodB4.beer * adult
    }
    return cerveja
}

function makeRefri() {
    if (time.value >= 6) {
        refri = foodAfter.coke * adult + (foodAfter.coke / 2 * kids)
    } else {
        refri = foodB4.coke * adult + (foodB4.coke / 2 * kids)
    }
    return refri
}
