import React from 'react';
import {navItems} from './const';
 
function Items() {
   return(
      <nav>
          <ul>
          {navItems.map((item) =>(
              <li key = {item}>
                 <a href={items}>{items}</a>
              </li>
          ))}
          </ul>
      </nav>
   );
}
export default Items;