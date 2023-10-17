import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import PetPage from "./components/PetPage";
import NewToDo from "./components/NewToDo";
import NewNote from "./components/NewNote";
import PetForm from "./components/NewPetForm";
import ProtectedRoute from "./components/ProtectedRoute"
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <ProtectedRoute exact path="/">
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/pets/:petId">
            <PetPage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/pets/:petId/todos/new">
            <NewToDo />
          </ProtectedRoute>
          <ProtectedRoute exact path="/pets/:petId/notes/new">
            <NewNote />
          </ProtectedRoute>
          <ProtectedRoute exact path="/:userId/pets/new">
            <PetForm />
          </ProtectedRoute>
        </Switch>
      )}
    </>
  );
}

export default App;
