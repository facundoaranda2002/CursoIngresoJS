/*
Aranda Facundo
IF 03
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Es mayor de edad");
	}  

	if(edad<18)
	{
		alert("No es mayor de edad");
	}

}//FIN DE LA FUNCIÓN

/*
Otra forma

	if(edad>17)
	{
		alert("Es mayor de edad");
	}  

	else //En esta solo uso una vez el microprocesador porque el else no compara nada, en cambio de la otra forma lo usa 2 veces
	{
		alert("No es mayor de edad")
	}

*/	