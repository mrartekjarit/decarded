import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  // Запрос к API для получения пользователей
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
  const users = await response.json();

  // Найти пользователя по ID
  const user = users.find((u) => u.id.toString() === id);

  return {
    props: {
      user: user || { id, name: 'Unknown' }, // Если пользователь не найден, возвращаем Unknown
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