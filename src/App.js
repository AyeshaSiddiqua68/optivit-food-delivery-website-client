import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route to='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='*'>
             <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
     
    </div>
  );
}

export default App;
