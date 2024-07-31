import { createBrowserRouter } from 'react-router-dom';
import ProjectDetails from './page/ProjectDetails';
export const router = createBrowserRouter([
  {
    path: '/project',
    element: <ProjectDetails />,
  },
]);
