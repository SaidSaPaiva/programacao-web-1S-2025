function verificadorPrimo(num) {

    if (num <= 1) {

        return false;
    }

    if ((num !=2) && (num%2==0)) {

        return false;
    }

    for (let i = 3; i <num; i = i + 2) {

        if (num%i == 0) {

            return false;
        }

    }

    return true;
}





console.log(verificadorPrimo(0)); //false
console.log(verificadorPrimo(1)); //false
console.log(verificadorPrimo(2)); //true
console.log(verificadorPrimo(3)); //true
console.log(verificadorPrimo(7)); //true
console.log(verificadorPrimo(83)); //true
console.log(verificadorPrimo(100)); //false
console.log(verificadorPrimo(991)); //true
console.log(verificadorPrimo(104729)); //true
console.log(verificadorPrimo(14348907)); //false