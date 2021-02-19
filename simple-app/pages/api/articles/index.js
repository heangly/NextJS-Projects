import { articles } from '../../../data';

export default (req, res) => {
  res.status(200).json(articles);
};
