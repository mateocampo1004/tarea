'use strict'

let phrase = 'La programación web es fundamental para el progreso';

let palabras = phrase.split(' ');


let palabrasMasDe3Letras = palabras.filter(palabra => palabra.length > 3);


alert(`Palabras con más de 3 letras: ${palabrasMasDe3Letras.join(', ')}`);
