
function mostrar()
{
	let nombre;
	let tipo; 
	let precio; 
	let unidades; 
	let tipoInf; 
	let marca; 
	let acuAlcohol = 0;
	let acuIAC = 0; 
	let acuQuat = 0;
	let contAlcohol = 0;
	let contIAC = 0;
	let contQuat = 0;
	let acuIgni = 0;
	let acuExplo = 0;
	let acuCombu = 0;
	let maxUnidInfl;
	let acuIAC200 = 0; 
	let maxPrecio;
	let maxMarca;
	let maxTipo;  
	let promedioAlcohol;
	let promedioIAC;
	let promedioQuat; 
	flag = true; 

	for(let i = 0; i < 5; i++){

		nombre = prompt("Ingrese nombre del producto");

		tipo = prompt(`Ingrese el tipo: "ALCOHOL" / "IAC" / "QUAT"`).toUpperCase();
		while(tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){
			tipo = prompt(`Dato invalido. Ingrese el tipo: "ALCOHOL" / "IAC" / "QUAT"`).toUpperCase();
		}

		precio = parseInt(prompt("Ingrese un precio entre 100 y 300"));
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("Dato invalido. Ingrese un precio entre 100 y 300"));
		}

		unidades = parseInt(prompt("Ingrese cantidad de unidades (entre el 1 y 1000)"));
		while(unidades < 1 || unidades > 1000 || isNaN(unidades)){
			unidades = parseInt(prompt("Ingrese cantidad de unidades (entre el 1 y 1000)"));
		}

		tipoInf = prompt("Ingrese el tipo inflamable: ignifugo / combustible / explosivo (sin usar tilde)");
		while(tipoInf != "ignifugo" && tipoInf != "combustible" && tipoInf != "explosivo"){
			tipoInf = prompt("Dato invalido. Ingrese el tipo inflamable: ignifugo / combustible / explosivo (Sin usar tildes los datos)");
		}

		marca = prompt("Ingrese la marca"); 

		if(tipo == "ALCOHOL"){
			acuAlcohol += unidades; 
			contAlcohol++;
		}
		else if(tipo == "IAC"){
			acuIAC += unidades;
			contIAC++;
		}
		else{
			acuQuat += unidades;
			contQuat++;
		}

		if(tipoInf == "combustible"){
			acuCombu += unidades;
		}
		else if(tipoInf == "explosivo"){
			acuExplo += unidades;
		}
		else{
			acuIgni += unidades;
		}

		if(tipo == "IAC" && precio <= 200){
			acuIAC200 += unidades;
		}

		if(flag == true || precio > maxPrecio){
			maxPrecio = precio; 
			maxMarca = marca;
			maxTipo = tipo;
			flag = false;
		}


	}

	promedioAlcohol = acuAlcohol / contAlcohol;
	promedioIAC = acuIAC / contIAC; 
	promedioQuat = acuQuat / contQuat; 

	if(acuCombu > acuExplo && acuCombu > acuIgni){
		maxUnidInfl = "Combustible"
	}
	else if(acuExplo >= acuIgni && acuExplo > acuCombu){
		maxUnidInfl = "Explosivo"
	}
	else{
		maxUnidInfl = "Ingifugo"
	}

	if(isNaN(promedioAlcohol)){
		document.write(`A1) No se ingresaron alcoholes <br>`);
	}
	else{
		document.write(`A1) El promedio de cantidad del Alcohol es ${promedioAlcohol} <br>`);}
	
	if(isNaN(promedioIAC)){
		document.write(`A2) No se ingresaron IAC <br>`);
	}	
	else{
		document.write(`A2) El promedio de cantidad de IAC es ${promedioIAC} <br>`);}
	
	if(isNaN(promedioQuat)){
		document.write(`A3) No se ingresaron Quat`);
	}
	else{document.write(`A3) El promedio de cantidad del Quat es ${promedioQuat} <br>`);}

	document.write(`B) El tipo de inflamable con mayor cantidad de unidades es ${maxUnidInfl} <br>`);

	document.write(`C) Se compraron ${acuIAC200} unidades de IAC menores o iguales a $200 <br>`);

	document.write(`D) Producto mas caro: La marca es ${maxMarca} y el tipo ${maxTipo} <br>`);


   





}
