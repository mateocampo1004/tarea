'use strict'


let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];


let nombreIngresado = prompt("Ingrese un nombre:");
let valor=false;
for (let i = 0; i < students.length; i++) {
  if (students[i] === nombreIngresado) {
    valor=true;
    break;
  }
 
 
}

if(valor==true){
  alert("El nombre se encuentra en el vector.");
}else{
  alert("El nombre no se encuentra en el vector.");
}