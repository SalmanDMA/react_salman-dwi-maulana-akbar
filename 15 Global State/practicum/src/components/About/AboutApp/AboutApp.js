import { navbarAbout } from '../../../helper/navbarData';
import Layout from '../../Global/Layout/Layout';
import AboutAppContent from './AboutAppContent';

const AboutApp = () => {
 return (
  <Layout navbarData={navbarAbout}>
   <h1>About App</h1>
   <AboutAppContent />
  </Layout>
 );
};

export default AboutApp;
