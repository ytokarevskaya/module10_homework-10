function getType(value) {
  switch (typeof value) {
    case 'number': {
      return 'Число';
    }
    case 'string': {
      return 'Строка';
    }
    case 'boolean': {
      return 'Логический тип';
    }
    default: {
      return 'Тип x не определён';
    }
  }
}

console.info(getType(1));
console.info(getType('One'));
console.info(getType(false));
console.info(getType(() => {}));
console.info(getType({}));
console.info(getType([]));
console.info(getType(null));
console.info(getType(undefined));

// Задача решена верно, но более правильно было бы использовать оператор switch так, как я исправила выше