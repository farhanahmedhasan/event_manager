const Heading = (props) => {
  return (
    <div className={`${props.big && 'text-5xl font-extrabold'} ${props.center && 'flex justify-center'}  py-12`}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Heading;
