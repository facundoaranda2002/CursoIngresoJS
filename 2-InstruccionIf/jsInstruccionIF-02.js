/*
Aranda Facundo
IF 02
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
}//FIN DE LA FUNCIÓN