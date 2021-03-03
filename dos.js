function mostrar()
{
  let nombre;
  let cursada;
  let materias; 
  let sexo; 
  let notapromedio; 
  let edad; 
  let maxPromedioNoM; 
  let maxNombreNoM; 
  let minEdadLibre;
  let minNombreLibre; 
  let acuHombre = 0; 
  let acuMujer = 0;
  let acuNoB = 0; 
  let contH = 0;
  let contM = 0;
  let contNB = 0; 
  let maxMateriasNoFR; 
  let maxNombreNoFR;
  let maxEdadNoFR; 
  let promedioHombre;
  let promedioMujer;
  let promedioNoBinario;
  let flag = true; 
  let flag2 = true;
  let flag3 = true;
  let seguir;

  do{

    nombre = prompt("Ingrese nombre");

    cursada = prompt("Ingrese cursada: libre / presencial / remota");
    while(cursada != "libre" && cursada != "presencial" && cursada != "remota"){
      cursada = prompt("Dato invalido. Ingrese cursada: libre / presencial / remota");
    }

    materias = parseInt(prompt("Ingrese numero de materias entre 1 y 8"));
    while(isNaN(materias) || materias < 1 || materias > 8){
      materias = parseInt(prompt("Invalido. Ingrese numero de materias entre 1 y 8"));
    }

    sexo = prompt("Ingrese (femenino) 'f', (masculino) 'm' o (no binario) 'nb'");
    while(sexo != "f" && sexo != "m" && sexo != "nb"){
      sexo = prompt("Invalido. Ingrese 'f', 'm' o 'nb'");
    }

    notapromedio = parseInt(prompt("Ingrese la nota promedio (entre el 0 y el 10)"));
    while(notapromedio < 0 || notapromedio > 10 || isNaN(notapromedio)){
      notapromedio = parseInt(prompt("Invalido. Ingrese la nota promedio (entre el 1 y el 10)"));
    }

    edad = parseInt(prompt("Ingrese una edad (entre 18 y 65)"));
    while(edad < 18 || edad > 65 || isNaN(edad)){
      edad = parseInt(prompt("Invalido. Ingrese una edad (entre 18 y 65)"));
    }

    if(sexo != "m" && (flag == true || notapromedio > maxPromedioNoM)){
      maxPromedioNoM = notapromedio;
      maxNombreNoM = nombre; 
      flag = false;
    }

    if(cursada == "libre" && (flag2 == true || edad < minEdadLibre)){
      minEdadLibre = edad;
      minNombreLibre = nombre; 
      flag2 = false; 

    }

    if(sexo == "f"){
      acuMujer += notapromedio;
      contM++;
    }
    else if(sexo == "m"){
      acuHombre += notapromedio;
      contH++;
    }
    else{
      acuNoB += notapromedio;
      contNB++;
    }

    if(cursada != "remota" && (flag3 == true || materias > maxMateriasNoFR)){
      maxMateriasNoFR = materias;
      maxNombreNoFR = nombre;
      maxEdadNoFR = edad; 
      flag3 = false;
    }




    seguir = prompt("Desea continuar? Oprima 's'");

  } while (seguir == 's');

  promedioHombre = acuHombre / contH; 
  promedioMujer = acuMujer / contM; 
  promedioNoBinario = acuNoB / contNB; 

 
    if(maxNombreNoM == undefined){
      document.write(`A) Solo se ingresaron masculinos <br>`);
    }
    else{
      document.write(`A) El nombre del mejor promedio es ${maxNombreNoM} <br>`);
    }

    if(minNombreLibre == undefined){
      document.write(`B) No se ingresaron jovenes que cursen libre <br>`);
    }
    else{
      document.write(`B) El nombre del mas joven entre los que dan libre es es ${maxNombreNoM} <br>`);
    }

    if(isNaN(promedioHombre)){
      document.write(`C1) No se ingresaron hombres <br>`);
    }
    else{
      document.write(`C1) El promedio de las notas promedio de hombres es ${promedioHombre}  <br>`);
    }

    if(isNaN(promedioMujer)){
      document.write(`C2) No se ingresaron mujeres <br>`);
    }
    else{
      document.write(`C2) El promedio de las notas promedio de las mujeres es ${promedioMujer}  <br>`);
    }

    if(isNaN(promedioNoBinario)){
      document.write(`C3) No se ingresaron no binarios <br>`);
    }
    else{
      document.write(`C3) El promedio de las notas promedio de los no binarios es ${promedioNoBinario}  <br>`);
    }

    if(maxNombreNoFR == undefined || maxEdadNoFR == undefined){
      document.write(`D) No se ingresaron cursantes de forma remota <br>`);
    }
    else{
      document.write(`D) La edad es ${maxEdadNoFR} y el nombre es ${maxNombreNoFR} <br> `);
    }
    

}
