import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import PrivateRoute from "./helpers/PrivateRoute";
import ProjectContextProvider from "./contexts/project/ProjectContext";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TaskContextProvider from "./contexts/task/TaskContext";
import AuthContextProvider from "./contexts/auth/AuthContext";
import { setHeaders } from "./services/axios";

//sin esto no vamos a poder cargar los projectos pq no se

const token = localStorage.getItem("token");
if (token) {
  setHeaders(token);
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <ProjectContextProvider>
            <TaskContextProvider>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </TaskContextProvider>
          </ProjectContextProvider>
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
