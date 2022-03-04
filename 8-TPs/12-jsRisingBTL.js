/*
Aranda Facundo
TP 12

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
 	let sueldoBrutoIngresado;
 	let legajoIngresado;
 	let nacionalidadIngresada;

 	edadIngresada=prompt("Ingrese la edad ", "Entre 18 y 90 años inclusive");
 	edadIngresada=parseInt(edadIngresada);
 	while(edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada=prompt("Ingrese la edad ", "Entre 18 y 90 años inclusive");
 		edadIngresada=parseInt(edadIngresada);
 	}

 	sexoIngresado=prompt("Ingrese el sexo", "“M” para masculino y “F” para femenino");
	while(sexoIngresado!="M" && sexoIngresado!="F")
	{
		sexoIngresado=prompt("Ingrese el sexo", "“M” para masculino y “F” para femenino");
	} 	

	estadoCivilIngresado=prompt("Ingrese el estado civil", "1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado=prompt("Ingrese el estado civil", "1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}

	sueldoBrutoIngresado=prompt("Ingrese el sueldo bruto", "No menor a 8000");
	sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	while(sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado=prompt("Ingrese el sueldo bruto", "No menor a 8000");
		sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	}

	legajoIngresado=prompt("Ingrese el legajo", "Numérico de 4 cifras, sin ceros a la izquierda");
	legajoIngresado=parseInt(legajoIngresado);
	while(legajoIngresado<1000 || legajoIngresado>9999)
	{
		legajoIngresado=prompt("Ingrese el legajo", "Numérico de 4 cifras, sin ceros a la izquierda");
		legajoIngresado=parseInt(legajoIngresado);
	}

	nacionalidadIngresada=prompt("Ingrese la nacionalidad", "“A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
	{
		nacionalidadIngresada=prompt("Ingrese la nacionalidad", "“A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	}


	if(sexoIngresado=="M")
	{
		sexoIngresado="Masculino";
	}
	else
	{
		sexoIngresado="Femenino";
	}

	switch(estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado="Soltero";
			break;
		case 2:
			estadoCivilIngresado="Casado";
			break;
		case 3:
			estadoCivilIngresado="Divorciado";
			break;
		default:
			estadoCivilIngresado="Viudo";
			break;
	}

	switch(nacionalidadIngresada)
	{
		case "A":
			nacionalidadIngresada="Argentino";
			break;
		case "E":
			nacionalidadIngresada="Extranjero";
			break;
		default:
			nacionalidadIngresada="Nacionalizado";
			break;
	}


 	document.getElementById('txtIdEdad').value=edadIngresada;
 	document.getElementById('txtIdSexo').value=sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado;
 	document.getElementById('txtIdSueldo').value=sueldoBrutoIngresado;
 	document.getElementById('txtIdLegajo').value=legajoIngresado;
 	document.getElementById('txtIdNacionalidad').value=nacionalidadIngresada;

}
