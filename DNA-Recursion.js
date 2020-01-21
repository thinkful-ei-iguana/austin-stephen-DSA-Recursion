const countingSheep = function(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
  } else {
    console.log(`${num}: Another sheep jumps over the fence`);
    countingSheep(num - 1);
  }
};

countingSheep(3);