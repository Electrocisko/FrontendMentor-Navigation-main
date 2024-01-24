import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Careers from '../pages/Careers'
import Company from '../pages/Company'
import Features from '../pages/Features'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Root from '../root/Root'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/careers',
                element: <Careers/>
            },
            {
                path:'/company',
                element: <Company/>
            },
            {
                path:'/features',
                element: <Features/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            }
        ]
    },
   
])

