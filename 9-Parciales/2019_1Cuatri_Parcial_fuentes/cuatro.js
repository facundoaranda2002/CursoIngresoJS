/*
Aranda Facundo
Parcial 2019 04
*/
function mostrar()
{
	let primerNumero;
	let segundoNumero;
	let resta;
	let suma;

	primerNumero=prompt("Ingrese el primer numero");
	segundoNumero=prompt("Ingrese el segundo numero");

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		alert("Primer numero: " + primerNumero + " Segundo numero: " + segundoNumero);
	}
	else
	{
		if(primerNumero>segundoNumero)
		{
			resta=primerNumero-segundoNumero;
			alert("La resta del primero con el segundo es " + resta);
			if(resta>10)
			{
				alert("la resta es " + resta + " y superó el 10");
			}
		}
		else
		{
			suma=primerNumero+segundoNumero;
			alert("La suma del primero con el segundo es " + suma);
		}
	}


}
