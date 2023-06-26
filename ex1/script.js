// let body = document.querySelector('body');
 var x = document.createElement("BUTTON");
var t = document.createTextNode("Click me");
const ull = document.createElement('ul');
  const p = document.createElement('li');

  x.appendChild(t);
  document.body.append(ull);
  document.body.append(x);


//   fetch("becode.json")
// .then(function(response){
//    return response.json();
// }).then(text => {
//   console.log(text);
// })

const myFunction = () =>{
fetch('becode.json')
.then(response => response.json())
.then(json => {
  for (var i =0 ;i < json.length; i++) {
  let p = document.createElement('li');
  p.innerHTML = json[i];
  ull.append(p)
  }
})
}
x.onclick = function(){myFunction()};





