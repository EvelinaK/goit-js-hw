const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log(this);
    this.color = color;
  };
  return changeColor;
};

const hat = {
  color: "blue",
  changeColor: makeChangeColor(),
};

hat.changeColor("orange");
