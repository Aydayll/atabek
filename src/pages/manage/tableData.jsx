import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import  {rows, columns} from './const';
import './style.scss';

const TableData = ({users}) =>{
    let now = new Date();
    return(
        <React.Fragment>
            <DataGrid rows={rows} columns={columns} pageSize={5}checkboxSelection />
        </React.Fragment>
    )
}
export default TableData;