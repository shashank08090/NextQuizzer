const Quiz = ({ users }) => {
  console.log(users);
  return (
    <div>
      {/* <h1>{message}</h1> */}
      {users?.map((user) =>{
        return (
          <div key={user?.id}>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            </div>
        )
      })}
      <h1>is there a message</h1>
    </div>
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