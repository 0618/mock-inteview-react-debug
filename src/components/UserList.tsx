import { useEffect, useState } from 'react';
import { type User, initialUsers } from '../data';

export const UserList = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  // Bug 1 Fix: Dependency array includes searchTerm
  useEffect(() => {
    if (searchTerm === '') {
      setUsers(initialUsers);
    } else {
      const filtered = initialUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(filtered);
    }
  }, [searchTerm]);

  const handleDelete = (id: number) => {
    // Bug 2 Fix: Immutable state update
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-role">{user.role}</span>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
