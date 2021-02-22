/*Carne - 400gr por pessoa >+ 6 horas - 650gr

Cerveja - 1200ml por pessoa >+ 6 horas - 2000ml

Refrigerante/água - 1000ml por pessoa >+ 6 horas 1500ml

Crianças valem por 0,5
*/
let adult = document.querySelector('#adult')
let kids = document.querySelector('#kid')
let time = document.querySelector('#time')
let hidden = document.querySelector('#ninja')

//* Grabbing only the value of the inputs
let adultConvert = adult.value
let kidsConvert = kids.value

let meatB4 = 400
let meatAfter = 650
let beerB4 = 1200
let beerAfter = 2000
let cokeB4 = 1000
let cokeAfter = 1500

//* Final result variables
let carne, cerveja, coke

function result() {

    //! Calculating the food, drinks 
    if (time.value >= 6) {
        carne = meatAfter * adultConvert
        cerveja = beerAfter * adultConvert
        coke = cokeAfter * adultConvert

    } else {
        carne = meatB4 * adultConvert
        cerveja = beerB4 * adultConvert
        coke = cokeB4 * adultConvert
    }

    if (kidsConvert > 0) {

        //! One kid eats half 
        if (time.value >= 6) {
            carne += (meatAfter / 2) * kidsConvert
            coke += (cokeAfter / 2) * kidsConvert

        } else {
            carne += (meatB4 / 2) * kidsConvert
            coke += (cokeB4 / 2) * kidsConvert

        }
    }

    var screen = document.querySelector('#product')

    if (hidden.style.display === 'block') {

        hidden.style.display = 'none'
    } else {
        hidden.style.display = 'block'

        if (adultConvert < 0 || kidsConvert < 0) {
            return screen.innerText = 'Valores Inválidos'
        } else {

            return screen.innerText = `${carne}gr de Carne, ${cerveja}ml de Cerveja, ${coke}ml de Refrigerante/Água`
        }
    }
}