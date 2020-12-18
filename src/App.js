import React from 'react';
import Header from './components/header/';
import Sidebar from './components/sidebar';
import Manage from './pages/manage';
import axios from 'axios';
function App() {
  const [userData, setUsersData] = React.useState([]);
  React.useEffect(async () =>{
    await axios
    .get(`http://localhost:3000/database.json`)
    .then((response) => response)
    .then(({ data}) => setUsersData(data.users));
  }, []);
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Manage  data = {userData}/>
    </div>
  );
}

export default App;
