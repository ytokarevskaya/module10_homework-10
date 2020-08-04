function MyNumber (value) {
  this.value = +value;
}

MyNumber.prototype.isNumber = function() {
  return typeof this.value === 'number' && !isNaN(this.value);
}

MyNumber.prototype.isOdd = function() {
  return this.isNumber() && this.value%2 !== 0;
}

MyNumber.prototype.isEven = function() {
  return this.isNumber() && this.value%2 === 0;
}

const value = prompt('Введите значение: ');
const input = new MyNumber(value);

switch (true) {
  case input.isEven(): {
    console.info('Четное');
    break;
  }
  case input.isOdd(): {
    console.info('Нечетное');
    break;
  }
  default: {
    console.info('Упс, кажется, вы ошиблись');
  }
}

// Задание выполнено верно, но вы немного усложнили с использованием конструктора и прототипов. Если вы просто хотели потренироваться - всё ок :) но на всякий случай прикладываю ниже более простой варинат решения:

const inputValue = prompt("Введите число");

const value = +inputValue;

if(typeof value === "number" && !isNaN(value)){
  if(value === 0) {
    console.log("Ноль");
  } else if (value % 2 === 0){
    console.log("Чётное");
  } else {
    console.log("Нечётное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
