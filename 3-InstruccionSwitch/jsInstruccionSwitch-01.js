/*
Aranda Facundo
Switch 01
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño; 
	mesDelAño=document.getElementById('txtIdMes').value;
	//alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Enero":
		alert("que comiences bien el año!!!.");
		break;
		case "Marzo":
		alert("a clases!!!.");
		break;
		case "Julio":
		alert("se vienen las vacaciones!!!.");
		break;
		case "Diciembre":
		alert("Felices fiesta!!!.");
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
		case "Enero":
		mensaje="que comiences bien el año!!!.";
		break;
		case "Marzo":
		mensaje="a clases!!!.";
		break;
		case "Julio":
		mensaje="se vienen las vacaciones!!!.";
		break;
		case "Diciembre":
		mensaje="Felices fiesta!!!.";
		break;
	}
	alert(mensaje);
*/