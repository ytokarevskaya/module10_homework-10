function isSameUseSet(arr) {
  return new Set(arr).size === 1;
}

function isSameUseEvery(arr) {
  const first = arr[0];
  return arr.every(item => item === first);
}

function isSameUseFor(arr) {
  const first = arr[0];
  let result = true;
  for(let i = 1; i < arr.length; i++) {
    if(!result) {
      break;
    }
    result = arr[i] === first;
  }
  return result;
}

let sameArr = new Array(10);
let differenеArr = new Array(10);

sameArr.fill(4, 0, 10);

differenеArr.fill(4, 0, 5);
differenеArr.fill(5, 5, 10);

console.info(`Через Set: ${isSameUseSet(sameArr)}`);
console.info(`Через Set: ${isSameUseSet(differenеArr)}`);

console.info(`Через every: ${isSameUseEvery(sameArr)}`);
console.info(`Через every: ${isSameUseEvery(differenеArr)}`);

console.info(`Через for: ${isSameUseFor(sameArr)}`);
console.info(`Через for: ${isSameUseFor(differenеArr)}`);


