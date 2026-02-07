import { Timer } from './components/Timer';
import { UserList } from './components/UserList';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <Timer />
      <div className="card">
        <UserList />
      </div>
    </div>
  );
}

export default App;
