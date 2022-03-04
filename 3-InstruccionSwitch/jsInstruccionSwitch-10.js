/*
Aranda Facundo
Switch 10
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="Se viaja";
					break;
				default:
					mensaje="No se viaja";
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje="Se viaja";
					break;
				default:
					mensaje="No se viaja";
					break;
			}
			break;
		case "Otoño":
			mensaje="Se viaja";
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="No se viaja"
					break;
				default:
					mensaje="Se viaja";
					break;
			}
			break;
	}

	alert(mensaje + " a ese lugar en esta estación");

}//FIN DE LA FUNCIÓN