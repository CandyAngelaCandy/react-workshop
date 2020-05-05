import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUserInfoPage from "./pages/addUser/index";
import ShowUserInfoPage from "./pages/showUser/index";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">黄燕燕 react workshop demo</header>
      <main className="App-body">
        <Router>
          <Switch>
            <Route path="/show">
              <ShowUserInfoPage />
            </Route>
            <Route path="/">
              <AddUserInfoPage />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
