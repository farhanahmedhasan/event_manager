const ErrorAlert = (props) => {
  return (
    <div
      className={`container py-4 px-8 mt-8 max-w-lg ${
        props.large && 'max-w-xl'
      } text-center text-xl text-pink-200  bg-pink-600`}
    >
      {props.children}
    </div>
  );
};

export default ErrorAlert;
