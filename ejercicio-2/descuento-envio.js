// JavaScript source code

const importe = 30;
console.log("Importe: " + importe.toFixed(2) + " €");

var descuento = 0;

if (importe > 100){
	descuento = importe * 0.1;
}
else if (importe > 50){
	descuento = importe * 0.05;
}
console.log("Descuento: " + descuento.toFixed(2) + " €");

var descontado = importe - descuento;
console.log("Importe con descuento: " + descontado.toFixed(2) + " €");

var envio = 4.95;
if(descontado >= 50){
	envio = 0;
}

if(envio == 0){
	console.log("Envío gratis");
}
else{
	console.log("Envío: " + envio.toFixed(2) + " €");
}

var total = descontado + envio;
console.log("Total: " + total.toFixed(2) + " €");