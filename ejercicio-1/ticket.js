// JavaScript source code

const producto = "Monitor"; 
const precio = 189;      // precio por unidad, sin IVA 
const cantidad = 2; 
const porcentajeIva = 21; 

var subtotal = precio * cantidad;
var iva = subtotal * (21/100);
var total = subtotal + iva;