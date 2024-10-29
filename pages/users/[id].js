import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  return <div>User ID: {id}</div>;
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/users`);
  const users = await res.json();

  const user = users.find(user => user.id === parseInt(params.id));

  return {
    props: {
      user: user || null,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/users`);
  const users = await res.json();

  const paths = users.map(user => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: true };
}