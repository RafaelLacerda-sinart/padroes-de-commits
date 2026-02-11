
"Note: let não pode ser usado em qualquer lugar"
if(true){ 
    let a = 10
    console.log(a)
}


"Note: var pode ser usado em qualquer lugar"
if(true){ 
    var b = 10
}
console.log(b)


"Note: const pode ser alterado caso seja acessado"
const f = {nome: "fernando"}
f.nome = "Patrick"
console.log(f)
