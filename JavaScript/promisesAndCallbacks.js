//test
const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then((resp) => resp.json())
.then(function (data){
    console.log(data)

    return data.map(function (user){
        let li = document.createElement('li')
        li.innerHTML = `${user.name} (${user.username})`
        ul.appendChild(li)
    })

})
.catch((error) => {
    console.log('Vish ' + error)
})




//Callbacks
function sumNumbers() {
    let result = 1 + 1

    if(result == 2){
        sucessCallback()
    } else {
        errorCallback()
    }
}

function sucessCallback(){
    console.log("yes")
}
function errorCallback(){
    console.log("No")
}
sumNumbers()


//promises
let p = new promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2){
        resolve('sucess')
    } else {
        reject('fail')
    }
})
p.then((message) => {
    console.log('This is in the then ' + message)
})
.catch((err) =>{
    console.log('This is the catch ' + err)
})



//Promise aLL and race
var promisse = Promise.resolve(3)
var promisse2 = Promise.resolve(5)
var promisse3 = Promise.resolve(2)

Promisse.all([promisse, promisse2, promisse3])
.then( function (values){

})

Promisse.race([promisse, promisse2, promisse3])
.then( function (values){

})