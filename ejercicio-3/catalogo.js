// JavaScript source code

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"]; 
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50]; 
const stock     = [10, 25, 3, 0, 7]; 

var agotados = 0;

for (var i = 0; i < productos.length; i++)
{
	var udsText = "(" + stock[i] + " uds)";

	if(stock[i] <= 0){
		udsText = "(AGOTADO)"
		agotados++;
	}

	console.log(productos[i] + " - " + precios[i] + " € " + udsText);
}

console.log("");

console.log("Productos agotados: " + agotados);

