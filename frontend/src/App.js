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
          <Route path="/login" exact>
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <ProtectedRoute path="/" exact>
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute path="/pets/:petId" exact>
            <PetPage />
          </ProtectedRoute>
          <ProtectedRoute path="/pets/:petId/todos/new" exact>
            <NewToDo />
          </ProtectedRoute>
          <ProtectedRoute path="/pets/:petId/notes/new" exact>
            <NewNote />
          </ProtectedRoute>
          <ProtectedRoute path="/:userId/pets/new" exact>
            <PetForm />
          </ProtectedRoute>
        </Switch>
      )}
    </>
  );
}

export default App;
