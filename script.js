const helloWorld = (nome="Visitante") => {
    let frase = `Olá, ${nome}!`;
    return frase;
}

console.log(helloWorld("Dione"))
console.log(helloWorld("Geovana"))
console.log(helloWorld("Fernanda"))
console.log(helloWorld())