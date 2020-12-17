import React from 'react';
import Avatar from '../../assets/avatar.svg'

const Item = ()=>{
    return(
        <tr className="manage__row">
        <td className=" col-2 user__row">
            <img className="user__avatar" src={Avatar} alt="Avatar"/>
            <span className="user__name">Makenova Ayday</span>
        </td>
        <td className="col-3 manage__headers" >DEV63016762</td>
        <td className="col-3 manage__headers" >1-(618)312-3065</td>
        <td className="col-3 manage__headers" >rsnyder@blogspan.gov</td>
        <td className="col-3 manage__headers user__date" >04/28/2018</td>
    </tr>
    )
}
export default Item;