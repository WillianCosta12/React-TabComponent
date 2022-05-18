import './App.css';
import Tab from '../src/components/tab';

function App() {

  const ids = [
    "Tab01",
    "Tab02",
    "Tab03",
    "Tab04"
  ]

  const contents = [
    "Esse é o texto do Primeiro Tab",
    "Esse é o texto do Segundo Tab",
    "Esse é o texto do Terceiro Tab",
    "Esse é o texto do Quarto Tab"
  ]

  return (
    <div className="App">
      <Tab ids={ids} contents={contents}/>
    </div>
  );
}

export default App;
