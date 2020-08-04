function isNumber(item) {
  return typeof item === 'number' && !isNaN(+item);
}

function isEven(item) {
  return item%2 === 0;
}

function isOdd(item) {
  return item%2 !== 0;
}

const arr = [1, 2, 3, 4, 5, 'a', null, 13, 15, ()=>{}, {}, undefined, NaN, 40, 0, 0, 29, 0, 150];

const result = {
  odd: 0,
  even: 0,
  zero: 0,
};

arr.forEach(item => {
  switch(true) {
    case !isNumber(item): {
      return true;
    }
    case isOdd(item): {
      ++result.odd;
      return true;
    }
    case isEven(item): {
      if(item === 0) {
        ++result.zero;  
      } else {
        ++result.even;
      }
      return true;
    }
  }
});

console.info(`четных: ${result.even}`);
console.info(`нечетных: ${result.odd}`);
console.info(`нулевых: ${result.zero}`);

// Всё верно, но есть небольшая неточность: нули должны учитываться отдельно (т.е. они не прибавляются к четным элементам). Выше исправила на правильный вариант.