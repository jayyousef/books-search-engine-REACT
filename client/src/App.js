import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu"
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Book from "./Pages/Book";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Mystuff from "./Pages/Mystuff";
import Operator from "./Pages/Operator";
import Terms from "./Pages/Terms";
import Tour from "./Pages/Tour";
import Touradmin from "./Pages/Touradmin";
import { UserContext } from "./utils/UserContext";
import './App.css';
import Footer from './components/Footer';

function App() {
  const [userInfo, setUserInfo] = useState('Stateful User Context Value');
  return (
    <Router>
      <UserContext.Provider value={{userInfo, setUserInfo}}>
        <div className="App">
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/mystuff" component={Mystuff} />
            <Route exact path="/operator" component={Operator} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/tour" component={Tour} />
            <Route exact path="/touradmin" component={Touradmin} />
        </Switch>
        <Footer />
        </div>
      </UserContext.Provider>
    </Router>
    
  );
}

export default App;
