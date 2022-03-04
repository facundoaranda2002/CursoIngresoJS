/*
Aranda Facundo
2018 PARCIAL FUENTES 01
*/
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho=prompt("Ingrese el ancho del rectangulo");
	largo=prompt("Ingrese el largo del rectangulo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;
	alert("el perimetro del rectangulo es " + perimetro);

}
