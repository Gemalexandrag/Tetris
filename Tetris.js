//shapes
let l = [
[
  [0,0,1],
  [1,1,1],
  [0,0,0]
],

[
  [0,1,0],
  [0,1,0],
  [0,1,1]
],

[
  [0,0,0],
  [1,1,1],
  [1,0,0]
],

[
  [1,1,0],
  [0,1,0],
  [0,1,0]
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
  [0,1,0],
  [0,1,0],
  [1,1,0]
],

[
  [1,0,0],
  [1,1,1],
  [0,0,0]
],

[
  [0,1,1],
  [0,1,0],
  [0,1,0]
],

[
  [0,0,0],
  [1,1,1],
  [0,0,1]
]
];



$(document).ready(function(){
  console.log("in function");
  for(let i = 0; i < 20; i++){
    let row = document.getElementById("table").insertRow();
    for(let i = 0; i < 10; i++){
      row.insertCell();
    }
  }
});
const getShape(a,b,c)=>{
Math.floor(Math.random() * 3);

}
    const show(getshape(l,i,j))=> show(id){
       get(id).style.visibility = null;     }
