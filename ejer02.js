
let palabra;
palabra="Hola mundo";

var inv="";
let n=palabra.length-1;
//console.log(palabra)
while(n>=0){
    inv=inv+palabra[n];
    n=n-1;
}
//document.getElementById("demo").innerHTML = day;
console.log(inv);
