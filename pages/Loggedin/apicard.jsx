import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
const apicard = ({users}) => {
    console.log(users)
  return (
    <>
    <div className='logged_in'> 
    <Card  className="card_component" variant="outlined">
      <p>
        hello card component

      </p>
      </Card>
     </div></>
  )
}

export default apicard

export async function getStaticProps (){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    return {props:{
        users:data
    }}
}
