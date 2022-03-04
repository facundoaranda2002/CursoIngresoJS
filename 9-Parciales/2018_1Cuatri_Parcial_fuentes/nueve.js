/*
Aranda Facundo
Parcial 2018 09

Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser 
entre 1 y 100 (validar), la temperatura de almacenamiento(entre -30 y 30) hasta que 
el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/
function mostrar()
{
	let respuesta;
	let marcaIngresada;
	let pesoIngresado;
	let temperaturaDeAlmacenamientoIngresada;
	let cantidadTemperaturasPares;
	let banderaPrimero;
	let marcaProductoMasPesado;
	let pesoMaximo;
	let pesoMinimo;
	let cantidadProductosMenosCeroGrados;
	let sumaPeso;
	let cantidadProductos;

	respuesta="si";
	cantidadTemperaturasPares=0;
	banderaPrimero=0;
	cantidadProductosMenosCeroGrados=0;
	sumaPeso=0;
	cantidadProductos=0;

	while(respuesta=="si")
	{
		marcaIngresada=prompt("Ingrese la marca del producto");
		pesoIngresado=prompt("Ingrese el peso del producto", "Entre 1 y 100");
		pesoIngresado=parseInt(pesoIngresado);
		while(pesoIngresado<1 || pesoIngresado>100)
		{
			pesoIngresado=prompt("Error, reingrese el peso");
			pesoIngresado=parseInt(pesoIngresado);
		}
		temperaturaDeAlmacenamientoIngresada=prompt("Ingrese la temperatura de almacenamiento del producto", "Entre -30 y 30");
		temperaturaDeAlmacenamientoIngresada=parseInt(temperaturaDeAlmacenamientoIngresada);
		while(temperaturaDeAlmacenamientoIngresada<-30 || temperaturaDeAlmacenamientoIngresada>30)
		{
			temperaturaDeAlmacenamientoIngresada=prompt("Error, reingrese la temperatura");
			temperaturaDeAlmacenamientoIngresada=parseInt(temperaturaDeAlmacenamientoIngresada);
		}

		if(temperaturaDeAlmacenamientoIngresada%2==0)
		{
			cantidadTemperaturasPares=cantidadTemperaturasPares+1;
		}

		if(banderaPrimero==0)
		{
			marcaProductoMasPesado=marcaIngresada;
			pesoMaximo=pesoIngresado;
			pesoMinimo=pesoIngresado;
			banderaPrimero=1;
		}
		else
		{
			if(pesoIngresado>pesoMaximo)
			{
				pesoMaximo=pesoIngresado;
				marcaProductoMasPesado=marcaIngresada;
			}
			else
			{
				if(pesoIngresado<pesoMinimo)
				{
					pesoMinimo=pesoIngresado;
				}
			}
		}

		if(temperaturaDeAlmacenamientoIngresada<0)
		{
			cantidadProductosMenosCeroGrados=cantidadProductosMenosCeroGrados+1;
		}

		sumaPeso=sumaPeso+pesoIngresado;
		cantidadProductos=cantidadProductos+1;

		respuesta=prompt("Desea continuar ingresando productos?", "si/no")
	}

	document.write("La cantidad de temperaturas pares es " + cantidadTemperaturasPares + "<br>");
	document.write("La marca del producto mas pesado es " + marcaProductoMasPesado + "<br>");
	document.write("La cantidad de productos que se conservan a menos de cero grados son " + cantidadProductosMenosCeroGrados + "<br>");
	document.write("El promedio del peso de todos los productos es " + (sumaPeso/cantidadProductos) + "<br>");
	document.write("El peso maximo es " + pesoMaximo +  "<br>");
	document.write("El peso minimo es " + pesoMinimo + "<br>");
}
