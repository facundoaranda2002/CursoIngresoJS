/*
Aranda Facundo
while 06
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN