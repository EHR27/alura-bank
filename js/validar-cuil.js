export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g, "");
    
    if(numeroRepetido(cuil)){
        console.log("Valores repetidos");
        campo.setCustomValidity("Valores Repetidos");
    }else{
        if(validarNumeros(cuil) && digitoVerificador(cuil)){
            console.log("Cuil valido");
        }else{
            console.log("Cuil no existe");
            campo.setCustomValidity("Cuil no existe");
        }
    }
}

function numeroRepetido(cuil){
    const numeroRepetido = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    return numeroRepetido.includes(cuil);
}

function validarNumeros(cuil){
    let primerosDigitos = cuil.substr(0,2);
    let digitosValidos = ['20','23','24','27','30','33','34'];

    return digitosValidos.includes(primerosDigitos);
}

function digitoVerificador(cuil){
    let acumulado = 0;
    const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    for(let i = 0; i < 10; i++){
        acumulado += parseInt(cuil[i], 10) * factores[i];
    }

    let validadorTeorico = 11 - (acumulado % 11);

    if(validadorTeorico === 11){
        validadorTeorico = 0;
    }else if(validadorTeorico == 10){
        validadorTeorico = 9;
    }

    const digitoVerificador = parseInt(cuil[10], 10);

    return digitoVerificador === validadorTeorico;
}