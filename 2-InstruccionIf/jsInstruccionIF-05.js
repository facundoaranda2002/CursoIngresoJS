/*
Aranda Facundo
IF 05
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<13)
	{
		alert("No es adolescente");
	} 

	if(edad>17)
	{
		alert("No es adolescente");
	} 

}//FIN DE LA FUNCIÓN


/*
if(edadIngresada<13)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");	
	}
	if(edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	

	
	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	
	//error entra siempre
	if(edadIngresada>13 || edadIngresada<17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}

	// usando el ejer 04...
	//error funciona pero...
	if(edadIngresada>12 && edadIngresada<18)
	{
		
	}else
	{
		alert("usted NO es adolescente");
	}

	//bien
	if(!(edadIngresada>12 && edadIngresada<18))
	{
		alert("usted NO es adolescente");
	}
*/	