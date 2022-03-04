/*
Aranda Facundo
Parcial 2019 08

Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre 
-100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
	let respuesta;
	let letraIngresada;
	let numeroIngresado;
	let cantidadPares;
	let cantidadImpares;
	let cantidadCeros;
	let sumaPositivos;
	let cantidadPositivos;
	let promedioPositivos;
	let sumaNegativos;
	let numeroMaximo;
	let letraMaxima;
	let numeroMinimo;
	let letraMinima;
	let banderaPrimero;

	respuesta="si";
	cantidadPares=0;
	cantidadImpares=0;
	cantidadCeros=0;
	sumaPositivos=0;
	cantidadPositivos=0;
	promedioPositivos=0;
	sumaNegativos=0;
	banderaPrimero=0;

	while(respuesta=="si")
	{
		letraIngresada=prompt("Ingrese una letra");
		numeroIngresado=prompt("Ingrese un numero entre -100 y 100");
		numeroIngresado=parseInt(numeroIngresado);
		while(numeroIngresado<-100 || numeroIngresado>100)
		{
			numeroIngresado=prompt("Error. Ingrese el numero nuevamente");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado%2==0)
		{
			cantidadPares=cantidadPares+1;
		}
		else
		{
			cantidadImpares=cantidadImpares+1;
		}

		if(numeroIngresado==0)
		{
			cantidadCeros=cantidadCeros+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos=cantidadPositivos+1;
			}
			else
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
			}
		}

		if(banderaPrimero==0)
		{
			numeroMaximo=numeroIngresado;
			letraMaxima=letraIngresada;
			numeroMinimo=numeroIngresado;
			letraMinima=letraIngresada;
			banderaPrimero=1;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
				letraMaxima=letraIngresada;
			}
			else
			{
				if(numeroIngresado<numeroMinimo)
				{
					numeroMinimo=numeroIngresado;
					letraMinima=letraIngresada;
				}
			}
		}

		respuesta=prompt("Quiere seguir cargando datos", "si/no");
	}

	if(cantidadPositivos>0)
	{
		promedioPositivos=sumaPositivos/cantidadPositivos;
	}

	document.write("La cantidad de numeros pares es " + cantidadPares + "<br>");
	document.write("La cantidad de numeros impares es " + cantidadImpares + "<br>");
	document.write("La cantidad de ceros es " + cantidadCeros + "<br>");
	document.write("El promedio de los numeros positivos ingresados es " + promedioPositivos + "<br>");
	document.write("La suma de los numeros negativos ingresados es " + sumaNegativos + "<br>");
	document.write("El numero maximo es " + numeroMaximo + " y su letra es " + letraMaxima + "<br>");
	document.write("El numero minimo es " + numeroMinimo + " y su letra es " + letraMinima + "<br>");
}
