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
  return {
    props: {
      user: { id, name: `User ${id}` }, // Пример данных
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