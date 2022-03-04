/*
Aranda Facundo
IF 06
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Usted es mayor de edad");
	} 
	
	if(edad>12 && edad<18)
	{
		alert("Usted es adolescente");
	}

	if(edad<13)
	{
		alert("Usted es un niño");
	}

}//FIN DE LA FUNCIÓN

/*
otra forma mas óptima

if(edad>17)
	{
		alert("Usted es mayor de edad");
	} 
	
	else
	{
		if(edad>12 && edad<18)
		{
			alert("Usted es adolescente");
		}

		else
		{
			alert("Usted es un niño");
		}
	}

otra aun mas optima porque no hace la doble comparacion del segundo if, es decir, hace una operacion menos

if(edad>17)
	{
		alert("Usted es mayor de edad");
	} 
	
	else
	{
		if(edad<13)
		{
			alert("Usted es un niño");
		}

		else
		{
			alert("Usted es un adolescente");
		}
	}
	
if(edadIngresada>17)
	{
		alert("mayor");
	}
	else if(edadIngresada<13)//faltan las llaves del else
	{
		alert("menor");
	}
	else//if(edadIngresada>12 && edadIngresada<18)
	{
		alert("adolescente");
	}

//error 
	if(edadIngresada>17)
	{
		alert("mayor");
	}
	if(edadIngresada<13)
	{
		alert("adolescente");
	}
	else
	{
		alert("menor");
	}

*/	