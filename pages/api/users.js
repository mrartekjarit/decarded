export default function handler(req, res) {
  // Данные пользователей
  const users = [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
  ];

  // Возвратите данные пользователей как JSON
  res.status(200).json(users);
}