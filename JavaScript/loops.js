"loop"
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}


"do"
do {
  text += "O numero é: " + i;
  i++;
}
while (i < 10);


"for loop"
const cars = ["BMW", "BYD", "Chervrolet", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i];
}

"While the same situation"
while (cars[i]) {
  text += cars[i];
  i++;
}


"Break Loop"
let number = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    number += i;
   }
}


"continue"
let test = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    test += i;
   }
}


"Foreach"
const frutas = ["maçã", "banana", "laranja"];

frutas.forEach(function(fruta, indice) {
    console.log(indice + ": " + fruta);
});




// 1️⃣ LOOP FOR
// Estrutura clássica de loop, usada quando sabemos quantas vezes queremos repetir.
for (let i = 0; i < 5; i++) {
    console.log("for:", i); // imprime 0,1,2,3,4
}


// 2️⃣ LOOP WHILE
// Repetição enquanto a condição for verdadeira. Verifica antes de executar.
let j = 0;
while (j < 5) {
    console.log("while:", j);
    j++;
}

// 3️⃣ LOOP DO...WHILE
// Executa o bloco pelo menos uma vez, depois verifica a condição.
let k = 0;
do {
    console.log("do...while:", k);
    k++;
} while (k < 5);


// 4️⃣ LOOP FOR...OF
// Percorre **valores** de arrays ou strings.
const fruits = ["maçã", "banana", "laranja"];
for (const fruit of fruits) {
    console.log("for...of:", fruit);
}


// 5️⃣ LOOP FOR...IN
// Percorre **chaves (propriedades)** de objetos ou índices de arrays.
const person = { nome: "Alice", idade: 25, cidade: "SP" };
for (const key in person) {
    console.log("for...in:", key, "=", person[key]);
}


// 6️⃣ LOOP COM BREAK E CONTINUE
// Podemos controlar o fluxo do loop.
for (let n = 0; n < 10; n++) {
    if (n === 3) continue; // pula o número 3
    if (n === 7) break;    // sai do loop quando n = 7
    console.log("loop com break/continue:", n);
}
