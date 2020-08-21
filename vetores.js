vetor1.push('amora','jabuticaba')
vetor1.push('pessego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

//metodo de percurso de vetores 

//forma 1: usando o for tradicional
// i++ significa i = i + 1
for(let i = 0; i < vetor1.length; i++){
    console.log(veotor1[i])
}

console.log('----------------------------------')

//forma 2: for..of
//percorrer do primeiro ao ultimo elemento de uma forma 
//mais simples que o for tradicional
for(let fruta of vetor1){
    console.log(fruta)
}