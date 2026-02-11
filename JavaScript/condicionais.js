"IF ELSE"
var idade = 7
if (idade > 18){
    console.log("Maior de idade: " + idade)
}
 else {
  console.log("Menor de idade: " + idade)
}



"Switch"
operation = 0
var n1 = 10
var n2 = 20
var resultado
switch(operation){
    case 1:
       resultado = n1 + n2
        break
    case 2:
        resultado = n1 - n2
        break        
    case 3:
        resultado = n1 * n2
        break
    case 4:
        resultado = n1 / n2
        break
    default:
        resultado = "Operação inválida";
        break;
}
console.log(resultado);


"Comparisons"
let x = 5;

(x == 8);
(x != 8); 
(x > 8); 
(x < 8); 


"For"
for(i = 0; i < 1; i++){
    for(y = 0; y > 1; y++){
        if(true){
            i < y
            console.log("test")
        }
    }
}


"While"
text = 10
while (i < 10){
    text += i;
    i++;
}


"Boolean"
let l = -0
Boolean(l)


"AND, OR, NOT"

let k = 6;
let y = 3;

let z = (k < 10 && y > 1)
let m = (k > 0 || y > 0)
let p = !(5 == 8)
