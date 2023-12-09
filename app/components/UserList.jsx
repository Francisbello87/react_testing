import { useEffect, useState } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users"),{method: 'GET'}
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => <div key={user.id}>{user.username}</div>)
      ) : (
        <span>There are no users</span>
      )}
    </div>
  );
};
