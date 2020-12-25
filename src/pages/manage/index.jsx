import React from 'react';
import axios from 'axios';
import TableData from './tableData';
import './style.scss';


export default function Manage() {
  const [usersData, setUsersData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);
  return (
    <div className = "manage"> 
    <div style={{ height: 700, width: '100%' }}>
     <TableData />
    </div>
    </div>
    
  );
}