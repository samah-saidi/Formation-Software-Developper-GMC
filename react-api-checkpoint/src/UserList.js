import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">User List</h1>
      <div className="user-grid">
        {listOfUser.map((user) => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">{user.phone}</p>
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="user-website"
            >
              {user.website}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
