import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../../../services/api-client";
import userService, { User } from "../../../../services/user-service";
import useUsers from "../../../../hooks/useUsers";

interface Props {
  setError: (error: string) => void;
}
const User_CUD_operation_Reusable_api = ({ setError }: Props) => {
  // const [users, setUsers] = useState<User[]>([]);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   const { request, cancel } = userService.getAll<User>();
  //   request
  //     .then((res) => {
  //       setUsers(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  //   //   .finally(() => setLoading(false));

  //   return () => cancel();
  // }, []);

  const { users, isLoading, setUsers } = useUsers(setError); // ***** custom hook *****
  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const newUser = { id: 0, name: "Santhu" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then((res) => {
        setUsers([res.data, ...originalUsers]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService
      .update(updatedUser)
      .then((res) => {
        setUsers([res.data, ...originalUsers]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      <div>
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add
        </button>
        <h5>User Delete Data</h5>
        {isLoading && <div className="spinner-border"></div>}
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteUser(user);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default User_CUD_operation_Reusable_api;
