function multiTable() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j + " * " + i + " = " + (j * i) + "  ");
        }
        document.write("<br/>");
    }
}

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function isPrimeNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}