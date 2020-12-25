import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import  {rows, columns} from './const';
import './style.scss';


export default function Manage() {
  return (
    <div className = "manage" style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}