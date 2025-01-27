import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from "@/components/theme-provider";
import './App.css';
import AuthenticatedRoute from './Components/AuthenticatedRoute';
import Root from './Components/Root';
import About from './Pages/About';
import AllJobs from './Pages/AllJobs';
import Applicants from './Pages/Applicants';
import Home from './Pages/Home';
import JobDetails from './Pages/JobDetails';
import MyJobs from './Pages/MyJobs';
import Onboard from './Pages/Onboard';
import Postjob from './Pages/Postjob';

const router= createBrowserRouter([
  {
    element:<Root/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
      {
      path:"/about",
      element:<About/>
    },
      {
      path:"/alljobs",
      element:(<AuthenticatedRoute>
        <AllJobs/>
      </AuthenticatedRoute>)
    },
      {
      path:"/aplicants",
      element:<AuthenticatedRoute>
      <Applicants/>
    </AuthenticatedRoute>
    },
      {
      path:"/jobdetails/:id",
      element:<AuthenticatedRoute>
      <JobDetails/>
    </AuthenticatedRoute>
    },
      {
      path:"/myjobs",
      element:<AuthenticatedRoute>
      <MyJobs/>
    </AuthenticatedRoute>
    },
      {
      path:"/onboard",
      element:<AuthenticatedRoute>
      <Onboard/>
    </AuthenticatedRoute>
    },
      {
      path:"/postjob",
      element:<AuthenticatedRoute>
      <Postjob/>
    </AuthenticatedRoute>
    }

    ]
  }
])
function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

       <RouterProvider router={router} />
    </ThemeProvider>
    </>
  
  )
}

export default App
