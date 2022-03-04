/*
Aranda Facundo
2019 PARCIAL FUENTES 02
*/
function mostrar()
{
  	let persona1;
  	let persona2;
  	let pesoPersona1;
  	let pesoPersona2;
  	let sumaPeso;
  	let promedioPeso;

  	persona1=prompt("Ingrese el nombre de uno de los de la pareja");
  	persona2=prompt("Ingrese el nombre de la pareja del anterior");
  	pesoPersona1=prompt("Ingrese el peso del primero");
  	pesoPersona2=prompt("Ingrese el peso del segundo");

  	pesoPersona1=parseInt(pesoPersona1);
  	pesoPersona2=parseInt(pesoPersona2);

  	sumaPeso=pesoPersona1+pesoPersona2;
  	promedioPeso=sumaPeso/2;

  	alert("Ustedes se llaman " + persona1 + " y " + persona2 + ", pesan " + pesoPersona1 + " y " + pesoPersona2 + " kilos respectivamente, que sumados son " + sumaPeso + " kilos y el promedio de peso es de " + promedioPeso + " kilos");
}
