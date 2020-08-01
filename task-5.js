function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
const MIN_LENGTH = 10;
const LENGTH = MIN_LENGTH + getRandomNumber(16);
let arr = [];

for (let i = 0; i < LENGTH; i++) {
  arr.push(getRandomNumber(101));
}

console.info(`Длинна: ${arr.length}`);
arr.forEach(item => console.info(item));
