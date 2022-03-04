/*
Aranda Facundo
while 09

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(banderaDelPrimero=="es el primero")
		{
			banderaDelPrimero="no es el primero";
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN