import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import AddUser from './components/user/userSignup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<AddUser />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
