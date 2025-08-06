import './App.css';
import { Cachorro } from './models/Cachorro';
import { Hamster } from './models/Hamster';

function App() {
  const rex = new Cachorro('Rex');
  const fofo = new Hamster('Fofo');

  return (
    <div>
      <h2>Cachorro</h2>
      <p>{rex.emitirSom()}</p>
      <p>{rex.correr()}</p>

      <h2>Hamster</h2>
      <p>{fofo.emitirSom()}</p>
      <p>{fofo.comerSemente()}</p>
    </div>
  );
}

export default App;

