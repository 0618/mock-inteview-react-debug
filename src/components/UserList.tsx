import { useEffect, useState } from 'react';
import { type User, initialUsers } from '../data';

export const UserList = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm === '') {
      setUsers(initialUsers);
    } else {
      const filtered = initialUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(filtered);
    }
  }, []);

  const handleDelete = (id: number) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      setUsers(users); 
      console.log('User deleted:', id);
    }
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
