export default function handler(req, res) {
    res.status(200).json([
      { id: 1, name: 'User One' },
      { id: 2, name: 'User Two' },
      { id: 3, name: 'User Three' }
    ]);
  }