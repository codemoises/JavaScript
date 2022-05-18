function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD.', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base...', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Dados achados.', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        console.log('Exibe dados na tela.');
    })
    .catch(e => {
        console.log('ERRO:', e)
    });