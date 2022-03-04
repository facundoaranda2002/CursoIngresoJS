/*
Aranda Facundo
IF 04
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>12)
	{
		if(edad<18)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("No es adolescente");
		}
	} 

	else
	{
		alert("No es adolescente");
	} 

}//FIN DE LA FUNCIÓN

/*
	//tomo la edad  
	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("usted es adolescente");
		}	
	}


	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("usted es adolescente");
	}
	
	//error
	if(edadIngresada>12 && <18)
	{

	}
	
	//error no entra nunca
	if(edadIngresada<12 && edadIngresada>18)
	{

	}

	//segun el ej 05
	//mal, funciona pero...
	if(edadIngresada<13 || edad ingresada>18)
	{
	
	}
	else
	{
		alert("usted es adolescente");
	}


	//bien
	if(!(edadIngresada<13 || edad ingresada>18))
	{
		alert("usted es adolescente");
	}
*/