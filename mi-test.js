

//    function agregarItemAlFinalDelArray(array, elemento) {
//     // Agrega el "elemento" al final del arreglo recibido.
//     // Retorna el arreglo.
//     // Tu código

//     return array.push(elemento);
//  }
//console.log(agregarItemAlFinalDelArray([1,1,1,1],3));

//   function incrementarPorUno(array) {
//     // El arreglo recibido por parámetro contiene números.
//     // Retornar un arreglo con los elementos incrementados en +1.
//     // Tu código:
//  //   let arreglo=[];
//    //    for(i=0; i<array.length; i++)
//      //  arreglo.push( ++array[i]);

//        arreglo=array.map((num) => {return num + 1;});
//        return arreglo;

//  }
//  console.log(incrementarPorUno([1,1]));

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  
  // Tu código
  return palabras.join(' ');
}
console.log(dePalabrasAFrase  (['Hello', 'world!']));
