/*
Aranda Facundo
TP 04 A+B+C+D+E
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	 //if con Switch adentro  	
 	
 	let cantidadLamparitas;
 	let precioLamparitas=35;
 	let porcentaje=0;
 	let precioBruto;
 	let precioConDescuento;
 	let marca;
 	let descuento;
 	let impuesto;

 	cantidadLamparitas=document.getElementById('txtIdCantidad').value;
 	cantidadLamparitas=parseInt(cantidadLamparitas);

 	marca=document.getElementById('Marca').value;

 	if(cantidadLamparitas>5)
 	{
 		porcentaje=50;
 	}
 	else
 	{
 		if(cantidadLamparitas==5)
 		{
 			switch(marca)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 		}
 		else
 		{
 			if(cantidadLamparitas==4)
 			{
 				switch(marca)
				{
					case "ArgentinaLuz":
					case "FelipeLamparas":
						porcentaje=25;
						break;
					default:
						porcentaje=20;
						break;
				}	
 			}
 			else
 			{
 				if(cantidadLamparitas==3)
 				{
 					switch(marca)
					{
						case "ArgentinaLuz":
							porcentaje=15;
							break;
						case "FelipeLamparas":
							porcentaje=10;
							break;
						default:
							porcentaje=5;
							break;
					}
 				}
 				else
 				{
 					porcentaje=0;
 				}
 			}
 		}
 	}
 	
 	precioBruto=cantidadLamparitas*precioLamparitas;
 	descuento=(precioBruto*porcentaje)/100;
 	precioConDescuento=precioBruto-descuento;

 	if(precioConDescuento>120)
 	{
 		impuesto=(precioConDescuento*10)/100;
 		precioConDescuento=precioConDescuento+impuesto;
 		alert("Usted pago " + impuesto + " de IIBB.");
 	}

 	document.getElementById('txtIdprecioDescuento').value=precioConDescuento;

}

/*
 	let cantidadLamparitas;
 	let precioLamparitas=35;
 	let precioConDescuento;
 	let marca;
 	let descuento;
 	let impuesto;

 	cantidadLamparitas=document.getElementById('txtIdCantidad').value;
 	cantidadLamparitas=parseInt(cantidadLamparitas);

 	marca=document.getElementById('Marca').value;

 	if(cantidadLamparitas>5)
 	{
 		descuento=50;
 	}
 	else
 	{
 		if(cantidadLamparitas==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				descuento=40;
 			}
 			else
 			{
 				descuento=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparitas==4)
 			{
 				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 				{
 					descuento=25;
 				}
 				else
 				{
 					descuento=20;
 				}
 			}
 			else
 			{
 				if(cantidadLamparitas==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						descuento=15;
 					}
 					else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							descuento=10;
 						}
 						else
 						{
 							descuento=5;
 						}
 					}
 				}
 				else
 				{
 					descuento=0;
 				}
 			}
 		}
 	}

 	precioConDescuento=(cantidadLamparitas*precioLamparitas)*((100-descuento)/100);

 	if(precioConDescuento>120)
 	{
 		impuesto=precioConDescuento*(10/100);
 		precioConDescuento=precioConDescuento+impuesto;
 		alert("Usted pago " + impuesto + " de IIBB.");
 	}

 	document.getElementById('txtIdprecioDescuento').value=precioConDescuento;
 */


 	
/*
let cantidadLamparitas;
 	let precioLamparitas=35;
 	let porcentaje=0;
 	let precioBruto;
 	let precioConDescuento;
 	let marca;
 	let descuento;
 	let impuesto;

 	cantidadLamparitas=document.getElementById('txtIdCantidad').value;
 	cantidadLamparitas=parseInt(cantidadLamparitas);

 	marca=document.getElementById('Marca').value;

 	if(cantidadLamparitas>5)//A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
 	{
		porcentaje=50;
 	}
 	else
 	{
 		if(cantidadLamparitas==5)//B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				porcentaje=40;
 			}
 			else
 			{
 				porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparitas==4)//C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
 			{
 				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 				{
 					porcentaje=25;
 				}
 				else
 				{
 					porcentaje=20;
 				}
 			}
 			else
 			{
 				if(cantidadLamparitas==3)//D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}
 					else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							porcentaje=10;
 						}
 						else
 						{
 							porcentaje=5;
 						}
 					}
 				}
 			}
 		}
 	}
 	
 	precioBruto=cantidadLamparitas*precioLamparitas;
 	descuento=(precioBruto*porcentaje)/100;
 	precioConDescuento=precioBruto-descuento;

 	if(precioConDescuento>120)//E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 	{
 		impuesto=(precioConDescuento*10)/100;
 		precioConDescuento=precioConDescuento+impuesto;
 		alert("Usted pago " + impuesto + " de IIBB.");
 	}

 	document.getElementById('txtIdprecioDescuento').value=precioConDescuento;//esta es la ultima linea
 	
*/

/*
 	 //Con Switch  	
 	
 	let cantidadLamparitas;
 	let precioLamparitas=35;
 	let porcentaje=0;
 	let precioBruto;
 	let precioConDescuento;
 	let marca;
 	let descuento;
 	let impuesto;

 	cantidadLamparitas=document.getElementById('txtIdCantidad').value;
 	cantidadLamparitas=parseInt(cantidadLamparitas);

 	marca=document.getElementById('Marca').value;

 	switch(cantidadLamparitas)
 	{
		case 5:
			switch(marca)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
			break;
		case 4:
			switch(marca)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 3:
			switch(marca)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
			}
			break;
		case 2:
		case 1:
			porcentaje=0;
			break;
		default:
			porcentaje=50;
			break;
 	}
 	
 	precioBruto=cantidadLamparitas*precioLamparitas;
 	descuento=(precioBruto*porcentaje)/100;
 	precioConDescuento=precioBruto-descuento;

 	if(precioConDescuento>120)
 	{
 		impuesto=(precioConDescuento*10)/100;
 		precioConDescuento=precioConDescuento+impuesto;
 		alert("Usted pago " + impuesto + " de IIBB.");
 	}

 	document.getElementById('txtIdprecioDescuento').value=precioConDescuento;

*/	

/*
//Switch con if adentro  	
 	
 	let cantidadLamparitas;
 	let precioLamparitas=35;
 	let porcentaje=0;
 	let precioBruto;
 	let precioConDescuento;
 	let marca;
 	let descuento;
 	let impuesto;

 	cantidadLamparitas=document.getElementById('txtIdCantidad').value;
 	cantidadLamparitas=parseInt(cantidadLamparitas);

 	marca=document.getElementById('Marca').value;

 	switch(cantidadLamparitas)
 	{
		case 5:
			if(marca=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
			break;
		case 4:
			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
			{
				porcentaje=25;
			}
			else
			{
				porcentaje=20;
			}
			break;
		case 3:
			if(marca=="ArgentinaLuz")
			{
				porcentaje=15;
			}
			else
			{
				if(marca=="FelipeLamparas")
				{
					porcentaje=10;
				}
				else
				{
					porcentaje=5;
				}
			}
			break;
		case 2:
		case 1:
			porcentaje=0;
			break;
		default:
			porcentaje=50;
			break;
 	}
 	
 	precioBruto=cantidadLamparitas*precioLamparitas;
 	descuento=(precioBruto*porcentaje)/100;
 	precioConDescuento=precioBruto-descuento;

 	if(precioConDescuento>120)
 	{
 		impuesto=(precioConDescuento*10)/100;
 		precioConDescuento=precioConDescuento+impuesto;
 		alert("Usted pago " + impuesto + " de IIBB.");
 	}

 	document.getElementById('txtIdprecioDescuento').value=precioConDescuento;
*/