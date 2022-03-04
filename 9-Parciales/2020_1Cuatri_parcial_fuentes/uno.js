/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	let contadorProductos=0;
	let tipoProducto;
	let precioProducto;
	let cantidadUnidadesProducto;
	let marcaProducto;
	let fabricanteProducto;
	let banderaPrimerAlcohol=0;
	let precioAlcoholMasBarato;
	let cantidadAlcoholMasBarato;
	let fabricanteAlcoholMasBarato;
	let tipoMasUnidades;
	let cantidadTipoMasUnidades;
	let contadorUnidadesJabon=0;
	let cantidadComprasJabon=0;
	let cantidadComprasAlcohol=0;
	let cantidadComprasBarbijo=0;
	let cantidadUnidadesAlcohol=0;
	let cantidadUnidadesBarbijo=0;
	let promedioPorCompra;

	while(contadorProductos<5)
	{
		tipoProducto=prompt("Ingrese el tipo de producto", "barbijo, jabon o alcohol");
		while(tipoProducto!="barbijo" && tipoProducto!="jabon" && tipoProducto!="alcohol")
		{
			tipoProducto=prompt("Error. Reingrese el tipo de producto", "barbijo, jabon o alcohol");
		}

		precioProducto=prompt("Ingrese el precio del producto", "entre 100 y 300");
		precioProducto=parseInt(precioProducto);
		while(precioProducto<100 || precioProducto>300)
		{
			precioProducto=prompt("Error. Reingrese el precio del producto", "entre 100 y 300");
			precioProducto=parseInt(precioProducto);
		}

		cantidadUnidadesProducto=prompt("Ingrese la cantidad de unidades", "entre 1 y 1000");
		cantidadUnidadesProducto=parseInt(cantidadUnidadesProducto);
		while(cantidadUnidadesProducto<1 || cantidadUnidadesProducto>1000)
		{
			cantidadUnidadesProducto=prompt("Error. Reingrese la cantidad de unidades", "entre 1 y 1000");
			cantidadUnidadesProducto=parseInt(cantidadUnidadesProducto);
		}

		marcaProducto=prompt("Ingrese la marca del producto");

		fabricanteProducto=prompt("Ingrese el fabricante del producto");

		if(contadorProductos==0)
		{
			tipoMasUnidades=tipoProducto;
			cantidadTipoMasUnidades=cantidadUnidadesProducto;
		}
		else
		{
			if(cantidadUnidadesProducto>cantidadTipoMasUnidades)
			{
				tipoMasUnidades=tipoProducto;
				cantidadTipoMasUnidades=cantidadUnidadesProducto;
			}
		}

		switch(tipoProducto)
		{
			case "alcohol":
				if(banderaPrimerAlcohol==0)
				{
					precioAlcoholMasBarato=precioProducto;
					cantidadAlcoholMasBarato=cantidadUnidadesProducto;
					fabricanteAlcoholMasBarato=fabricanteProducto;
					banderaPrimerAlcohol=1;
				}
				else
				{
					if(precioProducto<precioAlcoholMasBarato)
					{
						precioAlcoholMasBarato=precioProducto;
						cantidadAlcoholMasBarato=cantidadUnidadesProducto;
						fabricanteAlcoholMasBarato=fabricanteProducto;
					}
					else
					{
						if(fabricanteAlcoholMasBarato==fabricanteProducto)
						{
							cantidadAlcoholMasBarato=cantidadAlcoholMasBarato+cantidadUnidadesProducto;
						}
					}
				}

				cantidadComprasAlcohol=cantidadComprasAlcohol+1;
				cantidadUnidadesAlcohol=cantidadUnidadesAlcohol+cantidadUnidadesProducto;

				break;
			case "jabon":
				contadorUnidadesJabon=contadorUnidadesJabon+cantidadUnidadesProducto;
				cantidadComprasJabon=cantidadComprasJabon+1;
				break;
			default:
				cantidadComprasBarbijo=cantidadComprasBarbijo+1;
				cantidadUnidadesBarbijo=cantidadUnidadesBarbijo+cantidadUnidadesProducto;
				break;
		}

		contadorProductos=contadorProductos+1;
	}

	switch(tipoMasUnidades)
		{
			case "alcohol":
				promedioPorCompra=cantidadUnidadesAlcohol/cantidadComprasAlcohol;
				break;
			case "jabon":
				promedioPorCompra=contadorUnidadesJabon/cantidadComprasJabon;
				break;
			default:
				promedioPorCompra=cantidadUnidadesBarbijo/cantidadComprasBarbijo;
				break;
		}

	document.write("El fabricante del alcohol mas barato es "+fabricanteAlcoholMasBarato+" y su cantidad de unidades es "+cantidadAlcoholMasBarato+"<br>");
	document.write("El tipo con mas unidades es "+tipoMasUnidades+" y su promedio por compra es "+promedioPorCompra+"<br>");
	document.write("Las unidades de jabon en total son "+contadorUnidadesJabon+"<br>");
}

/*
Aranda Facundo
Simulacro V2

se pide el ingreso de los siguientes datos de 10 personas
nombre, edad, peso, temperatura, sexo(f o m o nb), estado civil(casado, soltero, divorciado)


//a)cuantos casados tienen fiebre 
//b)nombre edad y sexo del mas pesado mas
//c)que hay mas casados, solteros o divorciados

a) cantidad de jubilados (mayor a 60)
b) promedio de peso de los masculinos.
c) que porcentaje hay de adolescentes sobre el total.
d) que porcentaje hay de cada sexo sobre el total
e) que sexo tiene menos cantidad.

f)Nombre,temperatura y edad de la primer mujer con fiebre.
g)Nombre y temperatura del  mas pesado de todos y el de los adolescentes tambien
h)Nombre ,sexo y temperatura de el niño mas joven.
*/

/*
	let nombreIngresado;
	let edadIngresada;
	let pesoIngresado;
	let temperaturaIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let contadorPersonas=0;
	//let contadorFiebre=0;
	let nombreMasPesado;
	//let edadMasPesado;
	//let sexoMasPesado;
	let pesoMasPesado;
	let temperaturaMasPesado;
	//let masPersonasEstadoCivil;
	//let contadorCasados=0;
	//let contadorSolteros=0;
	//let contadorDivorciados=0;
	let contadorJubilados=0;
	let contadorMasculinos=0;
	let sumaPesoMasculinos=0;
	let promedioPesoMasculinos=0;
	let contadorAdolescentes=0;
	let porcentajeAdolescentes=0;
	let contadorFemeninos=0;
	let contadorNoBinarios=0;
	let porcentajeMasculinos=0;
	let porcentajeFemeninos=0;
	let porcentajeNoBinarios=0;
	let sexoMenosCantidad;
	let banderaPrimerMujerConFiebre=0;
	let nombrePrimeraMujerConFiebre;
	let temperaturaPrimerMujerConFiebre;
	let edadPrimerMujerConFiebre;
	let nombreMasPesadoAdolescente;
	let pesoMasPesadoAdolescente;
	let temperaturaMasPesadoAdolescente;
	let banderaPrimerNiño=0;
	let nombreNiñoMasJoven;
	let sexoNiñoMasJoven;
	let temperaturaNiñoMasJoven;
	let edadNiñoMasJoven;


	while(contadorPersonas<10)
	{

		nombreIngresado=prompt("Ingrese el nombre de la persona");

		edadIngresada=prompt("Ingrese la edad de la persona");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>200)
		{
			edadIngresada=prompt("Error. Reingrese la edad");
			edadIngresada=parseInt(edadIngresada);
		}

		pesoIngresado=prompt("Ingrese el peso de la persona");
		pesoIngresado=parseInt(pesoIngresado);
		while(pesoIngresado<0 || pesoIngresado>300)
		{
			pesoIngresado=prompt("Error. Reingrese el peso de la persona");
			pesoIngresado=parseInt(pesoIngresado);
		}

		temperaturaIngresada=prompt("Ingrese la temperatura de la persona");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<0 || temperaturaIngresada>100)
		{
			temperaturaIngresada=prompt("Error. Reingrese la temperatura de la persona");
			temperaturaIngresada=parseInt(temperaturaIngresada)
		}

		sexoIngresado=prompt("Ingrese el sexo de la persona", "“f”, “m” o “nb”");
		while(sexoIngresado!="f" && sexoIngresado!="m" && sexoIngresado!="nb")
		{
			sexoIngresado=prompt("Error. Reingrese el sexo", "“f”, “m” o “nb”");
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil de la persona", "casado, soltero, divorciado");
		while(estadoCivilIngresado!="casado" && estadoCivilIngresado!="soltero" && estadoCivilIngresado!="divorciado")
		{
			estadoCivilIngresado=prompt("Error. Reingrese el estado civil", "casado, soltero, divorciado");
		}

		/*
		if(contadorPersonas==0)//En vez de usar una bandera uso el contador de personas ya que evaluo para todas las personas en general
		{
			nombreMasPesado=nombreIngresado;
			edadMasPesado=edadIngresada;
			sexoMasPesado=sexoIngresado;
			pesoMasPesado=pesoIngresado;
		}
		else
		{
			if(pesoIngresado>pesoMasPesado)
			{
				nombreMasPesado=nombreIngresado;
				edadMasPesado=edadIngresada;
				sexoMasPesado=sexoIngresado;
				pesoMasPesado=pesoIngresado;
			}
		}

		switch(estadoCivilIngresado)
		{
			case "casado":
				contadorCasados=contadorCasados+1;
				if(temperaturaIngresada>40)
				{
					contadorFiebre=contadorFiebre+1;
				}
				break;
			case "soltero":
				contadorSolteros=contadorSolteros+1;
				break;
			default:
				contadorDivorciados=contadorDivorciados+1;
				break;
		}*/
/*
		if(edadIngresada>60)
		{
			contadorJubilados=contadorJubilados+1;
		}
		else
		{
			if(edadIngresada>14 && edadIngresada<18)
			{
				if(contadorAdolescentes==0)
				{
					nombreMasPesadoAdolescente=nombreIngresado;
					temperaturaMasPesadoAdolescente=temperaturaIngresada;
					pesoMasPesadoAdolescente=pesoIngresado;
				}
				else
				{
					if(pesoIngresado>pesoMasPesadoAdolescente)
					{
						nombreMasPesadoAdolescente=nombreIngresado;
						temperaturaMasPesadoAdolescente=temperaturaIngresada;
						pesoMasPesadoAdolescente=pesoIngresado;
					}
				}
				contadorAdolescentes=contadorAdolescentes+1;
			}
			else
			{
				if(edadIngresada<15)
				{
					if(banderaPrimerNiño==0)
					{
						nombreNiñoMasJoven=nombreIngresado;
						temperaturaNiñoMasJoven=temperaturaIngresada;
						sexoNiñoMasJoven=sexoIngresado;
						edadNiñoMasJoven=edadIngresada;
						banderaPrimerNiño=1;
					}
					else
					{
						if(edadIngresada<edadNiñoMasJoven)
						{
							nombreNiñoMasJoven=nombreIngresado;
							temperaturaNiñoMasJoven=temperaturaIngresada;
							sexoNiñoMasJoven=sexoIngresado;
							edadNiñoMasJoven=edadIngresada;
						}
					}
				}
			}
		}

		switch(sexoIngresado)
		{
			case "m":
				contadorMasculinos=contadorMasculinos+1;
				sumaPesoMasculinos=sumaPesoMasculinos+pesoIngresado;
				break;
			case "f":
				if(banderaPrimerMujerConFiebre==0 && temperaturaIngresada>40)
				{
					nombrePrimeraMujerConFiebre=nombreIngresado;
					temperaturaPrimerMujerConFiebre=temperaturaIngresada;
					edadPrimerMujerConFiebre=edadIngresada;
					banderaPrimerMujerConFiebre=1;
				}
				contadorFemeninos=contadorFemeninos+1;
				break;
			default:
				contadorNoBinarios=contadorNoBinarios+1;
				break;
		}

		if(contadorPersonas==0)
		{
			nombreMasPesado=nombreIngresado;
			temperaturaMasPesado=temperaturaIngresada;
			pesoMasPesado=pesoIngresado;
		}
		else
		{
			if(pesoIngresado>pesoMasPesado)
			{
				nombreMasPesado=nombreIngresado;
				temperaturaMasPesado=temperaturaIngresada;
				pesoMasPesado=pesoIngresado;
			}
		}

		contadorPersonas=contadorPersonas+1;
	}

	/*
	if(contadorCasados>contadorSolteros && contadorCasados>contadorDivorciados)
	{
		masPersonasEstadoCivil="casados";
	}
	else
	{
		if(contadorSolteros>contadorDivorciados)
		{
			masPersonasEstadoCivil="solteros";
		}
		else
		{
				masPersonasEstadoCivil="divorciados";
		}
	}

	document.write("La cantidad de casados con fiebre es "+contadorFiebre+"<br>");
	document.write("El nombre de la persona mas pesada es "+nombreMasPesado+", su edad es "+edadMasPesado+" y su sexo es "+sexoMasPesado+"<br>");
	document.write("El estado civil con mas cantidad de personas es: "+masPersonasEstadoCivil+"<br>");	
	*/

/*	if(contadorMasculinos>0)
	{
		promedioPesoMasculinos=sumaPesoMasculinos/contadorMasculinos;
		porcentajeMasculinos=(contadorMasculinos*100)/contadorPersonas;
	}

	if(contadorFemeninos>0)
	{
		porcentajeFemeninos=(contadorFemeninos*100)/contadorPersonas;		
	}

	if(contadorNoBinarios>0)
	{
		porcentajeNoBinarios=(contadorNoBinarios*100)/contadorPersonas;		
	}

	if(contadorAdolescentes>0)
	{
		porcentajeAdolescentes=(contadorAdolescentes*100)/contadorPersonas;
	}

	if(contadorMasculinos<contadorFemeninos && contadorMasculinos<contadorNoBinarios)
	{
		sexoMenosCantidad="masculino";
	}
	else
	{
		if(contadorFemeninos<contadorNoBinarios)
		{
			sexoMenosCantidad="femenino";
		}
		else
		{
			sexoMenosCantidad="no binario";
		}
	}
	

	document.write("La cantidad de jubilados es "+contadorJubilados+"<br>");
	document.write("El promedio de peso de los masculinos es "+promedioPesoMasculinos+"<br>");
	document.write("El porcentaje de adolescentes sobre el total es del "+porcentajeAdolescentes+"%"+"<br>");
	document.write("El porcentaje de masculinos sobre el total es del "+porcentajeMasculinos+"%"+"<br>");
	document.write("El porcentaje de femeninos sobre el total es del "+porcentajeFemeninos+"%"+"<br>");
	document.write("El porcentaje de no binarios sobre el total es del "+porcentajeNoBinarios+"%"+"<br>");
	document.write("El sexo con menos cantidad es el "+sexoMenosCantidad+"<br>");
	document.write("El nombre de la primer mujer con fiebre es "+nombrePrimeraMujerConFiebre+", su edad es "+edadPrimerMujerConFiebre+" y su temperatura es "+temperaturaPrimerMujerConFiebre+"<br>");
	document.write("El nombre de la persona mas pesada es "+nombreMasPesado+" y su temperatura es "+temperaturaMasPesado+"<br>");
	document.write("El nombre del adolescente mas pesado es "+nombreMasPesadoAdolescente+" y su temperatura es "+temperaturaMasPesadoAdolescente+"<br>");
	document.write("El nombre del niño mas joven es "+nombreNiñoMasJoven+", su sexo es "+sexoNiñoMasJoven+" y su temperatura es "+temperaturaNiñoMasJoven+"<br>");
	*/