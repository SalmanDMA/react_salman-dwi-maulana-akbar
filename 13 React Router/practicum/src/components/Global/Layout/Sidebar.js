import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
const SideBar = ({ toggleSidebar, navbarData }) => {
 return (
  <div className='col-lg-2 position-fixed end-0 top-0 vh-100 sidebar'>
   <IoMdClose onClick={toggleSidebar} className='icon-close fs-3 mt-2' />
   <ul className='list-group list-group-flush p-4'>
    {navbarData.map((item) => (
     <li key={item.id} className='list-group-item'>
      <Link className='text-decoration-none text-black' to={item.link}>
       {item.title}
      </Link>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default SideBar;
