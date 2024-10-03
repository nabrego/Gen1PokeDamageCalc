import React, { useState, useEffect } from "react";
import Axios from "axios";
import SelectComponent from "./components/select";
import "./index.css";

interface User {
  username: string;
}

interface AppProps {}

function App(): React.ReactElement<AppProps> {
  const [listOfUsers, setListOfUsers] = useState<User[]>([]);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    Axios.get<User[]>("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post<User>("http://localhost:3001/createUser", {
      username,
    }).then((response) => {
      alert("User Created");
      setListOfUsers([...listOfUsers, { username }]);
    });
  };

  return (
    <main>
      {/* <div className="App">
        <div className="userDisplay">
          {listOfUsers.map((user) => {
            return (
              <div key={user.username}>
                <h1>Username: {user.username}</h1>
              </div>
            );
          })}
        </div>

        <div>
          <input
            type="text"
            placeholder="username..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button onClick={createUser}>Create User</button>
        </div>
      </div> */}

      <div>
        <h2>Attacking Pokemon</h2>
        <SelectComponent />
      </div>
    </main>
  );
}

export default App;
