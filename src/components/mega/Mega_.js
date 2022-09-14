// function gerarNumeros(qtd) { 
//     let numbers = [];
//     let min = 1;
//     let max = 60;

//     for(let i = 1; i <= qtd; i++) { 

//     let random = parseInt(Math.random() * max - min) + min;

//     if(random === random) { 
//         random++
//         if(random > 60) { 
//             random--
//         }
//     }
//     numbers.push(random)
   
//     }

//     return numbers.join(', ')
// }



console.log(gerarNumeros(7))