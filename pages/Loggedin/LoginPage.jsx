
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
const LoginHeader = () => {
  return (
    <div ><Header /> 
    <div className='logged_in'> 
    <Card  className="card_component" variant="outlined">
      <p>
        hello card component

      </p>
      </Card>
     </div>
   
    
    <Footer /></div>
  )
}

export default LoginHeader