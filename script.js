/*Carne - 400gr por pessoa >+ 6 horas - 650gr

Cerveja - 1200ml por pessoa >+ 6 horas - 2000ml

Refrigerante/água - 1000ml por pessoa >+ 6 horas 1500ml

Crianças valem por 0,5
*/

function result() {
    let adult = document.querySelector('#adult')
    let kids = document.querySelector('#kid')
    let time = document.querySelector('#time')
    let hidden = document.querySelector('#ninja')

    //* Grabbing only the value of the inputs
    let adultConvert = adult.value
    let kidsConvert = kids.value //! One kid eats half 

    let meatB4 = 400
    let meatAfter = 650
    let beerB4 = 400
    let beerAfter = 650
    let cokeB4 = 400
    let cokeAfter = 650

    //* Final result variables
    let carne
    let cerveja
    let coke

    //! calculating the food, drinks 
    if (kidsConvert > 0) {

        if (time.value >= 6) {
            carne = (meatAfter / 2) * kidsConvert
            coke = (cokeAfter / 2) * kidsConvert

        } else {
            carne = (meatB4 / 2) * kidsConvert
            coke = (cokeB4 / 2) * kidsConvert

        }
    }

    if (time.value >= 6) {
        carne = + meatAfter * adultConvert
        cerveja = beerAfter * adultConvert
        coke = + cokeAfter * adultConvert

    } else {
        carne = + meatB4 * adultConvert
        cerveja = beerB4 * adultConvert
        coke = + cokeB4 * adultConvert
    }


    var screen = document.querySelector('#product')

    if (hidden.style.display === 'block') {

        hidden.style.display = 'none'
    } else {
        hidden.style.display = 'block'

        screen.innerText = `${carne}gr de carne, ${cerveja}ml de cerveja, ${coke}ml de refrigerante/água`
    }


}