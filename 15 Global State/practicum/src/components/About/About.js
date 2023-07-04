import Layout from '../Global/Layout/Layout';
import { navbarAbout } from '../../helper/navbarData';

const About = () => {
 return (
  <Layout navbarData={navbarAbout}>
   <h1 className='text-center'>About</h1>
   <p className='text-center fst-italic'>This is about page, please click icon menu to navigate to about app or about author</p>
  </Layout>
 );
};

export default About;
