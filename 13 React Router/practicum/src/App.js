import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Todo from './components/Todo/Todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import ErrorPage from './components/Global/ErrorPage';
import { linkAbout, linkAboutApp, linkAboutAuthor, linkErrorPage, linkHome } from './helper/linkData';
import AboutApp from './components/About/AboutApp/AboutApp';
import AboutAuthor from './components/About/AboutAuthor/AboutAuthor';

const router = createBrowserRouter([
 {
  path: linkHome,
  element: <Todo />,
 },
 {
  path: linkAbout,
  element: <About />,
 },
 {
  path: linkAboutApp,
  element: <AboutApp />,
 },
 {
  path: linkAboutAuthor,
  element: <AboutAuthor />,
 },
 {
  path: linkErrorPage,
  element: <ErrorPage />,
 },
]);

function App() {
 return <RouterProvider router={router} />;
}

export default App;
