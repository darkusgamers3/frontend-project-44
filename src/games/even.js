export default () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return [String(num), answer];
};