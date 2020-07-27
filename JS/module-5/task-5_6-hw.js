const objB = {
  z: 10,
};

const objA = Object.create(objB);

objB.z = 250;
console.log(objA);
console.log(objB);
