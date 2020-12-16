
import {navItems} from './const';
 
function Items() {
   return(
      <nav>
          <ul>
          {navItems.map((item) =>(
              <li key = {item}>
                 <a href={item}>
                    <img src={item} alt=""/>
                 </a>
              </li>
          ))}
          </ul>
      </nav>
   );
}
export default Items;