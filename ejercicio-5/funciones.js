// JavaScript source code

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


