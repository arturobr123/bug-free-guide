import React, { useState , useEffect} from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const checkUser = () =>{
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(":)");
        setUser(user);
      }
    });
  }

  useEffect(() => {
    checkUser();
  }, [])

  return (
    <div className="app">
      {user == null ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
