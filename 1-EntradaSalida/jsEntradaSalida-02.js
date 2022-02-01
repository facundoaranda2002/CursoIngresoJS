/*
Aranda Facundo
E/S 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	//nombreIngresado = "alguien";
	nombreIngresado = prompt("Ingresa tu nombre","Ingresar aqui");
	//alert("su nombre es");
	//alert(nombreIngresado);
	//alert(nombreIngresado) es distinto a alert("nombreIngresado")
	alert("Su nombre es " + nombreIngresado);
}

