const API_URL = 'https://api.binance.com/api/v3/ticker/price'

fetch(API_URL)
    .then( respuesta => respuesta.json() )
    .then( datos => mostrarDatos(datos))

const mostrarDatos = (data)=>{
    let body = ''
    for (let i=0; i < data.length; i++) {
    body +=
    `<tr><td>${data[i].symbol}</td><td>${data[i].price}$</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}