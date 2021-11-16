import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header> 
          <Switch>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/reset">
              <ResetPassword></ResetPassword>
            </Route>
            

          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
