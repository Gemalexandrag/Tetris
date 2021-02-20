//shapes
let l = [
[
  [0,0,1,0],
  [1,1,1,0],
  [0,0,0,0],
  [0,0,0,0]
],

[
  [0,1,0,0],
  [0,1,0,0],
  [0,1,1,0],
  [0,0,0,0]
],

[
  [0,0,0,0],
  [1,1,1,0],
  [1,0,0,0],
  [0,0,0,0]
],

[
  [1,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,0,0,0]
]
];

let i = [
[
  [0,0,0,0],
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0]
],

[
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0]
],

[
  [0,0,0,0],
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0]
],

[
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0]
]
];

let j = [
[
  [0,1,0,0],
  [0,1,0,0],
  [1,1,0,0],
  [0,0,0,0]
],

[
  [1,0,0,0],
  [1,1,1,0],
  [0,0,0,0],
  [0,0,0,0]
],

[
  [0,1,1,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,0,0,0]
],

[

  // select ex: j[3][0][1]
  [0,0,0,0],
  [1,1,1,0],
  [0,0,1,0],
  [0,0,0,0]
]
];


//creates table
$(document).ready(function(){
  console.log("in function");
  for(let i = 0; i < 20; i++){
    let row = document.getElementById("table").insertRow();
    for(let i = 0; i < 10; i++){
      row.insertCell();
    }
  }
  let x = document.getElementById("table").childNodes[0];
  let y = x.childNodes[1];
  console.log(x)//.css("background-color:blue")
});
//picks random shape
const getShape = ()=>{
let shapes = [l, i, j];
return shapes[Math.floor(Math.random() * 3)];
}

//  $( "table tr:first:nth-child(2)" ).css("background-color:blue");
    const show = () =>{
      for(i = 0; i < 7; i++){

      }
    }
