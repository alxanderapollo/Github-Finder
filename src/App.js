import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

function App() {
  return (
    <div>
      {/* passing title as a prop and custom icon*/}
        <Navbar/>
        <div className="container">
          <Users/>
        </div>
    </div>
  );
}

export default App;
