/*
Aranda Facundo
Parcial 2018 07 BIS

Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/

function mostrar()
{
	let contadorDeAlumnos;
	let notaIngresada;
	let sumaDeNotas;
	let sexo;
	let promedioDeNotas;
	let cantidadVaronesMasCinco;
	let banderaPrimerMujer;
	let notaPrimerMujer;
	let notaMasBaja;
	let notaMasBajaSexo;
	let cantidadAprobadasMujeres;
	let cantidadDesaprobadosHombres;
	let cantidadDesaprobadasMujeres;
	let sexoQueMasDesaprobo;
	let sumaAprobados;
	let promedioAprobados;
	let sumaNotasMujeres;
	let promedioMujeres;


	contadorDeAlumnos=0;
	sumaDeNotas=0;
	banderaPrimerMujer=0;
	cantidadVaronesMasCinco=0;
	cantidadAprobadasMujeres=0;
	cantidadDesaprobadosHombres=0;
	cantidadDesaprobadasMujeres=0;
	sumaAprobados=0;
	sumaNotasMujeres=0;


	while(contadorDeAlumnos<5)
	{

		contadorDeAlumnos=contadorDeAlumnos+1;

		notaIngresada=prompt("ingrese nota");
		notaIngresada=parseInt(notaIngresada);
		while(notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada=prompt("error ,reingrese nota");
			notaIngresada=parseInt(notaIngresada);
		}

		sexo=prompt("ingrese sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error ,reingrese sexo");
		}

		sumaDeNotas=sumaDeNotas+notaIngresada;


		if(contadorDeAlumnos==1)
		{
			notaMasBaja=notaIngresada;
			notaMasBajaSexo=sexo;
		}
		else
		{
			if(notaIngresada<notaMasBaja)
			{
				notaMasBaja=notaIngresada;
				notaMasBajaSexo=sexo;
			}
		}

		if(sexo=="m")
		{
			if(notaIngresada>5)
			{
				cantidadVaronesMasCinco=cantidadVaronesMasCinco+1;
				sumaAprobados=sumaAprobados+notaIngresada;
			}
			else
			{
				cantidadDesaprobadosHombres=cantidadDesaprobadosHombres+1;
			}
		}
		else
		{
			if(banderaPrimerMujer==0)
			{
				banderaPrimerMujer=1;
				notaPrimerMujer=notaIngresada;
			}

			if(notaIngresada>5)
			{
				cantidadAprobadasMujeres=cantidadAprobadasMujeres+1;
				sumaAprobados=sumaAprobados+notaIngresada;
			}
			else
			{
				cantidadDesaprobadasMujeres=cantidadDesaprobadasMujeres+1;
			}

			sumaNotasMujeres=sumaNotasMujeres+notaIngresada;
		}
	}

	promedioDeNotas=sumaDeNotas/contadorDeAlumnos;
	alert("El promedio de las notas totales es " + promedioDeNotas);//A

	alert("La nota mas baja es " + notaMasBaja + " y el sexo de esa persona es " + notaMasBajaSexo);//B

	alert("La cantidad de varones cuya nota fue de 6 o mas es de " + cantidadVaronesMasCinco);//C

	alert("La nota de la primer mujer ingresada es " + notaPrimerMujer);//D

	alert("La cantidad de hombres que aprobaron es de " + cantidadVaronesMasCinco);//E
	alert("La cantidad de mujeres que aprobaron es de " + cantidadAprobadasMujeres);//E

	if(cantidadDesaprobadosHombres>cantidadDesaprobadasMujeres)
	{
		sexoQueMasDesaprobo="El sexo que mas desaprobo fue el masculino";
	}
	else
	{
		if(cantidadDesaprobadasMujeres>cantidadDesaprobadosHombres)
		{
			sexoQueMasDesaprobo="El sexo que mas desaprobo fue el femenino";
		}
		else
		{
			sexoQueMasDesaprobo="Desaprobaron la misma cantidad de hombres que de mujeres";
		}
	}

	alert(sexoQueMasDesaprobo);//F

	if(sumaAprobados>0)
	{
		promedioAprobados=sumaAprobados/(cantidadVaronesMasCinco+cantidadAprobadasMujeres);
	}
	else
	{
		promedioAprobados=0;
	}

	alert("El promedio de notas de los aprobados es " + promedioAprobados);//G

	if(sumaNotasMujeres>0)
	{
		promedioMujeres=sumaNotasMujeres/(cantidadAprobadasMujeres+cantidadDesaprobadasMujeres);
	}
	else
	{
		promedioMujeres=0;
	}

	alert("El promedio de notas de las mujeres es " + promedioMujeres);//H
}

