import { Animal } from './Animal';

export class Hamster extends Animal {
  constructor(nome) {
    super(nome);
  }

  emitirSom() {
    return 'ricric';
  }

  comerSemente() {
    return 'Humm… estou de barriga cheia';
  }
}
