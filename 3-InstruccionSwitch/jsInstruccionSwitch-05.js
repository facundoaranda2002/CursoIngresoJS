/*
Aranda Facundo
Switch 05
*/
function mostrar()	
{
	//tomo la hora
	let horaDelDia;
	horaDelDia=document.getElementById('txtIdHora').value;
	horaDelDia=parseInt(horaDelDia);
	//alert(horaDelDia);
	switch(horaDelDia)
	{
		case 7:
			alert("Es de mañana.");
			break;
		case 8:
			alert("Es de mañana.");
			break;
		case 9:
			alert("Es de mañana.");
			break;
		case 10:
			alert("Es de mañana.");
			break;
		case 11:
			alert("Es de mañana.");
			break;	
	}
	

}//FIN DE LA FUNCIÓN

/*
otra forma. No conviene hacer lo de la variable mensaje porque no tengo que mostrar alert para todos los valores asi que si lo hago me mostraria "undefined" en los otros casos

	//tomo la hora
	let horaDelDia;
	horaDelDia=document.getElementById('txtIdHora').value;
	horaDelDia=parseInt(horaDelDia);
	//alert(horaDelDia);
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;	
	}
*/
