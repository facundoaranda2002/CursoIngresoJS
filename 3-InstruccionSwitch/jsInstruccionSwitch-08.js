/*
Aranda Facundo
Switch 08
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje; 
	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="Frio";
			break;
		default: //case "Cataratas": case "Mar del plata":
			mensaje="Calor";
			break;
	}

	alert("En ese destino hace " + mensaje);

}//FIN DE LA FUNCIÓN