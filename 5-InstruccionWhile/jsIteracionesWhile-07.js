/*
Aranda Facundo
while 07

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';//1. primera parte del while

	while(respuesta=='si')//2. segunda parte del while
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta=prompt("¿Quiere seguir sumando numeros?", "si/no");//3. tercera parte del while
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN