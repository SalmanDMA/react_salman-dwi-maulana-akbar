import { navbarAbout } from '../../../helper/navbarData';
import Layout from '../../Global/Layout/Layout';
import AboutAuthorContent from './AboutAuthorContent';

const AboutAuthor = () => {
 return (
  <Layout navbarData={navbarAbout}>
   <h1>About Author</h1>
   <AboutAuthorContent />
  </Layout>
 );
};

export default AboutAuthor;
