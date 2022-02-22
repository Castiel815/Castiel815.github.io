function multiTable() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j + " * " + i + " = " + (j * i) + "  ");
        }
        document.write("<br/>");
    }
}

const year = prompt("请输入年份：");

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
