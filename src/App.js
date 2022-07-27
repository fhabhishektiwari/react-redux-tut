import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import About from './pages/About';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Header from './components/Header';

function App() {

  return (

    <BrowserRouter>
      <div className="App">
      <Header/>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/add' element={<AddEdit/>}/>
          <Route exact path='/update/:id' element={<AddEdit/>}/>
          <Route exact path='/view/:id' element={<View/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
