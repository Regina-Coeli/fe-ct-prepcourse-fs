function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if (num<0)
    return false;
    else 
       for (var i = 2; i < num; i++) 
         if (num% i === 0) 
           return false;
         
     
       
     
       return (num !== 1 && num !== 0);
     }

//for (var e = -1; e <= 10; e++) 
 //  console.log(e+" "+esPrimo(e));

   function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    let i=0;
    do {
       i = i + 1;
       num = num + 5;
     } while (i <= 7);
     return num;}

     console.log(doWhile(0));