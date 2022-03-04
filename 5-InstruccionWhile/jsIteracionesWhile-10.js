/*
Aranda Facundo
while 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioPositivos=0;
	let promedioNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos=cantidadNegativos+1;
			/* reemplazado por un solo if en la linea 68
			if(numeroIngresado%2==0)
			{
				cantidadPares=cantidadPares+1;
			}
			*/
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos=cantidadPositivos+1;
				/* reemplazado por un solo if en la linea 68
				if(numeroIngresado%2==0) 
				{	
					cantidadPares=cantidadPares+1;
				}
				*/
			}
			else
			{
				cantidadCeros=cantidadCeros+1;
				//cantidadPares=cantidadPares+1; reemplazado por un solo if en la linea 68
			}
		}

		if(numeroIngresado%2==0)
			{
				cantidadPares=cantidadPares+1;
			}

		respuesta=prompt("desea continuar?");
	}//fin del while

	if(cantidadPositivos!=0)
	{
		promedioPositivos=sumaPositivos/cantidadPositivos;
	}

	if(cantidadNegativos!=0)
	{
		promedioNegativos=sumaNegativos/cantidadNegativos;
	}

	document.write("la suma de negativos es : " + sumaNegativos + "<br>");
	document.write("la suma de positivos es : " + sumaPositivos + "<br>");
	document.write("la cantidad de positivos es : " + cantidadPositivos + "<br>");
	document.write("la cantidad de negativos es : " + cantidadNegativos + "<br>");
	document.write("la cantidad de ceros es : " + cantidadCeros + "<br>");
	document.write("la cantidad de pares es : " + cantidadPares + "<br>");
	document.write("el promedio de los positivos es : " + promedioPositivos + "<br>");
	document.write("el promedio de los negativos es : " + promedioNegativos + "<br>");
	document.write("la diferencia entre los positivos y los negativos es : " + (sumaPositivos-sumaNegativos) + "<br>");

}//FIN DE LA FUNCIÓN