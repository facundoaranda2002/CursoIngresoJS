/*
Aranda Facundo
TP 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;
	alert("La suma es " + suma);
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;
	promedio = suma / 3;
	alert("El promedio es " + promedio);
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let IVA;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	IVA = 0.21;
	precioUno = precioUno + precioUno * IVA; //precio + IVA
	precioDos = precioDos + precioDos * IVA; //precio + IVA
	precioTres = precioTres + precioTres * IVA; //precio + IVA
	suma = precioUno + precioDos + precioTres;
	alert("El precio final es " + suma);
}