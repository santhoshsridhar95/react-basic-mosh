import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

interface Props {
  setError: (error: string) => void;
}
const User = ({ setError }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        console.log("user data", users);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
