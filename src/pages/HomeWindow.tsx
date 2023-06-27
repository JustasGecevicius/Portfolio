// @ts-ignore
export default function HomeWindow({ images, backgroundImage }) {
  return (
    <div
      className='flex flex-col justify-center h-screen p-10 bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='p-2 bg-white rounded-3xl'>
        <h1 className='text-4xl font-normal text-black'>
          Justas <br /> Gecevicius
        </h1>
        <h3 className='text-lg italic font-normal text-black'>
          {' '}
          Front-end Web Developer{' '}
        </h3>
      </div>
    </div>
  );
}
