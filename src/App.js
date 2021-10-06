import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

function App() {
  return (
    <div>
      {/* passing title as a prop and custom icon*/}
        <Navbar/>
        <UserItem/>
    </div>
  );
}

export default App;
