/*
Aranda Facundo
Switch 02
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño; 
	mesDelAño=document.getElementById('txtIdMes').value;
	//alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Julio":
			alert("Abrigate que hace frio.");
			break;
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case "Noviembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			alert("Falta para el invierno.");
			break;
	}

}//FIN DE LA FUNCIÓN

/*
otra forma

	//tomo el mes
	let mesDelAño; 
	let mensaje;
	mesDelAño=document.getElementById('txtIdMes').value;
	//alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Julio":
			mensaje="Abrigate que hace frio.";
			break;
		case "Agosto":
			mensaje="Abrigate que hace frio.";
			break;
		case "Septiembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		case "Octubre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		case "Noviembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		case "Diciembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			mensaje="Falta para el invierno.";
			break;
	}
	alert(mensaje);
*/