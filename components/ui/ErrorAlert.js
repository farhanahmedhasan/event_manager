const ErrorAlert = (props) => {
  return (
    <div
      className={`container py-4 px-8 mt-8 max-w-lg ${props.large && 'max-w-xl'} text-center text-xl ${
        props.color ? props.color : 'text-pink-200'
      }   bg-pink-600 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default ErrorAlert;
