import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import "./App.css";
import UserList from "./components/users/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddHandler={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
