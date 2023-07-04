import { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import './Layout.css';

const Layout = ({ children, navbarData }) => {
 const [showSidebar, setShowSidebar] = useState(false);

 const toggleSidebar = () => {
  setShowSidebar(!showSidebar);
 };

 return (
  <section className='vh-100' style={{ backgroundColor: '#eee' }}>
   <div className='container py-5 h-100'>
    <div className='row d-flex justify-content-center align-items-center h-100'>
     <div className='col col-lg-10 col-xl-7'>
      <div className='card rounded-3'>
       <Navbar toggleSidebar={toggleSidebar} />
       <div className='card-body p-4'>{children}</div>
      </div>
     </div>
     {showSidebar && <SideBar toggleSidebar={toggleSidebar} navbarData={navbarData} />}
    </div>
   </div>
  </section>
 );
};

export default Layout;
