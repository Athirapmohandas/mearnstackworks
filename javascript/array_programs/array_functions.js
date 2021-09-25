var arr=[2,3,4,5,6]
//square of each number  => Use  map function

var squares=(num)=>num**2;
var res=arr.map(squares)
console.log(res);

var cubes=arr.map(num=>num**3)
console.log(cubes);