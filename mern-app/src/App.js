import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>
        <br></br>
        <Route exact path="/" component={ExerciseList}></Route>
        <Route exact path="/edit/:id" component={EditExercise}></Route>
        <Route exact path="/create" component={CreateExercise}></Route>
        <Route exact path="/user" component={CreateUser}></Route>
      </div>
    </Router>
  );
}

export default App;
