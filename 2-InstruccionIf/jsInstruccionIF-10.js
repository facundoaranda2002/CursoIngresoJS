/*
Aranda Facundo
IF 10
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let notaRandom;

	notaRandom=Math.floor(Math.random() * 10) + 1;

	if(notaRandom>8)
	{
		alert("EXCELENTE. Su nota fue un " + notaRandom);
	}
	else
	{
		if(notaRandom>3)
		{
			alert("APROBÓ. Su nota fue un " + notaRandom);
		}
		else
		{
			alert("Vamos, la proxima se puede. Su nota fue un " + notaRandom);
		}
	}

}//FIN DE LA FUNCIÓN

/* otra forma en la que hago un solo alert

let notaRandom;
let mensaje

	notaRandom=Math.floor(Math.random() * 10) + 1;

	if(notaRandom>8)
	{
		mensaje="EXCELENTE";
	}
	else
	{
		if(notaRandom>3)
		{
			mensaje="APROBO";
		}
		else
		{
			mensaje="Vamos, la proxima se puede";
		}
	}

alert(mensaje + " su nota fue un " + notaRandom);
