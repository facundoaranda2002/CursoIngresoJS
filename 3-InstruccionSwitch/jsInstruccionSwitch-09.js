/*
Aranda Facundo
Switch 09
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase=15000;
	let porcentaje;
	let precioFinal; 

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=20;
					break;
				case "Mar del plata":
					porcentaje=-20;
					break;
				default:
					porcentaje=-10;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=-20;
					break;
				case "Mar del plata":
					porcentaje=20;
					break;
				default:
					porcentaje=10;
			}
			break;
		default: //case "Otoño": case "Primavera":
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje=0;
					break;
				default:
					porcentaje=10
					break;
			}
			break;
	}

	porcentaje=(precioBase*porcentaje)/100;
	precioFinal=precioBase+porcentaje;

	alert("El precio final es " + precioFinal);

}//FIN DE LA FUNCIÓN