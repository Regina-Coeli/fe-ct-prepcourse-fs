

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

// function dePalabrasAFrase(palabras) {
//   // El argumento "palabras" es un arreglo de strings.
//   // Retornar un string donde todas las palabras estén concatenadas
//   // con un espacio entre cada palabra.
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  
//   // Tu código
//   return palabras.join(' ');
// }
// console.log(dePalabrasAFrase  (['Hello', 'world!']));

// function multiplicarArgumentos() {
//   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
//   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
//   // [PISTA]: "arguments" es un arreglo.
//   // Tu código:
//   let res=1;
//   if(arguments.length===0)return 0;
//   else if(arguments.length===1)return arguments[0];
//   else  {  for (i=0;i< arguments.length;i++) { res=res*arguments[i]; } ;
//            return res;
//         }
// }
// console.log( multiplicarArgumentos(1,4));
// function cuentoElementos(array) {
//   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
//   // Tu código:
//   let res=0;
//   array.forEach( (num) => { if (num>18)res++; } )
//   return res;
// }
// console.log(cuentoElementos([19,40,1]));


// 
function tienenMismaLongitud(str1, str2) {
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  var a=str1.length;
  var b=str2.length;
  if (str1.length == str2.length)
  return true;
  else return false;
  
}
console.log(tienenMismaLongitud("hola","hol"));
