import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];
  return { paths, fallback: false }; // Здесь установите fallback: true, если хотите обрабатывать динамические пути
}

export async function getStaticProps({ params }) {
  const { id } = params; // Убедитесь, что id правильно передан

  const response = await fetch(`http://localhost:3000/api/users`);
  const users = await response.json();

  // Найти пользователя по ID
  const user = users.find((u) => u.id.toString() === id);

  return {
    props: {
      user: user || { id, name: 'Unknown' },
    },
  };
}

const User = ({ user }) => {
  return (
    <div>
      <h1>User ID: {user.id}</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default User;