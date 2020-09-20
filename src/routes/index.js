import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../components/Layout'
import Contacts from '../pages/Contacts'
import Order from '../components/order/Order'
import Account from '../components/Account'

//? Auth
const Login = React.lazy(() => import('../pages/auth/Login'))
const Logout = React.lazy(() => import('../pages/auth/Logout'))
const Register = React.lazy(() => import('../pages/auth/Register'))
//? Pages
const Home = React.lazy(() => import('../pages/Home'))
const AboutUs = React.lazy(() => import('../pages/AboutUs'))
const Form = React.lazy(() => import('../pages/Form'))


//? Product Detail

const ProductDetail = React.lazy(()=>import('../pages/ProductDetail'));

const PrivateRoute = ({ children, ...rest }) => {
    //? const { isAuth } = { isAuth: true };
    var token = localStorage.getItem('token');
    const isAuth = token ? true : false;
    return (
        <Route 
            {...rest}
            render={
                ({location}) => {
                    return isAuth ? (children) : (
                        <Redirect 
                            to={{
                                pathname: '/auth/login',
                                state: {from: location}
                            }}
                        />
                    )
                }
            }
        />
    )
}

function Routes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route 
                        exact 
                        path='/auth/login' 
                        component={Login}
                    />
                    <Route 
                        exact 
                        path='/auth/logout'
                        component={Logout}
                    />
                    <Route 
                        exact 
                        path='/auth/register'
                        component={Register}
                    /> 
                    <PrivateRoute exact path='/'>
                        <Layout>
                            <Home/>
                        </Layout>
                    </PrivateRoute> 

                    <PrivateRoute exact path='/about-us'>
                        <Layout>
                            <AboutUs/>
                        </Layout>
                    </PrivateRoute> 
                    <PrivateRoute exact path="/form">
                        <Layout>
                            <Form />
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path='/contacts'>
                        <Layout>
                            <Contacts/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path='/order'>
                        <Layout>
                            <Order/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path='/account'>
                        <Layout>
                            <Account/>
                        </Layout>
                    </PrivateRoute>
                    
                    <PrivateRoute exact path="/products/:slug">
                        <Layout>
                            <ProductDetail/>
                        </Layout>
                    </PrivateRoute>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes
