//Игра 1
function seasons() {
    let monthNumber = prompt ('Введите номер мясяца');
    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
      alert('Зима');
    }
    else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
      alert('Весна');
    }
    else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
      alert('Лето');
    }
    else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
      alert('Осень');
    }
    else {
      alert ('Вы ввели неподходящее значение');
    }
}

//Игра 2 (Задание 11)
function words () {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
  
    let question1 = prompt('Чему равняется первый эллемент массива?');
    let question2 = prompt('Чему равняется последний эллемент массива?');
  
    if (arr[0].toLowerCase() === question1.toLowerCase() && arr[arr.length-1].toLowerCase() === question2.toLowerCase()) {
      alert('Молодец,вы угадали, запомнили все слова!');
      return gameStop();
    }
    else if (arr[0].toLowerCase() === question1.toLowerCase() || question2.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
      alert ('Вы были близки к победе!');
      return gameStop();
    }
  
    else {
      alert ('Вы не угадали!');
      return gameStop();
    }
}
  
function gameStop() {
    let a = confirm('Хочешь продолжить игру?');
    if (a === true) {
      return (words());
    }
    else {
      alert('Спасибо за внимание');
    }
}