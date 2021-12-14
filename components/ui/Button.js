import Link from 'next/link';

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a
        className={`${
          props.arrow && 'flex items-center'
        }  text-pink-900 bg-pink-400 py-2 px-8 rounded-full hover:underline`}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default Button;
