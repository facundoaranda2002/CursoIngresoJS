/*
Aranda Facundo
Switch 07
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje; 
	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="Oeste";
			break;
		case "Cataratas":
			mensaje="Norte";
			break;
		case "Mar del plata":
			mensaje="Este";
			break;
		case "Ushuaia":
			mensaje="Sur";
			break;
	}

	alert("Ese destino se encuentra al " + mensaje);

}//FIN DE LA FUNCIÓN