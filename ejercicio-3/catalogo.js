// JavaScript source code

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"]; 
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50]; 
const stock     = [10, 25, 3, 0, 7]; 

for (var i = 0; i < productos.length; i++)
{
	var udsText = "(AGOTADO)"

	if(stock[i] > 0){
		udsText = "(" + stock[i] + " uds)"
	}

	console.log(productos[i] + " - " + precios[i] + " € " + udsText);
}