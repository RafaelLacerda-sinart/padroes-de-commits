"Função"
function soma(a,b){
    return a + b
}
console.log(soma(10,20))

"função com variavel"
var sub = function(c,d){
    return c - d
}
console.log(sub(10,2))


"Função anonima"
var div = (e,f)=>{
    return e / f
}
console.log(div(20,2))





"objeto"
var func = function(){
    console.log(this.nome)
}


var obj1 = {

    nome:"lapis",
    f: func,
}
var obj2 = {

    nome:"caneta",
    f: func,
}

obj1.f()
obj2.f()