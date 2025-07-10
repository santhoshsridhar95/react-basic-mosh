import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
interface Props {
  setError: (error: string) => void;
}
const UserCancellingRequest = ({ setError }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    //   .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <>
      <div>
        UserCancellingRequest
        {isLoading && <div className="spinner-border"></div>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserCancellingRequest;
