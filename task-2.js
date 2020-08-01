function getType(value) {
  switch (true) {
    case typeof value === 'number': {
      return 'Число';
    }
    case typeof value === 'string': {
      return 'Строка';
    }
    case typeof value === 'boolean': {
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