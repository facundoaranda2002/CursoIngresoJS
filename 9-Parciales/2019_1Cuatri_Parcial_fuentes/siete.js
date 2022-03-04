/*
Aranda Facundo
Parcial 2019 07

Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros
(validar entre 0 y 250) , el sexo. 
(validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/
function mostrar()
{
	let alturaIngresada;
	let sexoIngresado;
	let cantidadJugadores=0;
	let sumaAlturas=0;
	let promedioAlturas;
	let alturaMasBaja;
	let sexoMasBajo;
	let cantidadMujeresMas190=0;

	while(cantidadJugadores<5)
	{
		alturaIngresada=prompt("Ingrese la altura", "Entre 0 y 250");
		alturaIngresada=parseInt(alturaIngresada);
		while(alturaIngresada<0 || alturaIngresada>250)
		{
			alturaIngresada=prompt("Error. Reingrese la altura", "Entre 0 y 250");
			alturaIngresada=parseInt(alturaIngresada);
		}

		sexoIngresado=prompt("Ingrese el sexo", "“f” o “m”");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error. Reingrese el sexo", "“f” o “m”");
		}

		sumaAlturas=sumaAlturas+alturaIngresada;

		if(cantidadJugadores==0)
		{
			alturaMasBaja=alturaIngresada;
			sexoMasBajo=sexoIngresado;
		}
		else
		{
			if(alturaIngresada<alturaMasBaja)
			{
				alturaMasBaja=alturaIngresada;
				sexoMasBajo=sexoIngresado;
			}
		}

		if(sexoIngresado=="f" && alturaIngresada>190)
		{
			cantidadMujeresMas190=cantidadMujeresMas190+1;
		}

		cantidadJugadores=cantidadJugadores+1;
	}

	promedioAlturas=sumaAlturas/cantidadJugadores;

	if(sexoMasBajo=="f")
	{
		sexoMasBajo="femenino";
	}
	else
	{
		sexoMasBajo="masculino";
	}

	alert("El promedio de las alturas totales es de "+promedioAlturas+" cm");
	alert("La altura mas baja es "+alturaMasBaja+" cm y el sexo de esa persona es "+sexoMasBajo);
	alert("La cantidad de las mujeres que superan los 190 cm es de "+cantidadMujeresMas190);
}

/*
	let altura;
	let sexo;
	let contadorJugadores=0;
	let alturasTotales=0;
	let promedioAlturas;
	let alturaMasBaja;
	let sexoMasBajo;
	let banderaPrimero=0;
	let cantidadMujeresMas190=0;

	while(contadorJugadores<5)
	{
		contadorJugadores=contadorJugadores+1;

		altura=prompt("Ingrese la altura del jugador/a", "Entre 0 y 250");
		altura=parseInt(altura);
		while(altura<0 || altura>250)
		{
			altura=prompt("Error. Reingrese la altura del jugador/a", "Entre 0 y 250");
			altura=parseInt(altura);
		}

		sexo=prompt("Ingrese el sexo del jugador/a", "“f” o “m”");
		while(sexo!="f" && sexo!="m")
		{
			altura=prompt("Error. Reingrese el sexo del jugador/a", "“f” o “m”");
			altura=parseInt(sexo);
		}

		alturasTotales=alturasTotales+altura;

		if(banderaPrimero==0)
		{
			alturaMasBaja=altura;
			sexoMasBajo=sexo;
			banderaPrimero=1;
		}
		else
		{
			if(altura<alturaMasBaja)
			{
				alturaMasBaja=altura;
				sexoMasBajo=sexo;
			}
		}

		if(altura>190 && sexo=="f")
		{
			cantidadMujeresMas190=cantidadMujeresMas190+1;
		}
    }

    promedioAlturas=alturasTotales/contadorJugadores;

    alert("El promedio de las alturas totales es "+promedioAlturas);
    alert("La altura mas baja es "+alturaMasBaja+" y el sexo de esa persona es "+sexoMasBajo);
    alert("La cantidad de mujeres que superan los 190 cm son "+cantidadMujeresMas190);
*/ 