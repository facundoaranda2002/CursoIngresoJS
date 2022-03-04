/*
Aranda Facundo
TP 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosCentigrados;
	let gradosFahrenheit;

	gradosFahrenheit = document.getElementById('txtIdTemperatura').value;

	gradosFahrenheit = parseInt(gradosFahrenheit);

	gradosCentigrados = gradosFahrenheit - 32;
	gradosCentigrados = gradosCentigrados * 5;
	gradosCentigrados = gradosCentigrados / 9;

	alert(gradosFahrenheit + " Fahrenheit son " + gradosCentigrados + " centigrados");
}

function CentigradosFahrenheit () 
{
	let gradosCentigrados;
	let gradosFahrenheit;

	gradosCentigrados = document.getElementById('txtIdTemperatura').value;

	gradosCentigrados = parseInt(gradosCentigrados);

	gradosFahrenheit = gradosCentigrados * 9;
	gradosFahrenheit = gradosFahrenheit / 5;
	gradosFahrenheit = gradosFahrenheit + 32;

	alert(gradosCentigrados + " centigrados son " + gradosFahrenheit + " Fahrenheit");
}
