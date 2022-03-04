/*
Aranda Facundo
E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);
	
	descuento=importe/4;
	resultado=importe-descuento;

	document.getElementById('txtIdResultado').value = " El resultado del descuento del 25 % es " + resultado;
}

/*
Aranda Facundo 
E/S 10 BIS*/
/*
function mostrarAumento()
{
	let importe;
	let descuento;
	let porcentaje;
	let parte;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentaje=prompt("Ingrese el porcentaje") 
	porcentaje=parseInt(porcentaje); 
	//conviene parsear el porcentaje tmb por las dudas aunque en este caso funciona igual ya que no estoy concatenando directamente con ese numero
	
	parte=100/porcentaje
	descuento=importe/parte;
	resultado=importe-descuento;

	document.getElementById('txtIdResultado').value = " El resultado del descuento del " + porcentaje + " % es " + resultado;
}*/
