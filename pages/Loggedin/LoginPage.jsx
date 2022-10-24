
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Apicard from './apicard'
const LoginHeader = (props) => {
  console.log(props)
  return (
    <div ><Header /> 
    <Apicard />
   
    
    <Footer /></div>
  )
}

export default LoginHeader

