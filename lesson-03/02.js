// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(numb) {
    if (numb % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

const whatIsNumber = isEven(6)
console.log(whatIsNumber)