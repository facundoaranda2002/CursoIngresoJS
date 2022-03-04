/*
Aranda Facundo
while 08

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';//1. primera parte del while

	while(respuesta=='si')//2. segunda parte del while
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			contador=contador+1;
		}
		else
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		respuesta=prompt("¿Quiere seguir sumando numeros?", "si/no");//3. tercera parte del while
	}

	if(contador==0)
	{
		multiplicacionNegativos=multiplicacionNegativos-1;
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN