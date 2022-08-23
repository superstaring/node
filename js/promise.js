const promise9 = () => {
  return new Promise((resolve, reject) => {
    console.log('1');
    setTimeout(() => {
      console.log('5')
    }, 1000);

    resolve('2');
  });
};

promise9().then((result) => {
  console.log('3');

  setTimeout(() => {
    console.log('6')
  }, 1000);
});

console.log('4');


setTimeout(() => {
  console.log('7')
}, 1000);


// 1
// 4
// 3
// 5
// 7
// 6
