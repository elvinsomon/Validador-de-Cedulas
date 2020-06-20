let cedulaOriginal = prompt('Favor ingrese su cédula');

let cedulaSinG = cedulaOriginal.replace('-', '');
cedulaSinG = cedulaSinG.replace('-', '');

let cedula10 = cedulaSinG.substring(0, 10);
console.log(cedula10);
