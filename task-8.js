const anyMap = new Map();

anyMap.set('one', 1);
anyMap.set('two', 2);
anyMap.set('three', 3);
anyMap.set('four', 4);
anyMap.set('five', 5);
anyMap.set('six', 6);
anyMap.set('seven', 7);

for(const [key, value] of anyMap) {
  console.info(`${key} : ${value}`);
};