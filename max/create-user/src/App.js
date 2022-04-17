import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const DUMMY_DATA = [{ username: "matt", age: "29" }];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);

  const addUserHandler = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
