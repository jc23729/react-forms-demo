import React from 'react';
import UserForm from './UserForm';
import ShoppingList from "./ShoppingList";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Components */}
      <ShoppingList />
      <UserForm />
    </div>
  );
}

export default App;
