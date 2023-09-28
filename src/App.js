import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Todolist from "./Pages/Todolist";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todolist' element={<Todolist/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      {/* <Todolist/> */}
</div>
  );
}

export default App;
