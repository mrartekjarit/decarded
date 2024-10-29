export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
    const users = await response.json();
  
    return {
      props: {
        users,
      },
    };
  }
  
  const ServerPage = ({ users }) => {
    return (
      <div>
        <h1>Server Rendered Users List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} (ID: {user.id})
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ServerPage;