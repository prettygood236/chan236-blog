import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/img/logo.png';

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-md'
            src={logo}
            height={50}
            width={50}
            alt='logo'
          />
        </Link>
        <h1>Hi</h1>
      </div>

      <div>haha</div>
    </header>
  );
}
