//1.
let cedula = prompt('Favor ingrese su cédula');

//let cedula = '402-1474721-0';

//2.
cedula = cedula.replace(/-/g, '');
let ultNum = cedula[10];

//3.
cedula = cedula.substring(0, 10);

//4.
cedula = cedula.split('');

for (let x = 0; x < cedula.length; x++) {
	if (x % 2 === 0) {
		cedula[x] = parseInt(cedula[x]) * 1;
	} else {
		cedula[x] = parseInt(cedula[x]) * 2;
	}
}

//5.

let total = 0;

for (let x = 0; x < cedula.length; x++) {
	if (cedula[x] > 9) {
		cedula[x] =
			parseInt(cedula[x].toString().split('')[0]) +
			parseInt(cedula[x].toString().split('')[1]);
	} else {
		cedula[x] = cedula[x];
	}
	total = total + parseInt(cedula[x]);
}

//6.
let result = 0;
let decenaSuper = total / 10;
decenaSuper = Math.ceil(decenaSuper);
decenaSuper = decenaSuper * 10;
result = decenaSuper - total;

console.log(result);

let valido =
	result == ultNum ? alert(':D ¡Cédula Válida!') : alert(' :( Cédula Inválida');
