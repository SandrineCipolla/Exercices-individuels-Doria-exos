// etape 1 : Écrire une fonction sum1 qui prend en entrée un tableau d’entiers et qui retourne le produit de leur addition

function sum1(integerArray) {
  //   let integerArray = [1, 2, 3];
  let sum = 0;
  for (let i = 0; i < integerArray.length; i++) {
    sum += integerArray[i];
  }
  console.log(sum);
  // return sum
}
sum1([1, 2, 3, 4]);

// etape 2 :Ecrire qui la fonction sum2, qui retourne le même résultat que sum1 mais en utilisant une fonction récursive.

function sum2(integerArray, index = 0) {
  if (index === integerArray.length) {
    return 0;
  } else {
    return integerArray[index] + sum2(integerArray, index + 1);
  }
}
console.log(sum2([1, 2, 3, 4]));

// etape 3 : On appelle factoriel le produit des entiers inférieurs ou égaux à un nombre donné. Exemple : factoriel de 3 = 1x2x3 = 6
//Écrire une fonction factorial qui prend un entier en paramètre et calcule son factoriel récursivement.

function factorial(integer) {
  if (integer === 1) {
    return 1;
  } else {
    return integer * factorial(integer - 1);
  }
}
console.log(factorial(3));

//etape 4 suite de Fibonacci/ formule F(n) = F(n-1) + F(n-2).

function fibonacci(x) {
  if (x <= 0) {
    return 0;
  } else if (x == 1) {
    return 1;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}
console.log("Fibonacci " + fibonacci(13));
