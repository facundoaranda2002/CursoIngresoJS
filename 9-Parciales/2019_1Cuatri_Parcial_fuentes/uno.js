/*
Aranda Facundo
2019 PARCIAL FUENTES 01
*/
function mostrar()
{
	let ladoDelTriangulo;
	let perimetroDelTriangulo;

	ladoDelTriangulo=prompt("Ingrese el valor de los lados del triangulo equilatero");
	ladoDelTriangulo=parseInt(ladoDelTriangulo);

	perimetroDelTriangulo=ladoDelTriangulo*3;

	alert("El perimetro del triangulo equilatero es de " + perimetroDelTriangulo + " cm");
}
