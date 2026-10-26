// JavaScript source code

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"]; 
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50]; 
const stock     = [10, 25, 3, 0, 7]; 

const buscado = "Monitor";
var found = false;

for (var i = 0; i < productos.length; i++){

	if (buscado == productos[i]){
		console.log(productos[i] + " está en la posición " + i + ". Precio: " + precios[i].toFixed(2) + " €. Stock: " + stock[i]);
		found = true;
		break;
	}
}

if(!found){
	console.log("Posición: -1. " + buscado + " no existe en el catálogo");
}