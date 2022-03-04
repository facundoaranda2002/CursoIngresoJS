/*
Aranda Facundo
TP 13

El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() 
{
	let numero;
	let contadorDePares=0;
	let mensaje;

	numero=document.getElementById('txtIdNumero').value
	numero=parseInt(numero);

	if(numero>0)
	{
		while(numero>1)
		{
			numero=numero-2;
			contadorDePares=contadorDePares+1;
		}
		mensaje="La cantidad de números pares desde el número ingresado hasta el cero es " + contadorDePares;
	}
	else
	{
		mensaje="Error. Ingrese un numero positivo";
	}

	alert(mensaje);
}

function NumerosImpares()
{
	let numero;
	let contadorDeImpares=0;
	let mensaje;

	numero=document.getElementById('txtIdNumero').value
	numero=parseInt(numero);

	if(numero>0)
	{
		while(numero>0)
		{
			numero=numero-2;
			contadorDeImpares=contadorDeImpares+1;
		}
		mensaje="La cantidad de números impares desde el número ingresado hasta el cero es " + contadorDeImpares;
	}
	else
	{
		mensaje="Error. Ingrese un numero positivo";
	}

	alert(mensaje);
}

function NumerosDivisibles()
{
	let numero;
	let numeroBase;
	let contadorDeDivisibles=0;
	let mensaje;

	numero=document.getElementById('txtIdNumero').value
	numero=parseInt(numero);

	numeroBase=1;

	if(numero>0)
	{
		while(numeroBase<101)	
		{
			if(numero%numeroBase==0)
			{
				contadorDeDivisibles=contadorDeDivisibles+1;
			}
			numeroBase=numeroBase+1;
		}
		mensaje="La cantidad de números divisibles de este número que se encuentran desde el 1 al 100 es " + contadorDeDivisibles;			
	}
	else
	{
		mensaje="Error. Ingrese un numero positivo";
	}

	alert(mensaje);
}


function VerificarPrimo()
{
	let numero;
	let numeroBase;
	let contadorDeDivisores=0;
	let mensaje;

	numero=document.getElementById('txtIdNumero').value
	numero=parseInt(numero);

	numeroBase=numero;

	if(numero>0)
	{
		while(numero>0)
		{
			if(numeroBase%numero==0)
			{
				contadorDeDivisores=contadorDeDivisores+1;
			}
			numero=numero-1;
		}
		if(contadorDeDivisores==2)
		{
			mensaje="El numero es primo";
		}
		else
		{
			mensaje="El numero no es primo";
		}
	}
	else
	{
		mensaje="Error. Ingrese un numero positivo";
	}

	alert(mensaje);
}

function NumerosPrimos()
{
	let numero;
	let numeroBase;
	let contadorDePrimos=0;
	let contadorDeDivisores=0;
	let mensaje;

	numero=document.getElementById('txtIdNumero').value
	numero=parseInt(numero);

	numeroBase=numero;

	if(numeroBase>0)
	{
		while(numeroBase>0)
		{
			while(numero>0)
			{	
				if(numeroBase%numero==0)
				{
					contadorDeDivisores=contadorDeDivisores+1;
				}
				numero=numero-1;
			}
			if(contadorDeDivisores==2)
			{
				contadorDePrimos=contadorDePrimos+1;
			}
			numeroBase=numeroBase-1;
			numero=numeroBase;
			contadorDeDivisores=0;
		}
		mensaje="La cantidad de números Primos desde el número ingresado hasta el cero es " + contadorDePrimos;
	}
	else
	{
		mensaje="Error. Ingrese un numero positivo";
	}

	alert(mensaje);
}