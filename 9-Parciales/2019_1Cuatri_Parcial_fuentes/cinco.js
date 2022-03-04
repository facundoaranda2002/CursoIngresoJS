/*
Aranda Facundo
Parcial 2019 05

Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/
function mostrar()
{
	let continente;
	let cantidadDias;
	let descuento=0;
	let metodoPago;
	let precioTotal;

	continente=document.getElementById('Marca').value;
	cantidadDias=prompt("Ingrese la cantidad de dias");
	cantidadDias=parseInt(cantidadDias);
	metodoPago=prompt("Ingrese el metodo de pago", "debito, mercadoPago o efectivo");

	switch(continente)
	{
		case "América": 
			switch(metodoPago)
			{
				case "debito":
					descuento=-60;
					break;
				default:
					descuento=-50;
					break;
			}
			break;
		case "África":
			switch(metodoPago)
			{
				case "debito":
					descuento=-60;
					break;
				default:
					descuento=-75;
					break;
			}
			break;
		case "Europa":
			switch(metodoPago)
			{
				case "debito":
					descuento=-35;
					break;
				case "mercadoPago":
					descuento=-30;
					break;
				default:
					descuento=-25;
					break;
			}
			break;
		default:
			descuento=20;
	}

	precioTotal=(cantidadDias*100)+((cantidadDias*100*descuento)/100);

	alert("El precio final es " + precioTotal);

}
