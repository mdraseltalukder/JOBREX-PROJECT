import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from "@/components/theme-provider";
import './App.css';
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
      element:<AllJobs/>
    },
      {
      path:"/aplicants",
      element:<Applicants/>
    },
      {
      path:"/jobdetails/:id",
      element:<JobDetails/>
    },
      {
      path:"/myjobs",
      element:<MyJobs/>
    },
      {
      path:"/onboard",
      element:<Onboard/>
    },
      {
      path:"/postjob",
      element:<Postjob/>
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
