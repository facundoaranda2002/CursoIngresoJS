/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let temperaturaIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let respuesta="si";
	let banderaPrimero=0;
	let nombreMayorTemperatura;
	let mayorTemperatura;
	let contadorMayoresViudos=0;
	let contadorTerceraEdadConFiebre=0;
	let cantidadHombresSolterosOViudos=0;
	let PromedioEdadHombresSolteros=0;
	let sumaEdadHombresSolteros=0;
	let cantidadHombresSolteros=0;

	while(respuesta=="si")
	{
		nombreIngresado=prompt("Ingrese el nombre de la persona");

		edadIngresada=prompt("Ingrese la edad de la persona");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>120)
		{
			edadIngresada=prompt("Error. Reingrese la edad");
			edadIngresada=parseInt(edadIngresada);
		}

		temperaturaIngresada=prompt("Ingrese la temperatura de la persona");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<10 || temperaturaIngresada>50)
		{
			temperaturaIngresada=prompt("Error. Reingrese la temperatura de la persona");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		sexoIngresado=prompt("Ingrese el sexo de la persona", "“f” o “m”");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error. Reingrese el sexo", "“f” o “m”");
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil de la persona", "casado, soltero, viudo");
		while(estadoCivilIngresado!="casado" && estadoCivilIngresado!="soltero" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Error. Reingrese el estado civil", "casado, soltero, viudo");
		}

		if(banderaPrimero==0)
		{
			nombreMayorTemperatura=nombreIngresado;
			mayorTemperatura=temperaturaIngresada;
			banderaPrimero=1;
		}
		else
		{
			if(temperaturaIngresada>mayorTemperatura)
			{
				nombreMayorTemperatura=nombreIngresado;
				mayorTemperatura=temperaturaIngresada;
			}
		}
		/*
		if(edadIngresada>18 && estadoCivilIngresado=="viudo")
		{
			contadorMayoresViudos=contadorMayoresViudos+1;
		}
		*/
		if(edadIngresada>60 && temperaturaIngresada>38)
		{
			contadorTerceraEdadConFiebre=contadorTerceraEdadConFiebre+1;
		}

		switch(estadoCivilIngresado)
		{
			case "viudo":
				if(edadIngresada>18)
				{
					contadorMayoresViudos=contadorMayoresViudos+1;
				}
				if(sexoIngresado=="m")
				{
					cantidadHombresSolterosOViudos=cantidadHombresSolterosOViudos+1;
				}
				break;
			case "soltero":
				if(sexoIngresado=="m")
				{
					cantidadHombresSolterosOViudos=cantidadHombresSolterosOViudos+1;
					sumaEdadHombresSolteros=sumaEdadHombresSolteros+edadIngresada;
					cantidadHombresSolteros=cantidadHombresSolteros+1;
				}
				break;
		}
		/*
		if(sexoIngresado=="m")
		{
			if(estadoCivilIngresado=="viudo")
			{
				cantidadHombresSolterosOViudos=cantidadHombresSolterosOViudos+1;
			}
			else
			{
				if(estadoCivilIngresado=="soltero")
				{
					cantidadHombresSolterosOViudos=cantidadHombresSolterosOViudos+1;
					sumaEdadHombresSolteros=sumaEdadHombresSolteros+edadIngresada;
					cantidadHombresSolteros=cantidadHombresSolteros+1;
				}
			}

		}
		*/
		respuesta=prompt("Quiere continuar ingresando?", "si/no");
	}

	if(cantidadHombresSolteros>0)
	{
		PromedioEdadHombresSolteros=sumaEdadHombresSolteros/cantidadHombresSolteros;
	}

	document.write("El nombre de la persona con mas temperatura es "+nombreMayorTemperatura+"<br>");
	document.write("La cantidad de mayores de edad viudos es de "+contadorMayoresViudos+"<br>");
	document.write("La cantidad de hombres que hay solteros o viudos es "+cantidadHombresSolterosOViudos+"<br>");
	document.write("La cantidad de personas de la tercera edad con fiebre es de "+contadorTerceraEdadConFiebre+"<br>");
	document.write("El promedio de edad de los hombres solteros es "+PromedioEdadHombresSolteros+"<br>");
}
