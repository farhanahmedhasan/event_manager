import Link from 'next/link';

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a
          className={`${
            props.arrow && 'flex items-center'
          }  inline-block text-pink-900 bg-pink-400 py-2 px-8 rounded-full hover:underline ${props.className}`}
        >
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button
      style={props.style}
      type={props.type}
      onClick={props.onClick}
      className={`${
        props.arrow && 'flex items-center'
      }  text-pink-900 bg-pink-400 py-2 px-8 rounded-full hover:underline ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
