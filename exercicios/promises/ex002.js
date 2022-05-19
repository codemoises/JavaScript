function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('erro');
                return;
            }

            resolve(msg + ' - passei na promise');
            return;
        }, tempo);
    });
}

/*esperaAi('Conexão com o BD.', rand(1, 3))
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
    });*/

    async function executar() {
        try {
            const fase1 = await esperaAi('fase 1', rand());
            console.log(fase1);
            
            const fase2 = await esperaAi('fase 2', rand());
            console.log(fase2);

            const fase3 = await esperaAi('fase 3', rand());
            console.log(fase3);

            console.log('terminamos na fase', fase3);
        } catch(e) {
        console.log(e);
        }
    }
    
    executar();