/*
Aranda Facundo
TP 02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoDeTerreno;
	let anchoDeTerreno;
	let perimetroDeTerreno;
	let cantidadDeAlambre;

	largoDeTerreno = document.getElementById('txtIdLargo').value;
	anchoDeTerreno = document.getElementById('txtIdAncho').value;

	largoDeTerreno = parseInt(largoDeTerreno);
	anchoDeTerreno = parseInt(anchoDeTerreno);

	perimetroDeTerreno = largoDeTerreno * 2 + anchoDeTerreno * 2; //cantidad de alambre para 1 hilo
	cantidadDeAlambre = perimetroDeTerreno * 3; //cantidad de alambre final(3 hilos)

	alert("Se necesitan comprar " + cantidadDeAlambre + " metros de alambre");
}
function Circulo () 
{
	let radioDeTerreno;
	let perimetroDeTerreno;
	let cantidadDeAlambre;

	radioDeTerreno = document.getElementById('txtIdRadio').value;

	radioDeTerreno = parseInt(radioDeTerreno);

	perimetroDeTerreno = 2 * 3.14 * radioDeTerreno //cantidad de alambre para 1 hilo
	cantidadDeAlambre = perimetroDeTerreno * 3; //cantidad de alambre final(3 hilos)

	alert("Se necesitan comprar " + cantidadDeAlambre + " metros de alambre");
}
function Materiales () 
{
	let largoDeTerreno;
	let anchoDeTerreno;
	let areaDeTerreno; 
	let bolsasDeCemento;
	let bolsasDeCal;

	largoDeTerreno = document.getElementById('txtIdLargo').value;
	anchoDeTerreno = document.getElementById('txtIdAncho').value;

	largoDeTerreno = parseInt(largoDeTerreno);
	anchoDeTerreno = parseInt(anchoDeTerreno);

	areaDeTerreno = largoDeTerreno * anchoDeTerreno;
	bolsasDeCemento = areaDeTerreno * 2;
	bolsasDeCal = areaDeTerreno * 3;

	alert("Se necesitan comprar " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal");
}