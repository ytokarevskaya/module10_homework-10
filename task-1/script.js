function MyNumber (value) {
  this.value = +value;
}

MyNumber.prototype.isNumber = function() {
  return typeof this.value === 'number' && !isNaN(this.value);
}

MyNumber.prototype.isOdd = function() {
  return this.isNumber() && this.value%2 === 0;
}

MyNumber.prototype.isEven = function() {
  return this.isNumber() && this.value%2 !== 0;
}

const value = prompt('Введите значение: ');
const input = new MyNumber(value);

switch (true) {
  case input.isEven(): {
    console.info('Нечетное');
    break;
  }
  case input.isOdd(): {
    console.info('Четное');
    break;
  }
  default: {
    console.info('Упс, кажется, вы ошиблись');
  }
}
