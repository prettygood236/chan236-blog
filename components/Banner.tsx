export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>{`Chan's Blog`}</h1>
        <h2 className='mt-5 md:mt-0'>
          {`If you can't explain it`}
          <span className='underline decoration-4 decoration-[#f7ab0a]'>
            simply,
          </span>
          <br />
          {`you don't understand it well enough.`}
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        About | Coding Test | Data Structures & Algorithms | Study
      </p>
    </div>
  );
}
