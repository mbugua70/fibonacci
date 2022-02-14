function isFibonacci(num, a = 0, b = 1) {
    if (num === 0 || num === 1) {
        return true;
    }
    var el = document.getElementById('work');


    let nextNumber = a + b;

    if (nextNumber === num) {
        return true;
    }
    else if (nextNumber > num) {
        return false;
    }

    return isFibonacci(num, b, nextNumber);
}


isFibonacci();