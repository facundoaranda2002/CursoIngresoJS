/*
Aranda Facundo
Parcial 2018 04

Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".
*/
function mostrar()
{
	let primerNumero;
	let segundoNumero;
	let suma;
	let resta;
	let mensaje;

	primerNumero=prompt("Ingrese el primer numero");
	primerNumero=parseInt(primerNumero);
	segundoNumero=prompt("Ingrese el segundo numero");
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		mensaje=primerNumero + " " + segundoNumero;  
	}
	else
	{
		if(primerNumero>segundoNumero)
		{
			resta=primerNumero-segundoNumero;
			mensaje=resta;
		}
		else
		{
			suma=primerNumero+segundoNumero;
			if(suma>10)
			{
				mensaje="La suma es " + (suma) + " y " + " supero el 10";
			}
			else
			{
				mensaje=(suma);
			}
		}
	}

	alert(mensaje);
}
