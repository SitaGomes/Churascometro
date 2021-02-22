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

    let adultConvert = adult.value
    let timeConvert = +time.value
    let kidsConvert = +kids.value


    //! 
    if (time.value >= 6) {
        var carne = 650 * adultConvert
        var cerveja = 2000 * adultConvert
        var coke = 1500 * adultConvert

    } else {
        carne = 400 * adultConvert
        cerveja = 1200 * adultConvert
        coke = 1000 * adultConvert

    }

    var screen = document.querySelector('#product')

    if (hidden.style.display === 'block') {

        hidden.style.display = 'none'
    } else {
        hidden.style.display = 'block'

        screen.innerText = `${carne}gr de carne, ${cerveja}ml de cerveja, ${coke}ml de refrigerante/água`
    }


}