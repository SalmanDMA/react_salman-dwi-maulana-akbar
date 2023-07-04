import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = ({ toggleSidebar }) => {
 return (
  <div>
   <ul className='nav nav-tabs'>
    <li className='active'>
     <GiHamburgerMenu onClick={toggleSidebar} className='icon-menu' />
    </li>
   </ul>
  </div>
 );
};

export default Navbar;
