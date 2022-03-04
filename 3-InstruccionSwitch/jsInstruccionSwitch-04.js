/*
Aranda Facundo
Switch 04
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño; 
	mesDelAño=document.getElementById('txtIdMes').value;
	//alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Abril":
			alert("Este mes tiene 30 dias");
			break;
		case "Junio":
			alert("Este mes tiene 30 dias");
			break;
		case "Septiembre":
			alert("Este mes tiene 30 dias");
			break;
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		default:
			alert("Este mes tiene 31 días");
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
		case "Febrero":
			mensaje="Este mes tiene 28 dias";
			break;
		case "Abril":
			mensaje="Este mes tiene 30 dias";
			break;
		case "Junio":
			mensaje="Este mes tiene 30 dias";
			break;
		case "Septiembre":
			mensaje="Este mes tiene 30 dias";
			break;
		case "Noviembre":
			mensaje="Este mes tiene 30 dias";
			break;
		default:
			mensaje="Este mes tiene 31 dias";
			break;
	}
	alert(mensaje);
*/