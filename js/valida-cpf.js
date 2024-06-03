export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, '')
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity(true)
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for ( let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0
    }

    return soma != cpf[9]
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for ( let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0
    }

    return soma != cpf[10]
}



// function validaDigitosCpf(cpf) {
//     const cpfSemDigitos = cpf.substring(0,9)

//     let soma = 0;

//     for (let i = 0; i < cpfSemDigitos.length; i++) {
//         soma += (cpfSemDigitos[i] * (i+1));
//     }

//     const primeiroDigitoVerificador = calculadigito(soma)

//     const cpfComPrimeiroDigito = cpfSemDigitos + primeiroDigitoVerificador.toString();

//     soma = 0;
//     for (let i = 0; i < cpfComPrimeiroDigito.length; i++) {
//         soma += (cpfComPrimeiroDigito[i] * i);
//     }


//     const segundoDigitoVerificador = calculadigito(soma)


//     const cpfCompleto = cpfComPrimeiroDigito + segundoDigitoVerificador.toString();

//     return cpfCompleto == cpf;
// }

// function calculadigito(soma) {
//     return soma % 11 == 10
//         ? 0
//         : soma % 11
// }