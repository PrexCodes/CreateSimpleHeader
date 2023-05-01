import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/Block/Layout'
import Homescreen from '../pages/Homescreen'
import Contactscreen from '../pages/Contactscreen'
import Aboutscreen from '../pages/Aboutscreen'
export const mainRoute=createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                index:true,
                path:"/",
                element:<Homescreen/>
            },
            {
                index:true,
                path:"contact",
                element:<Contactscreen/>
            },
            {
                index:true,
                path:"about",
                element:<Aboutscreen/>
            },
        ]

    }
])