/*
Aranda Facundo
E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	let importe;
	let aumento;
	let resultado;

	importe=document.getElementById('txtIdSueldo').value;
	importe=parseInt(importe);
	
	aumento=importe/10;
	resultado=importe+aumento;

	document.getElementById('txtIdResultado').value = " El resultado del aumento del 10 % es " + resultado;
}

/*
Aranda Facundo 
E/S 09 BIS*/
/*
function mostrarAumento()
{
	let importe;
	let aumento;
	let porcentaje;
	let parte;
	let resultado;

	importe=document.getElementById('txtIdSueldo').value;
	importe=parseInt(importe);

	porcentaje=prompt("Ingrese el porcentaje")
	porcentaje=parseInt(porcentaje); 
	//conviene parsear el porcentaje tmb por las dudas aunque en este caso funciona igual ya que no estoy concatenando directamente con ese numero
	
	parte=100/porcentaje
	aumento=importe/parte;
	resultado=importe+aumento;

	document.getElementById('txtIdResultado').value = " El resultado del aumento del " + porcentaje + " % es " + resultado;
}*/

