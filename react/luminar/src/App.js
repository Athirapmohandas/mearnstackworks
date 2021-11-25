import Abc from './Random'
import New from './New'
import './App.css';

function App() {

  const name=[{name:'Ram',age:30},{name:'Rahul',age:40}]
  return (
    <div className="App">
      <header className="App-header">
        
         {name.map(item=>(
           <>
           <h1>{item.name}</h1>
           <h3>{item.age}</h3>
           </>
         )
          )}
      </header>
    </div>
  );
}

export default App;
