import logo from './reacayd.jpg';
import './App.css';


const StringTest = "Patrick";
Number = "3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este é um texto sendo exibido.
        </p>
        <p>A string digitada é:{StringTest} </p>
        <p>A variável numérica é: {Number}</p>
      </header>
    </div>
  );
}

export default App;
