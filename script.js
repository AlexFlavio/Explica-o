const arr = ["filme0","filme1","filme2","filme3","filme4","filme5"]
const str = "Acertou"

function teste(array,string){
    let resposta = ""
    for(let i = 0; i <array.length;i++){
        if(array[i] == string){
            resposta = "Encontrou"
        }
        if(resposta !== "Encontrou"){
            resposta = "Não Encontrou"
        }
    }
return resposta
}
teste(arr,"filme4")


// Reposta = "" 

// i = 0
// console.log(arr[i] ===  arr[0] === "Filme 0")
// if(filme0 === filme4){
//     -
// }
// if(filme0 !== filme4 && resposta !== Encontrou){
//     reposta = Não encotrou
// }



// resposta = Não Encontrou
// i = 1
// console.log(arr[i] ===  arr[1] === "Filme 1")
// if(filme1 === filme4){
//     -
// }
// if(filme1 !== filme4 && resposta !== Encontrou){
//     resposta = Não Encontrou
// }

// resposta = Não Encontrou

// i = 2
// console.log(arr[i] ===  arr[2] === "Filme 2")

// if(filme2 === filme4){-} não roda
// if(filme2 !== filme4 && resposta !== Encontrou){
//     resposta = Não Encontrou
// }
// i++ 2+1

// resposta = Não Encontrou
// i = 3
// console.log(arr[i] ===  arr[3] === "Filme 3")

// if(filme3 === filme4){-} não roda
// if(filme3 !== filme4 && resposta !== Encontrou){
//     resposta = Não Encontrou
// }
// i == 3 < arr.length === 6 / i++

// resposta = não Encontrou
// i = 4
// console.log(arr[i] ===  arr[4] === "Filme 4")

// if(filme4 === filme4){resposta = Encontrou} Roda
// if(filme4 !== filme4 && resposta !== Encontrou){-}não roda

// resposta = Encontrou

// i == 4 < arr.length === 6 / i++


// resposta = Encontrou
// i = 5
// console.log(arr[i] ===  arr[5] === "Filme 5")

// if(filme5 === filme4){-} Não roda
// if(filme5 !== filme4 && resposta !== Encontrou){-}não roda
// Reposta = Encontrou / Continua como Encontrou

// i= 5 < array.length = 6
// i++ 5 + 1

// i = 6 < array.length = 6
// Não roda o Loop



// Roda o Reurn Repostas
