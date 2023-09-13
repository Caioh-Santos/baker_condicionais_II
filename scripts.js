console.log('Salve baker')

//----------- RELEMBRANDO -----------

// -------- OPERADORES LÓGICOS ---------

/*
    && (E) => Verifica se ambas condicoes são verdadeiras
    
    sou mulher && instrutora da Labenu ===> Retorna um true

    || (OU)=> Verifica se pelo menos uma condição é verdadeira 

    sou mulher && tenho 20 anos ===> retorna um true , pelo menos uma das condicoes é verdadeira

    ! (NÃO)=> Oposto da resposta 
    !true === false
*/ 

// -------- CONDICIONAIS ---------

// 1. IF / ELSE 

/*
function verificarClimaParaSair (){
    let chuva = prompt('Está chovendo ? Digite sim ou não')
    if(chuva === 'sim'){
        console.log('Leve o guarda chuva')
    }else{
         console.log('Leve o óculos de sol')
    }
}

verificarClimaParaSair ()

*/

//--------------------------------------

// 2. IF / ELSE IF / ELSE => (if aninhado)

/*
function verificarClimaParaSair (){
    let chuva = prompt('Está chovendo ? Digite sim ou não')
    let guardaChuvaAberto = prompt('O guarda-chuva está aberto ? Digite sim ou não')

    if(chuva === 'sim'){
        console.log('Leve o guarda chuva')
    }else if (guardaChuvaAberto=== 'sim'){
        console.log('pegue o seu guarda chuva e saia')
    }else if (guardaChuvaAberto=== 'não'){
        console.log('Abra o guarda chuva para sair')
    }else{
         console.log('Leve o óculos de sol')
    }
}
*/ 

//--------------------------------------

let clima = prompt('Qual clima está hoje (frio |chuvoso | calor | ensolarado)')

const verificarClima =()=>{
    switch(clima){
        case "frio":
            console.log('Leve o casaco');
            break;
        case "chuvoso":
            console.log('Leve o guarda-chuva');
        break;
        case "calor":
            console.log('Ponha um cropped e reaja');
        break;
        case "ensolarado":
            console.log('Leve o óculos de sol');
        break;
        default:
            console.log("Clima não encontrado");	
    }
}

verificarClima()









//----------- EXERCICIO 1 -----------
//----------- EXERCICIO 2 -----------
//----------- EXERCICIO 3 -----------