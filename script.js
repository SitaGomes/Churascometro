/*Carne - 400gr por pessoa >+ 6 horas - 650gr

Cerveja - 1200ml por pessoa >+ 6 horas - 2000ml

Refrigerante/água - 1000ml por pessoa >+ 6 horas 1500ml

Crianças valem por 0,5
*/
const adult = document.querySelector('#adult')
const kids = document.querySelector('#kid')
const time = document.querySelector('#time')



const pCarne = document.querySelector('#pCarne')
const pCerveja = document.querySelector('#pCerveja')
const pRefri = document.querySelector('#pRefri')


const foodB4 = {
    meat: 400,
    beer: 1200,
    coke: 1000
}


//* Cost after 6 hours
const foodAfter = {
    meat: 650,
    beer: 2000,
    coke: 1500
}

//* Final result variables
let carne, cerveja, refri

function show() {
    let hidden = document.querySelector('#ninja')

    if (hidden.style.display === 'none') {
        hidden.style.display = 'block'

        pCarne.innerText = `${makeCarne() / 1000}kg de carne`

        pCerveja.innerText = `${Math.ceil(makeCerveja() / 350)} latas de cerveja`

        pRefri.innerText = `${makeRefri() / 2000} Pet's de 2l de refrigerante/água`

    } else {
        hidden.style.display = 'none'
    }

}


function makeCarne() {
    if (time.value >= 6) {
        carne = foodAfter.meat * adult.value + (foodAfter.meat / 2 * kids.value)
    } else {
        carne = foodB4.meat * adult.value + (foodB4.meat / 2 * kids.value)
    }
    return carne
}

function makeCerveja() {
    if (time.value >= 6) {
        cerveja = foodAfter.beer * adult.value
    } else {
        cerveja = foodB4.beer * adult.value
    }
    return cerveja
}

function makeRefri() {
    if (time.value >= 6) {
        refri = foodAfter.coke * adult.value + (foodAfter.coke / 2 * kids.value)
    } else {
        refri = foodB4.coke * adult.value + (foodB4.coke / 2 * kids.value)
    }
    return refri
}
