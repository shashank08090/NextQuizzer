const Quiz = ({ message }) => {
  console.log(message);
  return (
    <div>
      <h1>{message}</h1>
      <h1>is there a message</h1>
    </div>
  );
};

export default Quiz;

export function getServerSideProps() {
  return {
    props: { message: "Welcome to the server side rendering" },
  };
}
