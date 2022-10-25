import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from './Header/Header'
const Quiz = ({ users }) => {
  console.log(users);
  return (
    <>
    <Header></Header>
    <h1 style={{textAlign:"center"}}>User data  from API </h1>
    <div className="user_card">
      
      
      
      {users?.map((user) =>{
        return (
          <div className='card_container' key={user?.id}>
          <Card sx={{minwidth:275}} key={user?.id} variant="outlined" >
           <div className='card_content'>
           <CardContent>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             <p>{user?.name}</p>
        </Typography>
        <Typography variant="h5" component="div">
        <p>{user?.email}</p>
        </Typography>
            </CardContent>
           </div>
            </Card>
            </div>
        )
      })}
      
    </div>
    </>
  );
};

export default Quiz;

export async function getStaticProps (){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return {props:{
      users:data
  }}
}