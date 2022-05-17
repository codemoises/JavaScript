class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    
    }

    diminuirVolume() {
        this.volume -= 2;

    }

    // Método estático
    static trocaPilha() {
        console.log('Trocandow');
    }
}

const Controle1 = new ControleRemoto('LG');
Controle1.aumentarVolume();
Controle1.aumentarVolume();
Controle1.aumentarVolume();
Controle1.aumentarVolume();

ControleRemoto.trocaPilha;
console.log(Controle1);