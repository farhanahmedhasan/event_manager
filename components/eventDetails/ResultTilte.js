const ResultTilte = (props) => {
  const { date } = props;
  console.log(date);

  const humanReadableDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return humanReadableDate;
};

export default ResultTilte;
