/*
Aranda Facundo
Switch 03
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
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
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
			mensaje="Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje="Este mes tiene 30 o más días";
			break;
	}
	alert(mensaje);
*/