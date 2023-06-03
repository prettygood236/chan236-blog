import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-betwwen p-5'>
        <Link href='/' className='flex items-center text-blue-500 font-medium'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-blue-500 mr-2' />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
