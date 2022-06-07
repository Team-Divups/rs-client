import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import New from './Pages/New/New';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import { userInputs , productInputs } from './formSource';
import "./Style/dark.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>

            <Route path='users'>
              <Route index element={<List/>}/>
              <Route path='new' element={<New inputs={userInputs} title='Add new User' />}/>
              <Route path=':userID' element={<Single/>}/>
            </Route>

            <Route path='products'>
              <Route index element={<List/>}/>
              <Route path='new' element={<New inputs={productInputs} title="Add new product" />}/>
              <Route path=':productID' element={<Single/>}/>
            </Route>

            <Route path='subscription'>
              <Route index element={<List   title="Subscription"/>}/>
              <Route path='new' element={<New inputs={productInputs} title="Add new subscription" />}/>
              <Route path=':subID' element={<Single/>}/>
            </Route>

          </Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
