export default function Footer() {
  return (
    <footer className='mt-10 border-t border-gray-100 dark:border-gray-800'>
      <div className='mt-3 mb-5 text-center text-sm'>
        Copyright © {new Date().getFullYear()} Byungchan Park. All rights
        reserved.
      </div>
    </footer>
  );
}
