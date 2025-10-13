/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    const words = str.split(' '); // 1. Разбиваем строку на массив слов
    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            // 2. Берем первую букву, делаем ее заглавной
            const firstLetter = word.charAt(0).toUpperCase();
            // 3. Берем остальную часть слова
            const restOfWord = word.slice(1).toLowerCase(); // `toLowerCase()` можно добавить, чтобы остальная часть была строчной
            // 4. Объединяем и добавляем в новый массив
            capitalizedWords.push(firstLetter + restOfWord);
        } else {
            capitalizedWords.push(''); // Добавляем пустую строку, если слово было пустым
        }
    }

    return capitalizedWords.join(' '); // 5. Собираем слова обратно в строку
}


console.log(capitalizeWords('hello world from javascript'));