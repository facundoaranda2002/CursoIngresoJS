/*
Aranda Facundo
Parcial 2019 09

Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en 
su territorio(entre -50 y 50) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
	let paisIngresado;
	let habitantesIngresados;
	let temperaturaIngresada;
	let respuesta="si";
	let cantidadTemperaturasPares=0;
	let sumaHabitantes=0;
	let cantidadPaises=0;
	let promedioPaises;
	let paisConMenosHabitantes;
	let valorMenosHabitantes;
	let cantidadPaisesMas40Grados=0;
	let temperaturaMinimaIngresada;
	let paisTemperaturaMinima;

	while(respuesta=="si")
	{
		paisIngresado=prompt("Ingrese el nombre del pais");
		habitantesIngresados=prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000");
		habitantesIngresados=parseInt(habitantesIngresados);
		while(habitantesIngresados<1 || habitantesIngresados>7000)
		{
			habitantesIngresados=prompt("Error. Reingrese la cantidad de habitantes en millones entre 1 y 7000");
			habitantesIngresados=parseInt(habitantesIngresados);
		}
		temperaturaIngresada=prompt("Ingrese la temperatura mínima que se registra en su territorio(entre -50 y 50)");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<-50 || temperaturaIngresada>50)
		{
			temperaturaIngresada=prompt("Error. Reingrese la temperatura mínima que se registra en su territorio(entre -50 y 50)");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}


		if(temperaturaIngresada%2==0)
		{
			cantidadTemperaturasPares=cantidadTemperaturasPares+1;
		}

		if(cantidadPaises==0)
		{
			paisConMenosHabitantes=paisIngresado;
			valorMenosHabitantes=habitantesIngresados;
			paisTemperaturaMinima=paisIngresado;
			temperaturaMinimaIngresada=temperaturaIngresada;
		}
		else
		{
			if(habitantesIngresados<valorMenosHabitantes)
			{
				paisConMenosHabitantes=paisIngresado;
				valorMenosHabitantes=habitantesIngresados;
			}

			if(temperaturaIngresada<temperaturaMinimaIngresada)
			{
				paisTemperaturaMinima=paisIngresado;
				temperaturaMinimaIngresada=temperaturaIngresada;
			}
		}

		if(temperaturaIngresada>40)
		{
			cantidadPaisesMas40Grados=cantidadPaisesMas40Grados+1;
		}

		sumaHabitantes=sumaHabitantes+habitantesIngresados;
		cantidadPaises=cantidadPaises+1;

		respuesta=prompt("Quiere seguir ingresando?", "si/no");
	}

	promedioPaises=sumaHabitantes/cantidadPaises;

	document.write("La cantidad de temperaturas pares es "+cantidadTemperaturasPares+"<br>");
	document.write("El nombre del pais con menos habitantes es "+paisConMenosHabitantes+"<br>");
	document.write("La cantidad de paises que superan los 40 grados son "+cantidadPaisesMas40Grados+"<br>");
	document.write("El promedio de habitantes entre los paises ingresados es de "+promedioPaises+" millones"+"<br>");
	document.write("La temperatura mínima ingresada es "+temperaturaMinimaIngresada+", y nombre del pais que registro esa temperatura es "+paisTemperaturaMinima+"<br>");
}

/*
	let paisIngresado;
	let habitantes;
	let temperatura;
	let respuesta="si";
	let cantidadTemperaturasPares=0;
	let banderaPrimerPais=0;
	let paisConMenosHabitantes;
	let valorMenosHabitantes;
	let cantidadPaisesMas40Grados=0;
	let sumaHabitantes=0;
	let cantidadPaises=0;
	let promedioPaises;
	let temperaturaMinimaIngresada=0;
	let paisTemperaturaMinima;

	while(respuesta=="si")
	{
		paisIngresado=prompt("Ingrese el nombre del pais");
		habitantes=prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000");
		habitantes=parseInt(habitantes);
		while(habitantes<1 || habitantes>7000)
		{
			habitantes=prompt("Error. Reingrese la cantidad de habitantes en millones entre 1 y 7000");
			habitantes=parseInt(habitantes);
		}
		temperatura=prompt("Ingrese la temperatura mínima que se registra en su territorio(entre -50 y 50)");
		temperatura=parseInt(temperatura);
		while(temperatura<-50 || temperatura>50)
		{
			temperatura=prompt("Error. Reingrese la temperatura mínima que se registra en su territorio(entre -50 y 50)");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2==0)
		{
			cantidadTemperaturasPares=cantidadTemperaturasPares+1;
		}

		if(banderaPrimerPais==0)
		{
			valorMenosHabitantes=habitantes;
			paisConMenosHabitantes=paisIngresado;
			temperaturaMinimaIngresada=temperatura;
			paisTemperaturaMinima=paisIngresado;
			banderaPrimerPais=1;
		}
		else
		{
			if(habitantes<valorMenosHabitantes)
			{
				valorMenosHabitantes=habitantes;
				paisConMenosHabitantes=paisIngresado;
			}

			if(temperatura<temperaturaMinimaIngresada)
			{
				temperaturaMinimaIngresada=temperatura;
				paisTemperaturaMinima=paisIngresado;
			}
		}

		if(temperatura>40)
		{
			cantidadPaisesMas40Grados=cantidadPaisesMas40Grados+1;
		}

		cantidadPaises=cantidadPaises+1;
		sumaHabitantes=sumaHabitantes+habitantes;

		respuesta=prompt("Quiere seguir ingresando?", "si/no");
	}

	promedioPaises=sumaHabitantes/cantidadPaises;

	document.write("La cantidad de temperaturas pares es "+cantidadTemperaturasPares+"<br>");
	document.write("El nombre del pais con menos habitantes es "+paisConMenosHabitantes+"<br>");
	document.write("la cantidad de paises que superan los 40 grados son "+cantidadPaisesMas40Grados+"<br>");
	document.write("el promedio de habitantes entre los paises ingresados es de "+promedioPaises+" millones"+"<br>");
	document.write("la temperatura mínima ingresada es "+temperaturaMinimaIngresada+", y nombre del pais que registro esa temperatura es "+paisTemperaturaMinima+"<br>");

*/