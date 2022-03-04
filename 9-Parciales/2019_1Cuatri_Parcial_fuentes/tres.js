/*
Aranda Facundo
2019 PARCIAL FUENTES 03
*/
function mostrar()
{
	let precio;
	let porcentajeDeDescuento;
	let descuento;
	let precioFinal;

	precio=prompt("Ingrese el precio ");
	porcentajeDeDescuento=prompt("Ingrese el porcentaje de descuento ");

	precio=parseInt(precio);
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

	descuento=precio*(porcentajeDeDescuento/100);
	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value="El precio final es " + precioFinal;
}
