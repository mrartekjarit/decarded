import { useRouter } from 'next/router';

const User = () => {
  const router = useRouter();
  const { id } = router.query; // Получение параметра из URL

  return (
    <div>
      <h1>User ID: {id}</h1>
      <p>This is the user page.</p>
    </div>
  );
};

export default User;