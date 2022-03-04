/*
Aranda Facundo
While 03

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("error, reingrese el número clave.");
	}

	alert("Bienvenido");

	/*
	if(claveIngresada!="utn750")
	{
		claveIngresada = prompt("error, reingrese el número clave.");
		if(claveIngresada!="utn750")
		{
			claveIngresada = prompt("error, reingrese el número clave.");
		}
		else
		{
			alert("Bienvenido");
		}
	}
	else
	{
		alert("Bienvenido");
	}
	*/

	
}//FIN DE LA FUNCIÓN
