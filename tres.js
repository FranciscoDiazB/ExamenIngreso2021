function mostrar()
{
	let nombre; 
	let estado; 
	let edad;
	let temperatura;
	let sexo;
	const precio = 600;
	let contPersV60 = 0; 
	let minNombreMS;
	let minEdadMS; 
	let ViajesNoDes;
	let ViajeDescuento;
	let seguir; 
	let flag = true; 
	let contTotal = 0;
	let contMayor60 = 0;
	let contMenor60 = 0;


	do {

		nombre = prompt("Ingrese nombre");

		estado = prompt("Estado civil: casado / soltero / viudo");
		while(estado != "casado" && estado != "soltero" && estado != "viudo"){
			estado = prompt("Invalido. Estado civil: casado / soltero / viudo");
		}
	
		edad = parseInt(prompt("Ingrese edad. Mayor a 17"));
		while(isNaN(edad) || edad < 17){
			edad = parseInt(prompt("Invalido. Ingrese edad. Mayor a 17"));
		}

		temperatura = parseInt(prompt("Ingrese temperatura. Mayor a 35, menor a 43"));
		while(temperatura < 35 || temperatura > 43 || isNaN(temperatura)){
			temperatura = parseInt(prompt("Invalido. Ingrese temperatura. Mayor a 35, menor a 43"));
		}
	
		sexo = prompt("Ingrese (femenino) 'f', (masculino) 'm'");
		while(sexo != "f" && sexo != "m"){
		  sexo = prompt("Invalido. Ingrese 'f', 'm'");
		}

		if(estado == 'viudo' && edad > 60){
			contPersV60++;
		}

		if(sexo == 'f' && estado == "soltero" && (flag == true || edad < minEdadMS)){
			minEdadMS = edad;
			minNombreMS = nombre;
			flag = false;
		}

		if(edad > 60){
			contMayor60++;
			
		}
		else{
			contMenor60++;

		}


		contTotal++	
		
		seguir = prompt("Desea continuar? Ingrese 's'");
	
		
	} while (seguir == 's');

	ViajesNoDes = precio * contTotal; 
	ViajeDescuento = (precio * contTotal) * 0.75; 

	

	
	document.write(`A) La cantidad de personas con estado viudo y mayores a 60 es ${contPersV60} <br>`); 
	
	if(minNombreMS == undefined && minEdadMS == undefined){
		document.write(`B) No se introdujeron ninguna mujer soltera <br> `);
	}
	else{
		document.write(`B) El nombre es ${minNombreMS} y la edad es ${minEdadMS} <br>`);
	}
	
	document.write(`C) El viaje total sin descuento cuesta ${ViajesNoDes} <br>`); 
	
	if(contMayor60 > contMenor60){
		document.write(`D) Como hay mas de un 50% de pasajeros mayores a 60, El precio es de ${ViajeDescuento} <br>`);

	}
	else{
		document.write(`D) Hay igual o menos de un 50% de pasajeros mayores a 60 <br> `);
	}



}
