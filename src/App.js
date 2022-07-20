import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <User data={{name:"Ketan",age:24,email:"ketan@gmail.com"}}/>
    </div>
  );
}

export default App;
