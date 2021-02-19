import { articles } from '../../../data';

export default (req, res) => {
  const { id } = req.query;
  const filtered = articles.filter((article) => article.id === id);
  res.status(200).json(filtered[0]);
};
