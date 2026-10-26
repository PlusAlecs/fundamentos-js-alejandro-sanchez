// JavaScript source code

// Catálogo 
const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"]; 
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];   // sin IVA 
const stock     = [10, 25, 3, 0, 7]; 


// Pedido del cliente (también arrays paralelos) 
const pedidoProductos  = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"]; 
const pedidoCantidades = [2, 4, 1, 1, 1]; 

function calcularImporteLinea(precio, cantidad){
	return precio * cantidad;
}

function calcularIVA(importe) {
	return importe * (21/100);
}

function calcularDescuento(importe) {
	if (importe > 100){
		return importe * 0.1;
	}
	else if (importe > 50){
		return importe * 0.05;
	}
}

function calcularEnvio(importe) {
	var envio = 4.95;

	if(importe >= 50){
		envio = 0;
	}

	return envio;
}

function contarAgotados(stock) {
	var agotados = 0;
	for (var i = 0; i < stock.length; i++)
	{
		if(stock[i] <= 0){
			agotados++;
		}
	}
	return agotados;
}


function productoMasCaro(productos, precios){
	var masCaro = 0;

	for (var i = 0; i < productos.length; i++)
	{
		if(precios[i] > precios[masCaro]){
			masCaro = i;
		}
	}

	return productos[masCaro];
}

function valorInventario(precios, stock) {
	var valorInventario = 0;

	for (var i = 0; i < precios.length; i++)
	{
		valorInventario += precios[i] * stock[i];
	}

	return valorInventario;
}

function buscarProducto(productos, nombre) {

	for (var i = 0; i < productos.length; i++){
	
		if (nombre.toLowerCase() == productos[i].toLowerCase()){
			return i;
		}
	}

	return -1;
}

console.log("=== PROCESANDO PEDIDO ===");

var ticketProductos = [];
var ticketCantidades = [];
var ticketPrecios = [];
var agotados = [];

for(var i = 0; i < pedidoProductos.length; i++){
	var indice = buscarProducto(productos, pedidoProductos[i]);

	if(indice == -1){
		console.log("AVISO: " + pedidoProductos[i] + " no existe en el catálogo");
		continue;
	}
	else if(pedidoCantidades[i] <= stock[indice]){
		console.log("OK: " + pedidoCantidades[i] + " x " + pedidoProductos[i]);
		ticketProductos.push(pedidoProductos[i]);
		ticketCantidades.push(pedidoCantidades[i]);
		ticketPrecios.push(precios[indice]);
		stock[indice] -= pedidoCantidades[i];
		continue;
	}
	else if(stock[indice] == 0){
		console.log("AVISO: " + pedidoProductos[i] + " está agotado");
		agotados.push(pedidoProductos[i]);
		continue;
	}
	else{
		console.log("AVISO: Solo hay " + stock[indice] + " uds de " + pedidoProductos[i] + ", se sirven " + stock[indice]);
		ticketProductos.push(pedidoProductos[i]);
		ticketCantidades.push(stock[indice]);
		ticketPrecios.push(precios[indice]);
		agotados.push(pedidoProductos[i]);
		stock[indice] = 0;
	}
}
console.log("");
console.log("=== TICKET ===");

var subtotal = 0;
for(var i = 0; i < ticketProductos.length; i++){
	var linea = calcularImporteLinea(ticketPrecios[i], ticketCantidades[i]);
	console.log(ticketCantidades[i] + " x " + ticketProductos[i] + " (" + ticketPrecios[i].toFixed(2) + " €) = " + linea.toFixed(2) + " €");
	subtotal += linea;
}
console.log("Subtotal: " + subtotal);

var descuento = calcularDescuento(subtotal);
console.log("Descuento: -" + descuento.toFixed(2) + " €"); 

console.log("Base imponible: "+ (subtotal - descuento).toFixed(2) + " €");

var iva = calcularIVA(subtotal - descuento);
console.log("IVA (21%): "+ iva.toFixed(2) + " €");

var envio = calcularEnvio(subtotal - descuento);

if(envio == 0){
	console.log("Envío: Gratis");
}
else{
	console.log("Envío: "+ envio.toFixed(2) + " €");
}

console.log("TOTAL: " + (subtotal - descuento + iva).toFixed(2) + " €")

console.log("");
console.log("=== STOCK ACTUALIZADO ===");

var string = productos[0] + ": " + stock[0];
for(var i = 1; i < productos.length; i++){
	string = string + " · " + productos[i] + ": " + stock[i]
}
console.log(string);

string = "Agotados: " + agotados[0];
for(var i = 1; i < agotados.length; i++){
	string = string + ", " + agotados[i]
}
console.log(string);
