var res = document.getElementById("res");
var pro1 = prompt("Please enter numbers and fruits");
var pro2 = prompt("Please enter format: a-z, z-a , reverse , 1-99 , 99-1 ");
var text = pro1.split(" ");

switch (pro2) {
  case "a-z":
    text.sort();
    console.log(text);
    break;
  case "z-a":
    text.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(text);
    break;
  case "reverse":
    text.reverse();
    console.log(text);
    break;
  case "1-99":
    text.sort(function (a, b) {
      return a - b;
    });
    console.log(text);
    break;
  case "99-1":
    text.sort(function (a, b) {
      return b - a;
    });
    console.log(text);
    break;

  default:
    console.log("Please Enter correct format !");
    break;
}
