import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-pink-500'>
      <header className='container flex justify-between items-center text-white'>
        <div>
          <Link href='/' passHref>
            <h1 className='capitalize text-2xl cursor-pointer font-extrabold'>NextEvents</h1>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href='/events'>
                <a className='block p-4'>All Events</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
