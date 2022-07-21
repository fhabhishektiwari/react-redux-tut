import './App.css';
import User from './User';
import Home from './components/Home';

function App() {
  const emp=[
    {
      name:"ketan",
      age:24,
      email:"ketan@gmail.com"
    },
    {
      name:"Yashwant",
      age:24,
      email:"yashwant@gmail.com"
    }
  ]
  return (
    <div className="App">
      <Home/>
      <h1>App Component</h1>
      <User data={emp}/>
    </div>
  );
}

export default App;
