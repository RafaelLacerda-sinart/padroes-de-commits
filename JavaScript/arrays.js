const data = [
    { name: "onix", type: "sedan", price: 120000, year: 2025, active: true },
    { name: "hb20", type: "hatch", price: 45000, year: 2015, active: false },
    { name: "mini dophin", type: "hatch", price: 135000, year: 2023, active: true },
    { name: "HRV", type: "SUV", price: 120000, year: 2022, active: false },
    { name: "Renegade", type: "SUV", price: 80000, year: 2018, active: false }
]

//find
const ano = data.find ((ano) => {
    return ano.year < 2018
})
console.log(ano)


//filter
const preco = data.filter ((preco) => {
    return preco.price >= 40000 && preco.type === "hatch"
})
console.log(preco)


//findindex
const tipo = data.findIndex ((tipo) => {
    return tipo.type === "SUV"
})
console.log(tipo)
console.log(data[tipo].active = false)
console.log(data)

//Map
const mapa = data.map((user, index)=>{
    return "bem vindo: " + user.name
})
console.log(mapa)


const func = data.map((user, index)=>{
    if(user.price <= 100000){
        user.price += 20000
    }
    return{
        name: user.name,
        price: user.price,
        year: user.year
    }
})
console.log(func)


//reverter ordem
console.log(data.reverse())


//some 
const userInactive = data.some((user) =>{
    return user.active === true
})
console.log(userInactive)


//Every
const userActive = data.every((user) => {
    return user.active === true
})
console.log(userActive)


//Reduce
const cars = data.reduce((total, user) =>{
    return total += user.price
}, 0)
console.log(cars)