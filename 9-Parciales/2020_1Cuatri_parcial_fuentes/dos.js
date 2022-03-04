/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que 
el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  	let respuesta="si";
	let tipoProducto;
	let precioBolsa;
	let cantidadBolsas;
	let contadorTotalBolsas=0;
	let precioBrutoTotal=0;
	let precioConDescuentoTotal=0;
	let banderaPrimero=0;
	let tipoMasCantidadBolsas;
	let tipoMasCaro;
	let precioTipoMasCaro;
	let contadorBolsasCal=0;
	let contadorBolsasArena=0;
	let contadorBolsasCemento=0;


	while(respuesta=="si")
	{
		tipoProducto=prompt("Ingrese el tipo de producto", "arena, cal o cemento");
		while(tipoProducto!="arena" && tipoProducto!="cal" && tipoProducto!="cemento")
		{
			tipoProducto=prompt("Error. Reingrese el tipo de producto", "arena, cal o cemento");
		}

		precioBolsa=prompt("Ingrese el precio por bolsa", "mayor a 0");
		precioBolsa=parseInt(precioBolsa);
		while(precioBolsa<1)
		{
			precioBolsa=prompt("Error. Reingrese el precio por bolsa", "mayor a 0");
			precioBolsa=parseInt(precioBolsa);
		}

		cantidadBolsas=prompt("Ingrese la cantidad de bolsas");
		cantidadBolsas=parseInt(cantidadBolsas);
		while(cantidadBolsas<1)
		{
			cantidadBolsas=prompt("Error. Reingrese la cantidad de bolsas");
			cantidadBolsas=parseInt(cantidadBolsas);
		}

		if(contadorTotalBolsas==0)
		{
			tipoMasCaro=tipoProducto;
			precioTipoMasCaro=precioBolsa;
		}
		else
		{
			if(precioBolsa>precioTipoMasCaro)
			{
				tipoMasCaro=tipoProducto;
				precioTipoMasCaro=precioBolsa;
			}
		}

		switch(tipoProducto)
		{
			case "cal":
				contadorBolsasCal=contadorBolsasCal+cantidadBolsas;
				break;
			case "arena":
				contadorBolsasArena=contadorBolsasArena+cantidadBolsas;
				break;
			default:
				contadorBolsasCemento=contadorBolsasCemento+cantidadBolsas;
				break;
		}	


		contadorTotalBolsas=contadorTotalBolsas+cantidadBolsas;

		precioBrutoTotal=precioBrutoTotal+(precioBolsa*cantidadBolsas);	

		respuesta=prompt("Quiere continuar ingresando?", "si/no");
	}

	if(contadorTotalBolsas>10 && contadorTotalBolsas<31)
	{
		precioConDescuentoTotal=precioBrutoTotal*0.85;
	}
	else
	{
		if(contadorTotalBolsas>30)
		{
			precioConDescuentoTotal=precioBrutoTotal*0.75;
		}
	}

	if(contadorBolsasCal>contadorBolsasCemento && contadorBolsasCal>contadorBolsasArena)
	{
		tipoMasCantidadBolsas="cal";
	}
	else
	{
		if(contadorBolsasArena>contadorBolsasCemento)
		{
			tipoMasCantidadBolsas="arena";
		}
		else
		{
			tipoMasCantidadBolsas="cemento";
		}
	}

	alert("El total a pagar sin descuento es de "+precioBrutoTotal);
	if(precioConDescuentoTotal!=0)
	{
		alert("El total a pagar con descuento es de "+precioConDescuentoTotal);
	}
	alert("El tipo con mas cantidad de bolsas es "+tipoMasCantidadBolsas);
	alert("El tipo mas caro es "+tipoMasCaro);

}
