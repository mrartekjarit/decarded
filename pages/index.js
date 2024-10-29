export async function getStaticProps() {
  // Здесь вы можете получать данные из API или другой базы данных
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
  const users = await response.json();

  return {
    props: {
      users, // Передаем пользователей как пропсы
    },
  };
}

const Home = ({ users }) => {
  return (
    <div>
      <h1>Users List</h1>
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

export default Home;